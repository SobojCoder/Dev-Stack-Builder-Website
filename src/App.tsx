import { Suspense, useState } from "react";
import Bannar from "./Components/Bannar/Bannar";
import Nav from "./Components/Nav/Nav";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesType } from "./TechnologiesType";
import Footer from "./Components/Footer/Footer";

const technologiesPromise = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json");

  console.log("Status:", res.status);
  console.log("URL:", res.url);
  console.log("Content-Type:", res.headers.get("content-type"));

  const text = await res.text();
  console.log("Response:", text);

  const data = JSON.parse(text);
  return data;
};

function App() {
  const [technologiesCount, setTechnologiesCount] = useState(0);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologiesType[]
  >([]);
  return (
    <>
      <div className="sticky top-0 z-100 bg-white">
        <Nav />
      </div>
      <Bannar />
      <Suspense fallback={<h2>Loading.........</h2>}>
        <Technologies
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
          technologiesCount={technologiesCount}
          setTechnologiesCount={setTechnologiesCount}
          technologiesPromise={technologiesPromise()}
        />
      </Suspense>
        <Footer />
    </>
  );
}

export default App;
