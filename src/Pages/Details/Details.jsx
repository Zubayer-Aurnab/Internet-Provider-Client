import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const Details = () => {
    const customer = useLoaderData()
    // console.log(customer)
    const currentDate = new Date();
    const [selectedMonthData, setSelectedMonthData] = useState({
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
    });
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    return (
        <div className="mt-10 bg-base-200 p-4 md:w-1/2 mx-auto rounded-xl py-8">
            <h1 className="text-2xl font-bold text-center mb-10">{customer[0].name}</h1>
            <div className="md:flex justify-between px-10 space-y-4">
                <div className="space-y-5">
                    <p className="font-medium ">Package : <span className="font-normal">{customer[0].subscription} tk</span></p>
                    <p className="font-medium">User_Name :  <span className="font-normal">{customer[0].userName}</span></p>
                    <p className="font-medium">Phone:  <span className="font-normal">{customer[0].number}</span></p>
                    <p className="font-medium">Address :  <span className="font-normal">{customer[0].address}</span></p>
                    <p className="font-medium">JoiningDate :  <span className="font-normal">{customer[0].joiningDate}</span></p>
                </div>
                <div>
                    <p className="font-medium ">Status: <span className={customer[0].status ? "bg-green-300 px-4 rounded-full text-w font-bold" : "bg-red-200 px-4 rounded-full text-w font-bold"}>{customer[0].status ? customer[0].status : "unpaid"}</span></p>
                    {
                        customer[0].status === "paid" ?
                         ""
                            :
                            <div className="mt-5">
                                <h1 className="mb-2">Make Payment</h1>
                                <div >
                                    <MonthInput
                                        selected={selectedMonthData}
                                        setShowMonthPicker={setIsPickerOpen}
                                        showMonthPicker={isPickerOpen}
                                        size="small"
                                    />
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
                    }

                </div>

            </div>
        </div>
    );
};

export default Details;