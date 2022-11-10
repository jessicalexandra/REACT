import "./Footer.css";
export function Footer() {

    return (
        <>
        <footer className="container-fluid g-0 bg-footer mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cinejs-ee0c2.appspot.com/o/grupo%20musical%2FFooter.jpg?alt=media&token=3899ace0-a282-45db-bffc-693e6df20e6d" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-md-6 text-white align-self-center text-center">
                        <h2>Aerosmith</h2>
                        
                    <ul>
                        <i className="me-3 fa-brands fa-instagram "></i>
                        <i className="me-3 fa-brands fa-facebook"></i>
                        <i className="me-3 fa-brands fa-twitter"></i>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )

}