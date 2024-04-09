import { conversionIDtoChar, calcularOperacion } from "../utils";

export const initialStateInput = {
  input: "0",
  operaciones: "",
};

export const inputReducer = (state = initialStateInput, action) => {
  switch (action.type) {
    case "INPUT":
      return filtraInput(state, conversionIDtoChar[action.payload]);
    case "CLEAR":
      return { input: "0", operaciones: "" };
    case "DELETE":
      return deleteCaracter(state);
    case "OPERATION":
      return doOperation(state, conversionIDtoChar[action.payload]);
    case "CALCULAR":
      return calcularResultado(state);
    case "DOUBLEZERO":
      return addDoubleZero(state);
    case "PERCENT":
      return addPercent(state);
    default:
      return state;
  }
};

function deleteCaracter(state) {
  const regExGetLastNumber = /([0-9\.]+)$|(\-|\+|⨯|\/)$/;

  const objState = {};
  try {
    objState.input = state.operaciones
      .slice(0, -1)
      .match(regExGetLastNumber)[0];
    objState.operaciones = state.operaciones.slice(0, -1);
  } catch (err) {
    objState.input = "0";
    objState.operaciones = "";
  }
  return objState;
}
function calcularResultado(state) {
  if (state.operaciones === "") {
    return state;
  }
  let resultado = "";
  try {
    resultado = calcularOperacion(state.operaciones);
  } catch (err) {
    resultado = "NAN⚠️ ";
  }
  if (/=/.test(state.operaciones)) {
    return state;
  }
  return {
    input: resultado,
    operaciones: state.operaciones + "=" + resultado,
  };
}

function addDoubleZero(state) {
  const regexCheckNumber = /^[0-9\.]+$/;

  if (state.input === "0") {
    return state;
  }
  if (regexCheckNumber.test(state.input)) {
    return { input: state.input + "00", operaciones: state.operaciones + "00" };
  }
  return state;
}

function addPercent(state) {
  const regexCheckNumber = /^[0-9\.]+$/;
  if (state.input === "0") {
    return state;
  }
  if (regexCheckNumber.test(state.input)) {
    const calculadoPorcentaje = calcularOperacion(`${state.input} / 100`);
    return {
      input: calculadoPorcentaje,
      operaciones:
        state.operaciones.slice(0, -state.input.length) + calculadoPorcentaje,
    };
  }
  return state;
}

function doOperation(state, inputChar) {
  const regExCheckInput = /[\+\-×\/]/;
  const regExExceptMinus = /[\+×\/]/;
  const regExLastTwoOperators = /[\+\-\×\/]{2}$/;
  if (/=/.test(state.operaciones)) {
    return { input: inputChar, operaciones: state.input + inputChar };
  }

  if (state.input === "0" && state.operaciones === "") {
    if (inputChar === "+" || inputChar === "-") {
      return { input: inputChar, operaciones: inputChar };
    }
    return state;
  }

  if (regExLastTwoOperators.test(state.operaciones)) {
    if (inputChar === "-") {
      return state;
    }
    return {
      input: inputChar,
      operaciones: state.operaciones.slice(0, -2) + inputChar,
    };
  }

  if (regExCheckInput.test(state.input) && regExExceptMinus.test(inputChar)) {
    return {
      input: inputChar,
      operaciones: state.operaciones.slice(0, -1) + inputChar,
    };
  }

  return { input: inputChar, operaciones: state.operaciones + inputChar };
}

function filtraInput(state, inputChar) {
  const regexCheckNumber = /^[0-9\.]+$/;
  const regexCheckDot = /\./;
  if (/=/.test(state.operaciones)) {
    return { input: inputChar, operaciones: inputChar };
  }
  if (state.input === "0") {
    if (inputChar === ".") {
      return {
        input: "0.",
        operaciones: state.operaciones.slice(0, -1) + "0" + inputChar,
      };
    }

    if (inputChar !== "0") {
      return {
        input: inputChar,
        operaciones: state.operaciones.slice(0, -1) + inputChar,
      };
    }

    if (inputChar === "0" && state.operaciones === "") {
      return { input: "0", operaciones: "0" };
    }
    return state;
  }

  if (regexCheckDot.test(state.input) && inputChar === ".") {
    return state;
  }
  if (state.input === "0.") {
    return {
      input: state.input + inputChar,
      operaciones: state.operaciones + inputChar,
    };
  }
  if (regexCheckNumber.test(state.input)) {
    return {
      input: state.input + inputChar,
      operaciones: state.operaciones + inputChar,
    };
  }
  if (inputChar === ".") {
    return {
      input: "0" + inputChar,
      operaciones: state.operaciones + "0" + inputChar,
    };
  }
  return { input: inputChar, operaciones: state.operaciones + inputChar };
}
