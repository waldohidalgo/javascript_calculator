import styles from "./styles.module.scss";

export default function Display(props) {
  return (
    <div id={props.id} className={`${styles.input} ${styles[props.tipo]}`}>
      {props.data}
    </div>
  );
}
