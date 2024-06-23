import { useEffect, useState } from "react";
import { S } from "./Home.modules.css";

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

    console.log(json);
    setMarvels(json.data.results);
    setFooterInfo(json.attributionText);
    setLoading(false);
  };

  useEffect(() => {
    getMarvels();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <section>
            <h1 className={S.main_title}>Marvel Characters</h1>
          </section>
          <footer>{footerInfo}</footer>
        </>
      )}
    </>
  );
}
