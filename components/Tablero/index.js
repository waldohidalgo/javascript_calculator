import styles from "./styles.module.scss";
import BotonCalculadora from "../BotonCalculadora";
import { FaDivide, FaMinus, FaEquals, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaDeleteLeft } from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io5";
import Display from "../Display";
import Logo from "../Logo";

export default function Tablero(props) {
  return (
    <div className={styles.wrapper_contenedor}>
      <Logo tipo="logo_inner_calculadora_top_right" />
      <Logo tipo="logo_inner_calculadora_bottom_left" />
      <h1 className={styles.titulo}>
        <div className={styles["logo-javascript"]}>
          <span>
            <IoLogoJavascript />
          </span>
        </div>
        Calculator
      </h1>
      <div className={styles.contenedor_display}>
        <Display tipo="display_operaciones" data={props.operaciones} />
        <Display tipo="display_ingreso" id="display" data={props.input} />
      </div>
      <div className={styles.contenedor_calculadora}>
        <BotonCalculadora
          tipo="clear"
          id="clear"
          handleInput={props.handleInput}
        >
          C
        </BotonCalculadora>
        <BotonCalculadora
          tipo="delete"
          id="delete"
          handleInput={props.handleInput}
        >
          <FaDeleteLeft />
        </BotonCalculadora>
        <BotonCalculadora
          tipo="operador"
          id="percent"
          handleInput={props.handleInput}
        >
          %
        </BotonCalculadora>
        <BotonCalculadora
          tipo="operador"
          id="divide"
          handleInput={props.handleInput}
        >
          <FaDivide />
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="seven"
          handleInput={props.handleInput}
        >
          7
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="eight"
          handleInput={props.handleInput}
        >
          8
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="nine"
          handleInput={props.handleInput}
        >
          9
        </BotonCalculadora>
        <BotonCalculadora
          tipo="operador"
          id="multiply"
          handleInput={props.handleInput}
        >
          <ImCross />
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="four"
          handleInput={props.handleInput}
        >
          4
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="five"
          handleInput={props.handleInput}
        >
          5
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="six"
          handleInput={props.handleInput}
        >
          6
        </BotonCalculadora>
        <BotonCalculadora
          tipo="operador"
          id="subtract"
          handleInput={props.handleInput}
        >
          <FaMinus />
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="one"
          handleInput={props.handleInput}
        >
          1
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="two"
          handleInput={props.handleInput}
        >
          2
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="three"
          handleInput={props.handleInput}
        >
          3
        </BotonCalculadora>
        <BotonCalculadora
          tipo="operador"
          id="add"
          handleInput={props.handleInput}
        >
          <FaPlus />
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="zero"
          handleInput={props.handleInput}
        >
          0
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="doublezero"
          handleInput={props.handleInput}
        >
          00
        </BotonCalculadora>
        <BotonCalculadora
          tipo="numero"
          id="decimal"
          handleInput={props.handleInput}
        >
          .
        </BotonCalculadora>
        <BotonCalculadora
          tipo="igualdad"
          id="equals"
          handleInput={props.handleInput}
        >
          {"="}
        </BotonCalculadora>
      </div>
    </div>
  );
}
