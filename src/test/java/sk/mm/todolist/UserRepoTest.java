package sk.mm.todolist;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import sk.mm.todolist.api.bo.User;
import sk.mm.todolist.api.repository.UserRepository;

import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepoTest {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Test
    public void test_1() {
        Optional<User> admin = repository.findByUserName("admin");
        assertNotNull(admin.get());
        assertTrue(encoder.matches("admin", admin.get().getPassword()));
    }

    @Test
    public void test_2() {
        Optional<User> user = repository.findByUserName("user");
        assertNotNull(user.get());
        assertTrue(encoder.matches("user", user.get().getPassword()));

    }

}
