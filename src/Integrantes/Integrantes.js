import './Integrantes.css';

export function Integrantes(){

    let integrantes=[
        {
            nombre:"Steven Tyler ",
            instrumento:"cantante",
            Edad:"74 años",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2Fimages.jpg?alt=media&token=065ad6ef-2634-47c2-bf29-39108ceb5018"
        },
        {  nombre:"Joe Perry",
        instrumento:"guitarra",
        Edad:"72 años",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2Fdescarga.jpg?alt=media&token=a1cf9fc3-a659-44d7-a5b3-9151c314b545"},
        {  nombre:"Tom Hamilton",
        instrumento:"bajo",
        Edad:"70 años",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2FAerosmith_Tom_Hamilton.jpg?alt=media&token=adadb296-6c1a-4c1b-943d-46ece6404251"},
        {  nombre:" Brad Whitford",
        instrumento:"guitarra",
        Edad:"70años",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2Fbrad-whitford-aerosmith.jpg?alt=media&token=bbe34ed7-d45a-4882-b5e0-3b1ba77f214f"}

    ]


    return(
       <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">
            {
                integrantes.map(function(integrante){
                    return(
                        <>
                        <div className="col mt-3 py-5 px-3 bg-dark">
                            <div className="card h-100">
                                <img src={integrante.fotografia}  alt="" className="img-fluid w-100 img-size" />
                               <div className='bodycss text-center pb-5'>
                               <h4 className='fw-bold pt-3 pb-2'>{integrante.nombre}</h4>
                                <h5>Edad: {integrante.Edad}</h5>
                                <h5>Rol: {integrante.instrumento}</h5>
                               </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
       </div>
    )
}