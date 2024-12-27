import { lazy } from 'react';

import type { PathType } from '../types/types';

/* eslint-disable react-refresh/only-export-components */
export const OvaTemplatep01 = lazy(() => import('../pages/ova-template-p01'));
export const OvaTemplatep02 = lazy(() => import('../pages/ova-template-p02'));

// Rutas
export const paths: PathType[] = [
  {
    title: 'Bienvenida',
    component: <OvaTemplatep01 />
  },
  {
    title: 'Objetivo de aprendizaje',
    component: <OvaTemplatep02 />
  },
];