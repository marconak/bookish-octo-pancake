package sk.mm.todolist;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import sk.mm.todolist.api.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public abstract class TodolistApplicationTests {

	@Autowired
	protected UserRepository userRepository;

	@Autowired
	protected PasswordEncoder encoder;

}
