import './Home.css'
export function Home(){
    
    return(
        <>

        <img src="https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2Fbanner.jpg?alt=media&token=80c0836c-1f22-439c-a48b-58ef70917873" alt="banner" className="w-100 img-fluid"/>

        <section>
            <div className ="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>AEROSMITH</h1>
                        <p>
                        Aerosmith es una banda estadounidense de rock f​ormada en Boston en 1970. Sus miembros son: Steven Tyler (cantante), Joe Perry (guitarra), Tom Hamilton (bajo), Joey Kramer (batería) y Brad Whitford (guitarra). Conocidos también como "Los chicos malos de Boston" o "Toxic Twins" apelativo por el que se conoce a sus dos líderes por su histórica adicción a las drogas​ su sonido, agresivamente rítmico, tiene raíces en el blues, y contribuyó a establecer el sonido del hard rock y pop rock entre los años 1981 y 1990.
                        </p>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                <div className="col-12 col-md-8">
                      <img src="https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2Fen%20concierto.jpg?alt=media&token=fcbc118a-d36a-483a-ac36-77123e4b34e8" className="w-100 img-fluid" alt="live"/> 
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                       <p>La banda firmó contrato con Columbia Records en 1972 y lanzó un serie de álbumes que han sido certificados multi-platino, comenzando con su álbum debut homónimo. En 1975, la banda se consolidó con el álbum Toys in the Attic, y con su siguiente álbum Rocks de 1976, cimentaría su estatus de super estrellas de hard rock.9​ Para finales de la década de los 70, serían una de las bandas más populares de hard rock en todo el mundo, consiguiendo cosechar un gran número de seguidores, a los que a menudo se les llama "Blue Army".</p>
                    </div>

                </div>

            </div>
        </section>
        </>
    )
}