import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../singleitemStyle.module.css";
export default function HousePage() {
  const [houseData, setHouseData] = useState();
  const { houseId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/houses?index=${houseId}`
      );

      setHouseData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className={style.itemPageContainer}>
      <h3 className={style.itemPageTitle}>House Name: {houseData?.house}</h3>
      <h4 className={style.itemPageSubtitle}>
        House Founder: {houseData?.founder}
      </h4>
      <h4 className={style.itemPageSubtitle}>
        House Animal: {houseData?.animal}
      </h4>
      <Link className={style.itemPageLink} to="/houses">
        Back to Houses
      </Link>
    </div>
  );
}
