import useAllCustomer from "../../../Hooks/useAllCustomer";


const AllCustomers = () => {
    const [data, isPending] = useAllCustomer()
    console.log(data)
    return (
        <div>
            {
                isPending ? "loading"
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 px-2">
                        {
                            data?.map((customer, i) => (
                                <div key={i} className="card  bg-base-100 shadow-xl">

                                    <div className="card-body">
                                        <div className="flex gap-2 items-center ">
                                            <h2 className="card-title text-sm md:text-xl">{customer.name}</h2>
                                            {
                                                customer.status === "paid" ?
                                                    <span className="w-2 h-2  bg-green-700 rounded-full "></span>
                                                    :
                                                    <span className="w-2 h-2  bg-red-600 rounded-full "></span>
                                            }
                                        </div>
                                        <p className="text-xs text-gray-400">{customer.address}</p>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default AllCustomers;