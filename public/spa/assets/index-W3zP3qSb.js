import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { M as b } from './Modal-Cu7YIYh_.js';
import { a as h } from './imperative-SgixbDEp.js';
import { g as d, k as g, F as f } from './index-CCbaqAw2.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { C, c as x } from './plugins-Cy9zhAHL.js';
import { d as L, g as e, H as a, E as v, e as j, u as B } from './index-ByJ9tYAK.js';
import {
  bf as E,
  bg as P,
  bh as R,
  bi as S,
  bj as I,
  bk as M,
  bl as T,
  bm as w,
  bn as q,
  ai as H,
  bo as O,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { C as D } from './ChatInputActionBar-BZ77-Qco.js';
import { a as F, R as N } from './index-DPFx0YEW.js';
import './Drawer-Bca0nwDn.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './Dropdown-CjuflLd4.js';
import './Menu-Bh1hldLX.js';
import './index-D3URHQbI.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-BEWAql7N.js';
import './index-DM7ShMil.js';
import './Dropdown-CyMyEhFy.js';
import './index-DrbS3k5v.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './index-B8mGalR4.js';
import './Popover-BUCP4Otk.js';
import './parseTrigger-DaLSGJKf.js';
import './useOpenInteractionType-DyLJ0hMf.js';
import './ReactCodemirrorNode-DavywgNu.js';
import './index-eRBSrsT4.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-BS_MHMXS.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-Df31PzX2.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-CGZd35pk.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-Bduy47c5.js';
import './clientModelRuntime-De9siZoi.js';
import './index-DCfYfopE.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DRgp3rTF.js';
import './purify.es-r8glNMJW.js';
import './store-BIrLg5EY.js';
import './selectors-B3Ej40yR.js';
import './tools-Dyz0Rsch.js';
import './ipc-wTHpVC92.js';
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './index-Cn54Zpoy.js';
import './store-BtQN9Yy-.js';
import './browser-6Zvo89Bh.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
import './Block-BrEJCAE1.js';
import './Select-oZ2297YF.js';
import './InputNumber-Bc06jjP8.js';
import './style-DS5mAB1W.js';
import './index-DD_AOBLs.js';
import './PlusOutlined-D_dh-eD9.js';
import './index-DXMTDzya.js';
import './ReferTopicNode-CPvIkwVM.js';
import './engine-compile-CWG9UysY.js';
import './index-BpX-jdrK.js';
import './katex-BzTkCl_B.js';
import './index-_rDckkt0.js';
import './index-Da80OjH1.js';
import './TextArea-B4vrTbs4.js';
import './index-BMMxU3x3.js';
import './EyeOutlined-H-12C914.js';
import './TextArea-BghFpCej.js';
import './Input-BjItQTGh.js';
import './ActionIconGroup-CVXy5BRo.js';
import './DropdownMenu-lFO5GtVP.js';
import './getPseudoElementBounds-DP7LbzHC.js';
const k = p.memo(({ editor: r }) => {
  const { t: o } = d('editor'),
    t = L(r),
    s = p.useMemo(
      () =>
        [
          {
            active: t.isBold,
            icon: E,
            key: 'bold',
            label: o('typobar.bold'),
            onClick: t.bold,
            tooltipProps: { hotkey: e(a.Bold).keys },
          },
          {
            active: t.isItalic,
            icon: P,
            key: 'italic',
            label: o('typobar.italic'),
            onClick: t.italic,
            tooltipProps: { hotkey: e(a.Italic).keys },
          },
          {
            active: t.isUnderline,
            icon: R,
            key: 'underline',
            label: o('typobar.underline'),
            onClick: t.underline,
            tooltipProps: { hotkey: e(a.Underline).keys },
          },
          {
            active: t.isStrikethrough,
            icon: S,
            key: 'strikethrough',
            label: o('typobar.strikethrough'),
            onClick: t.strikethrough,
            tooltipProps: { hotkey: e(a.Strikethrough).keys },
          },
          { type: 'divider' },
          {
            icon: I,
            key: 'bulletList',
            label: o('typobar.bulletList'),
            onClick: t.bulletList,
            tooltipProps: { hotkey: e(a.BulletList).keys },
          },
          {
            icon: M,
            key: 'numberlist',
            label: o('typobar.numberList'),
            onClick: t.numberList,
            tooltipProps: { hotkey: e(a.NumberList).keys },
          },
          { icon: T, key: 'tasklist', label: o('typobar.taskList'), onClick: t.checkList },
          { type: 'divider' },
          {
            active: t.isBlockquote,
            icon: w,
            key: 'blockquote',
            label: o('typobar.blockquote'),
            onClick: t.blockquote,
          },
          { type: 'divider' },
          { icon: q, key: 'math', label: o('typobar.tex'), onClick: t.insertMath },
          {
            active: t.isCode,
            icon: H,
            key: 'code',
            label: o('typobar.code'),
            onClick: t.code,
            tooltipProps: { hotkey: e(a.CodeInline).keys },
          },
          { icon: O, key: 'codeblock', label: o('typobar.codeblock'), onClick: t.codeblock },
        ].filter(Boolean),
      [t],
    );
  return i.jsx(D, {
    left: i.jsx(C, { items: s }),
    style: { background: g.colorFillQuaternary, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  });
});
k.displayName = 'TypoBar';
const U = [...x({ linkPlugin: N }), F, j],
  V = ({ defaultValue: r, editor: o, editorData: t }) => {
    const { content: s, type: l } = p.useMemo(
      () =>
        t && typeof t == 'object' && Object.keys(t).length > 0
          ? { content: JSON.stringify(t), type: 'json' }
          : { content: r || '', type: 'markdown' },
      [t, r],
    );
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(k, { editor: o }),
        i.jsx(f, {
          padding: 16,
          style: { cursor: 'text', maxHeight: '80vh', minHeight: '50vh', overflowY: 'auto' },
          children: i.jsx(v, {
            autoFocus: !0,
            content: s,
            editor: o,
            plugins: U,
            type: l,
            variant: 'chat',
            style: { paddingBottom: 120 },
          }),
        }),
      ],
    });
  },
  _ = p.memo(({ value: r, editorData: o, onConfirm: t, ...s }) => {
    const [l, m] = p.useState(!1),
      { t: c } = d('common'),
      n = B();
    return i.jsx(b, {
      destroyOnHidden: !0,
      cancelText: c('cancel'),
      closable: !1,
      confirmLoading: l,
      okText: c('ok'),
      title: null,
      width: 'min(90vw, 920px)',
      styles: { body: { overflow: 'hidden', padding: 0 } },
      onOk: async () => {
        m(!0);
        const u = n?.getDocument('markdown') || '',
          y = n?.getDocument('json');
        (await t?.(u, y), m(!1));
      },
      ...s,
      children: i.jsx(V, { defaultValue: r, editor: n, editorData: o }),
    });
  }),
  bo = (r) => h(_, r);
export { _ as EditorModal, bo as createEditorModal };
