import axios from "axios";

export default async function getUser(id) {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.get(`http://127.0.0.1:8000/api/users/${id}`, {
    headers: { Authorization: tokenStr },
  });
  return res.data;
}
