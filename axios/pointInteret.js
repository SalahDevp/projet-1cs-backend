import axios from "axios";
import config from "../../config.json";

export async function getAllPI(categorie, wilaya, theme, search) {
  const tokenStr = "Token " + localStorage.getItem("token");
  //filters object
  search = search.trim();
  const filters = {
    search: search?.length > 0 ? search : undefined,
    categorie: categorie?.length > 0 ? categorie : undefined,
    wilaya: wilaya?.length > 0 ? wilaya : undefined,
    theme: theme?.length > 0 ? theme : undefined,
  };
  //delete all undefined filters
  Object.keys(filters).forEach((key) => {
    if (!filters[key]) delete filters[key];
  });
  const queryStr = new URLSearchParams(filters).toString();
  const res = await axios.get(
    config.serverUrl + "/api/point-interet?" + queryStr,
    {
      headers: { Authorization: tokenStr },
    }
  );

  return res.data;
}

export async function createPI(pointInteret) {
  const tokenStr = "Token " + localStorage.getItem("token");
  const photos = pointInteret.photos ? [...pointInteret.photos] : [];

  delete pointInteret.photos;
  //create pointInteret
  const res = await axios.post(
    config.serverUrl + "/api/point-interet",
    pointInteret,
    {
      headers: { Authorization: tokenStr },
    }
  );
  //add images
  for (let photo of photos) {
    const formData = new FormData();
    formData.append("image", photo);
    await axios.post(config.serverUrl + "/api/image/" + res.data.id, formData, {
      headers: { Authorization: tokenStr },
    });
  }

  return res.data;
}

export async function getPIById(id) {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.get(config.serverUrl + `/api/point-interet/${id}`, {
    headers: { Authorization: tokenStr },
  });

  return res.data;
}

/**
 * delete annonce
 */
export function deletePIById(id) {
  const tokenStr = "Token " + localStorage.getItem("token");

  return axios.delete(config.serverUrl + `/api/point-interet/${id}`, {
    headers: { Authorization: tokenStr },
  });
}
