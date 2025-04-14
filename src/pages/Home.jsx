import React from 'react';
import imgperfil from '../img/imgperfil.jpg';
import { Button } from "../components/Button";
function Home() {
    return (
        <div className='w-screen h-screen bg-[#212428] flex flex-col items-center font-medium'>
            <header className='h-50 pt-4 flex justify-center items-center'>
                <img src={imgperfil} alt="Imagem de Perfil" className='border-4 border-[#32363B]
                rounded-full'/>
            </header>
            <main>
                <h1 className='font-medium text-white text-[25px] pb-2 text-center'>Olá, eu sou <span className='text-[#FF014F]' >Elias Costa</span><br />
                    Desenvolvedor de Software</h1>
                <p className='text-[#747B85] text-[18px]  text-center'>
                    Sou desenvolvedor Front-end, criador<br /> de conteúdo tech na internet,
                    apaixonado<br /> por tecnologia, ciência e aprendizado.
                </p>
                <div className='font-medium h-40 flex flex-col items-center justify-evenly'>
                    <Button text="Baixe meu CV" />
                    <Button text="Contrate-me" />
                </div>
                <div className='h-52 w-90 border-2 p-3 rounded-lg '>
                    <h2 className='text-white text-[24px]'>Sobre mim</h2>
                    <p className='text-[#747B85]'>
                        Desenvolvedor Front-end, 
                        formado em Análise e desenvolvimento de sistemas,
                        meu foco é desenvolver soluções de software que impactam da melhor forma
                        possível na experiência do usuário. 
                        Estou sempre em busca de evolução e aprendizado constante.
                    </p>
                </div>
                
            </main>
        </div>
    )
}

export default Home;