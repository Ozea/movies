import { Redirect } from "react-router-dom";
import { lazy } from '@loadable/component';
import { MainLayout, AuthLayout, ErrorsLayout } from 'layouts';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/movies" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Auth/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Auth/Register'))
      },
      {
        path: '/auth/forgot-password',
        exact: true,
        component: lazy(() => import('views/Auth/ForgotPassword'))
      },
      {
        component: () => <Redirect to="/auth/login" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorsLayout,
    routes: [
      {
        path: '/errors/404',
        exact: true,
        component: lazy(() => import('views/Errors/Error404'))
      }
    ]
  },
  {
    path: '*',
    component: MainLayout,
    routes: [
      {
        path: '/movies',
        exact: true,
        component: lazy(() => import('views/Main/Movies'))
      },
      {
        path: '/discover/genre/:id',
        exact: true,
        component: lazy(() => import('views/Main/MoviesByGenre'))
      },
      {
        component: () => <Redirect to="/errors/404" />
      }
    ]
  },
];
