import useUserData from "../../Hooks/useUserData";

const MyAsset = () => {
    const [userData] = useUserData();
    return (
        <div>
            {
                userData?.adminEmail ? 
                <>
                </> :
                <>
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

export default MyAsset;