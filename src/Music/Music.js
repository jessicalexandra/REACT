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
                <h1>Estan las listas las canciones</h1>
                {
                canciones.tracks.map(function(cancion){
                    return(
                        
                        <>
                        <h5>{cancion.name}</h5>
                        <audio controls="controls" src={cancion.preview_url}></audio>
                        {/* <p>{cancion.album.images[0] }</p> */}
                        </>
                    )

                })
                  

                }
                </>
            )
        }



      

       
    
   
    
}