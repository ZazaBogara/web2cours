package com.mosorin.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import java.util.List;
import java.util.Map;

@Builder
@Getter
@EqualsAndHashCode(callSuper = false)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Relation(itemRelation = "item", collectionRelation = "items")
public class ItemDto extends RepresentationModel<ItemDto> {
    private final Integer id;
    private final String title;
    private final String description;
    private final List<Map<Integer, String>> tagsNames;
}
