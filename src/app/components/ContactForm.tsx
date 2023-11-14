export default function ContactForm() {
  return (
    <section className="flex p-2 justify-center">
      <div className="sm:w-2/3 flex flex-col sm:flex-row text-white">
        
        <div className="sm:w-1/2 border-pink-600 border">
          <p className="text-5xl sm:text-6xl font-bold hover:text-sky-200 text-right">
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

        <div className="pt-4 sm:pt-0 sm:w-1/2">
          <div className="flex items-center justify-center">
            <form action="" method="POST">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-slate-200"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="seuemail@dominio.com.br"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="telefone"
                  className="mb-3 block text-base font-medium text-slate-200"
                >
                  Whatsapp
                </label>
                <input
                  type="number"
                  name="telefone"
                  id="telefone"
                  placeholder="Numero Whatsapp"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
