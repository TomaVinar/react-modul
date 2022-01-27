import axiosService from "./axiosService";
import {urls} from "../configs/urls";

export const heroService = {
    getAll: (page) => axiosService.get(`${urls.characters}?page=${page}`).then(value => value.data),
    getCharacterById: (id) => axiosService.get(`${urls.characters}/${id}`).then(value => value.data),
    getAllLocations: () => axiosService.get(urls.locations).then(value => value.data),
    getAllEpisods: () => axiosService.get(urls.episodes).then(value => value.data)
}