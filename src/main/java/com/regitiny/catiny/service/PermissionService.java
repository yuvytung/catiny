package com.regitiny.catiny.service;

import com.regitiny.catiny.GeneratedByJHipster;
import com.regitiny.catiny.service.dto.PermissionDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.regitiny.catiny.domain.Permission}.
 */
@GeneratedByJHipster
public interface PermissionService {
  /**
   * Save a permission.
   *
   * @param permissionDTO the entity to save.
   * @return the persisted entity.
   */
  PermissionDTO save(PermissionDTO permissionDTO);

  /**
   * Partially updates a permission.
   *
   * @param permissionDTO the entity to update partially.
   * @return the persisted entity.
   */
  Optional<PermissionDTO> partialUpdate(PermissionDTO permissionDTO);

  /**
   * Get all the permissions.
   *
   * @param pageable the pagination information.
   * @return the list of entities.
   */
  Page<PermissionDTO> findAll(Pageable pageable);

  /**
   * Get the "id" permission.
   *
   * @param id the id of the entity.
   * @return the entity.
   */
  Optional<PermissionDTO> findOne(Long id);

  /**
   * Delete the "id" permission.
   *
   * @param id the id of the entity.
   */
  void delete(Long id);

  /**
   * Search for the permission corresponding to the query.
   *
   * @param query the query of the search.
   *
   * @param pageable the pagination information.
   * @return the list of entities.
   */
  Page<PermissionDTO> search(String query, Pageable pageable);
}
