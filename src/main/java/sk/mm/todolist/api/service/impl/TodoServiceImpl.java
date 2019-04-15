package sk.mm.todolist.api.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.bo.Todo;
import sk.mm.todolist.api.bo.User;
import sk.mm.todolist.api.exception.NotFoundException;
import sk.mm.todolist.api.repository.TodoRepository;
import sk.mm.todolist.api.repository.UserRepository;
import sk.mm.todolist.api.service.TodoService;
import sk.mm.todolist.api.ui.PageResult;
import sk.mm.todolist.api.ui.Pagination;
import sk.mm.todolist.api.ui.UiTodo;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepo;
    private final UserRepository userRepo;

    @Autowired
    public TodoServiceImpl(TodoRepository todoRepo, UserRepository userRepo) {
        this.todoRepo = todoRepo;
        this.userRepo = userRepo;
    }

    @Override
    public UiTodo save(UiTodo todo) {
        User user = getUser();
        Todo newTodo = new Todo(todo.getValue(), user);
        return new UiTodo(todoRepo.save(newTodo));
    }

    @Override
    public UiTodo update(UiTodo todo) throws NotFoundException {
        Todo dbTodo = getTodo(todo.getId());
        dbTodo.setValue(todo.getValue());
        dbTodo.setCompleted(todo.isCompleted());
        return new UiTodo(todoRepo.save(dbTodo));
    }


    @Override
    public void delete(long id) throws NotFoundException {
        Todo dbTodo = getTodo(id);
        todoRepo.delete(dbTodo);
    }

    @Override
    public PageResult<UiTodo> getTodos(int page, int perPage) {
        User user = getUser();

        Pagination pagination = Pagination.create(page, perPage);

        PageRequest pageRequest = PageRequest.of(pagination.getPage() > 0 ? pagination.getPage() - 1 : 0,
                pagination.getPerPage(), Sort.Direction.DESC, "id");

        Page<Todo> todoPage = todoRepo.findByUser(user, pageRequest);

        pagination.setTotalPages(todoPage.getTotalPages());
        pagination.setTotaltems((int) todoPage.getTotalElements());

        List<UiTodo> todos = todoPage.getContent().stream().map(UiTodo::new).collect(Collectors.toList());

        return new PageResult<UiTodo>(todos, pagination);
    }

    private Todo getTodo(long id) {
        User user = getUser();
        Optional<Todo> dbTodo = todoRepo.findTodoByIdAndUser(id, user);

        if (dbTodo.isPresent()) {
            return dbTodo.get();
        } else {
            throw new NotFoundException("Not found todo for user");
        }
    }

    private User getUser() {
        org.springframework.security.core.userdetails.User principal = (org.springframework.security.core.userdetails.User) SecurityContextHolder
                .getContext().getAuthentication().getPrincipal();
        return userRepo.findByUserName(principal.getUsername()).get();
    }
}
