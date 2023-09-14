import axios from "axios";

export { getVans, getHostVans, loginUser };

async function getVans(id) {
  console.log("start getting vans");
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const { data } = await axios(url);
  console.log("end getting vans");
  return data.vans;
}

async function getHostVans(id) {
  console.log("start getting host vans");
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const { data } = await axios(url);
  console.log("end getting host vans");
  return data.vans;
}

async function loginUser(creds) {
  const { data } = await axios("/api/login", {
    method: "post",
    data: creds,
  });
  return data;
}
