// Material icons
import { Dashboard, Person } from "@material-ui/icons";

export const sidebarConfig = [
  {
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Dashboard
      }
    ]
  },
  {
    items: [
      {
        title: 'Profile',
        href: '/profile',
        icon: Person,
        items: [
          {
            title: 'Settings',
            href: '/profile/settings',
            icon: Dashboard
          }
        ]
      }
    ]
  }
];
