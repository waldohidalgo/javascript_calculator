import Head from "next/head";

import styles from "../styles/Home.module.scss";
import Tablero from "../components/Tablero";

import React from "react";

import Footer from "../components/Footer";

const maximoCaracteres = 15;
import { flushSync } from "react-dom";

import { initialStateInput, inputReducer } from "../reducer/reducerDisplay.js";
import { initialStateLimite, limiteReducer } from "../reducer/reducerLimite.js";

export default function Home(props) {
  const [input, dispatch] = React.useReducer(inputReducer, initialStateInput);
  const [limite, dispatchLimite] = React.useReducer(
    limiteReducer,
    initialStateLimite,
  );
  React.useEffect(() => {
    if (limite.limite == maximoCaracteres) {
      alert(
        `⚠️La calculadora solo acepta hasta ${maximoCaracteres} caracteres en el display`,
      );
    }
  }, [limite.limite, limite.change]);

  function handleInput(e) {
    const id = e.target.id;

    if (id === "clear") {
      dispatch({ type: "CLEAR" });
      return;
    }
    if (id == "add" || id == "subtract" || id == "multiply" || id == "divide") {
      //
      dispatch({ type: "OPERATION", payload: id });
      return;
    }
    if (
      input.input.length < maximoCaracteres &&
      (id == "one" ||
        id == "two" ||
        id == "three" ||
        id == "four" ||
        id == "five" ||
        id == "six" ||
        id == "seven" ||
        id == "eight" ||
        id == "nine" ||
        id == "zero" ||
        id == "decimal")
    ) {
      dispatch({ type: "INPUT", payload: id });
      return;
    }
    if (id === "equals") {
      dispatch({ type: "CALCULAR" });
      return;
    }
    if (id === "doublezero" && input.input.length < maximoCaracteres) {
      dispatch({ type: "DOUBLEZERO" });
      return;
    }
    if (id === "percent") {
      dispatch({ type: "PERCENT" });
      return;
    }
    if (id === "delete") {
      dispatch({ type: "DELETE" });
      return;
    }

    if (
      ["add", "subtract", "multiply", "divide"].includes(id) &&
      input.input.length == maximoCaracteres
    ) {
      dispatch({ type: "INPUT", payload: id });
      return;
    }
    if (input.input.length == maximoCaracteres) {
      dispatchLimite({ type: "LIMIT", payload: maximoCaracteres });
      return;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>JS Calculator</title>
        <meta name="description" content="Waldo's Calculator" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tablero
          input={input.input}
          operaciones={input.operaciones}
          handleInput={handleInput}
        />
      </main>
      <Footer />
    </div>
  );
}
