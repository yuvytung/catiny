package com.regitiny.catiny.advance.repository.search;

import com.regitiny.catiny.advance.repository.search.base.TodoListBaseSearch;

/**
 * Spring Data Elasticsearch repository for the {@link com.regitiny.catiny.domain.TodoList} entity.
 * <p>
 * here contains complex queries with pure Elasticsearch syntax.
 * if you want to write simple query then you should write to {@link TodoListBaseSearch}
 */
public interface TodoListAdvanceSearch extends TodoListBaseSearch
{
}
