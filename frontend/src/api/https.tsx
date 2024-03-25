import axios from "axios"

const BASEURL = "";

export default function mainAxios() {
    return axios.create({
        headers: {
            "Content-Type" : ""
        }
    })
}

