const selectEspecialidades = document.getElementById("id-select-especialidades")
const btnCargarEspecialidades = document.getElementById("id-btn-cargar-especialidades")
const btnPresentarEspecialidades = document.getElementById("id-btn-presentar-especialidades")
const listadoEspecialidades = document.getElementById("id-listado-especialidades" )
const especialidadesSuperioresPromedio = document.getElementById("num-especialidades-superiores-promedio")
const btnEspecialidadesSuperioresPromedio = document.getElementById("btn-especialidades-superiores-promedio")
const especialidadesCriticas = document.getElementById("num-especialidades-demanda-criticas")
const btnEspecialidadesCriticas = document.getElementById("btn-especialidades-demanda-criticas")
const porcentajeEspecialidades = document.getElementById("txt-porcentaje-especialidades")
const btnPorcentajeEspecialidades = document.getElementById("btn-porcentaje-especialidades")


let vectorEspecialidades = []
const vectorNombresEspecialidades = ["Ortodoncia", "Periodoncia", "Endodoncia", "Estética", "Implantes", "Urgencias", "Limpieza"]

btnCargarEspecialidades.addEventListener('click', function (e) {
  const dimension = selectEspecialidades.value
cargarEspecialidades(dimension)
  console.log(vectorEspecialidades)

})

btnPresentarEspecialidades.addEventListener("click" , function(e){
   listadoEspecialidades.value = PresentarEspecialidades()
  // listadoCategorias.value = vectorVentas.join(" , ")
})

btnEspecialidadesSuperioresPromedio.addEventListener("click", function(){
 especialidadesSuperioresPromedio.value = citasSuperioresPromedio ()

})

btnEspecialidadesCriticas.addEventListener("click", function(e){
   especialidadesCriticas.value = EspecialidadesDemandaCritica ()
})

btnPorcentajeEspecialidades.addEventListener("click", function(e){
  porcentajeEspecialidades.value = PorcentajesEspecialidades()
})


function PresentarEspecialidades(){
let presentarlista = " "

    for (let i = 0; i< vectorEspecialidades.length; i++){
     presentarlista += vectorNombresEspecialidades[i] + ":" + vectorEspecialidades[i]  + "\n"
  }
  return presentarlista
}



function cargarEspecialidades(dimension) { //Llama a la función cargarPrecios y envíale esa dimensión.
  for (let i = 0; i < dimension; i++) { 
    const numEntero = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
    vectorEspecialidades[i] = numEntero
  }
}
  

function CalcularTotalEspecialidades(){

let total = 0  

  for (let i = 0; i < vectorEspecialidades.length; i++ ){
    total = total + vectorEspecialidades[i]

  }
return total
}


function CalcularPromedioEspecialidades(){
  let total = CalcularTotalEspecialidades()
const promedio = total / vectorEspecialidades.length
return promedio
}


function citasSuperioresPromedio (){
let citasSuperiores = 0 //contador, vamos a ir sumando a contar

  const promedio = CalcularPromedioEspecialidades()

  for (let i=0; i < vectorEspecialidades.length; i++){
    if (vectorEspecialidades[i] > promedio){
      citasSuperiores++;
    } 
  }
  return citasSuperiores
  }


function EspecialidadesDemandaCritica (){
let especialidadesCriticas = 0 //contador, vamos a ir sumando a contar


  for (let i=0; i < vectorEspecialidades.length; i++){
    if (vectorEspecialidades[i] < 100){ 
      especialidadesCriticas++;
    } 
  }
  return especialidadesCriticas
  }


  function PorcentajesEspecialidades(){
    let especialidadesPorcentaje = []
    let suma =  CalcularTotalEspecialidades()


    for (let i= 0; i < vectorEspecialidades.length; i++){
      let porcentaje = ((vectorEspecialidades[i] / suma)*100).toFixed(2) + "% " 
      especialidadesPorcentaje[i] = porcentaje
    }
    return especialidadesPorcentaje
     }
