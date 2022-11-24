
export async function serviciocanciones(){

    const URI="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us"
    const TOKEN="Bearer BQD7aUytV9E8gtOMvV0GaPrJoWJChrFMYFSk0sLtUcDS-K31-rePZOKTdL8oX2Ag1y2ITcPPdMBnqS9Tf0jhT5gAUeo9SuJ-LBTOFhZdBCLALb96CGIjySpbcMJhrwzfjyWWmYKP3uzT9QeL3cRFXPn21zCsZ7YE-fQ9ay0GLP_qbjF6ejXnphu-Kr3tin98hww"
    const PETICION={
        method :"GET",
        headers :{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones

}