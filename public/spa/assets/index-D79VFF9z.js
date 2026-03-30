import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as x } from './index-NXWXCubP.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from './useQuery-DRUkKFoc.js';
import { u as L } from './store-C4CyAiCc.js';
import { D as j } from './index-C67aJrLL.js';
import { P } from './Pagination-CRu13oqr.js';
import { A as S } from './index-BYq0gSwN.js';
import { A as D } from './assistants-Bnb1hBSy.js';
import { L as b } from './ListLoading-D7RGbQiI.js';
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
import './AssistantEmpty-divd9XR3.js';
import './Empty-BQG-VGZE.js';
import './Block-DRcWCw_2.js';
import './index-DPxR_pVs.js';
import './index-I-KebpvS.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './PublishedTime-D6v9vOK_.js';
import './format-9T4dPj0t.js';
import './currency-iJxIWo9y.js';
import './index-Bwt-v5WG.js';
import './index-CzIxmgzL.js';
import './index-ByEGfox1.js';
const et = A.memo(() => {
  const { q: r, page: i, category: s, sort: m, order: p, source: a } = l(),
    e = L((g) => g.useAssistantList),
    { data: o, isLoading: n } = e({
      category: s,
      includeAgentGroup: !0,
      order: p,
      page: i,
      pageSize: 21,
      q: r,
      sort: m ?? D.Recommended,
      source: a,
    });
  if (n || !o) return t.jsx(b, {});
  const { items: u, currentPage: c, pageSize: f, totalCount: d } = o;
  return t.jsxs(x, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(S, { data: u }),
      t.jsx(P, { currentPage: c, pageSize: f, tab: j.Assistants, total: d }),
    ],
  });
});
export { et as default };
