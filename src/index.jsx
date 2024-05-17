import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import './global.css';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';

const App = () => {
  return (
    <>
      <h1>Hezký nadpis</h1>
      <div className='navigace'>
        <Link to="/">Homepage</Link>
        <Link to="/about">O nás</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/pobocky">Pobočky</Link>
      </div>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/pobocky",
        element: <CentersPage />,
        children: [
          {
            path: ":id",
            element: <CenterDetail />
          }
        ]
      }
    ]
  }
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
