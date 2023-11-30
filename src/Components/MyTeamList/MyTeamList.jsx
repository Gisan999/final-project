import { Helmet } from "react-helmet";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import useUserData from "../../Hooks/useUserData";
import { FaUser } from "react-icons/fa";

const MyTeamList = () => {
    const [usersList] = useUser();
    const [userData] = useUserData();
    const [team, setTeam] = useState([]);
  

    useEffect(() => {
        const remaining = usersList?.filter(data => data.adminEmail === userData?.adminEmail);
        setTeam(remaining);
    }, [userData?.adminEmail, usersList])

    return (
        <div className="my-28">
            <Helmet>
                <title>Blueharb | My Team</title>
            </Helmet>
            <h2 className="text-5xl text-center pt-12 pb-6">OUR TEAM MEMBER</h2>
            {
                userData?.adminEmail ? <>
                    <div className="max-w-screen-lg mx-auto border border-sky-300 shadow-inner shadow-sky-400 mt-10 p-3">

                        <div className="overflow-x-auto">
                            <table className="table mt-5">

                                <thead>
                                    <tr className="bg-gray-400 text-white text-base">
                                        <th>
                                            <label>

                                            </label>
                                        </th>
                                        <th>USER IMAGE</th>
                                        <th>USER NAME</th>
                                        <th>USER TYPE</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        team?.map((data, idx) => <tr key={data._id}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-16 h-16 my-3">
                                                            <img src={data.image} alt="Avatar Not Fund" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                {data.name}
                                            </td>
                                            <td><div className="flex items-center gap-1">
                                                <FaUser /> Employee</div></td>
                                            
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                </> : <>
                    <div className="max-w-screen-md mx-auto ">
                        <div className="h-[70vh] flex items-center justify-center">
                            <h2 className="text-center text-2xl md:text-4xl lg:text-5xl px-8 lg:px-0 font-bold"> You are not affiliated with a team, <br /> <br /> Please contact your Admin</h2>
                        </div>

                    </div>
                </>
            }
        </div>
    );
};

export default MyTeamList;