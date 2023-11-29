import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: userData = [] } = useQuery({
        queryKey: ['userData', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/data/${user?.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    return [userData];
};

export default useUserData;