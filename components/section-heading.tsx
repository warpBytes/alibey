import { cn } from '@/lib/utils';

interface IProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className }: IProps) => {
  return (
    <h1
      className={cn(
        'text-center font-gambarino text-heading-lg md:text-heading-2xl',
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default SectionHeading;
