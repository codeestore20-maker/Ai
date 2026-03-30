import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as m, d as l, c, k as d, F as p, A as h, bz as f, aE as x } from './index-NXWXCubP.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as u, U as y, F as g } from './index-BKeErXgT.js';
import { W as j } from './index-C7rAXdBW.js';
import { S as v, M as S } from './const-lbjNOSiN.js';
import { N as C } from './index-CbSfwNXf.js';
import { bq as N } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './index-Ry8Nyr8j.js';
import './SearchBar-Bbn5Y5cl.js';
import './Input-BPmNHsZZ.js';
import './style-DrHu2c-Q.js';
import './index-MPEu_fqB.js';
import './index-CLnOdl7m.js';
import './Input-BV15_ma4.js';
import './index-CGuFotwq.js';
import './EyeOutlined-BLKRwymq.js';
import './TextArea-4eFaE0SK.js';
import './Spotlight-Pxy2lV0i.js';
import './index-BJ9KbyB2.js';
import './withSuspense-twnyXsUR.js';
import './useQueryRoute-BUpY6VtB.js';
import './base-AbuBx_QK.js';
import './navigation-BncxkyKj.js';
import './index-DPxR_pVs.js';
import './index-I-KebpvS.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './index-ByEGfox1.js';
import './Block-DRcWCw_2.js';
import './MarketAuthProvider-B2EIF0Cb.js';
import './_url-BZfkIusy.js';
import './Modal-Uxr9iemi.js';
import './Drawer-DcPiI7Le.js';
import './index-Bb9B23Yj.js';
import './row-BLwlwhVW.js';
import './Pagination-D1Fbg5s7.js';
import './LeftOutlined-C065dMtK.js';
import './index-CB71CtZh.js';
import './index-BOENUeX3.js';
import './useBubbleLock-D8efMGR_.js';
import './events-NnJKY1rz.js';
import './Trans-vAGQFfL0.js';
import './TextArea-Cl0EBIyM.js';
import './index-CNLAaIwS.js';
import './EmojiPicker-CzEdoLcP.js';
import './useTranslation-BFA2TfNv.js';
import './emojiPicker-fXP8_c7a.js';
import './Popover-GBtnGZmF.js';
import './parseTrigger-D_iLHf0y.js';
import './useOpenInteractionType-D-fuFThM.js';
import './Tabs-BLDljoJ7.js';
import './index-C0LzPXdP.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './PlusOutlined-C_qoJHqn.js';
import './Dropdown-DSGh0XHq.js';
import './index-BsuRt3Ms.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-Czbx5FF3.js';
import './index-Ciqn2WuZ.js';
import './general-D0ZSKJyo.js';
import './store-DPVFoUA8.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CvUrBAvS.js';
import './index-Cus-sIud.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-ByMJ0iDL.js';
import './SiX-DO6VXJ8i.js';
import './SiGithub-Bv-kH4Y-.js';
import './tools-Bv7LuA5V.js';
import './index-D0G2dzZj.js';
import './useForm-Cs6bWEUv.js';
import './ToggleLeftPanelButton-DOlkSuZu.js';
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
