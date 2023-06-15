import React, { useEffect, useState } from "react";
import image1 from "../assets/home/img1.jpg";
import NavBar from "../components/NavBar3";
import Footer from "../components/Footer";
import { Input } from "@material-tailwind/react";
import Card from "../components/authentifiedhome/Card";
import { useInView } from "react-intersection-observer";
import wilayas from "../utils/wilayas.json";
import communes from "../utils/communes.json";
import { getAllAnnonces } from "../utils/axios/annonces";
import useLoadAnnonces from "../utils/customHooks/useLoadAnnonces";
import useCheckAuthentication from "../utils/customHooks/useCheckAuthentication";

function AuthentifiedHome() {
  //filters
  const [type, setType] = useState(undefined);
  const [wilaya, setWilaya] = useState(undefined);
  const [commune, setCommune] = useState(undefined);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  //loading
  const { ref: loaderRef, inView: loaderVisible } = useInView();
  //anonces
  const [annonceIds, setAnnonceIds] = useState([]);
  const [loadedAI, setLoadedAI] = useState([]);

  const { setAnnonceNum } = useLoadAnnonces(
    loaderVisible,
    annonceIds,
    loadedAI,
    setLoadedAI
  );
  const handleSearch = async () => {
    const ids = await getAllAnnonces(
      type,
      wilaya,
      commune,
      search,
      startDate,
      endDate
    );
    //clear previous AIs to load new ones
    setLoadedAI([]);
    setAnnonceNum(0);
    setAnnonceIds(ids);
  };

  useCheckAuthentication();

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <NavBar />
      <div
        className="bg-gradient-to-b from-darkBlue-200 via-darkBlue-300 
      to-darkBlue-100 w-full h-full"
      >
        <div className="relative w-full h-[900px]">
          <img
            src={image1}
            alt="Home image1"
            className="h-5/6 w-full object-cover curved shadow-lg shadow-darkBlue-100"
          />

          <div
            className=" absolute top-32 left-1/2 lg:w-[900px] md:w-[700px] -translate-x-1/2 md:top-72 
             py-2 md:py-5 grid grid-flow-row gap-1
             lg:grid-cols-3 bg-modified-white rounded-xl"
          >
            <div className="w-64 mx-auto mt-2 md:mt-0 mb-0">
              <label htmlFor="1" className="selection md:ml-11">
                Type d'immobilier
              </label>
              <select
                className="focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400"
                id="1"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value={undefined}> </option>
                <option value="Terrain">Terrain</option>
                <option value="Terrain Agricole">Terrain Agricole</option>
                <option value="Appartement">Appartement</option>
                <option value="Maison">Maison</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>

            <div className="w-64 mx-auto my-0">
              <label htmlFor="2" className="selection">
                Wilaya
              </label>
              <select
                id="2"
                className="focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400"
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
              >
                <option value={undefined}>{"  "}</option>
                {wilayas.map((wilaya, ind) => (
                  <option key={wilaya} value={(ind + 1).toString()}>
                    {wilaya}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-64 mx-auto my-0">
              <label htmlFor="3" className="selection">
                Commune
              </label>

              <select
                id="3"
                className="focus:outline-none bg-transparent border border-blue-gray-200 focus:border-blue-gray-500 focus:text-blue-gray-500 rounded-lg block w-full mb-2 text-md p-2 font-light text-blue-gray-400"
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
              >
                <option value={undefined}>{"  "}</option>
                {wilaya &&
                  communes[wilaya - 1].map((cm, ind) => (
                    <option key={cm} index={ind} value={cm}>
                      {cm}
                    </option>
                  ))}
              </select>
            </div>

            <div className="md:py-5 md:pr-5">
              <label htmlFor="Du" className="selection">
                Date de publication
              </label>
            </div>

            <div className="w-64 mb-2 md:mb-0 md:py-3 mx-auto my-0">
              <Input
                type="date"
                label="Du"
                id="Du"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="w-64 md:py-3 mx-auto my-0">
              <Input
                type="date"
                label="Jusqu'a"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="Du" className="selection ">
                Text spécifié
              </label>
            </div>

            <div className="w-64 mx-11  ">
              <Input
                type="text"
                label="Texte"
                color="blue-gray"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div
              className="mx-auto mt-4 mb-3 md:pt-2 md:mx-auto
             md:mt-4  md:my-0 md:col-span-2 lg:col-span-3"
            >
              <button
                type="button"
                onClick={handleSearch}
                className="text-modified-white font-mono text-sm 
                lg:text-lg bg-mod-blue rounded-md font-medium px-5 py-2.5
                text-center"
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>
        <div className="grid w-full gap-y-4 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {loadedAI.map((annonce, ind) => (
            <Card key={ind} annonce={annonce} />
          ))}
          <span ref={loaderRef}></span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthentifiedHome;
