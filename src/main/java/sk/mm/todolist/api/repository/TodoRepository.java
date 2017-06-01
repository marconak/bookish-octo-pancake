package sk.mm.todolist.api.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.mm.todolist.api.bo.Todo;
import sk.mm.todolist.api.bo.User;


@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    public Optional<Todo> findTodoByIdAndUser(Long id, User user);

    public Page<Todo> findByUser(User user, Pageable pageable);

}
