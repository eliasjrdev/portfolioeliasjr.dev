import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert('Mensagem enviada com sucesso!');
      }, (error) => {
        console.log(error.text);
        alert('Ocorreu um erro. Tente novamente.');
      });

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="text-[#FF014F] flex flex-col gap-4 w-80 justify-center">
      <input
        type="text"
        name="from_name"
        placeholder="Seu nome"
        required
        className="p-2 rounded "
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Seu e-mail"
        required
        className="p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        required
        className="p-2 rounded"
      />
      <button
        type="submit"
        className="bg-[#1F2226] w-80 p-2 
        text-[#FF014F] cursor-pointer rounded-sm shadow-[6px_9px_13px_0px_rgba(0,_0,_0,_0.1)] "
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
