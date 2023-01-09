package com.mosorin.controller;

import com.mosorin.domain.Item;
import com.mosorin.domain.Tag;
import com.mosorin.dto.ItemDto;
import com.mosorin.dto.TagDto;
import com.mosorin.dto.assembler.ItemDtoAssembler;
import com.mosorin.dto.assembler.TagDtoAssembler;
import com.mosorin.service.ItemService;
import com.mosorin.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    @Autowired
    private TagDtoAssembler tagDtoAssembler;

    @CrossOrigin
    @GetMapping(value = "/{tagId}")
    public ResponseEntity<TagDto> getTag(@PathVariable Integer tagId) {
        Tag tag = tagService.findById(tagId);
        TagDto tagDto = tagDtoAssembler.toModel(tag);
        return new ResponseEntity<>(tagDto, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "")
    public ResponseEntity<CollectionModel<TagDto>> getAllTags() {
        List<Tag> tags = tagService.findAll();
        CollectionModel<TagDto> tagDtos = tagDtoAssembler.toCollectionModel(tags);
        return new ResponseEntity<>(tagDtos, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "")
    public ResponseEntity<TagDto> addTag(@RequestBody Tag entity) {
        Tag newTag = tagService.create(entity);
        TagDto tagDto = tagDtoAssembler.toModel(newTag);
        return new ResponseEntity<>(tagDto, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping(value = "/{tagId}")
    public ResponseEntity<?> updateTag(@RequestBody Tag uTag, @PathVariable Integer tagId) {
        tagService.update(tagId, uTag);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(value = "/{tagId}")
    public ResponseEntity<?> deleteTag(@PathVariable Integer tagId) {
        tagService.delete(tagId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
