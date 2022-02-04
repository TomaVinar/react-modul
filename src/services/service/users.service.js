import {urlsForUser} from "../../configs";
import {axiosServiceNew} from "./axios.service.users";

export const usersService = {
    getAll:()=> axiosServiceNew.get(urlsForUser.users).then(value => value.data)
}

export const postsService = {
    getAll: ()=> axiosServiceNew.get(urlsForUser.posts).then(value => value.data)
}

export const commentsService = {
    getAll: () => axiosServiceNew.get(urlsForUser.comments).then(value => value.data)
}
