import React,{Component} from 'react';
import './Fecha.css';

class Fecha extends Component{

    dateTime(){
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
        var f=new Date();
        return diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
      }

    render(){
        return(
            <div className = "Fecha">
                {this.dateTime()}
            </div>
        )
    }

}

export default Fecha;