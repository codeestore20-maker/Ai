import { ag as c } from './index-NXWXCubP.js';
import { m as f } from './Menu-BrVs7-6o.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as u } from './index-X6_ijeKF.js';
const s = r.memo(({ children: t, iconProps: e, menu: a, ...p }) => {
  const { items: o, ...n } = a,
    i = r.useMemo(() => o.map((d) => f(d)), [o]);
  return m.jsx(c, {
    config: { size: 'small', ...e },
    children: m.jsx(u, { menu: { ...n, items: i }, ...p, children: t }),
  });
});
s.displayName = 'Dropdown';
var I = s;
export { I as D };
