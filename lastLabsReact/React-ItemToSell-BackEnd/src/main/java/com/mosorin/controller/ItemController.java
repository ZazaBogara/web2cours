package com.mosorin.controller;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import com.mosorin.dto.ItemDto;
import com.mosorin.dto.assembler.ItemDtoAssembler;
import com.mosorin.service.ItemService;
import com.mosorin.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/items")
public class ItemController {
    @Autowired
    private ItemService itemService;
    @Autowired
    private TagService tagService;


    @Autowired
    private ItemDtoAssembler itemDtoAssembler;

    @CrossOrigin
    @GetMapping(value = "/findByTitle/{title}")
    public ResponseEntity<CollectionModel<ItemDto>> findAllByTitle(@PathVariable String title){
        List<Item> items = itemService.findAllByTitle(title);
        CollectionModel<ItemDto> itemDtos = itemDtoAssembler.toCollectionModel(items);
        return new ResponseEntity<>(itemDtos, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/{itemId}")
    public ResponseEntity<ItemDto> getItem(@PathVariable Integer itemId) {
        Item item = itemService.findById(itemId);
        ItemDto itemDto = itemDtoAssembler.toModel(item);
        return new ResponseEntity<>(itemDto, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/{tag1}/{tag2}")
    public ResponseEntity<CollectionModel<ItemDto>> getAllItems(@PathVariable String tag1, @PathVariable String tag2) {
        List<Item> items = itemService.findAllByTags(tag1, tag2);
        CollectionModel<ItemDto> itemDtos = itemDtoAssembler.toCollectionModel(items);
        return new ResponseEntity<>(itemDtos, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "")
    public ResponseEntity<CollectionModel<ItemDto>> getAllItems() {
        List<Item> items = itemService.findAll();
        CollectionModel<ItemDto> itemDtos = itemDtoAssembler.toCollectionModel(items);
        return new ResponseEntity<>(itemDtos, HttpStatus.OK);
    }



    @CrossOrigin
    @PostMapping(value = "")
    public ResponseEntity<ItemDto> addItem(@RequestBody Item entity) {
        System.out.println(entity);
        Item newItem = itemService.create(entity);
        ItemDto itemDto = itemDtoAssembler.toModel(newItem);
        return new ResponseEntity<>(itemDto, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping(value = "/{itemId}")
    public ResponseEntity<?> updateItem(@RequestBody Item uItem, @PathVariable Integer itemId) {
        itemService.update(itemId, uItem);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(value = "/{itemId}")
    public ResponseEntity<?> deleteItem(@PathVariable Integer itemId) {
        itemService.delete(itemId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
