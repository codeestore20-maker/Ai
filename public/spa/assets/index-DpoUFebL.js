import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as x } from './index-wqF_YeCD.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from './useQuery-CzLf6bos.js';
import { u as L } from './store-TBLh4qUz.js';
import { D as j } from './index-C67aJrLL.js';
import { P } from './Pagination-COlNb-ue.js';
import { A as S } from './index-BCYoOX05.js';
import { A as D } from './assistants-Bnb1hBSy.js';
import { L as b } from './ListLoading-B57zayzg.js';
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
import './AssistantEmpty-CYd4Ejs9.js';
import './Empty-mDwtuxWq.js';
import './Block-BiiCaTlV.js';
import './index-wR6vMS6h.js';
import './index-9X-Qy44z.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './PublishedTime-nyW4FY6x.js';
import './format-xvC2wqL3.js';
import './currency-iJxIWo9y.js';
import './index-le_mgsJx.js';
import './index-DZgkT6q2.js';
import './index-BkwR-xvn.js';
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
