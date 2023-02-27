import { IReactRouterDinamico } from '@infra/types';
import { Navigate } from 'react-router-dom';
import { inicioRouteModule } from './inicio/inicio.route';

const rotasModulos: Array<IReactRouterDinamico> = [
  ...inicioRouteModule,
  {
    path: '/',
    element: <Navigate to={'/inicio'} />,
  },
];

export { rotasModulos };
