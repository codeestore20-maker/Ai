import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as l } from './index-CCbaqAw2.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as x } from './useQuery-D6EfCjxZ.js';
import { u as L } from './store-Bpg7VpjG.js';
import { D as j } from './index-C67aJrLL.js';
import { P as M } from './Pagination-Zfjg6ob-.js';
import { M as P } from './index-CQxXJ4tx.js';
import { L as D } from './ListLoading-jgsXNXyr.js';
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
import './Popover-BUCP4Otk.js';
import './parseTrigger-DaLSGJKf.js';
import './useOpenInteractionType-DyLJ0hMf.js';
import './index-B0xCQUwS.js';
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './format-CQDeZFBW.js';
import './currency-iJxIWo9y.js';
import './time-DgXzZnyx.js';
import './index-BuK-PXoS.js';
import './index-CvPxoXfq.js';
import './useFillId-Dc6zFnxP.js';
import './index-DSpPiFfl.js';
import './providerConfig-DDLMhlDS.js';
import './ProviderIcon-Dg9rvCHb.js';
import './index-Chog5AK2.js';
import './index-Dnykz53F.js';
import './index-FbvwNFNF.js';
import './index-C_P8ne77.js';
import './index-DQdi0815.js';
import './index-B8mGalR4.js';
import './index-BDkIsE6B.js';
import './PublishedTime-TQKkafqK.js';
import './index-CHu9DsJf.js';
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
