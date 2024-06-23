import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import S from "./Details.module.css";
import { Link } from "react-router-dom";

export default function Details() {
  const { characterId } = useParams();
  const [loading, setLoading] = useState(true);
  const [marvel, setMarvel] = useState([]);
  const [footerInfo, setFooterInfo] = useState("");

  const getMarvel = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${characterId}`
      )
    ).json();

    console.log(json);
    setMarvel(json.data.results);
    setFooterInfo(json.attributionText);
    setLoading(false);
  };

  useEffect(() => {
    getMarvel();
  }, []);

  return (
    <>
      <main className="main-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <nav className={S.top_menu}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>

            <section className={S.character_container}>
              <h6 className={S.marvel_name}>{marvel[0].name}</h6>
              <img
                className={S.marvel_img}
                src={`${marvel[0].thumbnail.path}.${marvel[0].thumbnail.extension}`}
                alt={marvel[0].name}
              />
              <p className={S.marvel_detail_text}>
                {marvel[0].description
                  ? marvel[0].description
                  : "No description!"}
              </p>
            </section>
          </>
        )}
      </main>
      <footer className="footer-text">{footerInfo}</footer>
    </>
  );
}
