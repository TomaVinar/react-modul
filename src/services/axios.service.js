import axiosService from "./services";

import {urls} from "../configs/urls"

export const userService = {
    getAll: ()=> axiosService.get(urls.users).then(value => value.data),
    getById: (id)=> axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}

export const postService = {
    getAll: ()=> axiosService.get(urls.posts).then(value => value.data),
    getById: (userId)=> axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data)
}

export const commentService = {
    getById: (postId)=> axiosService.get(`${urls.posts}/${postId}/comments`).then(value => value.data)
}