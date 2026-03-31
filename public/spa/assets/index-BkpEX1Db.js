import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as l } from './index-wqF_YeCD.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as x } from './useQuery-CzLf6bos.js';
import { u as L } from './store-TBLh4qUz.js';
import { D as j } from './index-C67aJrLL.js';
import { P as M } from './Pagination-COlNb-ue.js';
import { M as P } from './index-DHPArDXX.js';
import { L as D } from './ListLoading-B57zayzg.js';
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
import './Popover-DbrKwSZe.js';
import './parseTrigger-J7YMesNw.js';
import './useOpenInteractionType-DzU6ZbbX.js';
import './index-CrxdhUyb.js';
import './index-wR6vMS6h.js';
import './index-9X-Qy44z.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './format-xvC2wqL3.js';
import './currency-iJxIWo9y.js';
import './time-CgCxdcRj.js';
import './index-ChGKUVvC.js';
import './index-DZgkT6q2.js';
import './useFillId-Dc6zFnxP.js';
import './index-DTrKsH94.js';
import './providerConfig-89if95-o.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-9h22Zn_o.js';
import './index-BX9vGYBm.js';
import './index-BPy_5YKG.js';
import './index-CSKGTDNP.js';
import './index-B5Y6WIKv.js';
import './index-D-8aLEt3.js';
import './index-CJNxqVqR.js';
import './PublishedTime-nyW4FY6x.js';
import './index-BkwR-xvn.js';
const Do = g.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = x(),
    e = L((f) => f.useModelList),
    { data: t, isLoading: a } = e({ category: m, order: s, page: i, pageSize: 21, q: r, sort: p });
  if (a || !t) return o.jsx(D, {});
  const { items: n, currentPage: d, pageSize: u, totalCount: c } = t;
  return o.jsxs(l, {
    gap: 32,
    width: '100%',
    children: [
      o.jsx(P, { data: n }),
      o.jsx(M, { currentPage: d, pageSize: u, tab: j.Models, total: c }),
    ],
  });
});
export { Do as default };
