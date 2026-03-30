import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as C, L as h, I as j, T as m, f as S, F as c, aE as v } from './index-NXWXCubP.js';
import { C as b, a as k } from './CategoryMenu-SXxtnxhr.js';
import { q as A } from './base-AbuBx_QK.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as D } from './withSuspense-twnyXsUR.js';
import { u as R } from './useQuery-DRUkKFoc.js';
import { S as q } from './const-lbjNOSiN.js';
import { u as E } from './store-C4CyAiCc.js';
import { a, A as I } from './assistants-Bnb1hBSy.js';
import { u as L } from './useCategory-CxVf1Yiq.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './ScrollShadow-6q2HKopF.js';
import './Menu-BrVs7-6o.js';
import './index-BNNY5gZK.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './LeftOutlined-C065dMtK.js';
import './index-CaXSHvap.js';
import './navigation-BncxkyKj.js';
import './discover-BXfpphP1.js';
import './general-D0ZSKJyo.js';
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
