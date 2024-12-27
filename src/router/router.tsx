import { Suspense, useRef } from 'react';
import { Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';

import { OvaProvider } from '@/context/ova-context';

import Page404 from '../pages/404';
import Cover from '../pages/cover';
import type { Language, PathType } from '../types/types';

import { paths } from './paths';

/**
 * Genera un array de rutas parseadas basado en el número de paths.
 * Cada ruta sigue el formato `/page-X`, donde X es el índice de la ruta.
 *
 * @param paths - Array de rutas
 * @returns Array de strings con las rutas parseadas
 */
const parsedPaths = (paths: PathType[]): string[] => Array.from({ length: paths.length }, (_, i) => `/page-${i + 1}`);

/**
 * Genera un array con los titulos de los paths.
 *
 * @param paths - Array de titulos
 * @returns Array de string con los titulos de las páginas.
 */
const getTitles = (paths: PathType[]): string[] => paths.map(({ title }) => title);

const App = () => {
  const refPageTitle = useRef<string | null>(null);

  const routes = parsedPaths(paths);
  const titles = getTitles(paths);
  const baseTitle = getBasePageTitle();
  const language = getPageLanguage();

  /**
   * Obtiene el titulo inicial de la página.
   */
  function getBasePageTitle() {
    if (refPageTitle.current === null) {
      refPageTitle.current = document.title;
    }
    return refPageTitle.current;
  }

  /**
   * Obtiene el lenguaje de la página
   *  */ 
  function getPageLanguage() {
    const lang = document.documentElement?.lang;
    return lang as Language
  }

  /**
   * Genera las rutas provenientes del archivo paths
   */
  const createRoutes = (paths: PathType[]): JSX.Element[] =>
    paths.map((item, index) => (
      <Route key={window.crypto.randomUUID()} path={routes[index]}>
        <section>
          <Suspense fallback={<h1>spinner</h1>}>{item.component}</Suspense>
        </section>
      </Route>
    ));

  return (
    <OvaProvider value={{ routes, baseTitle, lang: language, titles: titles }}>
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/">
            <section>
              <Cover />
            </section>
          </Route>
          {createRoutes(paths)}
          <Route>{(params: { '*': string }) => <Page404 page={params['*']} />}</Route>
        </Switch>
      </Router>
    </OvaProvider>
  );
};

export default App;
