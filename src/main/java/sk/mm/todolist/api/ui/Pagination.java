package sk.mm.todolist.api.ui;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Pagination {

    @JsonIgnore
    private static final Integer DEFAULT_PAGE_SIZE = Integer.valueOf(50);

    @JsonProperty
    private Integer page;

    @JsonProperty
    private Integer perPage;

    @JsonProperty
    private Integer totalPages;

    @JsonProperty
    private Integer totalElements;

    public Integer getPage() {
        return page;
    }

    public static Pagination create(Integer page, Integer perPage) {
        Pagination pagination = new Pagination();

        if (page < 1) {
            pagination.setPage(Integer.valueOf(1));
        } else {
            pagination.setPage(page);
        }

        if (perPage <= 0 || perPage > DEFAULT_PAGE_SIZE) {
            pagination.setPerPage(DEFAULT_PAGE_SIZE);
        } else {
            pagination.setPerPage(perPage);
        }

        return pagination;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPerPage() {
        return perPage;
    }

    public void setPerPage(Integer perPage) {
        this.perPage = perPage;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public Integer getTotalElements() {
        return totalElements;
    }

    public void setTotaltems(Integer totalItems) {
        this.totalElements = totalItems;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Pagination{");
        sb.append("page=").append(page);
        sb.append(", perPage=").append(perPage);
        sb.append(", totalPages=").append(totalPages);
        sb.append(", totalElements=").append(totalElements);
        sb.append('}');
        return sb.toString();
    }
}
