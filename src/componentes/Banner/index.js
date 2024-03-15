import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png' 
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindo ao meu blog pessoal, espero que aqui você encontre textos desinteressantes e muita coisa inútil
                </p>

            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Fotin"
                />
            </div>
        </div>
    )
}