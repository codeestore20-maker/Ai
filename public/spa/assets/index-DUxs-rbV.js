import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { f as m, d as l, c, k as d, F as p, A as h, bz as f, aE as x } from './index-CCbaqAw2.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as u, U as y, F as g } from './index-DnL23LoR.js';
import { W as j } from './index-BfriUzvd.js';
import { S as v, M as S } from './const-lbjNOSiN.js';
import { N as C } from './index-Bc5nJSK3.js';
import { bq as N } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './index-C8d2ltba.js';
import './SearchBar-oFfQv90K.js';
import './Input-BjItQTGh.js';
import './style-DS5mAB1W.js';
import './index-BMMxU3x3.js';
import './index-DrbS3k5v.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './EyeOutlined-H-12C914.js';
import './TextArea-BghFpCej.js';
import './Spotlight-Ci0MiVmf.js';
import './index-BJ9KbyB2.js';
import './withSuspense-twnyXsUR.js';
import './useQueryRoute-BsRsj-7y.js';
import './base-AbuBx_QK.js';
import './navigation-Bah7Yd2Q.js';
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './index-CHu9DsJf.js';
import './Block-BrEJCAE1.js';
import './MarketAuthProvider-96U-7dJV.js';
import './_url-CGZd35pk.js';
import './Modal-Cu7YIYh_.js';
import './Drawer-Bca0nwDn.js';
import './index-BidbaPEt.js';
import './row-DZp4IMzh.js';
import './Pagination-Bwnh0Gn9.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-04iJt7LS.js';
import './index-BALqkhOe.js';
import './useBubbleLock-D8efMGR_.js';
import './events-NnJKY1rz.js';
import './Trans-C_knUiir.js';
import './TextArea-B4vrTbs4.js';
import './index-Bla1XjUb.js';
import './EmojiPicker-BDgc2zhn.js';
import './useTranslation-D4BITX8Q.js';
import './emojiPicker-fXP8_c7a.js';
import './Popover-BUCP4Otk.js';
import './parseTrigger-DaLSGJKf.js';
import './useOpenInteractionType-DyLJ0hMf.js';
import './Tabs-CkNBWT4P.js';
import './index-CtIoZBrH.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './PlusOutlined-D_dh-eD9.js';
import './Dropdown-CyMyEhFy.js';
import './index-DmKnJiHm.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-BlUeGgfn.js';
import './index-Ciqn2WuZ.js';
import './general-BwPDEBLy.js';
import './store-BS_MHMXS.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-Df31PzX2.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-Bduy47c5.js';
import './SiX-DO6VXJ8i.js';
import './SiGithub-Bv-kH4Y-.js';
import './tools-Dyz0Rsch.js';
import './index-DOb9TCBr.js';
import './useForm-DPetWJu5.js';
import './ToggleLeftPanelButton-SmrEzPqs.js';
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
