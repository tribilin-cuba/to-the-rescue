import { SERVER_URL } from "../../Constants/constants";

export function getAllPosts(queryParams: string) {
    return fetch(SERVER_URL + "alert/all" + queryParams)
}