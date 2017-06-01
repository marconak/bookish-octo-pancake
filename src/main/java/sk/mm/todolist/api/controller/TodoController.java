package sk.mm.todolist.api.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sk.mm.todolist.api.service.TodoService;
import sk.mm.todolist.api.ui.PageResult;
import sk.mm.todolist.api.ui.UiTodo;


@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private static final Logger LOG = LoggerFactory.getLogger(TodoController.class);

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @RequestMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<PageResult<UiTodo>> getTodos(@RequestParam(required = true) Integer page,
                                                       @RequestParam(required = true) Integer perPage) throws Exception {
        LOG.info("Get todos with page {}, perPage {}", page, perPage);
        PageResult<UiTodo> list = this.todoService.getTodos(page, perPage);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @RequestMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<UiTodo> createNewTodo(@Validated @RequestBody UiTodo todo, @AuthenticationPrincipal User user)
            throws Exception {
        LOG.info("User: [{}] create new todo: [{}]", user.getUsername(), todo);

        UiTodo created = this.todoService.save(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
    public ResponseEntity<UiTodo> updateTodo(@PathVariable("id") Long id, @Validated @RequestBody UiTodo todo,
                                             @AuthenticationPrincipal User user) throws Exception {
        LOG.info("User: [{}] update todo: [{}] for id: {}", user.getUsername(), todo, id);
        todo.setId(id);
        UiTodo updated = this.todoService.update(todo);
        return ResponseEntity.status(HttpStatus.OK).body(updated);
    }

    @RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
    public ResponseEntity<Long> deleteTodo(@PathVariable("id") Long id, @AuthenticationPrincipal User user)
            throws Exception {
        LOG.info("User: [{}] delete todo: [{}] for id: {}", user.getUsername(), id);
        this.todoService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(id);
    }

}
