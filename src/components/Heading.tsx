interface Props {
  title: string;
  desc?: string;
}

const Heading = ({ title, desc }: Props) => {
  return (
    <div className="heading">
      <h2 className="gradient__text">{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default Heading;
