import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch ,data: usersList = []} = useQuery({
        queryKey: ['usersList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/get/users')
            return res.data;
        }
    })
    return [usersList, refetch];
};

export default useUser;