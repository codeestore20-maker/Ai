import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as x, L as C, I as h, T as l, f as j, F as m, aE as S } from './index-NXWXCubP.js';
import { C as v, a as M } from './CategoryMenu-SXxtnxhr.js';
import { q as b } from './base-AbuBx_QK.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as k } from './withSuspense-twnyXsUR.js';
import { u as D } from './useMCPCategory-Bzn1UEqT.js';
import { u as R } from './useQuery-DRUkKFoc.js';
import { S as q } from './const-lbjNOSiN.js';
import { u as E } from './store-C4CyAiCc.js';
import { a, M as I } from './mcp-bmlNDBWs.js';
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
const L = p.memo(() => {
    const r = E((o) => o.useMcpCategories),
      { category: u = a.Discover, q: i } = R(),
      { data: s = [] } = r({ q: i }),
      d = x(),
      y = D(),
      n = (o) =>
        b.stringifyUrl(
          {
            query: {
              category: o === a.Discover ? null : o,
              q: i,
              sort: o === a.Discover ? I.Recommended : null,
            },
            url: '/community/mcp',
          },
          { skipNull: !0 },
        ),
      g = (o) => {
        d(n(o));
        const e = document?.querySelector(`#${q}`);
        e && e.scrollTo({ behavior: 'smooth', top: 0 });
      },
      c = p.useMemo(() => s.reduce((o, e) => o + e.count, 0), [s]);
    return t.jsx(v, {
      mode: 'inline',
      selectedKeys: [u],
      items: y.map((o) => {
        const e = s.find((f) => f.category === o.key);
        return {
          extra:
            o.key === 'all'
              ? c > 0 &&
                t.jsx(l, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: c,
                })
              : e &&
                t.jsx(l, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: e.count,
                }),
          ...o,
          icon: t.jsx(h, { icon: o.icon, size: 18 }),
          label: t.jsx(C, { to: n(o.key), children: o.label }),
        };
      }),
      onClick: (o) => g(o.key),
    });
  }),
  _ = k(L),
  z = j(({ css: r }) => ({
    mainContainer: r`
    position: relative;
  `,
  })),
  io = () =>
    t.jsxs(m, {
      horizontal: !0,
      className: z.mainContainer,
      gap: 24,
      width: '100%',
      children: [
        t.jsx(M, { children: t.jsx(_, {}) }),
        t.jsx(m, { flex: 1, gap: 16, children: t.jsx(S, {}) }),
      ],
    });
export { io as default };
