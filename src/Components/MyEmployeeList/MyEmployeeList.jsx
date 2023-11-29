import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useUserData from "../../Hooks/useUserData";

const MyEmployeeList = () => {
    const [isAdmin] = useAdmin();
    const [userData] = useUserData();
    console.log(userData);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: employeeList = [] } = useQuery({
        queryKey: ['employeeList', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get/employee?email=${user?.email}`)
            return res.data
        }
    })

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete/employee/${id}`)
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Employee has been deleted.',
                                'success'
                            )
                            refetch()
                        }

                    })
            }
        })
    }
    console.log(isAdmin);
    return (
        <div>
              <Helmet>
                <title>Blueharb | My employee</title>
            </Helmet>
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
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                employeeList?.map((data, idx) => <tr key={data._id}>
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
                                    <th>
                                        <button onClick={() => handleDelete(data._id)} className="btn text-white bg-blue-400 text-2xl"><MdDelete /></button>
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

export default MyEmployeeList;