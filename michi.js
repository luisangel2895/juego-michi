
const fila1 = [{marca : 'v', posicion: 1}, {marca : 'v', posicion: 2}, {marca : 'v', posicion: 3}]
const fila2 = [{marca : 'v', posicion: 4}, {marca : 'v', posicion: 5}, {marca : 'v', posicion: 6}]
const fila3 = [{marca : 'v', posicion: 7}, {marca : 'v', posicion: 8}, {marca : 'v', posicion: 9}]

    function listenerClick() {
        const celda1 = document.getElementById("1");
        const celda2 = document.getElementById("2");
        const celda3 = document.getElementById("3");
        const celda4 = document.getElementById("4");
        const celda5 = document.getElementById("5");
        const celda6 = document.getElementById("6");
        const celda7 = document.getElementById("7");
        const celda8 = document.getElementById("8");
        const celda9 = document.getElementById("9");

        var presionada = false

            celda1.addEventListener("click", () => {
                if(fila1[0].marca == 'v'){
                    celda1.textContent = "X"
                    fila1[0] = {marca : 'x', posicion: 1}
                    presionada = true
                }
            });
    
            celda2.addEventListener("click", () => {
                if(fila1[1].marca == 'v'){
                    celda2.textContent = "X"
                    fila1[1] = {marca : 'x', posicion: 2}
                    presionada = true
                }
            });
    
            celda3.addEventListener("click", () => {
                if(fila1[2].marca == 'v'){
                    celda3.textContent = "X"
                    fila1[2] = {marca : 'x', posicion: 3}
                    presionada = true
                }
            });
    
            celda4.addEventListener("click", () => {
                if(fila2[0].marca == 'v'){
                    celda4.textContent = "X"
                    fila2[0] = {marca : 'x', posicion: 4}
                    presionada = true
                }
            });
    
            celda5.addEventListener("click", () => {
                if(fila2[1].marca == 'v'){
                    celda5.textContent = "X"
                    fila2[1] = {marca : 'x', posicion: 5}
                    presionada = true
                }
            });
    
            celda6.addEventListener("click", () => {
                if(fila2[2].marca == 'v'){
                    celda6.textContent = "X"
                    fila2[2] = {marca : 'x', posicion: 6}
                    presionada = true
                }
            });
    
            celda7.addEventListener("click", () => {
                if(fila3[0].marca == 'v'){
                    celda7.textContent = "X"
                    fila3[0] = {marca : 'x', posicion: 7}
                    presionada = true
                }
            });
    
            celda8.addEventListener("click", () => {
                if(fila3[1].marca == 'v'){
                    celda8.textContent = "X"
                    fila3[1] = {marca : 'x', posicion: 8}
                    presionada = true
                }
            });
    
            celda9.addEventListener("click", () => {
                if(fila3[2].marca == 'v'){
                    celda9.textContent = "X"
                    fila3[2] = {marca : 'x', posicion: 9}
                    presionada = true
                }
            });
        return presionada
    }

    
    function revisarCeldasVacias(){
        const celdasVacias = []
        fila1.forEach(objeto => {
            if (objeto.marca == 'v'){
                celdasVacias.push(objeto.posicion)
            }
        });
        fila2.forEach(objeto => {
            if (objeto.marca == 'v'){
                celdasVacias.push(objeto.posicion)
            }
        });
        fila3.forEach(objeto => {
            if (objeto.marca == 'v'){
                celdasVacias.push(objeto.posicion)
            }
        });
        return celdasVacias
    }

    function escogerCeldaPc(celdasVacias){
        totalCeldasVacias = celdasVacias.length
        min = 0
        max = totalCeldasVacias
        azar = Math.round(Math.random() * (max - min) + min)
        return celdasVacias[azar]
    }

    function pintarCeldaPc(celdaAzar){

        fila1.forEach(objeto => {
            if (objeto.posicion == celdaAzar){
                objeto.marca = 'o'
            }
        });
        fila2.forEach(objeto => {
            if (objeto.posicion == celdaAzar){
                objeto.marca = 'o'
            }
        });
        fila3.forEach(objeto => {
            if (objeto.posicion == celdaAzar){
                objeto.marca = 'o'
            }
        });

        const celdaEscogida = document.getElementById(celdaAzar);
        celdaEscogida.textContent = "O"
    }


    function turnoPc(){
        const celdasVacias =  revisarCeldasVacias()
        const celdaAzar = escogerCeldaPc(celdasVacias)
        pintarCeldaPc(celdaAzar)
    }


//document.addEventListener("DOMContentLoaded", load, false);

    function jugar(){
        turnoPc()
        document.addEventListener("DOMContentLoaded", () => {
            listenerClick()
            if(listenerClick()){
                turnoPc()
                document.addEventListener("DOMContentLoaded",() => {
                    if(listenerClick()){
                        turnoPc()
                    }
                }, false)
            }
        }, false);

    }

    jugar()








 