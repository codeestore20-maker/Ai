import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g, c as x, L as C, I as j, T as c, f as h, F as p, aE as L } from './index-wqF_YeCD.js';
import { C as k, a as S } from './CategoryMenu-CB0DMi4B.js';
import { q as b } from './base-AbuBx_QK.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { w as v } from './withSuspense-twnyXsUR.js';
import { u as E } from './useQuery-CzLf6bos.js';
import { S as I } from './const-lbjNOSiN.js';
import { u as T } from './store-TBLh4qUz.js';
import { D as _ } from './providerConfig-B8LLUHQ4.js';
import { m as D } from '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import { P as M } from './index-DTrKsH94.js';
import { L as R } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import './ScrollShadow-B80zwmng.js';
import './Menu-jar557S6.js';
import './index-Cug4OBsb.js';
import './EllipsisOutlined-DKvYkod-.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-C-p4Ij3D.js';
import './navigation--piBCllx.js';
import './discover-BbhnyhQy.js';
import './general-D3HMJCKF.js';
import './object-CksihGcT.js';
import './providerConfig-89if95-o.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-DZgkT6q2.js';
import './useFillId-Dc6zFnxP.js';
import './index-9h22Zn_o.js';
import './index-BX9vGYBm.js';
import './index-BPy_5YKG.js';
import './index-CSKGTDNP.js';
import './index-ChGKUVvC.js';
import './index-B5Y6WIKv.js';
import './index-D-8aLEt3.js';
const q = () => {
    const { t: s } = g('discover'),
      i = a.useMemo(
        () =>
          D(_, (e) => e.id).map((e) => ({
            icon: t.jsx(M, { provider: e.id, size: 18, type: 'mono' }),
            key: e.id,
            label: e.name,
          })),
        [],
      );
    return a.useMemo(
      () => [{ icon: R, key: 'all', label: s('mcp.categories.all.name') }, ...i],
      [s, i],
    );
  },
  z = a.memo(() => {
    const s = T((o) => o.useModelCategories),
      { category: i = 'all', q: e } = E(),
      { data: n = [] } = s({ q: e }),
      u = x(),
      d = q(),
      m = (o) =>
        b.stringifyUrl(
          { query: { category: o === 'all' ? null : o, q: e }, url: '/community/model' },
          { skipNull: !0 },
        ),
      y = (o) => {
        u(m(o));
        const r = document?.querySelector(`#${I}`);
        r && r.scrollTo({ behavior: 'smooth', top: 0 });
      },
      l = a.useMemo(() => n.reduce((o, r) => o + r.count, 0), [n]);
    return t.jsx(k, {
      mode: 'inline',
      selectedKeys: [i],
      items: d.map((o) => {
        const r = n.find((f) => f.category === o.key);
        return {
          extra:
            o.key === 'all'
              ? l > 0 &&
                t.jsx(c, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: l,
                })
              : r &&
                t.jsx(c, {
                  size: 'small',
                  style: { borderRadius: 12, paddingInline: 6 },
                  children: r.count,
                }),
          ...o,
          icon: t.jsx(j, { icon: o.icon, size: 18 }),
          label: t.jsx(C, { to: m(o.key), children: o.label }),
        };
      }),
      onClick: (o) => y(o.key),
    });
  }),
  P = v(z),
  N = h(({ css: s }) => ({
    mainContainer: s`
    position: relative;
  `,
  })),
  ho = () =>
    t.jsxs(p, {
      horizontal: !0,
      className: N.mainContainer,
      gap: 24,
      width: '100%',
      children: [
        t.jsx(S, { children: t.jsx(P, {}) }),
        t.jsx(p, { flex: 1, gap: 16, children: t.jsx(L, {}) }),
      ],
    });
export { ho as default };
