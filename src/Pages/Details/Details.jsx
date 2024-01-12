import { useLoaderData } from "react-router-dom";


const Details = () => {
    const customer = useLoaderData()
    console.log(customer)
    return (
        <div className="mt-10 bg-base-200 p-4 md:w-4/5 mx-auto rounded-xl py-8">
            <h1 className="text-2xl font-bold text-center">{customer[0].name} <span></span></h1>
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
                    
                </div>

            </div>
        </div>
    );
};

export default Details;