package sk.mm.todolist.api.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.exception.NotFoundException;
import sk.mm.todolist.api.ui.PageResult;
import sk.mm.todolist.api.ui.UiTodo;


@Service
@Transactional
public interface TodoService {

    public UiTodo save(UiTodo todo);

    public UiTodo update(UiTodo todo) throws NotFoundException;

    public void delete(long id) throws NotFoundException;

    public PageResult<UiTodo> getTodos(int page, int perPage);

}
