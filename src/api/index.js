import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const {
      data: { Date, Global },
    } = await axios.get(url);

    const ModifiedData = {
      confirmed: Global.TotalConfirmed,
      recovered: Global.TotalRecovered,
      deaths: Global.TotalDeaths,
      lastUpdate: Date,
    };
    console.log(ModifiedData);
    return ModifiedData;
  } catch (err) {}
};
