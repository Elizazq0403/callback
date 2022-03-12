//DECLARANDO LA FUNCION PRINCIPAL

function principal(nombre,callback){
    setTimeout(function(){
        //PROCESO (¿QUE HACE ESTA FUNCION?)
        console.log("hola "+nombre)
        //LLAMO A CALLBACK
        callback()
    },4000)

}

//llamando la funcion principal

principal("Elizabeth", function(){ // aqui ingreso los parametros
    console.log("como estas?, soy el callback")

})  