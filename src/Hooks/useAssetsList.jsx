import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAssetsList = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch ,data: assets = []} = useQuery({
        queryKey: ['assets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/get/asset')
            return res.data;
        }
    })
    return [assets, refetch];
};

export default useAssetsList;