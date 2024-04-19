import { auth } from "./api.js";

export { getUserInfo };

async function getUserInfo() {
  const user = auth.currentUser;
  await user.reload();
  const lastLoginTime = getFormattedTime(user.metadata.lastLoginAt);

  return {
    name: user.displayName,
    email: user.email,
    lastLoginTime,
  };
}

function getFormattedTime(time) {
  const date = new Date(Number.parseInt(time));
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${dayOfWeek}, ${month} ${day}, ${year}, ${hours}:${minutes}:${seconds}`;
}
