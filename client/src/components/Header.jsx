import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">ChannakaDev</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
