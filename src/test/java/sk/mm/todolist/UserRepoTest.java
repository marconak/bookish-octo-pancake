package sk.mm.todolist;

import org.junit.Test;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.bo.User;

import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class UserRepoTest extends TodolistApplicationTests{

    @Test
    @Transactional

    public void test_1() {
        Optional<User> admin = userRepository.findByUserName("admin");
        assertNotNull(admin.get());
        assertTrue(encoder.matches("admin", admin.get().getPassword()));
    }

    @Test
    @Transactional
    public void test_2() {
        Optional<User> user = userRepository.findByUserName("user");
        assertNotNull(user.get());
        assertTrue(encoder.matches("user", user.get().getPassword()));

    }

}
