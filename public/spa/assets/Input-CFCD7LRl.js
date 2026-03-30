import { v as i } from './style-DH5CJqbo.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as n } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as u } from './index-vHLvwros.js';
import { a3 as l, j as d } from './index-wqF_YeCD.js';
const a = p.memo(({ ref: o, variant: t, shadow: s, className: e, ...m }) => {
  const { isDarkMode: r } = l();
  return n.jsx(u, {
    ref: o,
    variant: t || (r ? 'filled' : 'outlined'),
    className: d(i({ shadow: s, variant: t || (r ? 'filled' : 'outlined') }), e),
    ...m,
  });
});
a.displayName = 'Input';
var v = a;
export { v as I };
