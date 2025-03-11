import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Página Inicial</h1>
      <div className={ styles.xyz } style={{ background: '#f00' }}>DIV Qualquer</div>

      <div className="xyz">Segunda DIV qualquer</div>
    </>
  );
}