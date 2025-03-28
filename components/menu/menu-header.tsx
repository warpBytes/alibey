'use client';

import { menuHeaderIcons } from './constants/menu-header';

const MenuHeader = () => {
  return (
    <div className="relative flex h-[434px] w-full items-center justify-center bg-background">
      <div
        className="absolute left-0 right-0 top-1/2 h-[100px] w-full -translate-y-1/2"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-24">
        {menuHeaderIcons.map(({ icon, id }) => (
          <div key={id}>{icon}</div>
        ))}
      </div>
    </div>
  );
};

export default MenuHeader;
