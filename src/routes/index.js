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
        path: '/movie/discover/genre/:id',
        exact: true,
        component: lazy(() => import('views/Main/MoviesByGenre'))
      },
      {
        path: '/tv/discover/genre/:id',
        exact: true,
        component: lazy(() => import('views/Main/TvShowsByGenre'))
      },
      {
        path: '/movie/:id',
        exact: true,
        component: lazy(() => import('views/Main/DetailedMovie'))
      },
      {
        path: '/tv/:id',
        exact: true,
        component: lazy(() => import('views/Main/DetailedTvShow'))
      },
      {
        path: '/series',
        exact: true,
        component: lazy(() => import('views/Main/Series'))
      },
      {
        path: '/popular',
        exact: true,
        component: lazy(() => import('views/Main/Popular'))
      },
      {
        path: '/upcoming',
        exact: true,
        component: lazy(() => import('views/Main/Upcoming'))
      },
      {
        path: '/now-playing',
        exact: true,
        component: lazy(() => import('views/Main/NowPlaying'))
      },
      {
        path: '/favorites',
        exact: true,
        component: lazy(() => import('views/Main/Favorites'))
      },
      {
        path: '/watch-later',
        exact: true,
        component: lazy(() => import('views/Main/WatchLater'))
      },
      {
        component: () => <Redirect to="/errors/404" />
      }
    ]
  },
];
