import React, { useEffect, createRef } from "react";
import CustomNavbarSuperior from "./components/CustomNavbarSuperior";
import CustomNavbar from "./components/CustomNavbar";
import MarvelView from "./components/MarvelView";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const comicsRef = createRef();
  const moviesRef = createRef();
  const charactersRef = createRef();

  useEffect(() => {
    AOS.init({
      disable: false,
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <CustomNavbarSuperior />
      <CustomNavbar
        comicsRef={comicsRef}
        moviesRef={moviesRef}
        charactersRef={charactersRef}
      />
      <MarvelView />
      <Section
        ref={comicsRef}
        id="comics"
        data-aos="fade-right"
        title="Comics"
        cards={[
          {
            image: `${process.env.PUBLIC_URL}/images/comic1.jpeg`,
            title: "Spiderman",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/comic2.jpeg`,
            title: "X-Men",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/comic3.jpeg`,
            title: "DareDevil",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/comic4.jpeg`,
            title: "Hulk",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Section
        ref={moviesRef}
        id="movies"
        data-aos="fade-right"
        title="Movies"
        cards={[
          {
            image: `${process.env.PUBLIC_URL}/images/thor.jpeg`,
            title: "Movie 1",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/avengers.jpeg`,
            title: "Movie 2",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/ironman.jpeg`,
            title: "Movie 3",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/capamerica.jpeg`,
            title: "Movie 4",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Section
        ref={charactersRef}
        id="characters"
        data-aos="fade-right"
        title="Characters"
        cards={[
          {
            image: `${process.env.PUBLIC_URL}/images/spiderman.jpeg`,
            title: "Character 1",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/xmen.jpeg`,
            title: "Character 2",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/daredevil.jpeg`,
            title: "Character 3",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            image: `${process.env.PUBLIC_URL}/images/hulk.jpeg`,
            title: "Character 4",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default App;
