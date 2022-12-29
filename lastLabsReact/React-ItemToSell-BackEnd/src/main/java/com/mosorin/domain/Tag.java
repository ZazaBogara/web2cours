package com.mosorin.domain;

import javax.persistence.*;

import java.util.*;

@Entity
@Table(name = "tags", schema = "itemtosell", catalog = "")
public class Tag {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "tag")
    private String tag;
    @ManyToMany(mappedBy = "tags")
    private Set<Item> items;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tag that = (Tag) o;
        return id == that.id && Objects.equals(tag, that.tag);
    }


    @Override
    public int hashCode() {
        return Objects.hash(id, tag);
    }

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
    public List<Map<Integer, String>> getItemsTitles() {
        List<Map<Integer, String>> names = new LinkedList<>();
        for(Item item : items){
            Map<Integer, String> tmp = new HashMap<>();;
            tmp.put(item.getId(), item.getTitle());
            names.add(tmp);
        }
        return names;
    }

}
