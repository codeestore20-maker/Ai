import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as g } from './index-CCbaqAw2.js';
import { r as x } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as M } from './useQuery-D6EfCjxZ.js';
import { u as L } from './store-Bpg7VpjG.js';
import { D as j } from './index-C67aJrLL.js';
import { P as l } from './Pagination-Zfjg6ob-.js';
import { M as P } from './index-OEQKtZuO.js';
import { M as S } from './mcp-bmlNDBWs.js';
import { L as h } from './ListLoading-jgsXNXyr.js';
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
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './Spotlight-Ci0MiVmf.js';
import './PublishedTime-TQKkafqK.js';
import './Link-Pr-WcYA3.js';
import './index-C_P8ne77.js';
import './index-CvPxoXfq.js';
import './index-CHu9DsJf.js';
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
