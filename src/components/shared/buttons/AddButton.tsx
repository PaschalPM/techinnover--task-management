import Plus from "../svgs/Plus";
type Props = {
  handleClick?: () => void;
};

export default function AddButton({handleClick}:Props) {
  return (
    <button onClick={handleClick}>
      <Plus />
    </button>
  );
}
