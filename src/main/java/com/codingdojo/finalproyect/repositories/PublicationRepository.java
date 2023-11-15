package com.codingdojo.finalproyect.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.codingdojo.finalproyect.models.Publication;

public interface PublicationRepository extends CrudRepository<Publication, Long> {

	@Modifying
    @Query("UPDATE Publication p SET p.likes = p.likes + 1 WHERE p.id = :id")
    void incrementLikes(@Param("id") Long id);
}
