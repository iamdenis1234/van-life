import axios from "axios";

export { getVans, getHostVans };

async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const { data } = await axios(url);
  return data.vans;
}

async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const { data } = await axios(url);
  return data.vans;
}
