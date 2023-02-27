import { IReactRouterDinamico } from '@infra/types';
import { InicioScreen } from './telas/inicio.screen';

const inicioRouteModule: Array<IReactRouterDinamico> = [
    {
        path: '/inicio',
        element: <InicioScreen />
    },
    {
        path: '/signin-callback',
        element: <InicioScreen />
    },
];

export { inicioRouteModule };
