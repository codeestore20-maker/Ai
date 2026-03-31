import { j as r } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as c } from './index-CCbaqAw2.js';
import { r as P } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as g } from './useQuery-D6EfCjxZ.js';
import { u as x } from './store-Bpg7VpjG.js';
import { D as v } from './index-C67aJrLL.js';
import { P as L } from './Pagination-Zfjg6ob-.js';
import { P as j } from './index-cM4g9N3o.js';
import { L as l } from './ListLoading-jgsXNXyr.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './base-AbuBx_QK.js';
import './navigation-Bah7Yd2Q.js';
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './object-CksihGcT.js';
import './const-lbjNOSiN.js';
import './Pagination-Bwnh0Gn9.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-Bw1eJfiR.js';
import './Grid-KYqXrx43.js';
import './Empty-BCfh_42o.js';
import './Block-BrEJCAE1.js';
import './MaskShadow-DlqwFqVQ.js';
import './index-BdwlzBgk.js';
import './providerConfig-DDLMhlDS.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-CvPxoXfq.js';
import './useFillId-Dc6zFnxP.js';
import './index-Chog5AK2.js';
import './index-Dnykz53F.js';
import './index-FbvwNFNF.js';
import './index-C_P8ne77.js';
import './index-BuK-PXoS.js';
import './index-DQdi0815.js';
import './index-B8mGalR4.js';
import './index-C-qGEoQM.js';
import './index-BDkIsE6B.js';
import './index-CHu9DsJf.js';
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
