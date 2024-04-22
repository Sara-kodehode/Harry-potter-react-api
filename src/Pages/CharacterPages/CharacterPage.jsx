import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../singleitemStyle.module.css";
export default function CharacterPage() {
  const [characterData, setCharcterData] = useState();
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/characters?index=${characterId}`
      );

      setCharcterData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={style.itemPageContainer}>
      <h3 className={style.itemPageTitle}>
        Full Name: {characterData?.fullName}
      </h3>
      <h4 className={style.itemPageSubtitle}>
        Birth date: {characterData?.birthdate}
      </h4>
      <h4 className={style.itemPageSubtitle}>
        Hogwarts House: {characterData?.hogwartsHouse}
      </h4>
      <Link className={style.itemPageLink} to="/characters">
        Back to Characters
      </Link>
    </div>
  );
}
