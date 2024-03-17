import styles from './PostList.module.css';
import PostCard from "componentes/PostCard";

export default function PostList({ posts }) {
    return (
        <main>
            <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
            </ul>

            
        </main>
        
    )
}