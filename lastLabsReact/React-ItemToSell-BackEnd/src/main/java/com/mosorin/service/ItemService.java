package com.mosorin.service;

import com.mosorin.domain.Item;

import java.util.List;

public interface ItemService extends GeneralService<Item, Integer>{
    List<Item> findAllByTitle(String title);
}
