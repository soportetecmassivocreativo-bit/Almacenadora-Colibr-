import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.banner} id="contacto">
      <div className={styles.content}>
        <h2 className={styles.title}>Deja de preocuparte por tu carga</h2>
        <p className={styles.text}>
          En Almacenadora Colibrí, nuestro compromiso es tu tranquilidad: vigilancia constante y almacenamiento seguro, para que tu mercancía llegue a ti sin contratiempos. ¡Descubre la diferencia de un servicio que cuida lo tuyo como si fuera nuestro! Contáctanos.
        </p>
      </div>
    </section>
  );
}
