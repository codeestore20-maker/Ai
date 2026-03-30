import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as l } from './index-NXWXCubP.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as x } from './useQuery-DRUkKFoc.js';
import { u as L } from './store-C4CyAiCc.js';
import { D as j } from './index-C67aJrLL.js';
import { P as M } from './Pagination-CRu13oqr.js';
import { M as P } from './index-Dc-7ZzAC.js';
import { L as D } from './ListLoading-D7RGbQiI.js';
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
import './Popover-GBtnGZmF.js';
import './parseTrigger-D_iLHf0y.js';
import './useOpenInteractionType-D-fuFThM.js';
import './index-Chxc_ga_.js';
import './index-DPxR_pVs.js';
import './index-I-KebpvS.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './format-9T4dPj0t.js';
import './currency-iJxIWo9y.js';
import './time-BYXIPmhU.js';
import './index-2r4lem2R.js';
import './index-CzIxmgzL.js';
import './useFillId-Dc6zFnxP.js';
import './index-DuuNBVha.js';
import './providerConfig-CT5lEe2v.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-VGKj7uAo.js';
import './index-BiYWSDA1.js';
import './index-DbxqjhDO.js';
import './index-CBHd6mXW.js';
import './index-BAjQAeQa.js';
import './index-BVMYj18a.js';
import './index-nivYtRlH.js';
import './PublishedTime-D6v9vOK_.js';
import './index-ByEGfox1.js';
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
