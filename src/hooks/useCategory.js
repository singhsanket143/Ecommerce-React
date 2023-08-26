import axios from "axios";
import { getAllCategories } from "../apis/fakeStoreProdApis";
import { useEffect, useState } from "react";

function useCategory() {
    const [categories, setCategories] = useState(null);

    async function downloadCategories() {
        const response = await axios.get(getAllCategories(), {withCredentials: true});
        setCategories(response.data);
    }

    useEffect(() => {
        downloadCategories();
    }, [])

    return [categories]
}

export default useCategory;