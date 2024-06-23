import { Link } from "react-router-dom";
import S from "../routes/Home/Home.module.css";

export default function Character({ characterId, name, imgURL }) {
  return (
    <>
      <div className={S.marvel_box}>
        <h6 className={S.marvel_name}>{name}</h6>
        <Link to={`/character/${characterId}`}>
          <img className={S.marvel_img} src={imgURL} alt={name} />
        </Link>
      </div>
    </>
  );
}
