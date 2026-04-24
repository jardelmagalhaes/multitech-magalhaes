// app/page.tsx
import Link from 'next/link';

export default function Home() {
  // Simulação de produtos do seu Top 10
  const produtos = [
    {
      id: "serie-9-ultra",
      nome: "Smartwatch Série 9 Ultra",
      preco: "197,90",
      img: "https://americanas.vtexassets.com/arquivos/ids/4080237-768-auto/7495911544_1_xlarge.webp?v=638751222220270000&quality=9",
      tag: "Mais Vendido"
    },
    {
      id: "fone-conducao-ossea",
      nome: "Fone de Condução Óssea",
      preco: "149,90",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", // Exemplo
      tag: "Inovação"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          O Futuro é <span className="text-blue-500">Agora.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Curadoria exclusiva de gadgets tecnológicos importados com o selo de qualidade MultiTech.
        </p>
      </section>

      {/* Grade de Produtos */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {produtos.map((produto) => (
          <Link 
            key={produto.id}
            href={`/produtos/${produto.id}`}
            className="group bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all"
          >
            <div className="aspect-square relative overflow-hidden bg-zinc-900">
              <img 
                src={produto.img} 
                alt={produto.nome}
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
              />
              {produto.tag && (
                <span className="absolute top-4 left-4 bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {produto.tag}
                </span>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
              <div className="flex justify-between items-center">
                <span className="text-blue-500 font-bold text-lg">R$ {produto.preco}</span>
                <span className="text-zinc-500 text-sm">Ver Detalhes →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}