import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as m, d as l, c, k as d, F as p, A as h, bz as f, aE as x } from './index-wqF_YeCD.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as u, U as y, F as g } from './index-DFnapB1A.js';
import { W as j } from './index-CuXRElpN.js';
import { S as v, M as S } from './const-lbjNOSiN.js';
import { N as C } from './index-CM5xBcBb.js';
import { bq as N } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './index-DX6H0ZUv.js';
import './SearchBar-CtP9K3Py.js';
import './Input-CFCD7LRl.js';
import './style-DH5CJqbo.js';
import './index-vHLvwros.js';
import './index-DoTPv69l.js';
import './Input-B_ItaHnj.js';
import './index-D3TOmt6l.js';
import './EyeOutlined-DfHAjohP.js';
import './TextArea-dBYiV5h5.js';
import './Spotlight-Bb0bqvsS.js';
import './index-BJ9KbyB2.js';
import './withSuspense-twnyXsUR.js';
import './useQueryRoute-DE6qajN7.js';
import './base-AbuBx_QK.js';
import './navigation--piBCllx.js';
import './index-wR6vMS6h.js';
import './index-9X-Qy44z.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './index-BkwR-xvn.js';
import './Block-BiiCaTlV.js';
import './MarketAuthProvider-DbqeEkZ0.js';
import './_url-5rJL-Hpp.js';
import './Modal-BOLB10DT.js';
import './Drawer-Bub1oHxZ.js';
import './index-02V2dFou.js';
import './row-CjE_Fa9c.js';
import './Pagination-B8LfT_Cq.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-Bw2NYvGm.js';
import './index-dWohkCtg.js';
import './useBubbleLock-D8efMGR_.js';
import './events-NnJKY1rz.js';
import './Trans-DQn6XkDw.js';
import './TextArea-HEXidvoE.js';
import './index-D3L0HQGD.js';
import './EmojiPicker-CPvx8pel.js';
import './useTranslation-BvAL3EmF.js';
import './emojiPicker-fXP8_c7a.js';
import './Popover-DbrKwSZe.js';
import './parseTrigger-J7YMesNw.js';
import './useOpenInteractionType-DzU6ZbbX.js';
import './Tabs-Cn9A48o2.js';
import './index-B6BaVDQW.js';
import './EllipsisOutlined-DKvYkod-.js';
import './PlusOutlined-DJcgxPPp.js';
import './Dropdown-BRh18yeL.js';
import './index-DRUoAI_X.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-CnpjojkM.js';
import './index-Ciqn2WuZ.js';
import './general-D3HMJCKF.js';
import './store-I8paDSMM.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
import './SiX-DO6VXJ8i.js';
import './SiGithub-Bv-kH4Y-.js';
import './tools-DB_zvMRN.js';
import './index-Bhvd7-zP.js';
import './useForm-C9AjLT0G.js';
import './ToggleLeftPanelButton-B9amFjO3.js';
const k = m(({ css: o, cssVar: r }) => ({
    headerContainer: o`
    border-block-end: 1px solid var(--header-border-color, ${r.colorBorderSecondary});
  `,
  })),
  D = a.memo(() => {
    const o = l(),
      r = c(),
      s = () => {
        const i = o.pathname.split('/').filter(Boolean)[1];
        if (i === 'group_agent') {
          r('/community/agent');
          return;
        }
        i && ['agent', 'model', 'provider', 'mcp', 'skill'].includes(i)
          ? r(f('/community', i))
          : r('/community');
      },
      n = { '--header-border-color': d.colorBorderSecondary };
    return t.jsx(C, {
      className: k.headerContainer,
      right: t.jsx(y, {}),
      style: n,
      left: t.jsxs(p, {
        horizontal: !0,
        align: 'center',
        flex: 1,
        gap: 8,
        children: [t.jsx(h, { icon: N, size: 'small', onClick: s }), t.jsx(u, {})],
      }),
      styles: { left: { flex: 1 } },
    });
  }),
  e = m(({ css: o }) => ({
    contentContainer: o`
    min-height: 100%;
  `,
    mainContainer: o`
    overflow-y: auto;
  `,
    spacer: o`
    flex: 1;
  `,
  })),
  L = a.memo(() =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx(D, {}),
        t.jsx(p, {
          className: e.mainContainer,
          height: '100%',
          id: v,
          width: '100%',
          children: t.jsxs(j, {
            className: e.contentContainer,
            gap: 32,
            minWidth: S,
            paddingBlock: 16,
            wrapperStyle: { minHeight: '100%', position: 'relative' },
            children: [t.jsx(x, {}), t.jsx('div', { className: e.spacer }), t.jsx(g, {})],
          }),
        }),
      ],
    }),
  );
L.displayName = 'DesktopDiscoverDetailLayout';
export { L as default };
