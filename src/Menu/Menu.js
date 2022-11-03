import { Routes, Route, Link } from "react-router-dom";
export function Menu(){

    return(
        <>
       <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <link class="navbar-brand" to="/">Navbar</link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <link class="nav-item">
                    <link class="nav-link active" aria-current="page" to="/">Home</link>
                    </link>
                    <li class="nav-item">
                    <link class="nav-link" to="/historia">Historia</link>
                    </li>
                    <li class="nav-item">
                    <link class="nav-link" to="/integrantes">Integrantes</link>
                    </li>
                
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
