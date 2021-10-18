import React from 'react';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import ImageSliderGaragem from '../ImageSlider-garagem';
import {SliderDataGaragens} from '../SliderData-garagem';
// import hometopo from '../images/hometopo.png';
import '../ImagemTopo.css';
// import Button from '../Button';


const Home = () => {
    return(
        <>
            <label className="produtos">Produtos</label>
            <label className="underscor">_________</label>
            <label className="produto-text">Clique aqui para verificar todos os produtos</label>
            <button className='btn-produto' type='submit'>
                Produtos
            </button>
            <label className="garagens">Garagens</label>
            <label className="underscor-garag">_________</label>

            <label className="garagem-text">Clique aqui para verificar todas as garagens</label>
            <button className='btn-garagem' type='submit'>
                Garagens
            </button>
            <ImageSlider slides={SliderData} /> 
            <ImageSliderGaragem slides={SliderDataGaragens} />
        </>
    );
}

export default Home;