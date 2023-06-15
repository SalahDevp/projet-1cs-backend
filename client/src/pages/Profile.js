import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar3";

import Info from "../components/Profile/Info";
import AI from "../components/Profile/Announces";
import Footer from "../components/Footer";
import getUser from "../utils/axios/getUser";

function Profile() {
  const [user, setUser] = useState();
  const profileInfo = async () => {
    const userId = localStorage.getItem("userId");
    const userInfo = await getUser(userId);
    setUser({
      name: userInfo.nom,
      adresse: userInfo.adresse,
      picture: userInfo.picture,
      telephone: userInfo.telephone,
    });
  };
  useEffect(() => {
    profileInfo();

  }, [])

  return (
    <div className="bg-darkBlue-500">
      <NavBar />
      <div>
        <Info user={user || {}} />
      </div>
      <div>
        <AI />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
