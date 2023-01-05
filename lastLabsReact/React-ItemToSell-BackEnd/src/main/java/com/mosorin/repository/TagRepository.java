package com.mosorin.repository;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
    List<Tag> findAllByTag(String Tag);
}
