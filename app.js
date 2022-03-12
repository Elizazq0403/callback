function iniciar(){ // Aqui declaro las funciones
    console.log("estoy iniciando")
}

function procesar(){
    setTimeout(function(){
        console.log("estoy procesando")
    },5000)
    
}

function terminar(){
    console.log("estoy terminando")
}

// llamado de funciones

iniciar()
procesar()
terminar()



