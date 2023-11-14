export default function ContactForm() {
  return (
    <section className="bg-white py-12 px-2 text-center">
      <h2 className="text-2xl font-bold">Entre em Contato Conosco</h2>
      <form className="mt-4 max-w-md mx-auto">
        {/* Campos do formulário */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome Completo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Seu Nome"
          />
        </div>
        {/* Adicione campos semelhantes para e-mail, telefone, mensagem, etc. */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          type="submit"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}
