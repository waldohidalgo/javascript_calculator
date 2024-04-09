import { create, all } from "mathjs";

export const conversionIDtoChar = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "/",
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  doublezero: "d",
  decimal: ".",
  delete: "e",
  percent: "%",
};

export function calcularOperacion(operaciones) {
  const expresiones = operaciones.replace(/×/g, "*");
  const config = {
    number: "BigNumber",
    precision: 10,
  };
  const math = create(all, config);

  return math.format(math.evaluate(expresiones), { notation: "fixed" });
}
