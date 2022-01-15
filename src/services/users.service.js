import {url} from "../config/urls"

const getAll = () => {
    return fetch(url.users)
        .then(response => response.json());
}

const getById = (id) => {
    return fetch(`${url.users}/${id}`)
        .then(value => value.json());
}

const getPostById = (userId) => {
    console.log(userId)
    return fetch(`${url.users}/${userId}/posts`)
        .then(value => value.json());
}

export const userService = {
    getAll,
    getById,
    getPostById,
}
