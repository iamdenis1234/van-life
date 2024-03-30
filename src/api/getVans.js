import { getDocs } from "firebase/firestore";
import { vansCollectionRef } from "./api.js";

export { getVans };

async function getVans() {
  console.log("start getting vans");
  const querySnapshot = await getDocs(vansCollectionRef);
  console.log("end getting vans");
  return querySnapshot.docs.map((van) => van.data());
}
