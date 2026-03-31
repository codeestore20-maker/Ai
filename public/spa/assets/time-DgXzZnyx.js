import { a1 as t } from './index-CCbaqAw2.js';
const e = () => t().startOf('day'),
  o = (s) => t().subtract(s, 'month').startOf('month'),
  r = () => o(1).endOf('month'),
  d = (s, a = 14) => t().diff(t(s), 'day') < a;
export { d as i, r as l, e as t };
