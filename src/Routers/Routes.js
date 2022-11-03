import { Historia } from "../Historia/Historia";
import { Home } from "../Home/Home";
import { Routes, Route} from "react-router-dom";

import { Integrantes } from "../Integrantes/Integrantes";
import { Menu } from "../Menu/Menu";



export function Rutas(){
    return(
    
        
    <div className="Routes">
        <Menu/> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="historia" element={<Historia />} />
        <Route path="integrantes" element={<Integrantes />} />
      </Routes>
    </div>
    
    )


}