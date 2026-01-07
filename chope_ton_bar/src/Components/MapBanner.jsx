export default function MapBanner() {  
  return (

    <div className="relative h-40 rounded-3xl overflow-hidden mb-6 border border-purple-500/30 shadow-[0_0_20px_rgba(191,90,242,0.2)]">
    {/* Background simulant une carte sombre */}
    <div className="absolute inset-0 bg-[url('https://cartographie.com/map-dark.png')] bg-cover opacity-40"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40"></div>
    
    <div className="relative h-full flex items-center justify-center">
      <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
        <span className="text-sm font-medium">Voir la carte en direct 🗺️</span>
      </button>
    </div>
    
    {/* Points lumineux décoratifs */}
    <div className="absolute top-10 right-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#bf5af2]"></div>
    <div className="absolute bottom-10 left-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_#ff2d55]"></div>
  </div>
  )
}

 