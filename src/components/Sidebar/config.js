// Material icons
import { Theaters, Payment } from "@mui/icons-material";
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
        title: 'Popular',
        href: '/popular',
        icon: TvShow
      }
    ]
  },
  {
    items: [
      {
        title: 'Upcoming',
        href: '/upcoming',
        icon: Hot
      },
      {
        title: 'Now playing',
        href: '/now-playing',
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
  {
    items: [
      {
        title: 'Pricing plans',
        href: '/pricing',
        icon: Payment
      }
    ]
  }
];

export {
  drawerWidth,
  sidebarConfig
}
