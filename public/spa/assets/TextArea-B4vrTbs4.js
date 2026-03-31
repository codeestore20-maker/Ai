import { v as n } from './style-DS5mAB1W.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { j as x } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { I as d } from './index-BMMxU3x3.js';
import { a3 as f, j as u } from './index-CCbaqAw2.js';
const a = p.memo(
  ({ ref: t, variant: e, shadow: o, className: s, resize: i = !1, style: m, ...l }) => {
    const { isDarkMode: r } = f();
    return x.jsx(d.TextArea, {
      ref: t,
      variant: e || (r ? 'filled' : 'outlined'),
      className: u(n({ shadow: o, variant: e || (r ? 'filled' : 'outlined') }), s),
      style: { resize: i ? void 0 : 'none', ...m },
      ...l,
    });
  },
);
a.displayName = 'TextArea';
var y = a;
export { y as T };
