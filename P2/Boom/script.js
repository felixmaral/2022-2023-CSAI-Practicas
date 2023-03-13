
// Cronometro

    const cronoElements = {
        display: document.getElementById("displayCrono"),
        boton_start: document.getElementById("start-btn"),
        boton_stop: document.getElementById("stop-btn"),
        boton_reset: document.getElementById("reset-btn")
    }

    //-- Clase cronómetro
    class Crono {

        //-- Constructor. Hay que indicar el 
        //-- display donde mostrar el cronómetro
        constructor(display) {
            this.display = display;

            //-- Tiempo
            this.cent = 0, //-- Centésimas
            this.seg = 0,  //-- Segundos
            this.min = 0,  //-- Minutos
            this.timer = 0;  //-- Temporizador asociado
        }

        //-- Método que se ejecuta cada centésima
        tic() {
            //-- Incrementar en una centesima
            this.cent += 1;

            //-- 100 centésimas hacen 1 segundo
            if (this.cent == 100) {
            this.seg += 1;
            this.cent = 0;
            }

            //-- 60 segundos hacen un minuto
            if (this.seg == 60) {
            this.min = 1;
            this.seg = 0;
            }

            //-- Mostrar el valor actual
            this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
        }

        //-- Arrancar el cronómetro
        start() {
        if (!this.timer) {
            //-- Lanzar el temporizador para que llame 
            //-- al método tic cada 10ms (una centésima)
            this.timer = setInterval( () => {
                this.tic();
            }, 10);
            }
        }

        //-- Parar el cronómetro
        stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }

        //-- Reset del cronómetro
        reset() {
            this.cent = 0;
            this.seg = 0;
            this.min = 0;

            this.display.innerHTML = "00:00:00";
        }
    }

    timer = new Crono(cronoElements.display);

    cronoElements.boton_start.onclick = () => {
        timer.start();
        console.log("Iniciando Crono")
    }

    cronoElements.boton_stop.onclick = () => {
        timer.stop();
        console.log("Parando Crono")
    }
    cronoElements.boton_reset.onclick = () => {
        timer.reset();
        console.log("Reseteando crono")
    }


// 



  



  