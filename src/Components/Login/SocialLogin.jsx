import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const role = "employee";
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role
                }
                axiosPublic.post('/set/users', userInfo)
                    .then(res => {
                        navigate('/about')
                        console.log(res.data);
                        Swal.fire({
                            position: 'top-right',
                            title: `success`,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        })
                      
                    })
            })
            .catch(error => {
                console.error(' google login', error);
                Swal.fire({
                    position: 'top-right',
                    title: `google login ${error}`,
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }
    return (
        <div className="px-12">
            <button onClick={googleSignIn} className="btn btn-circle btn-outline btn-info w-full">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;