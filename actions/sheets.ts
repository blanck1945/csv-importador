import axios from "axios";

export const getStocks = async () => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BASE_API_URL}stocks`,
  });

  //   if (response.data.hasError !== null) {
  //     return { success: false, message: response.data.error };
  //   }
  console.warn(console.warn("RESPONSE", response.data));
  return response.data;
};
