package com.mosorin.service;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;

import java.util.List;

public interface TagService extends GeneralService<Tag, Integer>{
    List<Tag> findAllByTag(String tag);
}
