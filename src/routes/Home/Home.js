import { useEffect, useState } from "react";
import S from "./Home.module.css";
import Character from "../../components/Character";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [marvels, setMarvels] = useState([]);
  const [footerInfo, setFooterInfo] = useState("");

  const getMarvels = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();

    console.log(json.data.results);
    setMarvels(json.data.results);
    setFooterInfo(json.attributionText);
    setLoading(false);
  };

  useEffect(() => {
    getMarvels();
  }, []);

  return (
    <>
      <main className="main-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <section>
              <h1 className={S.main_title}>Marvel Characters</h1>
              <article className={S.marvel_container}>
                {marvels.map((marvel) => {
                  return (
                    <>
                      <Character
                        key={marvel.id}
                        characterId={marvel.id}
                        name={marvel.name}
                        imgURL={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
                      />
                    </>
                  );
                })}
              </article>
            </section>
          </>
        )}
      </main>
      <footer className="footer-text">{footerInfo}</footer>
    </>
  );
}
