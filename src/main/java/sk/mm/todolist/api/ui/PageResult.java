package sk.mm.todolist.api.ui;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class PageResult<T> {

    @JsonProperty
    private Collection<T> content;

    @JsonProperty
    private Pagination pagination;

    public PageResult(Collection<T> content, Pagination pagination) {
        this.content = content;
        this.pagination = pagination;
    }

    public Collection<T> getContent() {
        return content;
    }

    public void setContent(Collection<T> content) {
        this.content = content;
    }

    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("PageResult [content=");
        builder.append(content);
        builder.append(", pagination=");
        builder.append(pagination);
        builder.append("]");
        return builder.toString();
    }

}
