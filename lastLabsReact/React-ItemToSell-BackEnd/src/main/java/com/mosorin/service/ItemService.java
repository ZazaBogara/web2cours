package com.mosorin.service;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;

import java.util.List;
import java.util.Set;

public interface ItemService extends GeneralService<Item, Integer>{
    List<Item> findAllByTitle(String title);

    List<Item> findAllByTags(String tag1, String tag2);
}
