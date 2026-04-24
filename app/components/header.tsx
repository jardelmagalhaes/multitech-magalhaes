import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl font-bold text-white tracking-tight leading-none">
              Multi<span className="text-blue-500">Tech</span>
            </span>
            <span className="text-[10px] font-light text-zinc-500 tracking-[0.3em] uppercase mt-1">
              Magalhães
            </span>
          </div>
        </Link>

        <div className="hidden sm:block text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
          Tecnologia Premium
        </div>
      </div>
    </header>
  );
}