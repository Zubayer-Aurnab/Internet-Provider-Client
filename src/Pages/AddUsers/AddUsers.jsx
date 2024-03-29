import axios from "axios";
import Swal from "sweetalert2";
import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const AddUsers = () => {
    const currentDate = new Date();
    const [selectedMonthData, setSelectedMonthData] = useState({
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
    });
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const handleMonthPickerClick = (e) => {
        // Prevent the click event from reaching the form
        e.stopPropagation();
        // Toggle the MonthPicker visibility
        setIsPickerOpen(!isPickerOpen);
    };
    const handelAddUsers = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const userName = form.username.value;
        const number = form.number.value;
        const address = form.address.value;
        const subscription = form.subscription.value;
        const status = "paid"
        const paymentMonth = selectedMonthData

        // Get today's date in the format YYYY-MM-DD
        const today = new Date();
        const joiningDate = today.toISOString().split('T')[0];

        const customer = { name, userName, number, address, subscription, joiningDate, status, paymentMonth };
        console.log(customer);

        // try {
        //     const res = await axios.post("http://localhost:5000/customers", customer);
        //     if (res.data.insertedId) {
        //         Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: " User has been Added",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         form.reset()
        //     }
        // } catch (error) {
        //     console.error("Error adding customer:", error);
        // }
    };
    return (
        <div className="p-4 ">
            <div className=" w-full lg:w-1/2 mx-auto border-2 border-primary rounded-2xl p-4 mt-[10%] bg-red-200">
                <form
                    onSubmit={handelAddUsers}
                    className="">
                    <h1 className="text-2xl font-bold text-primary mb-10 ">Add User</h1>
                    <h1 className="text-2xl font-bold text-primary mb-10 ">Add User</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="name"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="username"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                User Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="tel"
                                name="number"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Contact Number
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="address"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Address
                            </label>
                        </div>
                        <div>
                            <select name="subscription" className="select w-full max-w-xs bg-blue-50" required>
                                <option value="" hidden>Package</option>
                                <option value="500">500 <span>tk</span></option>
                                <option value="1000">1000 <span>tk</span></option>
                                <option value="2000">2000 <span>tk</span></option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11">
                        <div >
                            <h1 className="mb-2">Payment Till</h1>
                            <div onClick={handleMonthPickerClick}>
                                <MonthInput
                                    selected={selectedMonthData}
                                    setShowMonthPicker={setIsPickerOpen}
                                    showMonthPicker={isPickerOpen}
                                    size="small"
                                />
                            </div>
                            {isPickerOpen ? (
                                <MonthPicker
                                    setIsOpen={setIsPickerOpen}
                                    selected={selectedMonthData}
                                    onChange={setSelectedMonthData}
                                    size="small"
                                />
                            ) : null}
                        </div>
                    </div>

                    <div className="w-1/2 mx-auto mt-10">

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;