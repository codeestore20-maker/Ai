import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { F as S } from './index-NXWXCubP.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as d } from './useQuery-DRUkKFoc.js';
import { u as x } from './store-C4CyAiCc.js';
import { D as L } from './index-C67aJrLL.js';
import { P as j } from './Pagination-CRu13oqr.js';
import { S as k } from './index-BkV56AkW.js';
import { S as P } from './skills-Dr1Utsva.js';
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
import './SkillsIcon-DjXX_Ijx.js';
import './index-DPxR_pVs.js';
import './index-I-KebpvS.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './Spotlight-Pxy2lV0i.js';
import './PublishedTime-D6v9vOK_.js';
import './index-CBHd6mXW.js';
import './index-CzIxmgzL.js';
import './index-ByEGfox1.js';
const st = g.memo(() => {
  const { q: r, page: i, category: m, sort: p, order: s } = d(),
    a = x((f) => f.useFetchSkillList),
    { data: o, isLoading: e } = a({
      category: m,
      order: s,
      page: i,
      pageSize: 21,
      q: r,
      sort: p ?? P.InstallCount,
    });
  if (e || !o) return t.jsx(h, {});
  const { items: l, currentPage: n, pageSize: u, totalCount: c } = o;
  return t.jsxs(S, {
    gap: 32,
    width: '100%',
    children: [
      t.jsx(k, { data: l }),
      t.jsx(j, { currentPage: n, pageSize: u, tab: L.Skills, total: c }),
    ],
  });
});
export { st as default };
