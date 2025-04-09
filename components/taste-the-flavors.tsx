const TasteTheFlavors = () => {
  return (
    <div className="content-wrapper mb-[100px] flex flex-col items-center gap-4 sm:mb-[200px]">
      <div className="flex flex-col items-center gap-6">
        <span className="text-center text-base tracking-[0.5%] text-neutral600 sm:text-xl">
          Savour authentic Turkish dishes in a warm setting.
        </span>
        <h1 className="text-center font-gambarino text-heading-xl tracking-[-0.002em] md:text-9xl">
          Taste the flavors of Turkey
        </h1>
      </div>
      <div className="relative h-[570px] w-full">
        <img
          src="/images/restaurant.png"
          alt="Taste the flavors"
          className="object-cover"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default TasteTheFlavors;
