package com.regitiny.catiny.advance.repository.base;

import com.regitiny.catiny.advance.repository.CommonRepository;
import com.regitiny.catiny.domain.VideoStream;
import com.regitiny.catiny.repository.VideoStreamRepository;

/**
 * Spring Data SQL repository for the {@link VideoStream} entity.
 * <p>
 * here contains simple query JPA syntax.
 * if you want to write complex query pure (SQL or HQL) then you should write to :
 * {@link com.regitiny.catiny.advance.repository.VideoStreamAdvanceRepository}
 */
public interface VideoStreamBaseRepository extends BaseRepository<VideoStream>, CommonRepository<VideoStream>, VideoStreamRepository
{
}
