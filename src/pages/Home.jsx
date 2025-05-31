import React from 'react';
import imgperfil from '../img/imgperfil.jpg';
import imgproject from '../img/imgproject.png';
import { Button } from "../components/Button";
import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { Modal } from './Modal';

import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiGit, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='flex flex-col lg:flex-row w-full min-h-screen bg-[#212428] font-medium'>
            <div className='lg:w-1/2 lg:items-end flex flex-col '>
                <header className='lg:w-4/5 lg:justify-center lg:items-start w-full h-full pt-4 flex flex-col items-center '>
                    <img src={imgperfil} alt="Imagem de Perfil" className='mb-2 border-4 border-[#747B85] rounded-full ' />
                    <div className='lg:h-auto lg:items-start flex flex-col items-center h-9/10'>
                        <h1 className='mb-2 lg:pt-3 lg:w-96 lg:text-start font-medium sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white text-[25px] pb-2 text-center'>Olá, eu sou<br className="hidden lg:block" /> 
                            <span className='text-[#FF014F]' > Elias Costa </span><br />
                            Desenvolvedor de Software
                        </h1>
                        <p className='mb-4  lg:text-start lg:p-0 text-[#747B85] text-[18px]  text-center p-2 text-base sm:text-lg md:text-xl lg:text-2xl'>
                            Sou desenvolvedor Front-end, criador<br /> de conteúdo tech na internet, apaixonado<br className="hidden lg:block" /> por tecnologia, ciência e aprendizado.
                        </p>
                        <div className='h-19 w-64  flex justify-between items-center '>
                            <a href="https://www.instagram.com/eliasjr.dev/?hl=pt-br" target="_blank" rel="noopener noreferrer"><SiInstagram size={40} title="Instagram" className="text-white dark:text-white transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                            <a href="https://www.linkedin.com/in/elias-c/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={40} title="Linkedin" className="text-white dark:text-white transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                            <a href="https://github.com/eliasjrdev" target="_blank" rel="noopener noreferrer"><SiGithub size={40} title="GitHub" className="text-white dark:text-white lg: transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                        </div>
                    </div>
                </header>
            </div>
            <div className="lg:w-1/2 lg:p-0 lg:pt-5 h-screen overflow-y-auto p-6 flex flex-col items-center">
                <main className='lg:pl-5 lg:w-full lg:items-start flex flex-col items-center '>
                    <div className='lg:w-5/6 flex flex-col gap-4 '>
                        <div className='lg:w-full lg:flex lg:flex-col lg:justify-center h-52 w-90 shadow-[-1px_7px_24px_1px_rgba(5,_5,_5,_0.8)] p-3 rounded-lg'>
                            <h2 className='text-white text-[24px]'>Sobre mim</h2>
                            <p className='text-[#747B85]'>
                                Desenvolvedor Front-end,
                                formado em Análise e desenvolvimento de sistemas,
                                meu foco é desenvolver soluções de software que impactam da melhor forma
                                possível na experiência do usuário.
                                Estou sempre em busca de evolução e aprendizado constante.
                            </p>
                        </div>

                        <div className=' lg:w-full flex flex-col justify-center h-52 w-90 shadow-[-1px_7px_24px_1px_rgba(5,_5,_5,_0.8)] p-3 rounded-lg '>
                            <h2 className='text-white text-[24px] '>Minhas habilidades</h2>
                            <div className="lg:justify-between flex flex-wrap justify-center items-center p-2 gap-4 text-4xl">
                                <SiHtml5 size={48} title="HTML" className="text-orange-600" />
                                <SiCss3 size={48} title="CSS" className="text-blue-600" />
                                <SiJavascript size={48} title="CSS" className="text-yellow-400" />
                                <SiTypescript size={48} title="TypeScript" className="text-blue-500" />
                                <SiReact size={48} title="React" className="text-cyan-400 animate-spin-slow" />
                                <SiVite size={48} title="Vite" className="text-purple-500" />
                                <SiTailwindcss size={48} title="Tailwind" className="text-teal-400" />
                                <SiGit size={48} title="Git" className="text-red-600" />
                                <SiGithub size={48} title="GitHub" className="text-black dark:text-white" />
                            </div>
                        </div>
                        <div className=' lg:w-full h-auto flex flex-col justify-center w-90 shadow-[-1px_7px_24px_1px_rgba(5,_5,_5,_0.8)] p-3 rounded-lg '>
                            <h2 className='text-white text-[24px] '>Meus projetos</h2>
                            <div className="flex flex-wrap justify-center items-center p-2 gap-4 ">
                                <img src={imgproject} alt="Imagem de Perfil" className='rounded-md ' />
                                <p className='text-[#747B85]'>
                                    💼<span className='text-[#FF014F]' >Projeto VenceFacil | Stack: </span>
                                    JavaScript, React, Vite, Tailwind css e Firebase (Auth + Firestore)<br />
                                    <br />
                                    <span className='text-[#FF014F]' >Descrição: </span>
                                    O VenceFácil é um sistema web para gerenciamento de vencimento de produtos.
                                    Voltado especialmente para pequenos comércios, estoques e estabelecimentos que precisam controlar prazos de validade.
                                    <br />
                                    <br />
                                    <span className='text-[#FF014F]' >Principais funcionalidades: </span><br />

                                    - Cadastro de produtos com nome, lote e data de validade.<br />
                                    - Listagem em tempo real dos produtos ordenados por data de vencimento.<br />
                                    - Alerta visual para itens com vencimento próximo ou vencidos.<br />
                                    - Autenticação segura com Firebase Authentication.<br />
                                    - Armazenamento em nuvem usando Firestore.<br />
                                    <br />
                                    <span className='text-[#FF014F]' >Destaques técnicos: </span><br />
                                    - Front-end em React com Vite, garantindo alta performance e experiência fluida<br />
                                    - Uso do Firebase para autenticação, banco de dados e hospedagem.<br />
                                    - Interface responsiva e focada na usabilidade, permitindo uso fácil mesmo em dispositivos móveis.<br />
                                    - Código limpo, modular e de fácil manutenção.
                                </p>
                            </div>
                            <a href="https://vencefacil.web.app/"><Button text="Acesse o projeto" /></a>
                        </div>
                    </div>
                    <div className='font-medium h-20 flex w-75 items-center justify-between'>
                        <a href="https://drive.google.com/file/d/1eP-95pOtEvI9e9D72fqi435g1odLpzYk/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button text="Baixe meu CV"/></a>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            text="Contato"
                            
                        />
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="border-2 border-indigo-600 ">
                        <h2 className="text-white text-2xl mb-4">Entre em Contato</h2>
                        <ContactForm />
                    </Modal>
                    <footer className='flex flex-col items-center block lg:hidden'>

                        <span className='text-white p-3 target="_blank" rel="noopener noreferrer"'>&copy; {new Date().getFullYear()} Eliasjr.dev</span>
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default Home;