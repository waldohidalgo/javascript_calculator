import Image from "next/image";
import styles from "./styles.module.scss";

export default function Logo({ tipo }) {
  return (
    <div className={`${styles[tipo]}`}>
      <a
        href="https://linktr.ee/waldohidalgo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          priority={true}
          src="/images/logo_waldo.png"
          alt="logo waldo hidalgo"
          layout="responsive"
          width={820}
          height={218}
        />
      </a>
    </div>
  );
}
