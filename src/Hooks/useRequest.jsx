import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRequest = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch ,data: requestList = []} = useQuery({
        queryKey: ['usersList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/get/request')
            return res.data;
        }
    })
    return [requestList, refetch];

};

export default useRequest;