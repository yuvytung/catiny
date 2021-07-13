package com.regitiny.catiny.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.regitiny.catiny.GeneratedByJHipster;
import com.regitiny.catiny.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

@GeneratedByJHipster
class TodoListDTOTest {

  @Test
  void dtoEqualsVerifier() throws Exception {
    TestUtil.equalsVerifier(TodoListDTO.class);
    TodoListDTO todoListDTO1 = new TodoListDTO();
    todoListDTO1.setId(1L);
    TodoListDTO todoListDTO2 = new TodoListDTO();
    assertThat(todoListDTO1).isNotEqualTo(todoListDTO2);
    todoListDTO2.setId(todoListDTO1.getId());
    assertThat(todoListDTO1).isEqualTo(todoListDTO2);
    todoListDTO2.setId(2L);
    assertThat(todoListDTO1).isNotEqualTo(todoListDTO2);
    todoListDTO1.setId(null);
    assertThat(todoListDTO1).isNotEqualTo(todoListDTO2);
  }
}
