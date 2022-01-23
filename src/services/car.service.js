import axiosService from "./axiosService";
import {url} from "../configs/url";

export const carService = {
    create: (car) => axiosService.post(url.cars, car).then(value => value.data),
    getAll: () => axiosService.get(url.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${url.cars}/${id}`).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${url.cars}/${id}`),
    updateById:(id, car)=> axiosService.patch(`${url.cars}/${id}`, car).then(value => value.data)
}