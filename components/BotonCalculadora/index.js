import styles from "./styles.module.scss";

export default function BotonCalculadora(props) {
  return (
    <button
      className={styles[props.tipo]}
      id={props.id}
      onClick={props.handleInput}
    >
      <div className={styles.content}>{props.children}</div>
    </button>
  );
}
