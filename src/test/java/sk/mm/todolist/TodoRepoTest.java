package sk.mm.todolist;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.bo.Todo;
import sk.mm.todolist.api.bo.User;
import sk.mm.todolist.api.repository.TodoRepository;

import java.util.Optional;

import static org.junit.Assert.*;

public class TodoRepoTest extends TodolistApplicationTests {

    @Autowired
    private TodoRepository todoRepo;

    @Test
    @Transactional
    public void test_1() {
        Optional<User> user = userRepository.findByUserName("user");
        Todo todo = createTodo(user.get());
        assertNotNull(todo);

        Optional<Todo> byUserAndId = todoRepo.findTodoByIdAndUser(todo.getId(), user.get());
        assertTrue(byUserAndId.isPresent());
    }


    @Test
    @Transactional
    public void test_2() {
        Optional<User> user = userRepository.findByUserName("user");
        Optional<User> admin = userRepository.findByUserName("admin");

        Todo todo = createTodo(user.get());
        assertNotNull(todo);

        Optional<Todo> byNonUser = todoRepo.findTodoByIdAndUser(todo.getId(), admin.get());
        assertFalse(byNonUser.isPresent());
    }

    @Test
    @Transactional
    public void test_3() {
        Optional<User> user = userRepository.findByUserName("user");

        Todo todo = createTodo(user.get());
        assertNotNull(todo);

        Page<Todo> todos = todoRepo.findByUser(user.get(), PageRequest.of(0, 100, Sort.Direction.DESC, "id"));
        assertFalse(todos.getContent().isEmpty());
        assertTrue(todos.getTotalElements() == 1L);
    }

    private Todo createTodo(User user) {
        Todo newTodo = new Todo("VALUE", user);
        return todoRepo.save(newTodo);
    }


}
