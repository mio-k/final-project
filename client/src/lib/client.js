/**
 * Start here
 */

/**
 * ITEMS
 */

// Index + Show
export const fetchItems = () => {
  return fetch("/items").then((resp) => resp.json());
};

// Create
export const createItem = (newItemParams) => {
  return fetch("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItemParams),
  }).then((r) => r.json());
};

// ... Create
export const getPresignedURL = (fileName) => {
  return fetch("/items/presigned-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ file_name: fileName }),
  }).then((resp) => resp.json());
};

// Update
export const updateItem = (id, updateItemParams) => {
  return fetch(`/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateItemParams),
  }).then((r) => r.json());
};

// Delete
export const deleteItem = (id) => {
  return fetch(`/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
};
