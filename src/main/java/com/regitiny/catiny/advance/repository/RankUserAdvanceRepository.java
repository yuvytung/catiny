package com.regitiny.catiny.advance.repository;

import com.regitiny.catiny.advance.repository.base.RankUserBaseRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the {@link com.regitiny.catiny.domain.RankUser} entity.
 * <p>
 * here contains complex queries with pure SQL or HQL syntax.
 * if you want to write simple query then you should write to :
 * {@link RankUserBaseRepository}
 */
@Repository
@SuppressWarnings("unused")
public interface RankUserAdvanceRepository extends RankUserBaseRepository
{
}
