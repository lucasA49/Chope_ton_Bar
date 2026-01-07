function Header() {
  return (
  <div className="flex justify-between items-center mb-6">
    <div className="flex items-center gap-1 cursor-pointer">
      <span className="text-red-500 text-xl">📍</span>
      <h1 className="font-bold text-lg">Paris, Bastille</h1>
      <span className="text-gray-400 text-xs">▼</span>
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-gray-700 overflow-hidden">
      <img src="https://via.placeholder.com/40" alt="profile" className="w-full h-full object-cover" />
    </div>
  </div>
);
}
export default Header;