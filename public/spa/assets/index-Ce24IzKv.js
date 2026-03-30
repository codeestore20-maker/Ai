import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { M as b } from './Modal-BOLB10DT.js';
import { a as h } from './imperative-B-AzY3pC.js';
import { g as d, k as g, F as f } from './index-wqF_YeCD.js';
import { r as p } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { C, c as x } from './plugins-C0IfwLsZ.js';
import { d as L, g as e, H as a, E as v, e as j, u as B } from './index-C-QRBVLb.js';
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
import { C as D } from './ChatInputActionBar-GCPequhY.js';
import { a as F, R as N } from './index-DdgVn3ml.js';
import './Drawer-Bub1oHxZ.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './Dropdown-CuHtw-kr.js';
import './Menu-jar557S6.js';
import './index-Cug4OBsb.js';
import './EllipsisOutlined-DKvYkod-.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-C-p4Ij3D.js';
import './index-DIx15oSt.js';
import './Dropdown-BRh18yeL.js';
import './index-DoTPv69l.js';
import './Input-B_ItaHnj.js';
import './index-D3TOmt6l.js';
import './index-D-8aLEt3.js';
import './Popover-DbrKwSZe.js';
import './parseTrigger-J7YMesNw.js';
import './useOpenInteractionType-DzU6ZbbX.js';
import './ReactCodemirrorNode-CBlWMkHS.js';
import './index-Cv04OX6Y.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-I8paDSMM.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-5rJL-Hpp.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
import './clientModelRuntime-B08lUHU2.js';
import './index-Db66cWsi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DF0TW5D0.js';
import './purify.es-r8glNMJW.js';
import './store-D4ebFM1W.js';
import './selectors-ByZlqqp9.js';
import './tools-DB_zvMRN.js';
import './ipc-wTHpVC92.js';
import './discover-BbhnyhQy.js';
import './general-D3HMJCKF.js';
import './index-ZbCvQEWF.js';
import './store-DqsNUhs6.js';
import './browser-DjXL3BqG.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BMxdWhWa.js';
import './Block-BiiCaTlV.js';
import './Select-ByFgGch6.js';
import './InputNumber-DrFQtmcb.js';
import './style-DH5CJqbo.js';
import './index-BDgh-r4i.js';
import './PlusOutlined-DJcgxPPp.js';
import './index-CknUj28g.js';
import './ReferTopicNode-CfNJfETv.js';
import './engine-compile-CWG9UysY.js';
import './index-DxX92wWY.js';
import './katex-BzTkCl_B.js';
import './index-gJIX-y9J.js';
import './index-_EPSRjm4.js';
import './TextArea-HEXidvoE.js';
import './index-vHLvwros.js';
import './EyeOutlined-DfHAjohP.js';
import './TextArea-dBYiV5h5.js';
import './Input-CFCD7LRl.js';
import './ActionIconGroup-BNTE0UBe.js';
import './DropdownMenu-Bcey0IX9.js';
import './getPseudoElementBounds-DdOMOuAX.js';
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
