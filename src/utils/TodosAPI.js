const url = process.env.REACT_APP_API_URL || "http://localhost:8080"; 
export const fetchAll = () =>
  fetch(`${url}/`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json());

export const create = (data = {}) =>
  fetch(`${url}/create/task/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());

export const update = (data = {}) =>
  fetch(`${url}/update.php`, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());

export const remove = (data = {}) =>
  fetch(`${url}/delete.php`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());
