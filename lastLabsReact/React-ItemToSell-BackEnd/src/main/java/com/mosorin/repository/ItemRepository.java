package com.mosorin.repository;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findAllByTitle(String title);
    @Query(value = "SELECT item_id as id, title, description FROM itemtosell.item_has_tags " +
            "LEFT JOIN item ON item.id=item_has_tags.item_id " +
            "LEFT JOIN tags ON tags.id=item_has_tags.tags_id " +
            "WHERE title " +
            "IN(SELECT title FROM itemtosell.item_has_tags " +
            "LEFT JOIN item ON item.id=item_has_tags.item_id " +
            "LEFT JOIN tags ON tags.id=item_has_tags.tags_id " +
            "WHERE (tag = :tag1 OR tag = null))" +
            "AND (tag = :tag2 OR tag = null)", nativeQuery = true)
    List<Item> findAllByTags(@Param("tag1")String tag1, @Param("tag2")String tag2);
}
