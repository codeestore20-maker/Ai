import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { k as n } from './Popover-DbrKwSZe.js';
import { aI as l } from './index-wqF_YeCD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { A as i } from './index-wR6vMS6h.js';
import { I as m } from './index-le_mgsJx.js';
const u = a.memo(({ manifest: e, children: t, trigger: r = 'click' }) =>
    o.jsx(n, {
      placement: 'right',
      styles: { content: { width: 400 } },
      trigger: r,
      content: o.jsx(l, {
        language: 'json',
        style: { maxHeight: 600, maxWidth: 400, overflow: 'scroll' },
        children: JSON.stringify(e, null, 2),
      }),
      children: t,
    }),
  ),
  g = a.memo(({ avatar: e, style: t, size: r = 40, alt: s }) =>
    e === 'MCP_AVATAR'
      ? o.jsx(m.Avatar, {
          className: 'ant-avatar',
          shape: 'square',
          size: r,
          style: { flex: 'none', overflow: 'hidden', ...t },
        })
      : o.jsx(i, {
          alt: s,
          avatar: e,
          shape: 'square',
          size: r,
          style: { flex: 'none', overflow: 'hidden', ...t },
        }),
  );
export { u as M, g as P };
