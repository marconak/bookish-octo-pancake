package sk.mm.todolist.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @RequestMapping("/user")
    public ResponseEntity<User> user(@AuthenticationPrincipal User user) {
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

}
