"use client";
import { useParams } from "next/navigation";

export default function ProdutoPage() {
  const params = useParams();

  const handleCheckout = () => {
    // Rastreio do TikTok para o botão de compra
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout');
    }
    
    // Link de checkout (Substitua pelo seu link de afiliado ou WhatsApp)
    window.open("https://seu-link-de-venda.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem do Produto */}
        <div className="bg-zinc-900 rounded-3xl aspect-square overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://americanas.vtexassets.com/arquivos/ids/4080237-768-auto/7495911544_1_xlarge.webp?v=638751222220270000&quality=9" 
            alt="Smartwatch Série 9 Ultra"
            className="w-full h-full object-contain p-8"
          />
        </div>

        {/* Detalhes do Produto */}
        <div className="flex flex-col gap-6">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Lançamento 2024</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Smartwatch Série 9 Ultra</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A experiência definitiva em tecnologia no seu pulso. Caixa em titânio, tela de retina sempre ativa e monitoramento avançado de saúde.
          </p>
          
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 line-through text-lg">R$ 399,90</span>
            <span className="text-4xl font-bold text-white">R$ 197,90</span>
            <span className="text-green-500 text-sm font-medium">Economia de R$ 202,00</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl text-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
          >
            COMPRAR AGORA
          </button>
        </div>
      </div>
    </div>
  );
}