import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../Api/Post/Post";

export default function usePost(){
    const {data, isLoading, error} = useQuery({
        queryKey: ["posts"],
        queryFn: async() => {
           const response = await getAllPosts("")
           if (response.ok)
                return response.json();
        },
    })

    return {data, isLoading, error}
}