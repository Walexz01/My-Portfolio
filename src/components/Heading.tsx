interface Props {
  title: string;
  desc?: string;
  classname: string;
}

const Heading = ({ title, desc, classname }: Props) => {
  return (
    <div className={`heading ${classname}`}>
      <h2 className="gradient__text">{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default Heading;
