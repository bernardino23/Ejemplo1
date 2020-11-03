import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Body.css';

class Body extends Component{

    functAlerta(){alert("Holla, Practica #1!")}
    render(){
        return(

    <div className = "Body">
        <p>
            Practica 1 - Unidad 2
        </p>
        <br></br>
        <p>
          <ol>
          <li>Tipos de componentes</li>
          <li>Contenedores</li>
          <li>Usar mas de un componente</li>
          <li>Funciones</li>
          <li>Props</li>
          </ol> 
        </p><br></br>
        <Button variant= "outline-primary" onClick = {()=>{this.functAlerta()}} >click me</Button>
    </div>
        )
    }
}

export default Body;