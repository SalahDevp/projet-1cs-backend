import React from "react";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/home/img1.jpg";
import image2 from "../assets/home/img2.jpg";
import image3 from "../assets/home/img3.png";
import LoginBtn from "../components/home/LoginBtn";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  const { ref: loginBtnRef, inView: loginBtnVisible } = useInView();
  const { ref: homeRef, inView: homeVisible } = useInView({ threshold: 0.4 });
  const { ref: aboutRef, inView: aboutVisible } = useInView();
  const { ref: contactRef, inView: contactVisible } = useInView({
    threshold: 1,
  });

  return (
    <div>
      <NavBar
        loginBtnVisible={loginBtnVisible}
        homeVisible={homeVisible}
        aboutVisible={aboutVisible}
        contactVisible={contactVisible}
      />
      <div className="bg-gradient-to-b from-darkBlue-200 via-darkBlue-300 to-darkBlue-100 w-full h-full">
        <div className="relative w-full h-[800px]" id="home" ref={homeRef}>
          <img data-testid="bgimg"
            src={image1}
            alt="Home image1"
            className="h-5/6 w-full object-cover curved shadow-lg shadow-darkBlue-100"
          />
          <div className="absolute top-1/4 md:ml-36 ml-7">
            <p className=" font-mono md:text-5xl text-2xl font-semibold text-orange md:leading-[50px] leading-6 mb-8">
              Trouver
              <br />
              la propriété
              <br />
              la plus adéquate
            </p>
            <p className="font-sans md:text-2xl font-semibold text-white md:leading-[3rem] leading-5 mb-6">
             Parcourez une large sélection de propriétés 
              <br></br>
              et trouver le bien immobilier le plus adapté à vos besoins
              <br />
              d'une manière simple, rapide et efficace !<br />
              
            </p>
            <LoginBtn ref={loginBtnRef} />
          </div>
        </div>
        <div
          className="flex flex-col items-stretch justify-center sm:flex-row pb-8 pt-24"
          id="about"
          ref={aboutRef}
        >
          <div className="basis-1/2 pl-11">
            <p className="font-mono md:text-5xl text-3xl font-semibold text-white m-8">
              A propos du site web
            </p>
            <p className="font-mono md:text-xl text-lg font-regular leading-32 text-white m-8">
            TrouvImmo est un site web de recherche de biens immobiliers en Algerie, lancé avec un objectif simple : 
            rendre la recherche immobilière plus agréable et rapide.
            Quand vous recherchez une annonce sur TrouvImmo, le site web repère plusieurs offres
            correspondantes parmi les plus grands sites d’immobiliers de l’Algerie.
            TrouvImmo vous permet de trouver et de publier des annonces de vente, location, et échange
            d’appartements, maisons, terrain et tout ce qui est un bien immobilier.
            <br></br>
            Notre site web vous permet aussi de filtrer les annonces immobilières par critères, pour vous proposer des biens immobiliers correspondant exactement à vos besoins. 

            </p>
          </div>
          <div className="basis-1/2 p-8 max-w-md">
            <img
              src={image2}
              alt="Home image2"
              className="object-cover rounded-2xl shadow-2xl shadow-darkBlue-100"
            />
          </div>
        </div>
        <div className="min-h-[60vh] flex items-center justify-center pb-4">
          <div className="grid grid-cols-10 px-18 gap-5">
            <div className="col-span-10">
              <p className="font-mono md:text-5xl text-3xl font-semibold text-white">
                Notre équipe
              </p>
            </div>
            <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-64">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl max-h-44 h-3/4"
              />
              <p className="text-black font-mono text-xl bg-white text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4 w-full">
                ABAHRI
                <br />
                Wassim
              </p>
            </div>
            <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-64">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl max-h-44 h-3/4"
              />
              <p className="text-black font-mono text-xl bg-white text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                BELLA
                <br />
                Saadi
              </p>
            </div>
            <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-64">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl max-h-44 h-3/4"
              />
              <p className="text-black font-mono text-xl bg-white text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                OUKIL
                <br />
                Salah Eddine
              </p>
            </div>
            <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-64">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl max-h-44 h-3/4"
              />
              <p className="text-black font-mono text-xl bg-white text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                BENKHAOUA
                <br />
                Oussama
              </p>
            </div>
            <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-64">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl max-h-44 h-3/4"
              />
              <p className="text-black font-mono text-xl bg-white text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                FERHI
                <br />
                Meriem
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer ref={contactRef} />
    </div>
  );
}

export default Home;
