import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  console.warn("METHOD", method);

  switch (method) {
    case "POST":
      return res
        .status(201)
        .json({ success: true, data: { id: 1, name: "test" } });
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_BASE_API_URL}/stocks`,
        data: req.body,
      });

      if (response.data.hasError !== null) {
        return res
          .status(response.data.code)
          .json({ success: false, message: response.data.error });
      }

      return res.status(201).json({ success: true, data: response.data });
    default:
      return res
        .status(400)
        .json({ success: false, message: "Invalid method" });
  }
};

export default handler;
