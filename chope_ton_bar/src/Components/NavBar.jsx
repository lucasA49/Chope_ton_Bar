import { NavLink } from "react-router-dom";

export default function NavBar() {
  const items = [
    { path: "/", icon: "🏠", label: "Accueil" },
    { path: "/map", icon: "🗺️", label: "Carte" },
    { path: "/favs", icon: "❤️", label: "Favoris" },
    { path: "/profile", icon: "👤", label: "Profil" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/5 py-4 px-8 flex justify-between items-center z-50">
      {items.map((item) => (
        <NavLink 
          key={item.path} 
          to={item.path}
          // La fonction ci-dessous gère la couleur rose quand tu es sur la page
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-all ${
              isActive ? 'text-pink-500 scale-110' : 'text-gray-500'
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}