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
                            Sou programador Front-end, criador<br /> de conteúdo tech na internet, apaixonado<br className="hidden lg:block" /> por tecnologia, ciência e aprendizado.
                        </p>
                        <div className='h-19 w-64  flex justify-between items-center '>
                            <a href="https://www.instagram.com/eliasjr.dev/?hl=pt-br" target="_blank" rel="noopener noreferrer"><SiInstagram size={40} title="Instagram" className="text-white dark:text-white transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                            <a href="https://www.linkedin.com/in/elias-c/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={40} title="Linkedin" className="text-white dark:text-white transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                            <a href="https://github.com/eliasjrdev" target="_blank" rel="noopener noreferrer"><SiGithub size={40} title="GitHub" className="text-white dark:text-white lg: transition-transform duration-300 ease-in-out lg:hover:scale-110" /></a>
                        </div>
                    </div>
                </header>
            </div>
            <div className="lg:w-1/2 lg:p-0 lg:pt-5 lg:h-screen lg:overflow-y-auto p-6 flex flex-col items-center">
                <main className='lg:pl-5 lg:w-full lg:items-start flex flex-col items-center '>
                    <div className='lg:w-5/6 flex flex-col gap-4 '>
                        <div className='lg:w-full lg:flex lg:flex-col lg:justify-center lg:h-82 h-full w-90 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] p-3 rounded-lg'>
                            <h2 className='text-white text-[24px]'>Sobre mim</h2>
                            <p className='text-[#747B85]'>
                                Minha carreira teve início em 2020 quando entrei na faculdade
                                de análise e desenvolvimento de sistemas.
                                Desde então, tenho atuado no desenvolvimento de aplicações web com foco em práticas modernas
                                de desenvolvimento de software. Venho construindo projetos práticos utilizando
                                tecnologias como  JavaScript, TypeScript, React, Next, 
                                buscando sempre aplicar boas práticas de programação,
                                versionamento com Git e GitHub integração com APIs, Criando interfaces
                                responsivas e otimizadas, fazendo integração com Firebase
                                para armazenamento de dados.
                                Mantenho uma rotina contínua  de estudos,
                                participação em comunidades, desafios de lógica e algoritmo, sempre em busca de evolução.
                            </p>
                        </div>
                        <div className='lg:w-full flex flex-col justify-center h-full w-90 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] p-3 rounded-lg overflow-hidden'>
                            <h2 className='text-white text-[24px] mb-4'>Minhas habilidades</h2>
                            <div className="relative w-full overflow-hidden group cursor-pointer">
                                <div className="flex animate-slide gap-10 w-max">
                                    {[...Array(2)].map((_, i) => (
                                        <div key={i} className="flex gap-10 text-4xl px-2">
                                            <div className="flex flex-col items-center">
                                                <SiHtml5 className="text-orange-600" />
                                                <span className="text-sm text-white mt-1">HTML</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiCss3 className="text-blue-600" />
                                                <span className="text-sm text-white mt-1">CSS</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiJavascript className="text-yellow-400" />
                                                <span className="text-sm text-white mt-1">JavaScript</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiTypescript className="text-blue-500" />
                                                <span className="text-sm text-white mt-1">TypeScript</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiReact className="text-cyan-400" />
                                                <span className="text-sm text-white mt-1">React</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiVite className="text-purple-500" />
                                                <span className="text-sm text-white mt-1">Vite</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiTailwindcss className="text-teal-400" />
                                                <span className="text-sm text-white mt-1">Tailwind</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiGit className="text-red-600" />
                                                <span className="text-sm text-white mt-1">Git</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <SiGithub className="text-white dark:text-white" />
                                                <span className="text-sm text-white mt-1">GitHub</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=' lg:w-full h-auto flex flex-col justify-center w-90 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] p-3 rounded-lg '>
                            <h2 className='text-white text-[24px] '>Meus projetos</h2>
                            <div className="flex flex-wrap justify-center items-center p-2 gap-4 ">
                                <img src={imgproject} alt="Imagem de Perfil" className='rounded-md ' />
                                <p className='text-[#747B85]'>
                                    💼<span className='text-[#FF014F]' >Projeto VenceFacil <span className='text-white'>(Em desenvolvimento)</span> | Stack: </span>
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
                            <a href="https://vencefacil.web.app/"><Button text="Acesse a versão atual" className="w-[200px] lg:w-1/2" /></a>
                        </div>
                    </div>
                    <div className='font-medium h-25 lg:h-20 flex flex-col lg:flex-row w-90 lg:lg:w-5/6 items-center justify-between lg:justify-evenly mt-5 lg:mt-0'>
                        <a href="https://drive.google.com/file/d/1eP-95pOtEvI9e9D72fqi435g1odLpzYk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full"><Button text="Veja meu curriculo" /></a>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            text="Entre em contato comigo"
                        />
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2 className="text-white text-2xl mb-4">Entre em contato</h2>
                        <ContactForm />
                    </Modal>
                    <footer className='items-center block lg:hidden mt-5'>
                        <span className='text-white p-3 target="_blank" rel="noopener noreferrer"'>&copy; {new Date().getFullYear()} Eliasjr.dev</span>
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default Home;