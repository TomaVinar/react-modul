import axiosService from "./axios.service"
import {url} from "../configs/urls"

export const usersService = {
    getAll: () => axiosService.get(url.users).then(item => item.data),
    getById: (id) => axiosService.get(`${url.users}/${id}`).then(item => item.data)
}

export const postsService = {
    getAll: () => axiosService.get(url.posts).then(value => value.data),
    getById: (userId) => axiosService.get(`${url.users}/${userId}/posts`).then(value => value.data)
}

export const commentsService = {
    getById: (postId) => axiosService.get(`${url.posts}/${postId}/comments`).then(value => value.data)
}

export const albumsService = {
    getById: (userId) => axiosService.get(`${url.users}/${userId}/albums`).then(albums => albums.data)
}

export const photosService = {
    getById: (albumId) => axiosService.get(`${url.albums}/${albumId}/photos`).then(value => value.data)
}