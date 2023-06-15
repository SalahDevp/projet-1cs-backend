import { useCallback, useEffect, useState } from "react";
import { getAnnonceById } from "../axios/annonces";

export default function useLoadAnnonces(
  loaderVisible,
  annonceIds,
  loadedAI,
  setLoadedAI
) {
  const [annonceNum, setAnnonceNum] = useState(0); //num of loaded annonces
  const [loading, setLoading] = useState(false); //prevent other annonces from being loaded while loading

  const fetchAnnonces = useCallback(async () => {
    if (annonceNum >= annonceIds.length) return; //all annonces are loaded
    setLoading(true);
    const annonce = await getAnnonceById(annonceIds[annonceNum]);
    setAnnonceNum((prv) => prv + 1);
    setLoadedAI((prv) => [...prv, annonce]);
    setLoading(false);
  }, [annonceNum, annonceIds, setLoadedAI]);

  useEffect(() => {
    if (loaderVisible && !loading) fetchAnnonces();
  }, [loaderVisible, fetchAnnonces, loading]);

  return { setAnnonceNum };
}
