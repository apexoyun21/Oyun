const { useState } = React;
const { Home, Building2, Store, Landmark, Settings, Coins, Gem, Sparkles } = lucide;

function BirhatinMekani() {
  const [page, setPage] = useState("home");
  const [cash, setCash] = useState(15000);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="fixed top-0 w-full h-16 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-50">
        <h1 className="font-bold text-emerald-500 tracking-wider">BİRHAT'IN MEKANI</h1>
        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 text-xs">
          <Coins size={14} className="text-amber-400" /> {cash.toLocaleString()}₺
        </div>
      </header>

      <main className="pt-20 pb-24 px-4">
        {page === "home" && (
          <div className="p-4 bg-slate-800 rounded-xl border border-white/10">
            <h2 className="font-bold text-lg mb-2">Hoş geldin, Birhat!</h2>
            <p className="text-sm text-slate-400">İmparatorluğunu kurmaya hazır mısın?</p>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 w-full h-16 bg-slate-900/90 backdrop-blur-lg border-t border-white/10 flex justify-around items-center z-50">
        <button onClick={() => setPage("home")} className={page === "home" ? "text-emerald-400" : "text-slate-500"}><Home size={24}/></button>
        <button onClick={() => setPage("buildings")} className={page === "buildings" ? "text-emerald-400" : "text-slate-500"}><Building2 size={24}/></button>
      </nav>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BirhatinMekani />);
    
