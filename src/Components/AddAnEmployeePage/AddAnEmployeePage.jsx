import { FaUser } from "react-icons/fa";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddAnEmployeePage = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [usersList, refetch] = useUser();
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        const remaining = usersList.filter(user => user.team === "no")
        setEmployee(remaining);
    }, [usersList])
    const handleAddTeam = userData => {
        axiosSecure.patch(`/update/users/${userData._id}`, { adminEmail: user?.email })
            .then(res => {
                console.log(res.data);
                refetch();
            })
        const myEmploy = {
            name: userData.name,
            image: userData.image,
            role: userData.role,
            adminEmail: user?.email
        }
        axiosSecure.post('/set/employee', myEmploy)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${userData.name} is now your employee`,
                    showConfirmButton: false,
                    timer: 1000
                });
            })
    }
    return (
        <div className="mt-20">
            <Helmet>
                <title>Blueharb | Employee added</title>
            </Helmet>
            <h2 className="text-center text-3xl md:text-5xl font-bold py-9">Added A New Employee</h2>
            <div className="max-w-screen-lg mx-auto border border-sky-300 shadow-inner shadow-sky-400 mt-10 mb-20 p-3">
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
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee?.map((data, idx) => <tr key={data._id}>
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
                                    <td><FaUser /></td>
                                    <th>
                                        <button onClick={() => handleAddTeam(data)} className="btn text-white bg-blue-400">Add Team</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AddAnEmployeePage;