import React,{Component} from 'react';
import './Logo-app.css';
import LogoApp from '../LogoTecNM.jpg';

class Logo extends Component{
    render(){
        return(
            <div className = "Logo-app">
                <img src = {LogoApp} width = "300px" height = "auto" alt = "logo"></img>
            </div>
        )
    }

}

export default Logo;