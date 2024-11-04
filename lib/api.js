import axios from "axios";

const api = {
  fetchLinkedInData: (country) =>
    axios.request({
        method: 'GET',
        url: `https://covid-19.dataflowkit.com/v1/${country}`,
      }),
};

export default api;
