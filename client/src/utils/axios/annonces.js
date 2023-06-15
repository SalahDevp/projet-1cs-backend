import axios from "axios";
import config from "../../config.json";

/**
 * @param filters {'search', 'type', 'wilaya', 'commune', 'start_date', 'end_date'} # dates format: yyyy-mm-dd
 * @returns {Promise<Number[]} array of annonce ids (max 100)
 *
 */
export async function getAllAnnonces(
  type,
  wilaya,
  commune,
  search,
  startDate,
  endDate
) {
  const tokenStr = "Token " + localStorage.getItem("token");
  //filters object
  search = search.trim();
  const filters = {
    search: search?.length > 0 ? search : undefined,
    type: type?.length > 0 ? type : undefined,
    wilaya: wilaya?.length > 0 ? wilaya : undefined,
    commune: commune?.length > 0 ? commune : undefined,
    start_date:
      startDate?.length > 0
        ? new Date(startDate).toISOString().split("T")[0]
        : undefined,
    end_date:
      endDate?.length > 0
        ? new Date(endDate).toISOString().split("T")[0]
        : undefined,
  };
  //delete all undefined filters
  Object.keys(filters).forEach((key) => {
    if (!filters[key]) delete filters[key];
  });
  const queryStr = new URLSearchParams(filters).toString();
  const res = await axios.get(config.serverUrl + "/api/annonces?" + queryStr, {
    headers: { Authorization: tokenStr },
  });

  return res.data;
}

/**
 *
 * @param {object} annonce
 * @returns {object} created annonce
 */
export async function createAnnonce(annonce) {
  const tokenStr = "Token " + localStorage.getItem("token");
  const photos = annonce.photos ? [...annonce.photos] : [];

  delete annonce.photos;
  //create annonce
  const res = await axios.post(config.serverUrl + "/api/annonces", annonce, {
    headers: { Authorization: tokenStr },
  });
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

/**
 *
 * @returns {Promise<object>} annonce
 */
export async function getAnnonceById(id) {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.get(config.serverUrl + `/api/annonces/${id}`, {
    headers: { Authorization: tokenStr },
  });

  return res.data;
}

/**
 * delete annonce
 */
export function deleteAnnonceById(id) {
  const tokenStr = "Token " + localStorage.getItem("token");

  return axios.delete(config.serverUrl + `/api/annonces/${id}`, {
    headers: { Authorization: tokenStr },
  });
}
