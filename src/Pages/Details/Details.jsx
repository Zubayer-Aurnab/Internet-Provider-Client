import { useLoaderData } from "react-router-dom";


const Details = () => {
    const customer = useLoaderData()
    console.log(customer)
    return (
        <div className="mt-10 bg-base-200 p-4">
            <h1>{customer[0].name}</h1>
        </div>
    );
};

export default Details;