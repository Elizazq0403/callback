//declaro la funcion principal

function crearUsuario(nombre,edad, callback){ //parametro son las entradas, parametro callback la puedo llamar como quiera
    setTimeout(function(){
        // proceso principal
        let usuario ={
            nombreUsuario:nombre,
            edadUsuario:edad, 
        }
        //llamado al callback
        callback(usuario)
    },8000)
}    


//llamo la funcion principal
    crearUsuario("james",30, function(usuario){ // esto es una funcion-> function(){}
        if(usuario.edadUsuario>=18)
            console.log("bienvenido")
        else{
            console.log("upss no puedes entrar")
        }    
    }) 