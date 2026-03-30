import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as c } from './index-NXWXCubP.js';
import { r as P } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as g } from './useQuery-DRUkKFoc.js';
import { u as x } from './store-C4CyAiCc.js';
import { D as v } from './index-C67aJrLL.js';
import { P as L } from './Pagination-CRu13oqr.js';
import { P as j } from './index-DtjG72Rm.js';
import { L as l } from './ListLoading-D7RGbQiI.js';
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
import './MaskShadow-CJebotSk.js';
import './index-DGiwRtvA.js';
import './providerConfig-CT5lEe2v.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-CzIxmgzL.js';
import './useFillId-Dc6zFnxP.js';
import './index-VGKj7uAo.js';
import './index-BiYWSDA1.js';
import './index-DbxqjhDO.js';
import './index-CBHd6mXW.js';
import './index-2r4lem2R.js';
import './index-BAjQAeQa.js';
import './index-BVMYj18a.js';
import './index-BTi2010u.js';
import './index-nivYtRlH.js';
import './index-ByEGfox1.js';
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
