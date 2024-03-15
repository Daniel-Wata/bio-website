import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css';
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Eu sou o Wata
            </h3>

            <img src={fotoSobreMim}
            alt="Foto do fulano sorrindo"
            className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
                Olá, eu me chamo Daniel Watanabe, mas todo mundo me chama de Wata. Atualmente sou um engenheiro de dados mas isso é só o que eu faço, vamos falar de quem eu sou
            </p>

            <p className={styles.paragrafo}>
                Sou alguém que gosta de aprender coisas novas, expandir seus conhecimentos e saber de tudo um pouco. Isso me fez muito generalista mas ao mesmo tempo me fez cursar duas graduações, uma de biologicas e outra de exatas e por fim estudar e trabalhar programação. E mesmo hoje estando na área de programação, vi de tudo um pouco, decidi me especializar em dados mas ainda tenho um pé que não quer sair do desenvolvimento de aplicações.
            </p>

            <p className={styles.paragrafo}>
                Meu grande sonho é criar uma empresa do ZERO com um assunto que eu goste, com um fim que eu me identifique e de alguma forma ajudar pessoas com essa empresa, sem perder de vista a parte de negócios.
            </p>


           
        </PostModelo>
    )
}