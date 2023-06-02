import { contact } from "../Data/contacts";

const Contactlink = ({ icon: Icon, title, href, value }: contact) => {
  return (
    <div className="contact_link detail">
      {<Icon />}
      <h3>{title}:</h3>
      <span>
        <a href={href}>{value}</a>
      </span>
    </div>
  );
};

export default Contactlink;
