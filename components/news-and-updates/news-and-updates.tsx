import BookNow from '../book-now';
import SectionHeading from '../section-heading';
import { newsAndUpdates } from './news-and-updates.const';

interface OptionalLinkWrapperProps {
  link?: string;
  children: React.ReactNode;
}

const OptionalLinkWrapper: React.FC<OptionalLinkWrapperProps> = ({ link, children }: OptionalLinkWrapperProps) =>
  (!!link ? <a href={link}>{children}</a> : <>{children}</>);

const NewsAndUpdates = () => {
  return (
    <div className="content-wrapper mx-auto mb-[100px] flex flex-col gap-10 md:mb-[120px] md:gap-16">
      <SectionHeading title="News & Updates" />
      <div className="mx-auto flex flex-wrap justify-center gap-10">
        {newsAndUpdates.map((item) => (
          <div key={item.title} className="flex max-w-[466px] flex-col gap-3">
            <OptionalLinkWrapper link={item.link}>
              <div className="relative h-[560px] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <span className="text-xl md:text-2xl">{item.title}</span>
              <div className="h-[1px] w-full bg-foreground" />
              <span className="text-lg text-neutral600 md:text-xl">
                {item.description}
              </span>
            </OptionalLinkWrapper>
          </div>
        ))}
      </div>
      <BookNow className="mx-auto" />
    </div >
  );
};

export default NewsAndUpdates;
