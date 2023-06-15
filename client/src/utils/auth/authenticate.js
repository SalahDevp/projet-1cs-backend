import getAuthToken from "../axios/getAuthToken";

export default async function authenticate(code, navigateFunc) {
  try {
    const resData = await getAuthToken(code);
    //save token and user id
    localStorage.setItem("token", resData.token);
    localStorage.setItem("userId", resData.id);
    //get user object
    //if user hasn't enter his info yet we redirect him to sign page
    if (
      !resData.nom.length ||
      !resData.telephone.length ||
      !resData.adresse.length
    )
      navigateFunc("/sign");
    //if user has already signed in ent redirect to home auth
    else navigateFunc("/home");
  } catch (e) {
    console.log(e);
  }
}
