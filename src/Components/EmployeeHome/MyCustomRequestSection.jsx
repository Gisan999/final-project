import { useEffect, useState } from "react";
import useRequest from "../../Hooks/useRequest";
import useAuth from "../../Hooks/useAuth";
import ShowRequest from "./ShowRequest";

const MyCustomRequestSection = () => {
    const [requestList] = useRequest();
    const {user} = useAuth();
    const [request, setRequest] = useState([])

    useEffect(()=>{
        const remaining = requestList.filter(data => data?.userName === user?.displayName)
        setRequest(remaining);
    },[requestList, user?.displayName])
    return (
      <div className="bg-black bg-opacity-90">
          <div className="max-w-screen-2xl mx-auto pt-40 py-32">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        request.map(item=> <ShowRequest key={item._id} item={item}></ShowRequest>)
                    }
                </div>
            </div>
        </div>
      </div>
    );
};

export default MyCustomRequestSection;