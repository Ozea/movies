// Material icons
import { Theaters, MovieFilter } from "@material-ui/icons";
import { ReactComponent as MovieIcon } from 'assets/movie-icon.svg';
import { ReactComponent as Hot } from 'assets/hot.svg';
import { ReactComponent as TvShow } from 'assets/tv-show.svg';
import { ReactComponent as Favorites } from 'assets/favorites.svg';
import { ReactComponent as WatchLater } from 'assets/watch-later.svg';
const drawerWidth = 240;
const sidebarConfig = [
  {
    items: [
      {
        title: 'Movies',
        href: '/movies',
        icon: MovieIcon
      },
      {
        title: 'Series',
        href: '/series',
        icon: Theaters
      },
      {
        title: 'TV Show',
        href: '/tv-show',
        icon: TvShow
      }
    ]
  },
  {
    items: [
      {
        title: 'Trending',
        href: '/trending',
        icon: Hot
      },
      {
        title: 'New',
        href: '/new',
        icon: TvShow
      }
    ]
  },
  {
    items: [
      {
        title: 'Favorites',
        href: '/favorites',
        icon: Favorites
      },
      {
        title: 'Watch later',
        href: '/watch-later',
        icon: WatchLater
      }
    ]
  },
];

export {
  drawerWidth,
  sidebarConfig
}
