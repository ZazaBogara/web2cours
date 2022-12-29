package com.mosorin.dto.assembler;

import com.mosorin.controller.ItemController;
import com.mosorin.domain.Item;
import com.mosorin.dto.ItemDto;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class ItemDtoAssembler implements RepresentationModelAssembler<Item, ItemDto> {
    @Override
    public ItemDto toModel(Item item){
        ItemDto itemDto = ItemDto.builder()
                .id(item.getId())
                .title(item.getTitle())
                .description(item.getDescription())
                .tagsNames(item.getTagNames())
                .build();
        Link selfLink = linkTo(methodOn(ItemController.class).getItem(itemDto.getId())).withSelfRel();
        itemDto.add(selfLink);
        return itemDto;
    }
    @Override
    public CollectionModel<ItemDto> toCollectionModel(Iterable<? extends Item> entities) {
        CollectionModel<ItemDto> itemDtos = RepresentationModelAssembler.super.toCollectionModel(entities);
        Link selfLink = linkTo(methodOn(ItemController.class).getAllItems()).withSelfRel();
        itemDtos.add(selfLink);
        return itemDtos;
    }
}
