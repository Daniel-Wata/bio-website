import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import Markdown from "react-markdown";
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostList from "componentes/PostList";


export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada/>
    }
    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
      };

    const sampleSize = ([...arr], n = 1) => shuffle(arr).slice(0, n);

    const outrosPosts = sampleSize(posts.filter((post) => {return post.id !== Number(parametros.id)}),4)

    console.log(outrosPosts)

    return (
            <PaginaPadrao>
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className="post-markdown-container">
                        <Markdown>
                        {post.texto}
                        </Markdown>
                    </div>

                    <h2 className={"outros-posts"}>Você também pode gostar</h2>

                    <PostList posts={outrosPosts}></PostList>
                </PostModelo>

                
            </PaginaPadrao>
            
              
    )
}