package sk.mm.todolist.api.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.exception.NotFoundException;
import sk.mm.todolist.api.ui.PageResult;
import sk.mm.todolist.api.ui.UiTodo;


@Service
@Transactional
public interface TodoService {

    UiTodo save(UiTodo todo);

    UiTodo update(Long id, UiTodo todo) throws NotFoundException;

    void delete(long id) throws NotFoundException;

    PageResult<UiTodo> getTodos(int page, int perPage);

}
