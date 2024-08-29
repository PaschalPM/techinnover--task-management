import { NavLink } from "react-router-dom";

type Props = { listItem: NavListItemType };
export default function NavListItem({
  listItem: { link, logo, title },
}: Props) {
  return (
    <NavLink
      to={link}
      className="flex gap-4 p-3 items-center font-semibold text-app-grey"
    >
      <div className="">{logo}</div>
      {title}
    </NavLink>
  );
}
