var lista = []
var detecor = false
function setup() {
   canvas = createCanvas(666, 666)
   background("red")
   cocos = ml5.objectDetector("cocossd", cargado)
   imagen.resize(666, 666)

}
function preload() {
   imagen = loadImage("4500d382-ca83-4c10-94e6-ceec33a1a137.png")
}
function draw() {
   image(imagen, 0, 0, 666, 666)
   if (detecor) {
      for (let ovjetos = 0; ovjetos < lista.length; ovjetos++) {


         noFill()
         stroke("black")

         rect(lista[ovjetos].x, lista[ovjetos].y, lista[ovjetos].width, lista[ovjetos].height)
         fill("yellow")

         textSize(30)
         strokeWeight(1)
         mensaje = lista[ovjetos].label + Math.round(lista[ovjetos].confidence * 100) + "%"
         text(mensaje, lista[ovjetos].x, lista[ovjetos].y,)
      }
          document.getElementById("h2O").innerHTML=lista.length
   }
}
function cargado() {
   console.log("cargado")
   cocos.detect(imagen, Respondido)
}
function Respondido(error, resultados) {
   if (!error) {
      console.log(resultados)
      detecor = true
      lista = resultados
   }

}
