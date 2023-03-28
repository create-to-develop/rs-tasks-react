import { AboutUs, ErrorPage, Home, Forms } from '../pages/index';

export interface Routes {
  id: number;
  path: string;
  element: Pages;
  linkMessage: string;
}

type Pages = typeof Home | typeof AboutUs | typeof ErrorPage;

export const routes: Routes[] = [
  {
    id: 1,
    path: '/',
    element: Home,
    linkMessage: 'Home',
  },
  {
    id: 2,
    path: '/about',
    element: AboutUs,
    linkMessage: 'About us',
  },
  {
    id: 3,
    path: '*',
    element: ErrorPage,
    linkMessage: '404',
  },
  {
    id: 4,
    path: '/forms',
    element: Forms,
    linkMessage: 'Forms',
  },
];
