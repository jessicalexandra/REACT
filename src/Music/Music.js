import { serviciocanciones } from "../services/serviciocanciones"
//necesito usar el hooks para almacenar la respuesta del servicio de forma global
import { useState,useEffect } from "react"

export function Music(){


        // creando mi primer usestate
        const [canciones,setCanciones]= useState(null)

        const [estamoCargando,setestamosCargando]=useState(true)
        // usando mi primer useffect
        useEffect(function(){
            serviciocanciones()
            .then(function(respuesta){
                 setCanciones(respuesta)
                 setestamosCargando(false)
             
            })
            
        },[])

        

        if(estamoCargando==true){
            return(
                <>
                <h1>Estamos cargando.....</h1>
                </>
            )

        }
        else{
            return(
                <> 
               
                <div className="container"> 
                <h1 className="text-center">Estan las listas las canciones</h1>
                <div className="row">
                {
                canciones.tracks.map(function(cancion){
                    return(
                        
                        <div className="col-12 col-md-3 m-3">
                        
                        
                        <img src={cancion.album.images[1].url } />
                        <audio controls="controls" src={cancion.preview_url}></audio>
                        <h5>{cancion.name}</h5>
                        </div>
                    )

                })
                  

                }

                </div>

                </div>
             
                </>
            )
        }



      

       
    
   
    
}