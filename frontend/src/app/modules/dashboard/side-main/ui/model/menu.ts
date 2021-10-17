import { NavItem } from './nav-item';

export let menu: NavItem[] = [
    {
        displayName: 'Inicio',
        iconName: 'home',
        route: './'
    },
    {
        displayName: 'Compañias',
        iconName: 'business',
        route: './compania'
    },
    {
        displayName: 'Usuarios',
        iconName: 'people',
        route: './usuario'
    }
];