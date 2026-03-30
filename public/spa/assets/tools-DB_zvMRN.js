const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/_auth-DF0TW5D0.js',
      'assets/purify.es-r8glNMJW.js',
      'assets/index-wqF_YeCD.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BujaBhQC.js',
      'i18n/i18n-en-US-Cy0tuvjN.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-B8LLUHQ4.js',
      'assets/index-yzzpVuwK.css',
      'assets/store-D4ebFM1W.js',
      'assets/index-By9RaYDB.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
      'assets/selectors-ByZlqqp9.js',
    ]),
) => i.map((i) => d[i]);
import { O as m, P as u, S as _, y as p, Q as d, _ as c } from './index-wqF_YeCD.js';
let i = 0;
const E = 5e3,
  k =
    () =>
    ({ op: t, next: n }) =>
      d((a) =>
        n(t).subscribe({
          complete: () => a.complete(),
          error: async (e) => {
            const s = e.data?.httpStatus,
              r = e.data?.code;
            if (
              (console.info('[toolsClient] Error:', {
                code: r,
                message: e.message,
                path: t.path,
                status: s,
              }),
              (s === 401 || r === 'UNAUTHORIZED') && t.path.startsWith('market.'))
            ) {
              const o = Date.now();
              if (o - i > E) {
                ((i = o),
                  console.info(
                    '[toolsClient] Emitting market-unauthorized event for path:',
                    t.path,
                  ));
                const { marketAuthEvents: h } = await c(async () => {
                  const { marketAuthEvents: l } = await import('./events-NnJKY1rz.js');
                  return { marketAuthEvents: l };
                }, []);
                h.emit('market-unauthorized', { path: t.path, timestamp: o });
              }
            }
            a.error(e);
          },
          next: (e) => a.next(e),
        }),
      ),
  w = m({
    links: [
      k,
      u({
        headers: async () => {
          const { createHeaderWithAuth: t } = await c(
            async () => {
              const { createHeaderWithAuth: n } = await import('./_auth-DF0TW5D0.js').then(
                (a) => a._,
              );
              return { createHeaderWithAuth: n };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
          );
          return t();
        },
        maxURLLength: 2083,
        transformer: _,
        url: p('/trpc/tools'),
      }),
    ],
  });
export { w as t };
