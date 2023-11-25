import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-right',
                    title: `success`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(location?.state ? location.state : '/');

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