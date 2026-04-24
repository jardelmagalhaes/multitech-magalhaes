"use client"; // 1. Avisa que o site terá botões clicáveis

import { useRouter } from 'next/navigation';

export default function PaginaProduto() {
  // --- INÍCIO DO "CORAÇÃO" DA FUNÇÃO (A LÓGICA) ---
  const router = useRouter();

  const handleCheckout = () => {
    // Substitua pelo seu link de afiliado ou checkout da plataforma
    const urlCheckout = "https://seu-link-de-checkout.com"; 
    window.open(urlCheckout, "_blank");
  };
  // --- FIM DO "CORAÇÃO" DA FUNÇÃO ---

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
       {/* Coluna 1: Imagem Real Puxada da Internet */}
<div className="bg-zinc-900 rounded-3xl aspect-square overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl group">
  <img 
    src="https://americanas.vtexassets.com/arquivos/ids/4080237-768-auto/7495911544_1_xlarge.webp?v=638751222220270000&quality=9" 
    alt="Smartwatch Série 9 Ultra"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    onError={(e) => {
      // Caso o link caia, ele avisa no console do navegador (F12)
      console.log("Erro ao carregar a imagem da internet");
    }}
  />
</div>

        {/* Coluna 2: Infos */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Smartwatch Série 9 Ultra <br />
            <span className="text-blue-600 text-2xl">Edição Titânio</span>
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            A união perfeita entre resistência e tecnologia. Monitorização de saúde avançada 
            e chamadas Bluetooth com o design mais desejado do momento.
          </p>

          <div className="text-3xl font-bold text-white">R$ 197,90</div>

          {/* O BOTÃO CONECTADO À FUNÇÃO ACIMA */}
          <button 
            onClick={handleCheckout} 
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Comprar Agora
          </button>

          {/* Ficha Técnica */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">Ficha Técnica</h2>
            <div className="grid grid-cols-2 gap-y-3 text-sm border border-white/5 p-4 rounded-2xl bg-zinc-900/50">
              <div className="text-zinc-500 font-medium">Material</div>
              <div className="text-zinc-300 text-right">Liga de Zinco + Titânio</div>
              <div className="text-zinc-500 font-medium">Tela</div>
              <div className="text-zinc-300 text-right">2.02" IPS HD</div>
              <div className="text-zinc-500 font-medium">Bateria</div>
              <div className="text-zinc-300 text-right">Até 5 dias</div>
              <div className="text-zinc-500 font-medium">Resistência</div>
              <div className="text-zinc-300 text-right">Certificação IP68</div>
            </div>
          </div>
          
          <p className="text-center text-sm text-zinc-500">
            🚚 Entrega Grátis para todo o Brasil
          </p>
        </div>
      </div>
    </main>
  );
}