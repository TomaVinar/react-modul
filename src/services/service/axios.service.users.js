import axios from "axios";
import {baseURLUsersCommentsPosts} from "../../configs/";

export const axiosServiceNew = axios.create({baseURL: baseURLUsersCommentsPosts})

