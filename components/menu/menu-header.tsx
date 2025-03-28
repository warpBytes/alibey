'use client';

import { menuHeaderIcons } from './constants';

const MenuHeader = () => {
  return (
    <div className="relative flex h-[296px] w-full items-center justify-center bg-background md:h-[434px]">
      <div
        className="absolute left-0 right-0 top-1/2 h-16 w-full -translate-y-1/2 bg-[length:64px_64px] md:h-[100px] md:bg-[length:100px_100px]"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 flex items-center justify-center gap-8 md:gap-24">
        {menuHeaderIcons.map(({ icon, id }) => (
          <div key={id}>{icon}</div>
        ))}
      </div>
    </div>
  );
};

export default MenuHeader;
