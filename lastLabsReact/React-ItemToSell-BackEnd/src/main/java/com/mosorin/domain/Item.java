package com.mosorin.domain;

import javax.persistence.*;

import java.util.*;

@Entity
@Table(name = "item", schema = "itemtosell", catalog = "")
public class Item {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "description")
    private String description;

    @ManyToMany
    @JoinTable(name = "item_has_tags", catalog = "", schema = "itemtosell",
            joinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "tags_id", referencedColumnName = "id", nullable = false))
    private Set<Tag> tags;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() { return description; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item that = (Item) o;
        return id == that.id && Objects.equals(title, that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description);
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    public List<Map<Integer, String>> getTagNames() {
        List<Map<Integer, String>> names = new LinkedList<>();
        for(Tag tag : tags){
            Map<Integer, String> tmp = new HashMap<>();;
            tmp.put(tag.getId(), tag.getTag());
            names.add(tmp);
        }
        return names;
    }
}
