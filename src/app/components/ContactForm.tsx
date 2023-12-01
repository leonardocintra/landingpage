import ContactFormDivInput from "./ContactFormDivInput";

export default function ContactForm() {
  return (
    <div className="">
      <ContactFormDivInput
        htmlFor="nome"
        inputId="nome"
        labelText="Nome"
        placeholder="Seu nome ..."
        type="text"
      />

      <ContactFormDivInput
        htmlFor="email"
        inputId="email"
        labelText="E-mail"
        placeholder="Seu email ..."
        type="email"
      />

      <ContactFormDivInput
        htmlFor="whatsapp"
        inputId="whatsapp"
        labelText="Whastapp"
        placeholder="Seu whastapp ..."
        type="number"
      />
      <div className="mt-5">
        <button className="btn btn-outline btn-warning w-full max-w-md text-2xl">Enviar mensagem</button>
      </div>
    </div>
  );
}
