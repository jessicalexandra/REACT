
export async function serviciocanciones(){

    const URI="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us"
    const TOKEN="Bearer BQBynnTTsVco9en8hVMcJQ19gK1jkbeuUU3L-j_r8h_WBwQMOuobz43xpGQncpxzfCL7dbhna0pbxEla53N3W_NSPGx5boTTGd5KDOBHNmfTiDVxQ-EQQwP9pOf4ceWxRZ5z_qnEA1r2BDLJ5mrXmoXFm0ejxg3vsSxZ62nshtADs8iRJys-dDuJ_DfJWKrXXTY"
    const PETICION={
        method :"GET",
        headers :{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones

}