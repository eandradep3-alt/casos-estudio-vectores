const selectCategorias = document.getElementById('id-select-categorias')
const btnCargarArticulos = document.getElementById("id-btn-cargar-articulos")
const btnPresentarCategorias = document.getElementById("id-btn-presentar-categorias")
const listadoCategorias = document.getElementById("id-listado-categorias")
const categoriasSuperioresPromedio = document.getElementById("num-categorias-superiores-promedio")
const btncategoriasSuperioresPromedio = document.getElementById("btn-categorias-superiores-promedio")
const VentasCriticas = document.getElementById("num-ventas-criticas")
const btnVentasCriticas = document.getElementById("btn-ventas-criticas")
const porcentajeCategoria = document.getElementById("txt-porcentaje-categoria")
const btnPorcentajeCategoria = document.getElementById("btn-porcentaje-categoria")


let vectorVentas = []
const vectorCategorias = ["Arroz", "Azúcar", "Leche", "Aceite", "Pan", "Bebidas", "Galletas"]

btnCargarArticulos.addEventListener('click', function (e) {
  const dimension = selectCategorias.value
  cargarArticulos(dimension)
  console.log(vectorVentas)

})

btnPresentarCategorias.addEventListener("click" , function(e){
   listadoCategorias.value = PresentarCategorias()
  // listadoCategorias.value = vectorVentas.join(" , ")
})

btncategoriasSuperioresPromedio.addEventListener("click", function(){
 categoriasSuperioresPromedio.value =  VentasSuperioresPromedio()

})

btnVentasCriticas .addEventListener("click", function(e){
  VentasCriticas.value = VentasCriticasCategorias ()
})

btnPorcentajeCategoria.addEventListener("click", function(e){
  porcentajeCategoria.value = PorcentajeCategorias()
})


function PresentarCategorias(){
let presentarventas = " "

    for (let i = 0; i< vectorVentas.length; i++){
     presentarventas += vectorCategorias[i] + ":" + vectorVentas[i] + "\n"
  }
  return presentarventas
}




function cargarArticulos(dimension) { 
  for (let i = 0; i < dimension; i++) { 
    const numEntero = Math.floor(Math.random() * (5000 - 10 + 1)) + 10;
    vectorVentas[i] = numEntero
  }
}
  

function CalcularTotal(){

let total = 0  

  for (let i = 0; i < vectorVentas.length; i++ ){
    total = total + vectorVentas[i]

  }
return total
}


function CalcularPromedio(){
  let total = CalcularTotal() 
const promedio = total / vectorVentas.length
return promedio
}


  //Contar las categorías con ventas superiores al promedio.
function VentasSuperioresPromedio (){
let ventasSuperiores = 0 //contador, vamos a ir sumando a contar

  const promedio = CalcularPromedio()

  for (let i=0; i < vectorVentas.length; i++){
    if (vectorVentas[i] > promedio){
      ventasSuperiores++;
    } 
  }
  return ventasSuperiores
  }

    //Ventas criticas menores a 100.
function VentasCriticasCategorias (){
let ventasCriticas = 0 //contador, vamos a ir sumando a contar


  for (let i=0; i < vectorVentas.length; i++){
    if (vectorVentas[i] < 100){ 
      ventasCriticas++;
    } 
  }
  return ventasCriticas
  }

  //Calcular el porcentaje que representa cada categoría respecto al total de ventas
  function PorcentajeCategorias(){
    let categoriasPorcentaje = []
    let suma = CalcularTotal()


    for (let i= 0; i < vectorVentas.length; i++){
      let porcentaje = ((vectorVentas[i] / suma)*100).toFixed(2) + "% " 
      categoriasPorcentaje[i] = porcentaje
    }
    return categoriasPorcentaje
     }





  





