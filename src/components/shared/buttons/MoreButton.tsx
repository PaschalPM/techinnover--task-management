import MoreHorizontal from "../svgs/MoreHorizontal";
type Props = {
  handleClick?: () => void;
};
export default function MoreButton({ handleClick }: Props) {
  return (
    <button className="shadow px-1 rounded-md" onClick={handleClick}>
      <MoreHorizontal />
    </button>
  );
}
