import { Historia } from "../Historia/Historia.js";
import { Home } from "../Home/Home.js";
import { Routes, Route} from "react-router-dom";
import { Music } from "../Music/Music.js";
import{ Footer} from "../Footer/Footer";
import { Integrantes } from "../Integrantes/Integrantes";
import { Menu } from "../Menu/Menu.js";



export function Rutas(){
    return(
    
        
    <div className="Routes">
        <Menu/> 
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="musica" element={<Music />} />
      

        </Routes>
        <Footer></Footer>
    </div>
    
    )


}