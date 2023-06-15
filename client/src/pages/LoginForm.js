import React, { useEffect, useState } from "react";
import img from "../assets/login/user.jpg";
import backgroundImage from "../assets/login/img_login.jpg";
import FormInput from "../components/LoginForm/FormInput";
import updateUserInfo from "../utils/axios/updateUserInfo";
import logo from "../assets/logo.svg";
import getUser from "../utils/axios/getUser";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [profilePic, setProfilePic] = useState(undefined);
  const [nom, setNom] = useState({ value: "", error: false, errorMsg: "" });
  const [prenom, setPrenom] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [telephone, setTelephone] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [adresse, setAdresse] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const navigate = useNavigate();

  const handleChange = (e, type) => {
    switch (type) {
      case "nom":
        setNom((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "prenom":
        setPrenom((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "telephone":
        setTelephone((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "adresse":
        setAdresse((prv) => ({ ...prv, value: e.target.value }));
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    let valid = true;

    //nom
    if (nom.value.length === 0) {
      setNom((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez votre nom",
      }));
      valid = false;
    } else if (/\d/.test(nom.value)) {
      setNom((prv) => ({
        ...prv,
        error: true,
        errorMsg: "le nom ne doit pas contenir des chiffres",
      }));
      valid = false;
    } else setNom((prv) => ({ ...prv, error: false }));

    //prenom
    if (prenom.value.length === 0) {
      setPrenom((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez votre prenom",
      }));
      valid = false;
    } else if (/\d/.test(prenom.value)) {
      setPrenom((prv) => ({
        ...prv,
        error: true,
        errorMsg: "le prenom ne doit pas contenir des chiffres",
      }));
      valid = false;
    } else setPrenom((prv) => ({ ...prv, error: false }));

    //telephone
    if (telephone.value.length !== 10) {
      setTelephone((prv) => ({
        ...prv,
        error: true,
        errorMsg: "le numéro de téléphone doit avoir 10 chiffres",
      }));
      valid = false;
    } else if (/[^\d]/.test(telephone.value)) {
      setTelephone((prv) => ({
        ...prv,
        error: true,
        errorMsg: "le numéro de téléphone ne doit contenir que des chiffres",
      }));
      valid = false;
    } else setTelephone((prv) => ({ ...prv, error: false }));

    //adresse
    if (adresse.value.length === 0) {
      setAdresse((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez votre adresse",
      }));
      valid = false;
    } else setAdresse((prv) => ({ ...prv, error: false }));
    //
    return valid;
  };

  const handleContinuer = async () => {
    if (!validateInputs()) return;
    try {
      const userId = localStorage.getItem("userId");
      const username = `${nom.value.trim()} ${prenom.value.trim()}`;
      await updateUserInfo(userId, username, telephone.value, adresse.value);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPP = async () => {
    const userId = localStorage.getItem("userId");
    const user = await getUser(userId);
    setProfilePic(user.picture);
  };

  useEffect(() => {
    fetchPP();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen bg-no-repeat bg-cover bg-center bg-fixed flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="lg:basis-1/3 p-4 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <img src={logo} alt="logo" className="h-20 lg:w-4/5 lg:h-auto" />
      </div>
      <div className="lg:basis-2/3 h-full bg-darkBlue-500/40 rounded-[50px] lg:rounded-l-[100px] lg:rounded-r-none px-5 lg:px-11 py-7 lg:py-11 lg:mx-0 lg:my-5">
        <div className="bg-white/80 rounded-3xl p-4 h-full w-full flex flex-col">
          <div className="h-1/3 flex flex-col mb-4">
            <h1 className="text-darkBlue-500 font-mono font-medium lg:font-semibold text-2xl lg:text-3xl drop-shadow-3xl shadow-[#343434] mb-2 lg:mb-2">
              Bienvennue !
            </h1>
            <p className="text-[#4D4949] font-mono font-medium text-lg lg:text-xl mb-4 lg:mb-6">
              Veuillez remplir vos informations personnelles
            </p>
            {/*avatar*/}

            <div className="self-center block p-2 rounded-full bg-gradient-to-br from-[#114154] to-[#0B6387]">
              <div className="block p-1 rounded-full bg-[#dfe5e9]">
                <img
                  src={profilePic || img}
                  alt="user"
                  className="h-20 w-20 lg:h-24 lg:w-24 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <form className="flex-grow flex flex-col space-y-4">
            <div className="flex-grow p-4 flex flex-col justify-between">
              <FormInput
                name="nom"
                label="Nom"
                type="text"
                state={nom}
                handleChange={handleChange}
              />

              <FormInput
                name="prenom"
                label="Prénom"
                type="text"
                state={prenom}
                handleChange={handleChange}
              />
              <FormInput
                name="telephone"
                label="Téléphone"
                type="number"
                state={telephone}
                handleChange={handleChange}
              />
              <FormInput
                name="adresse"
                label="Adresse"
                type="text"
                state={adresse}
                handleChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="self-end text-white font-mono text-sm lg:text-lg bg-gradient-to-r from-[#123A4A] to-[#0B6387] hover:bg-gradient-to-l hover:from-[#123A4A] hover:to-[#0B6387] focus:outline-none focus:ring-2 focus:ring-darkBlue-500 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleContinuer}
            >
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

export const validateTelephoneLenght = (telephone)=>{
  if (telephone.length !== 10) return false;
  else return true;
} ;
  
