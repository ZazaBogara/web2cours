package com.mosorin.service.impl;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import com.mosorin.repository.ItemRepository;
import com.mosorin.repository.TagRepository;
import com.mosorin.service.ItemService;
import com.mosorin.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TagServiceImpl implements TagService {
    @Autowired
    TagRepository tagRepository;

    public List<Tag> findAllByTag(String name) {
        return tagRepository.findAllByTag(name);
    }

    public List<Tag> findAll() {
        return tagRepository.findAll();
    }

    public Tag findById(Integer id) {
        return tagRepository.findById(id).orElseThrow();
    }


    @Transactional
    public Tag create(Tag entity) {
        tagRepository.save(entity);
        return entity;
    }

    @Transactional
    public void update(Integer id, Tag entity) {
        Tag toChangeEntity = tagRepository.findById(id).orElseThrow();
        toChangeEntity.setTag(entity.getTag());
        toChangeEntity.setItems(entity.getItems());
        tagRepository.save(toChangeEntity);
    }

    @Transactional
    public void delete(Integer id) {
        Tag toDeleteEntity = tagRepository.findById(id)
                .orElseThrow();
        tagRepository.delete(toDeleteEntity);
    }

}
