import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

export default () => {
  return <RouterProvider router={router} />;
};
