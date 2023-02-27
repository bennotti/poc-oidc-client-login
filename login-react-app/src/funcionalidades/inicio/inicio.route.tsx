import { IReactRouterDinamico } from '@infra/types';
import { InicioScreen } from './telas/inicio.screen';

const inicioRouteModule: Array<IReactRouterDinamico> = [
    {
        path: '/login',
        element: <InicioScreen />
    },
];

export { inicioRouteModule };
