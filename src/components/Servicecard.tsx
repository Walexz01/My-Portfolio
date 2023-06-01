interface Props {
  image: string;
  heading: string;
  desc: string;
}

const Servicecard = ({ image, heading, desc }: Props) => {
  return (
    <div className="service">
      <img className="service__img" src={image} alt="github" />
      <div className="service__details">
        <h2 className="service__heading">{heading}</h2>
        <p className="service__desc">{desc}</p>
      </div>
    </div>
  );
};

export default Servicecard;
