import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllCustomer = () => {
  const { data, isPending } = useQuery({
    queryKey: "customer",
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/all-customers");
      return res.data;
    },
  });

  return [data, isPending];
};

export default useAllCustomer;
