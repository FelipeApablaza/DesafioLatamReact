/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

function getFecha(date) {
  let fecha = new Date(date).getTime();
  fecha = new Date(fecha);
  let day = fecha.getDate();
  let month = fecha.getMonth() +1;
  let year = fecha.getFullYear();
  fecha = `${day}-${month}-${year}`
  return fecha
}

function getHora(date) {
  let hora = new Date(date).getTime();
  hora = new Date(hora)
  let hour = hora.getHours() +4;
  let mins = hora.getMinutes();
  hora = `${hour}:${mins}`
  return hora
}


export default function TodoList(props) {
  return (
    <table>
    <thead>
        <tr><th>Nombre</th><th>Comentario</th><th>Fecha</th><th>Hora</th></tr>
    </thead>
    <tbody>
    {props.items.map( item =>
        <tr>
            <td>{item.name}</td>
            <td>{item.text}</td>
            <td>{getFecha(item.date)}</td>
            <td>{getHora(item.date)}</td>
        </tr>
    )}  
    </tbody>     
    </table>
  );
}
