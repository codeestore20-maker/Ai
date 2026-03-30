import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as g } from './index-NXWXCubP.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as M } from './useQuery-DRUkKFoc.js';
import { u as L } from './store-C4CyAiCc.js';
import { D as j } from './index-C67aJrLL.js';
import { P as l } from './Pagination-CRu13oqr.js';
import { M as P } from './index-DQoJiP4A.js';
import { M as S } from './mcp-bmlNDBWs.js';
import { L as h } from './ListLoading-D7RGbQiI.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './base-AbuBx_QK.js';
import './navigation-BncxkyKj.js';
import './discover-BXfpphP1.js';
import './general-D0ZSKJyo.js';
import './object-CksihGcT.js';
import './const-lbjNOSiN.js';
import './Pagination-D1Fbg5s7.js';
import './LeftOutlined-C065dMtK.js';
import './index-CGuFotwq.js';
import './Grid-B-5aS02j.js';
import './Empty-BQG-VGZE.js';
import './Block-DRcWCw_2.js';
import './index-DPxR_pVs.js';
import './index-I-KebpvS.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './Spotlight-Pxy2lV0i.js';
import './PublishedTime-D6v9vOK_.js';
import './Link-BJILtu8K.js';
import './index-CBHd6mXW.js';
import './index-CzIxmgzL.js';
import './index-ByEGfox1.js';
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
