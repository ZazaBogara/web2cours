import axios from "axios";
import { site } from "./App";

export async function getOneItemById(idToSearch) {
  return await axios({
    method: "get",
    url: `${site}api/items/${idToSearch}`,
    responseType: "stream",
  })
    .then(async function (response) {
      return await JSON.parse(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getAllItem() {
  return await axios({
    method: "get",
    url: `${site}api/items`,
    responseType: "stream",
  })
    .then(async function (response) {
      return await JSON.parse(response.data)._embedded.items;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getAllTags() {
  let tags;
  return await axios({
    method: `get`,
    url: `${site}api/tags`,
    responseType: "stream",
  }).then(async function (response) {
    let resJson = await JSON.parse(response.data);
    tags = [];
    resJson._embedded.tags.forEach((tmp) => {
      tags.push({ id: tmp.id, tag: tmp.tag });
    });
    return await tags;
  });
}

export async function postItem(currentData) {
  await axios({
    method: `post`,
    url: `${site}api/items`,
    responseType: "stream",
    data: currentData,
  });
}

export async function getFilteredItems(filter1, filter2) {
  return await axios({
    method: `get`,
    url: `${site}api/items/${filter1}/${filter2}`,
    responseType: "stream",
  }).then(async function (response) {
    return await JSON.parse(response.data)._embedded.items;
  });
}
