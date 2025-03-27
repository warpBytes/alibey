interface IProps {
  title: string;
}

const SectionHeading = ({ title }: IProps) => {
  return (
    <h1 className="font-gambarino lg:text-heading-xl text-center text-5xl md:text-6xl">
      {title}
    </h1>
  );
};

export default SectionHeading;
