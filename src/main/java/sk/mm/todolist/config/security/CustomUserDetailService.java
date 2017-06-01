package sk.mm.todolist.config.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import sk.mm.todolist.api.bo.User;
import sk.mm.todolist.api.repository.UserRepository;
import sun.jvm.hotspot.oops.Array;

@Component
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(username);

        if (user.isPresent()) {
            return new org.springframework.security.core.userdetails.User(user.get().getName(),
                    user.get().getPassword(), true, true, true, true, dummyRoles());
        } else {
            throw new UsernameNotFoundException("User not found [" + username + "]");
        }
    }

    private List<GrantedAuthority> dummyRoles() {
        return new ArrayList<GrantedAuthority>(Arrays.asList(new SimpleGrantedAuthority("USER")));
    }

}
