import React from "react";
import backgroundImage from "../assets/login/img_login.jpg";
import FormInput from "../components/CreerAnnonce/FormInput";
import FormSelect from "../components/CreerAnnonce/FormSelect";
import NavBar from "../components/NavBar3";
import { useState } from "react";
import AjouterImage from "../components/CreerAnnonce/AjouterImage";
import { createAnnonce } from "../utils/axios/annonces";
import wilayas from "../utils/wilayas.json";
import communes from "../utils/communes.json";
import { useNavigate } from "react-router-dom";

function CreerAnnonce() {
  const navigate = useNavigate();
  const categorieTab = [
    "Choisir une catégorie",
    "Vente",
    "Echange",
    "Location",
    "Location pour vacances",
  ];
  const typeTab = [
    "Choisir le type",
    "Terrain",
    "Terrain Agricole",
    "Appartement",
    "Maison",
    "Bungalow",
  ];
  const [images, setImages] = useState([]);
  const [categorie, setCategorie] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [type, setType] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [surface, setSurface] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [prix, setPrix] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [wilaya, setWilaya] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [commune, setCommune] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [adresse, setAdresse] = useState({
    value: "",
    error: false,
    errorMsg: "",
  });
  const [description, setDescription] = useState("");

  const handleChange = (e, type) => {
    switch (type) {
      case "categorie":
        setCategorie((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "type":
        setType((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "surface":
        setSurface((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "prix":
        setPrix((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "wilaya":
        setWilaya((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "commune":
        setCommune((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "adresse":
        setAdresse((prv) => ({ ...prv, value: e.target.value }));
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    let valid = true;

    //surface
    if (surface.value.length === 0) {
      setSurface((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez le surface du bien immobilier",
      }));
      valid = false;
    } else if (/[^\d]/.test(prix.value)) {
      setSurface((prv) => ({
        ...prv,
        error: true,
        errorMsg: "la surface ne doit contenir que des chiffres",
      }));
      valid = false;
    } else setSurface((prv) => ({ ...prv, error: false }));

    //prix
    if (prix.value.length === 0) {
      setPrix((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez le prix du bien immobilier",
      }));
      valid = false;
    } else if (/[^\d]/.test(prix.value)) {
      setPrix((prv) => ({
        ...prv,
        error: true,
        errorMsg: "le prix ne doit contenir que des chiffres",
      }));
      valid = false;
    } else setPrix((prv) => ({ ...prv, error: false }));

    //categorie
    if (
      categorie.value === "Choisir une catégorie" ||
      categorie.value.length === 0
    ) {
      setCategorie((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez la catégorie de votre annonce",
      }));
      valid = false;
    } else setCategorie((prv) => ({ ...prv, error: false }));

    //type du bien
    if (type.value === "Choisir le type" || type.value.length === 0) {
      setType((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez le type du bien immobilier",
      }));
      valid = false;
    } else setType((prv) => ({ ...prv, error: false }));

    //willaya
    if (wilaya.value === "Choisir la Wilaya" || wilaya.value.length === 0) {
      setWilaya((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez la Wilaya du bien immobilier",
      }));
      valid = false;
    } else setWilaya((prv) => ({ ...prv, error: false }));

    //commune
    if (commune.value === "Choisir la Commune" || commune.value.length === 0) {
      setCommune((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez la Commune du bien immobilier",
      }));
      valid = false;
    } else setCommune((prv) => ({ ...prv, error: false }));

    //adresse
    if (adresse.value.length === 0) {
      setAdresse((prv) => ({
        ...prv,
        error: true,
        errorMsg: "S'il vous plaît entrez l'adresse du bien immobiliere",
      }));
      valid = false;
    } else setAdresse((prv) => ({ ...prv, error: false }));
    //
    return valid;
  };

  const handleContinue = async () => {
    const obj = {
      surface: parseInt(surface.value),
      prix: parseInt(prix.value),
      description: description,
      categorie: categorie.value,
      type: type.value,
      wilaya: wilaya.value,
      commune: commune.value,
      adresse: adresse.value,
      photos: images,
    };
    if (validateInputs()) {
      try {
        const annonce = await createAnnonce(obj);
        navigate("/annonce/" + annonce.id);
      } catch (error) {
        console.error(error);
      }
    } else return;
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center pt-32"
    >
      <div className="container h-full bg-darkBlue-500/40 rounded-[30px] lg:rounded-[40px] px-5 lg:px-11 py-7 lg:py-11 lg:mx-0 lg:my-5">
        <form className="bg-white/80 rounded-3xl p-4 lg:p-16 h-full w-full flex flex-col gap-y-4 lg:gap-y-16">
          <h1 className="text-darkBlue-500 font-mono font-medium lg:font-semibold text-2xl lg:text-3xl">
            Déposer une annonce
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 mx-4">
            <div className="lg:col-span-2">
              <FormSelect
                name="categorie"
                label="Catégorie de l’annonce"
                state={categorie}
                handleChange={handleChange}
                options={categorieTab}
              ></FormSelect>
            </div>
            <div className="lg:col-span-2">
              <FormSelect
                name="type"
                label="Type du bien immobilier"
                state={type}
                handleChange={handleChange}
                options={typeTab}
              ></FormSelect>
            </div>

            <div className="lg:col-span-2">
              <FormInput
                name="surface"
                label="La surface"
                type="number"
                min={0}
                color="blue-gray"
                icon={
                  <p>
                    m<sup>2</sup>
                  </p>
                }
                state={surface}
                handleChange={handleChange}
              />
            </div>
            <div className="lg:col-span-2">
              <FormInput
                name="prix"
                label="Le prix"
                type="number"
                min={0}
                color="blue-gray"
                icon={<p>DA</p>}
                state={prix}
                handleChange={handleChange}
              />
            </div>
            <div className="lg:col-span-5">
              <FormInput
                name="description"
                label="Description"
                type="text"
                color="blue-gray"
                state={description}
                handleChange={handleChange}
              />
            </div>
            <div className="lg:col-span-2">
              <span
                className={`text-sm p-2 font-medium text-blue-gray-400 ${
                  wilaya.error ? "text-red-600 border-red-600" : ""
                }`}
              >
                {"wilaya"}
              </span>
              <select
                id="wilaya"
                label="Wilaya"
                className={`focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400 ${
                  wilaya.error ? "text-red-600 border-red-600" : ""
                }`}
                onChange={(e) => handleChange(e, "wilaya")}
              >
                <option key={-1} value={wilaya}>
                  {"Choisir la Wilaya"}
                </option>
                {wilayas.map((wilaya, ind) => (
                  <option key={wilaya} value={(ind + 1).toString()}>
                    {wilaya}
                  </option>
                ))}
              </select>
              {wilaya.error && (
                <p className="text-xs -ml-2 text-red-600">
                  {"* " + wilaya.errorMsg}
                </p>
              )}
            </div>
            <div className="lg:col-span-2">
              <span
                className={`text-sm p-2 font-medium text-blue-gray-400 ${
                  commune.error ? "text-red-600 border-red-600" : ""
                }`}
              >
                {"commune"}
              </span>
              <select
                id="commune"
                label="Commune"
                className={`focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400 ${
                  wilaya.error ? "text-red-600 border-red-600" : ""
                }`}
                onChange={(e) => handleChange(e, "commune")}
              >
                <option key={-1} value={commune}>
                  {"Choisir la Commune"}
                </option>
                {wilaya.value.length !== 0 &&
                  communes[wilaya.value - 1].map((commune, ind) => (
                    <option key={ind} value={commune}>
                      {commune}
                    </option>
                  ))}
              </select>
            </div>
            <div className="lg:col-span-5">
              <FormInput
                name="adresse"
                label="L'adresse"
                type="text"
                color="blue-gray"
                state={adresse}
                handleChange={handleChange}
              />
            </div>

            <AjouterImage images={images} setImages={setImages} />

            <div className="lg:col-span-5 flex justify-around items-center">
              <button
                data-testid="btn1"
                type="button"
                onClick={() => navigate("/home")}
                className="text-white font-mono text-xl lg:text-3xl bg-[#FF6B3E] hover:bg-[#f18564] focus:outline-none focus:ring-2 focus:ring-[#ca3e14] font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2"
              >
                Annuler
              </button>

              <button
                id="submit"
                data-testid="btn2"
                type="button"
                className="text-white font-mono text-xl lg:text-3xl bg-[#143B74] hover:bg-[#295aa3] focus:outline-none focus:ring-2 focus:ring-[#0c2a57] font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleContinue}
              >
                Déposer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreerAnnonce;
