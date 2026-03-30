import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as c } from './index-wqF_YeCD.js';
import { r as P } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as g } from './useQuery-CzLf6bos.js';
import { u as x } from './store-TBLh4qUz.js';
import { D as v } from './index-C67aJrLL.js';
import { P as L } from './Pagination-COlNb-ue.js';
import { P as j } from './index-BID6Adgl.js';
import { L as l } from './ListLoading-B57zayzg.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './base-AbuBx_QK.js';
import './navigation--piBCllx.js';
import './discover-BbhnyhQy.js';
import './general-D3HMJCKF.js';
import './object-CksihGcT.js';
import './const-lbjNOSiN.js';
import './Pagination-B8LfT_Cq.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-D3TOmt6l.js';
import './Grid-DD24D09i.js';
import './Empty-mDwtuxWq.js';
import './Block-BiiCaTlV.js';
import './MaskShadow-kFAkinz2.js';
import './index-B5pG3ZtJ.js';
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
import './index-B3M6HeAv.js';
import './index-CJNxqVqR.js';
import './index-BkwR-xvn.js';
const nr = P.memo(() => {
  const { q: t, page: i, sort: m, order: p } = g(),
    s = x((f) => f.useProviderList),
    { data: o, isLoading: e } = s({ order: p, page: i, pageSize: 21, q: t, sort: m });
  if (e || !o) return r.jsx(l, {});
  const { items: a, currentPage: n, pageSize: d, totalCount: u } = o;
  return r.jsxs(c, {
    gap: 32,
    width: '100%',
    children: [
      r.jsx(j, { data: a }),
      r.jsx(L, { currentPage: n, pageSize: d, tab: v.Providers, total: u }),
    ],
  });
});
export { nr as default };
