package com.mosorin.service.impl;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import com.mosorin.repository.ItemRepository;
import com.mosorin.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    ItemRepository itemRepository;

    public List<Item> findAllByTitle(String name) {
        return itemRepository.findAllByTitle(name);
    }

    public List<Item> findAllByTags(String tag1, String tag2){
        return itemRepository.findAllByTags(tag1, tag2);
    }
    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Item findById(Integer id) {
        return itemRepository.findById(id).orElseThrow();
    }


    @Transactional
    public Item create(Item entity) {
        itemRepository.save(entity);
        return entity;
    }

    @Transactional
    public void update(Integer id, Item entity) {
        Item toChangeEntity = itemRepository.findById(id).orElseThrow();
        toChangeEntity.setDescription(entity.getDescription());
        toChangeEntity.setTitle(entity.getTitle());
        toChangeEntity.setTags(entity.getTags());
        itemRepository.save(toChangeEntity);
    }

    @Transactional
    public void delete(Integer id) {
        Item toDeleteEntity = itemRepository.findById(id)
                .orElseThrow();
        itemRepository.delete(toDeleteEntity);
    }

}
