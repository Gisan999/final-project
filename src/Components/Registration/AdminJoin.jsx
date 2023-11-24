import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const AdminJoin = () => {
    const [date, setDate] = useState(new Date());
    const time = date.toLocaleDateString();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(time);
    }
    return (
        <div className="mt-28 max-w-screen-xl mx-auto bg-blue-50">
            <div className="p-8 py-24 rounded border border-blue-300">    <h1 className="font-medium text-3xl">Admin Recruitment Page</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mt-8 grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Full Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Company Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Company Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                            <input type="text" name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
                        </div>
                        <div>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                            <input type="text" name="job" id="job" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Your Password" />
                        </div>
                        <div>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Company Logo</label>
                            <input type="file" className="bg-gray-100 border border-gray-200 rounded px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full  file-input" />
                        </div>
                        <div className=' relative'>
                            <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">Birth-Date</label>

                            <DatePicker className='bg-gray-100 border pr-[138px] md:pr-[481px] lg:pr-[378px] border-gray-200 rounded py-1 pl-9 block focus:ring-blue-500 focus:border-blue-500          text-gray-700'
                                selected={date}
                                onChange={(date) => setDate(date)} ></DatePicker>
                            <svg className="w-4 absolute top-8 left-2 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>

                        </div>
                    </div>
                    <div className=" mt-8">
                        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full">Save</button>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminJoin;