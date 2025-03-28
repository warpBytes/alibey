interface IProps {
  title: string;
}

const SectionHeading = ({ title }: IProps) => {
  return (
    <h1 className="text-center font-gambarino text-heading-lg lg:text-heading-xl">
      {title}
    </h1>
  );
};

export default SectionHeading;
