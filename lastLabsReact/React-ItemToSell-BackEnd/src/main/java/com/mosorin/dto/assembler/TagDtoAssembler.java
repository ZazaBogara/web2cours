package com.mosorin.dto.assembler;

import com.mosorin.controller.ItemController;
import com.mosorin.controller.TagController;
import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import com.mosorin.dto.ItemDto;
import com.mosorin.dto.TagDto;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class TagDtoAssembler implements RepresentationModelAssembler<Tag, TagDto> {
    @Override
    public TagDto toModel(Tag tag){
        TagDto tagDto = TagDto.builder()
                .id(tag.getId())
                .tag(tag.getTag())
                .itemsTitles(tag.getItemsTitles())
                .build();
        Link selfLink = linkTo(methodOn(TagController.class).getTag(tagDto.getId())).withSelfRel();
        tagDto.add(selfLink);
        return tagDto;
    }
    @Override
    public CollectionModel<TagDto> toCollectionModel(Iterable<? extends Tag> entities) {
        CollectionModel<TagDto> tagDtos = RepresentationModelAssembler.super.toCollectionModel(entities);
        Link selfLink = linkTo(methodOn(TagController.class).getAllTags()).withSelfRel();
        tagDtos.add(selfLink);
        return tagDtos;
    }
}
