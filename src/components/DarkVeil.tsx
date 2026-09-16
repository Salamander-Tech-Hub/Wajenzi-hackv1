const DarkVeil = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-black/50">
      {/* Optional: Add animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default DarkVeil;