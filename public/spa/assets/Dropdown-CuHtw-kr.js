import { ag as c } from './index-wqF_YeCD.js';
import { m as f } from './Menu-jar557S6.js';
import { r } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as m } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { D as u } from './index-DIx15oSt.js';
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
