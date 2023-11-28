import { FaUser } from "react-icons/fa";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddAnEmployeePage = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [usersList, refetch] = useUser();
    const [employee, setEmployee] = useState([]);
    console.log(usersList);

    useEffect(()=>{
        const remaining = usersList.filter(user => user.team === "no")
        setEmployee(remaining);

    },[usersList])

    const handleAddTeam = userData => {
        console.log(userData);
        axiosSecure.patch(`/update/users/${userData._id}`)
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
        .then(res =>{
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
        <div>
            <div className="max-w-screen-lg mx-auto border border-sky-300 shadow-inner shadow-sky-400 mt-10 p-3">

                {/* <div className="flex justify-between">
    <h2 className="text-4xl font-semibold uppercase">Total orders: {cart.length}</h2>
    <h2 className="uppercase text-4xl font-semibold">Total Price: {totalPrice}</h2>

    {cart.length ? <Link to="/dashboard/payment">  <button className="btn bg-[#D1A054] text-white">pay</button></Link> :
        <button disabled className="btn bg-[#D1A054] text-white">pay</button>}
</div> */}

                <div className="overflow-x-auto">
                    <table className="table mt-5">
                        {/* head */}
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
                            {/* row 1 */}
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
                                    <td><FaUser/></td>
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