import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const response = await axios({
      method: "GET",
      url: "https://sheets.googleapis.com/v4/spreadsheets/12kSpb9swBn6VEuw1XoPODQtE6crHSE2roSPAO74gCUI/values/Hoja1?key=AIzaSyAGyQVjr2AnJNvEPSnlsxmovd8MOV_Lu3Q",
      //url: `https://sheets.googleapis.com/v4/spreadsheets/${data.sheet_id}/values?key=${data.api_key}&callback=init`,
    });

    return res.status(200).json(response.data);
  }
}
