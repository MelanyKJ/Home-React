import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../estilosC.css';

import ReactPlayer from 'react-player';

const Contenido = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const videoEl = useRef(null);

const attemptPlay = () => {
  videoEl &&
    videoEl.current &&
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
};

useEffect(() => {
  attemptPlay();
}, []);

    return (
      <div>
      <section className="hero_sec">
        <div className="hero_text">
          <p>
          <Typewriter
  options={{
    autoStart:true,
    loop:true,
    cursor: null,
  }}
  onInit={(typewriter) => {
    typewriter
    .typeString(`<span class="text-1">Sé tu verdadero yo</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-2">Elige tu personaje</span>`)
    .pauseFor(2000)
    .deleteAll()
    .typeString(`<span class="text-3">Y sal con estilo.</span>`)
    .pauseFor(2000)
    .deleteAll()
    .start();
  }}
/>
</p>
          <h1>Descubre tu top ideal</h1>
        </div>
      </section>
      <section className="sec1">
          <div className="sec1_img_group">
            <div className="sec1_img_ sec1_img1">
              <img src="1.PNG" width="300" height="350"/>
            </div>

            <div className="sec1_img_ sec1_img2">
              <img src="2.PNG" alt=""/>
            </div>

            <div className="sec1_img_ sec1_img3">
              <img src="3.PNG" alt=""width="300" height="300"/>
            </div>
          </div>
        </section>


        <section className="sec2 luxy_el">
              <div className="sec_text">
                <h2>Tendencia</h2>
                <div className="sec_text_desc">
                  <div className="sec_text_desc_p">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
              <div className="sec_img">
                <ReactPlayer url='video1.mp4'
                loop
                muted
                />
              </div>
          </section>

          <section className="sec4 luxy_el">
            <h3>Precios / de rebaja / 1 sol / 2 soles / 3 soles / compra p</h3>
            <div className="sec4_img_group">
              <div className="sec4_img1">
                <img src="9.PNG" width="400" height="500"/>
              </div>
              <div className="sec4_img2">
                <img src="7.PNG" width="400" height="450"/>
              </div>
              <div className="sec4_img3">
                <img src="8.PNG" width="400" height="500"/>
              </div>
            </div>
          </section>

          <section>
          <h6>Nuestros clientes</h6>
        <Slider {...settings}>
          <div>
            <img src="P1.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P2.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P3.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P4.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P5.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P6.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P3.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P4.PNG" width="300" height="350"/>
          </div>
          <div>
            <img src="P5.PNG" width="300" height="350"/>
          </div>
        </Slider>
      </section>

      </div>



    );
}

export default Contenido;
