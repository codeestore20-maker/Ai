import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as x } from './index-CCbaqAw2.js';
import { r as A } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as l } from './useQuery-D6EfCjxZ.js';
import { u as L } from './store-Bpg7VpjG.js';
import { D as j } from './index-C67aJrLL.js';
import { P } from './Pagination-Zfjg6ob-.js';
import { A as S } from './index-B-BBB4ID.js';
import { A as D } from './assistants-Bnb1hBSy.js';
import { L as b } from './ListLoading-jgsXNXyr.js';
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
import './AssistantEmpty-DL7hJqrq.js';
import './Empty-BCfh_42o.js';
import './Block-BrEJCAE1.js';
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './PublishedTime-TQKkafqK.js';
import './format-CQDeZFBW.js';
import './currency-iJxIWo9y.js';
import './index-Dm4EFq-L.js';
import './index-CvPxoXfq.js';
import './index-CHu9DsJf.js';
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
