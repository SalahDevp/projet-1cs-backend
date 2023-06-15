import React from "react";
import maison from "../../assets/authen/maison.svg";
import mapin from "../../assets/authen/map-pin.svg";
import wilayas from "../../utils/wilayas.json";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";

const Card = ({ annonce }) => {
  const navigate = useNavigate();
  const image = annonce.photos[0]?.image;
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate("/annonce/" + annonce.id)}
    >
      <div
        style={{
          backgroundImage: `url(${image ? config.serverUrl + image : maison})`,
        }}
        className="relative bg-no-repeat bg-cover 
           inline-block h-[350px] w-[350px] rounded-md"
      >
        <div className="bg-bright flex flex-col justify-between rounded-md h-32 absolute bottom-0 w-full">
          <div
            className="mx-3 mt-3 text-another-orange text-2xl font-bold
             flex  justify-between"
          >
            <h2 className="text-2xl max-w-[60%] font-bold">{`${annonce.categorie} ${annonce.type}`}</h2>
            <h3 className="py-1 text-base font-medium">
              {annonce.prix + " DA"}
            </h3>
          </div>
          <div className="flex ml-3 mb-4">
            <img src={mapin} alt="Location-img" />
            <h3 className="text-base font-normal">{`${annonce.commune} ${
              wilayas[annonce.wilaya - 1]
            }`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
