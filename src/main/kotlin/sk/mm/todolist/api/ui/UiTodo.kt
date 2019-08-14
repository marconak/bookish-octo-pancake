package sk.mm.todolist.api.ui

import sk.mm.todolist.api.bo.Todo
import javax.validation.constraints.NotNull

data class UiTodo(val id: Long, @NotNull val value: String, @NotNull val completed: Boolean = false) {
    companion object {
        @JvmStatic
        fun of(todo: Todo): UiTodo {
            return UiTodo(todo.id, todo.value, todo.isCompleted)
        }
    }
}


