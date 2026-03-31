import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as C, L as h, I as j, T as m, f as S, F as c, aE as v } from './index-CCbaqAw2.js';
import { C as b, a as k } from './CategoryMenu-D5gXJWYe.js';
import { q as A } from './base-AbuBx_QK.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as D } from './withSuspense-twnyXsUR.js';
import { u as R } from './useQuery-D6EfCjxZ.js';
import { S as q } from './const-lbjNOSiN.js';
import { u as E } from './store-Bpg7VpjG.js';
import { a, A as I } from './assistants-Bnb1hBSy.js';
import { u as L } from './useCategory-Dsw002Ew.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './ScrollShadow-BNhqKWoo.js';
import './Menu-Bh1hldLX.js';
import './index-D3URHQbI.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-BEWAql7N.js';
import './navigation-Bah7Yd2Q.js';
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './object-CksihGcT.js';
const _ = u.memo(() => {
    const e = E((t) => t.useAssistantCategories),
      { category: p = a.Discover, q: i, source: d } = R(),
      { data: r = [] } = e({ q: i, source: d }),
      y = C(),
      g = L(),
      n = (t) =>
        A.stringifyUrl(
          {
            query: {
              category: t === a.Discover ? null : t,
              q: i,
              sort: t === a.Discover ? I.Recommended : null,
            },
            url: '/community/agent',
          },
          { skipNull: !0 },
        ),
      f = (t) => {
        y(n(t));
        const s = document?.querySelector(`#${q}`);
        s && s.scrollTo({ behavior: 'smooth', top: 0 });
      },
      l = u.useMemo(() => r.reduce((t, s) => t + s.count, 0), [r]);
    return o.jsx(b, {
      mode: 'inline',
      selectedKeys: [p],
      items: g.map((t) => {
        const s = r.find((x) => x.category === t.key);
        return {
          extra:
            t.key === 'all'
              ? l > 0 &&
                o.jsx(m, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: l,
                })
              : s &&
                o.jsx(m, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: s.count,
                }),
          ...t,
          icon: o.jsx(j, { icon: t.icon, size: 18 }),
          label: o.jsx(h, { to: n(t.key), children: t.label }),
        };
      }),
      onClick: (t) => f(t.key),
    });
  }),
  z = D(_),
  N = S(({ css: e }) => ({
    mainContainer: e`
    position: relative;
  `,
  })),
  nt = () =>
    o.jsxs(c, {
      horizontal: !0,
      className: N.mainContainer,
      gap: 24,
      width: '100%',
      children: [
        o.jsx(k, { children: o.jsx(z, {}) }),
        o.jsx(c, { flex: 1, gap: 16, children: o.jsx(v, {}) }),
      ],
    });
export { nt as default };
