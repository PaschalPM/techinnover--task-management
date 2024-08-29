import AppLayout from "./layouts/AppLayout.tsx";
import { createBrowserRouter, Navigate } from "react-router-dom";
import CalendarView from "./views/CalendarView.tsx";
import SettingsView from "./views/SettingsView.tsx";
import InboxView from "./views/InboxView.tsx";
import NotesView from "./views/NotesView.tsx";
import TodoListView from "./views/TodoListView.tsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <CalendarView />,
      },
      {
        path: "/calendar",
        element: <Navigate to={'/'}/>,
      },
      {
        path: "/inbox",
        element: <InboxView />,
      },
      {
        path: "/notes",
        element: <NotesView />,
      },
      {
        path: "/todo-list",
        element: <TodoListView />,
      },
      {
        path: "/settings",
        element: <SettingsView />,
      },
    ],
  },
  {
    path: "*",
    element: <div> Page Not Found...</div>,
  },
]);
