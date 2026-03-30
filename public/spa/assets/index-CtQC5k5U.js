import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as u, f as E, k as B, ax as I, F as x, B as k, aJ as z } from './index-NXWXCubP.js';
import './providerConfig-B8LLUHQ4.js';
import { D as _ } from './Drawer-BolDzIJL.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as K, C as W } from './FileTree-yaSu_Zlm.js';
import { g as S } from './index-4ACezDLV.js';
import { F as $ } from './index-COTQuEIN.js';
import { u as H, E as O, R as G, a as J, b as U, c as q } from './index-CTo3MEdg.js';
import { I as y } from './index-MPEu_fqB.js';
import { R as Q } from './ReactCodemirrorNode-D6z1Fr4H.js';
import { R as X, a as Y } from './index-Da68Jq9d.js';
import { F } from './index-D0G2dzZj.js';
import { P as Z } from './index-BX02go0C.js';
import { A as V } from './index-nq3t0i8P.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './Drawer-DcPiI7Le.js';
import './Markdown-CHzs0yZe.js';
import './index-B7iPGrws.js';
import './Snippet-c_yX6fxX.js';
import './Spotlight-Pxy2lV0i.js';
import './useTranslation-BFA2TfNv.js';
import './image-nnCaCTxV.js';
import './index-DT-TohjT.js';
import './LeftOutlined-C065dMtK.js';
import './index-aBDeDBRr.js';
import './index-BovxuZRz.js';
import './index-CaXSHvap.js';
import './index-yOcJOuQ8.js';
import './index-CfqBhvlB.js';
import './index-In_BvyEP.js';
import './katex-BzTkCl_B.js';
import './Block-DRcWCw_2.js';
import './ScrollShadow-6q2HKopF.js';
import './index-ByJ3_WQ4.js';
import './index-DQ1LhxDe.js';
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
import './FormGroup-BhNhczlQ.js';
import './index-BVMYj18a.js';
import './form-CzkHLuiW.js';
import './engine-compile-CWG9UysY.js';
import './Menu-BrVs7-6o.js';
import './index-BNNY5gZK.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './Popover-GBtnGZmF.js';
import './parseTrigger-D_iLHf0y.js';
import './useOpenInteractionType-D-fuFThM.js';
import './TextArea-Cl0EBIyM.js';
import './style-DrHu2c-Q.js';
import './index-CLnOdl7m.js';
import './Input-BV15_ma4.js';
import './index-CGuFotwq.js';
import './EyeOutlined-BLKRwymq.js';
import './TextArea-4eFaE0SK.js';
import './Select-BmvswuPi.js';
import './InputNumber-QiNM1z-V.js';
import './index-DWUyZcT4.js';
import './PlusOutlined-C_qoJHqn.js';
import './index-BX7o7WZ0.js';
import './Input-BPmNHsZZ.js';
import './ActionIconGroup-BEPkIVWq.js';
import './DropdownMenu-CDvi9LwX.js';
import './getPseudoElementBounds-dE4zhuHB.js';
import './Dropdown-P_OddPTU.js';
import './index-X6_ijeKF.js';
import './Dropdown-DSGh0XHq.js';
import './useForm-Cs6bWEUv.js';
import './row-BLwlwhVW.js';
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
