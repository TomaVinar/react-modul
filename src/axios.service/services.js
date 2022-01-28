import axiosService from "./axiosService";
import {urls} from "../configs/urls";

export const heroService = {
    getAll: (page) => axiosService.get(`${urls.characters}?page=${page}`).then(value => value.data),
    getCharacterById: (id) => axiosService.get(`${urls.characters}/${id}`).then(value => value.data),
    getAllLocations: (page) => axiosService.get(`${urls.locations}?page=${page}`).then(value => value.data),
    getAllEpisodes: (page) => axiosService.get(`${urls.episodes}?page=${page}`).then(value => value.data)
}