import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": 'f79a04d4d6msh5db574ab01b9fc9p162b05jsn3868194e0e88',
            // process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
