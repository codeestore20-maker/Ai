import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as u, f as E, k as B, ax as I, F as x, B as k, aJ as z } from './index-wqF_YeCD.js';
import './providerConfig-B8LLUHQ4.js';
import { D as _ } from './Drawer-Dch4ucOc.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as K, C as W } from './FileTree-CGKGK1w6.js';
import { g as S } from './index-Cv04OX6Y.js';
import { F as $ } from './index-DJMMkijI.js';
import { u as H, E as O, R as G, a as J, b as U, c as q } from './index-C-QRBVLb.js';
import { I as y } from './index-vHLvwros.js';
import { R as Q } from './ReactCodemirrorNode-CBlWMkHS.js';
import { R as X, a as Y } from './index-DdgVn3ml.js';
import { F } from './index-Bhvd7-zP.js';
import { P as Z } from './index-CFr2kbwa.js';
import { A as V } from './index-DuLYnvqZ.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './Drawer-Bub1oHxZ.js';
import './Markdown-CJ_9HjbS.js';
import './index-CkRHjVIW.js';
import './Snippet-BWiaBWMj.js';
import './Spotlight-Bb0bqvsS.js';
import './useTranslation-BvAL3EmF.js';
import './image-nnCaCTxV.js';
import './index-CXeA4JPU.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-CMEjhhRs.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './index-gJIX-y9J.js';
import './index-BYQpZQlo.js';
import './index-DxX92wWY.js';
import './katex-BzTkCl_B.js';
import './Block-BiiCaTlV.js';
import './ScrollShadow-B80zwmng.js';
import './index-_EPSRjm4.js';
import './index-CorA7cXs.js';
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
import './FormGroup-CwGEe0RW.js';
import './index-D-8aLEt3.js';
import './form-CzkHLuiW.js';
import './engine-compile-CWG9UysY.js';
import './Menu-jar557S6.js';
import './index-Cug4OBsb.js';
import './EllipsisOutlined-DKvYkod-.js';
import './Popover-DbrKwSZe.js';
import './parseTrigger-J7YMesNw.js';
import './useOpenInteractionType-DzU6ZbbX.js';
import './TextArea-HEXidvoE.js';
import './style-DH5CJqbo.js';
import './index-DoTPv69l.js';
import './Input-B_ItaHnj.js';
import './index-D3TOmt6l.js';
import './EyeOutlined-DfHAjohP.js';
import './TextArea-dBYiV5h5.js';
import './Select-ByFgGch6.js';
import './InputNumber-DrFQtmcb.js';
import './index-BDgh-r4i.js';
import './PlusOutlined-DJcgxPPp.js';
import './index-CknUj28g.js';
import './Input-CFCD7LRl.js';
import './ActionIconGroup-BNTE0UBe.js';
import './DropdownMenu-Bcey0IX9.js';
import './getPseudoElementBounds-DdOMOuAX.js';
import './Dropdown-CuHtw-kr.js';
import './index-DIx15oSt.js';
import './Dropdown-BRh18yeL.js';
import './useForm-C9AjLT0G.js';
import './row-CjE_Fa9c.js';
const w = E(({ css: i }) => ({
    editorWrapper: i`
    min-height: 200px;
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${B.colorBorder};
    border-radius: 8px;
  `,
    wrapper: i`
    max-width: 798px;
    margin-inline: auto;
    padding-block: 0;
    padding-inline: 24px;
  `,
  })),
  tt = [G, J, Q, U, X, Y, q],
  P = s.memo(({ name: i, form: r, initialValues: o, onSubmit: p }) => {
    const { t: e } = u('setting'),
      a = H(),
      m = s.useRef(o.content);
    (s.useEffect(() => {
      r.setFieldsValue(o);
    }, [o]),
      s.useEffect(() => {
        m.current = o.content;
      }, [o.content]),
      s.useEffect(() => {
        if (a)
          try {
            setTimeout(() => {
              o.content && a.setDocument('markdown', o.content);
            }, 100);
          } catch {
            setTimeout(() => {
              a.setDocument('markdown', o.content);
            }, 100);
          }
      }, [a, o.content]));
    const l = s.useCallback(
        (h) => {
          const c = h.getDocument('markdown') || '';
          c !== m.current && ((m.current = c), r.setFieldValue('content', c));
        },
        [r],
      ),
      g = [
        {
          children: t.jsx(y, { disabled: !0, readOnly: !0, value: i }),
          desc: e('agentSkillEdit.nameDesc'),
          label: e('settingAgent.name.title'),
        },
        {
          children: t.jsx(y.TextArea, {
            autoSize: { maxRows: 4, minRows: 2 },
            placeholder: e('agentSkillModal.descriptionPlaceholder'),
          }),
          desc: e('agentSkillEdit.descriptionDesc'),
          label: e('agentSkillModal.description'),
          name: 'description',
        },
        {
          children: t.jsx('div', {
            className: w.editorWrapper,
            children: t.jsx(O, {
              content: '',
              editor: a,
              lineEmptyPlaceholder: e('agentSkillEdit.instructionsPlaceholder'),
              placeholder: e('agentSkillEdit.instructionsPlaceholder'),
              plugins: tt,
              style: { paddingBottom: 48 },
              type: 'text',
              variant: 'chat',
              onTextChange: l,
            }),
          }),
          desc: e('agentSkillEdit.instructionsDesc'),
          label: e('agentSkillEdit.instructions'),
        },
      ];
    return t.jsx('div', {
      className: w.wrapper,
      children: t.jsx($, {
        form: r,
        gap: 0,
        initialValues: o,
        items: g,
        itemsType: 'flat',
        layout: 'vertical',
        variant: 'borderless',
        onFinish: p,
        children: t.jsx(F.Item, {
          hidden: !0,
          name: 'content',
          children: t.jsx(y, { type: 'hidden' }),
        }),
      }),
    });
  });
P.displayName = 'SkillEditForm';
const j = E(({ css: i, cssVar: r }) => ({
    divider: i`
    flex-shrink: 0;
    width: 1px;
    background: ${r.colorBorderSecondary};
  `,
    left: i`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,
    right: i`
    container-type: size;
    overflow: auto;
    flex: 1;
  `,
  })),
  et = (i) => {
    const r = {},
      o = (p) => {
        for (const e of p)
          e.type === 'file' && e.content !== void 0
            ? (r[e.path] = e.content)
            : e.children && o(e.children);
      };
    return (o(i), r);
  },
  ot = s.memo(({ skillId: i, open: r, onClose: o }) => {
    const { t: p } = u('setting'),
      { t: e } = u('plugin'),
      { t: a } = u('common'),
      { message: m } = I.useApp(),
      [l, g] = s.useState('SKILL.md'),
      [h, c] = s.useState(!1),
      [v] = F.useForm(),
      { data: b, isLoading: R } = S((n) => n.useFetchAgentSkillDetail)(r ? i : void 0),
      D = S((n) => n.updateAgentSkill),
      A = S((n) => n.deleteAgentSkill),
      d = b?.skillDetail,
      f = b?.resourceTree ?? [],
      C = s.useMemo(() => et(f), [f]),
      T = s.useMemo(
        () => ({
          content: d?.content || '',
          description: d?.description || d?.manifest?.description || '',
        }),
        [d],
      ),
      L = async (n) => {
        c(!0);
        try {
          (await D({ content: n.content, id: i, manifest: { description: n.description } }),
            m.success(p('agentSkillEdit.saveSuccess')),
            o());
        } finally {
          c(!1);
        }
      },
      M = async () => {
        (await A(i), m.success(e('dev.deleteSuccess')), o());
      },
      N = t.jsxs(x, {
        horizontal: !0,
        flex: 1,
        gap: 12,
        justify: 'space-between',
        children: [
          t.jsx(Z, {
            arrow: !1,
            cancelText: a('cancel'),
            okText: a('ok'),
            placement: 'topLeft',
            title: e('dev.confirmDeleteDevPlugin'),
            okButtonProps: { danger: !0, type: 'primary' },
            onConfirm: M,
            children: t.jsx(k, { danger: !0, children: a('delete') }),
          }),
          t.jsxs(x, {
            horizontal: !0,
            gap: 12,
            children: [
              t.jsx(k, { onClick: o, children: a('cancel') }),
              t.jsx(k, {
                loading: h,
                type: 'primary',
                onClick: () => {
                  v.submit();
                },
                children: e('dev.update'),
              }),
            ],
          }),
        ],
      });
    return t.jsx(_, {
      destroyOnHidden: !0,
      containerMaxWidth: 'auto',
      footer: N,
      height: '100vh',
      open: r,
      placement: 'bottom',
      push: !1,
      title: p('agentSkillEdit.title'),
      styles: { body: { padding: 0 }, bodyContent: { height: '100%' } },
      onClose: (n) => {
        (n.stopPropagation(), o());
      },
      children: R
        ? t.jsx(z, { active: !0, paragraph: { rows: 8 }, style: { padding: 16 } })
        : t.jsxs(x, {
            horizontal: !0,
            height: '100%',
            onClick: (n) => {
              n.stopPropagation();
            },
            children: [
              t.jsx('div', {
                className: j.left,
                children: t.jsx(K, { resourceTree: f, selectedFile: l, onSelectFile: g }),
              }),
              t.jsx('div', { className: j.divider }),
              t.jsxs('div', {
                className: j.right,
                children: [
                  t.jsx('div', {
                    style: {
                      display: l === 'SKILL.md' ? void 0 : 'none',
                      height: '100%',
                      overflow: 'auto',
                    },
                    children: t.jsx(P, { form: v, initialValues: T, name: d?.name, onSubmit: L }),
                  }),
                  l !== 'SKILL.md' &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx(V, {
                          banner: !0,
                          showIcon: !0,
                          message: p('agentSkillEdit.fileReadonly'),
                          type: 'info',
                        }),
                        t.jsx(W, { contentMap: C, selectedFile: l, skillDetail: d }, l),
                      ],
                    }),
                ],
              }),
            ],
          }),
    });
  });
ot.displayName = 'AgentSkillEdit';
export { ot as default };
