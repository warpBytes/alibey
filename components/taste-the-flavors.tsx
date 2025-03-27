import Image from 'next/image';

const TasteTheFlavors = () => {
  return (
    <div className="content-wrapper mb-[200px] flex flex-col items-center gap-4">
      <span className="text-center text-lg tracking-[0.5%] text-neutral600 sm:text-xl">
        Savour authentic Turkish dishes in a warm setting.
      </span>
      <h1 className="text-center font-gambarino text-5xl tracking-[-0.002em] md:text-6xl lg:text-9xl">
        Taste the flavors of Turkey
      </h1>
      <div className="relative h-[67vh] w-full">
        <Image
          src="/images/restaurant.png"
          alt="Taste the flavors"
          quality={100}
          priority
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TasteTheFlavors;
