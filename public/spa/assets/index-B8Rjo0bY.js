import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as g } from './index-wqF_YeCD.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as M } from './useQuery-CzLf6bos.js';
import { u as L } from './store-TBLh4qUz.js';
import { D as j } from './index-C67aJrLL.js';
import { P as l } from './Pagination-COlNb-ue.js';
import { M as P } from './index-RUiefzQY.js';
import { M as S } from './mcp-bmlNDBWs.js';
import { L as h } from './ListLoading-B57zayzg.js';
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
import './index-wR6vMS6h.js';
import './index-9X-Qy44z.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './Spotlight-Bb0bqvsS.js';
import './PublishedTime-nyW4FY6x.js';
import './Link-PNCxmuTc.js';
import './index-CSKGTDNP.js';
import './index-DZgkT6q2.js';
import './index-BkwR-xvn.js';
const st = x.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = M(),
    a = L((d) => d.useFetchMcpList),
    { data: o, isLoading: e } = a({
      category: m,
      order: s,
      page: i,
      pageSize: 21,
      q: r,
      sort: p ?? S.Recommended,
    });
  if (e || !o) return t.jsx(h, {});
  const { items: c, currentPage: n, pageSize: u, totalCount: f } = o;
  return t.jsxs(g, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(P, { data: c }),
      t.jsx(l, { currentPage: n, pageSize: u, tab: j.Mcp, total: f }),
    ],
  });
});
export { st as default };
