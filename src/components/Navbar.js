import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../estilosN.css';
import { DataContext } from '../Context/dataProvider';
const Navbar = () => {

    const value = useContext(DataContext);
    const [categorias] = value.categorias;
    const [paises] = value.paises;
    const [menu,setMenu] = value.menu;
    const [carrito] = value.carrito;
    const filtroPais = value.filtroPais;
    const filtroCategorias = value.filtroCategorias;
    const detallCategoria = value.detallCategoria
    const detallPais = value.detallPais;
    console.log(categorias)
    const toogleMenu = () =>{
      setMenu(!menu)
    }

    return (
      <nav>
        <div className="wrapper">
          <div className="logo"><a href=""><img src="Captura.PNG" width="90" height="60"/></a></div>
          <input type="radio" name="slider" id="menu-btn"/>
          <input type="radio" name="slider" id="close-btn"/>
          <ul className="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li><a href="#">PRODUCTOS</a></li>
            <li>
              <a href="#" className="desktop-item">CATEGORIAS</a>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">CATEGORIAS</label>
              <div className="mega-box" style={{height:200}}>
                <div className="content">
                  <div className="row">
                    <img src="3.PNG" alt=""/>
                  </div>
                  <div className="row">
                    <header>Polos deportivos</header>
                    <ul className="mega-links">
                      <li><a href="#">Chile</a></li>
                      <li><a href="#">Arabia Saudita</a></li>
                      <li><a href="#">Venezuela</a></li>
                      <li><a href="#">Peru csmr</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Short</header>
                    <ul className="mega-links">
                      <li><a href="#">Color Negro</a></li>
                      <li><a href="#">Color rosado</a></li>
                      <li><a href="#">Color tricolor</a></li>
                      <li><a href="#">Color jade</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">PAISES</a>
              <input type="checkbox" id="showMega"/>
              <label for="showMega" class="mobile-item">PAISES</label>
              <div className="mega-box">
                <div class="content">
                  <div className="row">
                    <img src="2.PNG" alt=""/>
                  </div>
                  <div className="row">
                    <header>Países Clasificados</header>
                    <ul className="mega-links">
                      <li><a href="#">Peru csmr</a></li>
                      <li><a href="#">Arabia Saudita</a></li>
                      <li><a href="#">Venezuela</a></li>
                      <li><a href="#">Colombia</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Países Europeos</header>
                    <ul className="mega-links">
                      <li><a href="#">España</a></li>
                      <li><a href="#">Alemania</a></li>
                      <li><a href="#">Suecia</a></li>
                      <li><a href="#">Italia</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">CLIENTES</a></li>
            <li><a href="#">CONTACTANOS</a></li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
        </div>
      </nav>
    );
  }

  export default Navbar;
