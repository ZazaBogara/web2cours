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
@Relation(itemRelation = "tags", collectionRelation = "tags")
public class TagDto extends RepresentationModel<TagDto> {
    private final Integer id;
    private final String tag;
    private final List<Map<Integer, String>> itemsTitles;
}
