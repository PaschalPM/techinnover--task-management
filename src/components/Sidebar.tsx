import Calendar from "@/components/shared/svgs/side-nav/Calendar";
import Settings from "@/components/shared/svgs/side-nav/Settings";
import Inbox from "@/components/shared/svgs/side-nav/Inbox";
import Notes from "@/components/shared/svgs/side-nav/Notes";
import TodoList from "@/components/shared/svgs/side-nav/TodoList";
import { PropsWithChildren } from "react";
import NavListItem from "./shared/NavListItem";

const listItems = [
  {
    logo: <Calendar />,
    title: "CALENDAR",
    link: "/",
  },
  {
    logo: <Inbox  />,
    title: "INBOX",
    link: "/inbox",
  },
  {
    logo: <Notes />,
    title: "NOTES",
    link: "/notes",
  },
  {
    logo: <TodoList />,
    title: "TODO LIST",
    link: "/todo-list",
  },
  {
    logo: <Settings />,
    title: "SETTINGS",
    link: "/settings",
  },
];

type Props = PropsWithChildren & { logo: string };

export default function Sidebar({ logo }: Props) {
  return (
    <aside className="sidebar min-w-[250px] max-h-screen" id="sidebar">
      <div className="logo-section p-10">
        <img src={logo} alt="" />
      </div>
      <ul>
        {listItems.map((listItem) => (
          <NavListItem key={listItem.title} listItem={listItem} />
        ))}
      </ul>
    </aside>
  );
}
