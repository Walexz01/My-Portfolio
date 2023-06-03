import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  id: string;
  name: string;
}
const Anchor = ({ id, name }: Props) => {
  return <AnchorLink href={`#${id}`}>{name}</AnchorLink>;
};

export default Anchor;
