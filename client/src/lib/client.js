export const createItem = (newItemParams) => {
  return fetch("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ ...formData, pic: location[0] }),
    body: JSON.stringify(newItemParams),
  }).then((r) => r.json());
};

export const fetchItems = () => {
  return fetch("/items").then((resp) => resp.json());
};
