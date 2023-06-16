import axios from "axios";
export default async function getAuthToken(code) {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/login/social/token_user/google-oauth2",
      {
        code: code,
        redirect_uri: "postmessage",
      }
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
