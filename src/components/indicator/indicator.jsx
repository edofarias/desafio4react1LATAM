import React from 'react'

const Indicator = ({indicator}) => {
  return (<section className={"card"} >
  <h6>Código: {indicator.codigo}</h6>
  <h2>Nombre: {indicator.nombre}</h2>
  <h3>Unidad de medida: {indicator.unidad_medida}</h3>
  <h3>Valor: {indicator.valor}</h3>
  <h3>Fecha: {indicator.fecha}</h3>
</section>
  )
}

export default Indicator