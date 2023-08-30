import axios from "axios";

export { getVans };

async function getVans() {
  const res = await axios("/api/vans", {
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });

  return res.data.vans;
}
