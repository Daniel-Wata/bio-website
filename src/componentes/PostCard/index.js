import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

export default function PostCard({post}) {
    console.log(post.id)
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>       
        </Link>

    )
}