export default function ContactForm() {
  return (
    <section className="flex p-2 justify-center">
      <div className="sm:w-2/3 flex flex-col sm:flex-row text-white">
        <div className="sm:w-1/2">
          <p className="text-5xl lg:text-6xl font-bold hover:text-sky-200 text-right pr-3">
            Escale seu negócio{" "}
            <span className="text-teal-400">
              atraindo clientes qualificados{" "}
            </span>
            todos os dias com tráfego pago
          </p>
          <p className="font-mono text-3xl text-justify pt-4">
            Faça anúncios online com quem já gerenciou mais 50 milhões de reais
            em anúncios e aumente os clientes, faturamento e lucro da sua
            empresa.
          </p>
        </div>

        <div className="pt-4 pl-4 sm:pt-0 sm:w-1/2">
          <div>
            <label
              htmlFor="nome"
              className="mb-3 block text-base font-medium text-slate-300"
            >
              Nome completo
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              className="input input-bordered input-accent w-full max-w-md"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="nome"
              className="mb-3 block text-base font-medium text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@email.com.br"
              className="input input-bordered input-accent w-full max-w-md"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="nome"
              className="mb-3 block text-base font-medium text-slate-300"
            >
              Whatsapp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="number"
              placeholder="Seu whatsapp"
              className="input input-bordered input-accent w-full max-w-md"
            />
          </div>
          <div className="mt-5 flex justify-end">
            <button className="btn btn-outline btn-warning">
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
