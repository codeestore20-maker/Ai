import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { c as x, L as C, I as S, T as m, f as h, F as c, aE as j } from './index-NXWXCubP.js';
import { C as k, a as b } from './CategoryMenu-SXxtnxhr.js';
import { q as I } from './base-AbuBx_QK.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as q } from './withSuspense-twnyXsUR.js';
import { u as v } from './useQuery-DRUkKFoc.js';
import { u as E } from './useSkillCategory-BgoAnctq.js';
import { S as L } from './const-lbjNOSiN.js';
import { u as R } from './store-C4CyAiCc.js';
import { a, S as _ } from './skills-Dr1Utsva.js';
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
const z = u.memo(() => {
    const e = R((t) => t.useSkillCategories),
      { category: p = a.All, q: i } = v(),
      { data: s = [] } = e({ q: i }),
      d = x(),
      y = E(),
      l = (t) =>
        I.stringifyUrl(
          {
            query: {
              category: t === a.All ? null : t,
              q: i,
              sort: t === a.All ? _.InstallCount : null,
            },
            url: '/community/skill',
          },
          { skipNull: !0 },
        ),
      g = (t) => {
        d(l(t));
        const r = document?.querySelector(`#${L}`);
        r && r.scrollTo({ behavior: 'smooth', top: 0 });
      },
      n = u.useMemo(() => s.reduce((t, r) => t + (r.count || 0), 0), [s]);
    return o.jsx(k, {
      mode: 'inline',
      selectedKeys: [p],
      items: y.map((t) => {
        const r = s.find((f) => f.category === t.key);
        return {
          extra:
            t.key === 'all'
              ? n > 0 &&
                o.jsx(m, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: n,
                })
              : r &&
                o.jsx(m, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: r.count,
                }),
          ...t,
          icon: o.jsx(S, { icon: t.icon, size: 18 }),
          label: o.jsx(C, { to: l(t.key), children: t.label }),
        };
      }),
      onClick: (t) => g(t.key),
    });
  }),
  A = q(z),
  N = h(({ css: e }) => ({
    mainContainer: e`
    position: relative;
  `,
  })),
  it = () =>
    o.jsxs(c, {
      horizontal: !0,
      className: N.mainContainer,
      gap: 24,
      width: '100%',
      children: [
        o.jsx(b, { children: o.jsx(A, {}) }),
        o.jsx(c, { flex: 1, gap: 16, children: o.jsx(j, {}) }),
      ],
    });
export { it as default };
