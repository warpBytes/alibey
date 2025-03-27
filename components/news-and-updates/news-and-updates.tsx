import Image from 'next/image';

import BookNow from '../book-now';
import SectionHeading from '../section-heading';
import { newsAndUpdates } from './news-and-updates.const';

const NewsAndUpdates = () => {
  return (
    <div className="content-wrapper mx-auto mb-[120px] flex flex-col gap-16">
      <SectionHeading title="News and Updates" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {newsAndUpdates.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <div className="relative h-[450px] w-full lg:h-[580px]">
              <Image
                src={item.image}
                alt={item.title}
                quality={100}
                priority
                fill
              />
            </div>
            <span className="text-2xl">{item.title}</span>
            <div className="h-[1px] w-full bg-foreground" />
            <span className="text-xl text-neutral600">{item.description}</span>
          </div>
        ))}
      </div>
      <BookNow className="mx-auto" />
    </div>
  );
};

export default NewsAndUpdates;
