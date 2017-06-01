package sk.mm.todolist.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import sk.mm.todolist.api.bo.User;

import java.util.Optional;

@Repository
@Transactional
public interface UserRepository  extends JpaRepository<User, Long>{

    @Transactional(readOnly=true)
    public Optional<User> findByUserName(String username);

}
