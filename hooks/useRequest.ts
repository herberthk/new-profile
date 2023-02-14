import axios from "axios";
import { useState } from "react";

interface Request {
  url: string;
  method: "POST" | "GET";
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
  body: {
    name: string;
    email: string;
    message: string;
  };
}
const useRequest = ({
  method = "GET",
  onError,
  onSuccess,
  url,
  body,
}: Request) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      setLoading(true);
      let response;
      if (method === "POST") {
        // response = await axios[method](url, { ...body, ...props });
        response = await axios.post(url, body);
      }

      if (onSuccess) {
        onSuccess(response?.data);
      }

      return response?.data;
    } catch (err) {
      //@ts-ignore
      setErrors(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { doRequest, errors, loading };
};

export default useRequest;
