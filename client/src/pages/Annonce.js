import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar3";
import Footer from "../components/Footer";
import Swiper from "../components/Annonce/swiper";
import personIcon from "../assets/annonce/person.svg";
import emailIcon from "../assets/annonce/email.svg";
import phoneIcon from "../assets/annonce/phone.svg";
import localisationIcon from "../assets/annonce/localisation.svg";
import { getAnnonceById } from "../utils/axios/annonces";
import { useNavigate, useParams } from "react-router-dom";
import wilayas from "../utils/wilayas.json";
import generateAITitle from "../utils/generateAITitle";

function Annonce() {
  //state
  let { id: annonceId } = useParams();
  const navigate = useNavigate();
  const [annonce, setAnnonce] = useState({
    surface: "",
    prix: "",
    description: "",
    categorie: "",
    type: "",
    wilaya: "",
    commune: "",
    adresse: "",
    user: {
      id: "",
      nom: "",
      email: "",
      adresse: "",
      telephone: "",
    },
    photos: [],
    created_at: "",
  });

  useEffect(() => {
    getAnnonceById(annonceId)
      .then((annonce) => setAnnonce(annonce))
      .catch((e) => {
        console.log(e);
        navigate("/404-page-not-found");
      });
  }, [annonceId, navigate]);

  return (
    <div className="block w-full">
      <NavBar />
      <div className="flex flex-col xl:flex-row justify-between items-start w-full h-full lg:px-8 px-2 bg-gradient-to-b from-darkBlue-200 via-darkBlue-300 to-darkBlue-100">
        <div className=" flex flex-col h-full space-y-8 flex-[2] pt-[150px] pb-6">
          <div className=" ">
            <p className="font-mono md:text-4xl text-lg font-semibold leading-32 text-white ">
              {generateAITitle(annonce)}
            </p>
            <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-orange ">
              {annonce.prix + " DA"}
            </p>
          </div>

          <Swiper images={annonce.photos}></Swiper>

          <div className="items-center space-y-4">
            <p className=" font-mono md:text-3xl text-lg font-semibold leading-32 text-orange ">
              Description
            </p>
            <div className="lg:col-span-5 h-64 w-full rounded-xl bg-[#f7efe5] opacity-60 py-1">
              <p className=" md:text-3xl text-lg font-sans font-semibold leading-32 text-black m-8">
                {annonce.description}
              </p>
            </div>
          </div>

          <div className="space-y-4 ">
            <div className="lg:col-span-5 h-70 w-full rounded-xl bg-[#f7efe5] opacity-60 py-1">
              <div className="grid grid-cols-2 grid-rows-5 pl-[25px] py-3 gap-y-4">
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Surface
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {annonce.surface + " m²"}
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Catégorie
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {annonce.categorie}
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Type
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {annonce.type}
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Wilaya
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {wilayas[annonce.wilaya - 1]}
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Commune
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {annonce.commune}
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-semibold leading-32 text-black">
                    Adresse
                  </p>
                </div>
                <div>
                  <p className="font-mono md:text-3xl text-lg font-regular leading-32 text-black">
                    {annonce.adresse}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:sticky xl:top-4  xl:bottom-0 xl:ml-8 lg:ml-4 mr-2 mb-6 xl:flex-1">
          <div className="flex flex-col justify-between items-center py-2 px-4 h-[370px] 2xl:w-[370px] xl:w-[90%] md:w-[370px] w-[290px] rounded-xl bg-[#AEAEAB] xl:mt-[150px] ">
            <div>
              <p className=" font-mono md:text-[40px] text-lg font-semibold tracking-wide text-black object-center py-4 ">
                Contact et infos
              </p>
            </div>
            <div className="flex-grow flex flex-col justify-around items-start">
              <div className="flex space-x-[2px] ">
                <img src={personIcon} alt="/" className=" " />

                <p className=" font-mono md:text-[20px] text-lg font-regular leading-32 text-[#FD5825] ">
                  {annonce.user.nom}
                </p>
              </div>
              <div className="flex space-x-[2px] ">
                <img src={localisationIcon} alt="/" className=" " />
                <p className=" font-mono md:text-[20px] text-lg font-regular leading-32 text-[#FD5825]  ">
                  {annonce.user.adresse}
                </p>
              </div>
              <div className="flex space-x-[2px] ">
                <img src={emailIcon} alt="/" className=" " />
                <p className=" font-mono md:text-[20px] text-lg font-regular leading-32 text-[#FD5825]  ">
                  {annonce.user.email}
                </p>
              </div>
              <div className="flex space-x-[2px] ">
                <img src={phoneIcon} alt="/" className=" " />
                <p className=" font-mono md:text-[20px] text-lg font-regular leading-32 text-[#FD5825] ">
                  {annonce.user.telephone}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-[200px] h-[50px] text-white font-mono text-[20px] lg:text-[20px] bg-[#3FABAF] hover:bg-[#124693] focus:outline-none  font-medium   text-center rounded-[10px]"
            >
              Envoyer message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Annonce;
