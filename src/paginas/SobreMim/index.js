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
                Gosto de coisas variadas, pratiquei vários esportes como futebol americano, circo, escalada e hoje sou atleta de cheerleading. Sou apaixonado por animais, principalmente cachorros e tenho uma pastora alemã chamada Maine. Também adoro jogar videogame, principalmente se for com amigos e de preferência em jogos para se perder amizade.
            </p>

            <p className={styles.paragrafo}>
                Sou alguém que gosta de aprender coisas novas, expandir seus conhecimentos e saber de tudo um pouco. Isso me fez muito generalista mas ao mesmo tempo me fez cursar duas graduações, uma de biologicas e outra de exatas e por fim estudar e trabalhar programação. E mesmo hoje estando na área de programação, vi de tudo um pouco, decidi me especializar em dados mas ainda tenho um pé que não quer sair do desenvolvimento.
            </p>

            <p className={styles.paragrafo}>
                Me formei em química na USP e em Educação Física na FMU e as duas graduações traduzem bem esses meus dois lados, um mais nerdola que não quer sair do quarto e outro mais atlético e sociável que quer praticar esportes e interagir com todo mundo.
            </p>

            <p className={styles.paragrafo}>
                Terminei na programação mas não foi de paraquedas. Na química fiz iniciação científica em química computacional e na educação física me voltei bastante à parte de alta performance. Em ambos vi um pouco de programação e análise de dados. Eventualmente percebi que o que eu gostava era de estudar e analisar, entender padrões, desenvolver teorias... E aqui estamos, pós toda essa jornada de auto conhecimento que está longe de acabar. Estudando front-end porque queria fazer um projetinho
            </p>


           
        </PostModelo>
    )
}