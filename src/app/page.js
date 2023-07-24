
'use client'
import { useState } from "react"


export default function Home() {
  

  const cursos = [
    "Programacion",
    "Ingles",
    "Aire",
    "Java",
    "Mecanica de motos"
]

// Estado que me ayudara a mostrar los cursos Filtrados

const [search, setSearch] = useState(cursos);

// funcion que maneja el cambio en el imput

const handleSearch = (event) => {
  // guardo el texto del input y lo ocnvierto a minusculas
  let text = event.target.value;
  //creo un arreglo vacio para luego utilizarlo
  const filtered =[]

  // Itero el arreglo con todos los cursos y los filtro 
  cursos.forEach(element => {
      // convierto a minusculas el text
    if (element.toLowerCase().includes(text)){
        filtered.push(element);
      }
  })

  setSearch(filtered)
}

  return (
   <main>
    <input type="text" onKeyUp={handleSearch}/>
    <ul>
      {
        search.map((elemento,i)=>(
          <li key={i}>{elemento}</li>
        ))
      }
    </ul>
   </main>
  )
}
