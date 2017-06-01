package sk.mm.todolist.api.ui;

import sk.mm.todolist.api.bo.Todo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;


public class UiTodo implements Serializable {

    private Long id;

    @NotNull
    @Size(min = 3, max = 256)
    private String value;

    @NotNull
    private boolean completed;

    public UiTodo() {
    }

    public UiTodo(Long id, String value, boolean completed) {
        this.id = id;
        this.value = value;
        this.completed = completed;
    }

    public UiTodo(Todo todo) {
        this.id = todo.getId();
        this.value = todo.getValue();
        this.completed = todo.isCompleted();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("UiTodo{");
        sb.append("id=").append(id);
        sb.append(", value='").append(value).append('\'');
        sb.append(", completed=").append(completed);
        sb.append('}');
        return sb.toString();
    }
}
