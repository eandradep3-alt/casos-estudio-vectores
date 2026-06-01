const selectZonas = document.getElementById("id-select-zonas")
const btnCargarZonas = document.getElementById("id-btn-cargar-zonas")
const btnPresentarZonas = document.getElementById("id-btn-presentar-Zonas")
const listadoZonas = document.getElementById("id-listado-Zonas")
const enviosSuperioresPromedio = document.getElementById("num-envios-superiores-promedio")
const btnEnviosSuperioresPromedio = document.getElementById("btn-envios-superiores-promedio")
const servicioCritico = document.getElementById("num-servicio-critico")
const btnServicioCritico = document.getElementById("btn-servicio-critico")
const porcentajeZonas = document.getElementById("txt-porcentaje-zonas")
const btnPorcentajeZonas = document.getElementById("btn-porcentaje-zonas")


let enviosZonas = []
const nombresZonas = ["Norte", "Sur", "Este", "Oeste", "Centro", "Noroeste", "Sureste"]

btnCargarZonas.addEventListener('click', function (e) {
  const dimension = selectZonas.value
  cargarZonas(dimension)
  console.log(enviosZonas)

})

btnPresentarZonas.addEventListener("click" , function(e){
  listadoZonas.value = PresentarZonas()
  // listadoCategorias.value = vectorVentas.join(" , ")
})

btnEnviosSuperioresPromedio.addEventListener("click", function(){
 enviosSuperioresPromedio.value = EnviosSuperioresAlPromedio ()

})

btnServicioCritico.addEventListener("click", function(e){
  servicioCritico.value = ZonasServicioCritico ()
})

btnPorcentajeZonas.addEventListener("click", function(e){
  porcentajeZonas.value = PorcentajeZonas()
})


function PresentarZonas(){
let presentarZonas = " "

    for (let i = 0; i< enviosZonas.length; i++){
     presentarZonas += nombresZonas[i] + ":" + enviosZonas[i] + "\n"
  }
  return presentarZonas
}




function cargarZonas(dimension) { 
  for (let i = 0; i < dimension; i++) { 
    const numEntero = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
    enviosZonas[i] = numEntero
  }
}
  

function CalcularTotal(){
let total = 0  

  for (let i = 0; i < enviosZonas.length; i++ ){
    total = total + enviosZonas[i]

  }
return total
}


function CalcularPromedio(){
  let total = CalcularTotal() 
const promedio = total / enviosZonas.length
return promedio
}


function EnviosSuperioresAlPromedio (){
let enviosSuperiores = 0 //contador, vamos a ir sumando a contar

  const promedio = CalcularPromedio()

  for (let i=0; i < enviosZonas.length; i++){
    if (enviosZonas[i] > promedio){
      enviosSuperiores++;
    } 
  }
  return enviosSuperiores
  }

function ZonasServicioCritico (){
let servicioCritico = 0 //contador, vamos a ir sumando a contar


  for (let i=0; i < enviosZonas.length; i++){
    if (enviosZonas[i] < 100){ 
      servicioCritico++;
    } 
  }
  return servicioCritico
  }


  function PorcentajeZonas(){
    let zonasPorcentaje = []
    let suma = CalcularTotal()


    for (let i= 0; i < enviosZonas.length; i++){
      let porcentaje = ((enviosZonas[i] / suma)*100).toFixed(2) + "% " 
      zonasPorcentaje[i] = porcentaje
    }
    return zonasPorcentaje
     }





  





