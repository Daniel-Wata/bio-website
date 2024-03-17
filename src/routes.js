import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./componentes/PostList";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import posts from 'json/posts.json'
import ScrollToTop from "componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />


      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<PostList posts={posts}/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
        <Route path="posts/:id" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
