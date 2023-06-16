import axios from "axios";

export default function updateUserInfo(id, nom, telephone, adresse) {
  const tokenStr = "Token " + localStorage.getItem("token");
  return axios.put(
    `http://127.0.0.1:8000/api/users/${id}`,
    { nom, telephone, adresse },
    { headers: { Authorization: tokenStr } }
  );
}
