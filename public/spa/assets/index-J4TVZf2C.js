import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { M as b } from './Modal-Uxr9iemi.js';
import { a as h } from './imperative-Dtu7KcF3.js';
import { g as d, k as g, F as f } from './index-NXWXCubP.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { C, c as x } from './plugins-C1rSeBmo.js';
import { d as L, g as e, H as a, E as v, e as j, u as B } from './index-CTo3MEdg.js';
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
import { C as D } from './ChatInputActionBar-CEmIn8SH.js';
import { a as F, R as N } from './index-Da68Jq9d.js';
import './Drawer-DcPiI7Le.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './Dropdown-P_OddPTU.js';
import './Menu-BrVs7-6o.js';
import './index-BNNY5gZK.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './LeftOutlined-C065dMtK.js';
import './index-CaXSHvap.js';
import './index-X6_ijeKF.js';
import './Dropdown-DSGh0XHq.js';
import './index-CLnOdl7m.js';
import './Input-BV15_ma4.js';
import './index-CGuFotwq.js';
import './index-BVMYj18a.js';
import './Popover-GBtnGZmF.js';
import './parseTrigger-D_iLHf0y.js';
import './useOpenInteractionType-D-fuFThM.js';
import './ReactCodemirrorNode-D6z1Fr4H.js';
import './index-4ACezDLV.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-DPVFoUA8.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CvUrBAvS.js';
import './index-Cus-sIud.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-BZfkIusy.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-ByMJ0iDL.js';
import './clientModelRuntime-CVsv_yzD.js';
import './index-DulcjDYi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-D9iY1Apm.js';
import './purify.es-r8glNMJW.js';
import './store-Zk6c4erU.js';
import './selectors-D69_vvgj.js';
import './tools-Bv7LuA5V.js';
import './ipc-wTHpVC92.js';
import './discover-BXfpphP1.js';
import './general-D0ZSKJyo.js';
import './index-CGoFy0Kz.js';
import './store-RA8m3Abx.js';
import './browser-B9uGE7zv.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DRpngCPv.js';
import './Block-DRcWCw_2.js';
import './Select-BmvswuPi.js';
import './InputNumber-QiNM1z-V.js';
import './style-DrHu2c-Q.js';
import './index-DWUyZcT4.js';
import './PlusOutlined-C_qoJHqn.js';
import './index-BX7o7WZ0.js';
import './ReferTopicNode-DA-NjwEp.js';
import './engine-compile-CWG9UysY.js';
import './index-In_BvyEP.js';
import './katex-BzTkCl_B.js';
import './index-yOcJOuQ8.js';
import './index-ByJ3_WQ4.js';
import './TextArea-Cl0EBIyM.js';
import './index-MPEu_fqB.js';
import './EyeOutlined-BLKRwymq.js';
import './TextArea-4eFaE0SK.js';
import './Input-BPmNHsZZ.js';
import './ActionIconGroup-BEPkIVWq.js';
import './DropdownMenu-CDvi9LwX.js';
import './getPseudoElementBounds-dE4zhuHB.js';
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
