import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTasks from "../../pages/CompletedTasks/CompletedTasks";
import MyTask from "../../pages/MyTask/MyTask";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <AddTask />
      },
      {
        path: '/my task',
        element: <MyTask />
      },
      {
        path: '/completed task',
        element: <CompletedTasks />
      },
    ]
  }
])

export default router;