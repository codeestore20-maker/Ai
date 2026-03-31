import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as u, f as E, k as B, ax as I, F as x, B as k, aJ as z } from './index-CCbaqAw2.js';
import './providerConfig-qS2Xx-oI.js';
import { D as _ } from './Drawer-CKWXl7ey.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as K, C as W } from './FileTree-CSBhidRw.js';
import { g as S } from './index-eRBSrsT4.js';
import { F as $ } from './index-DvswU7tK.js';
import { u as H, E as O, R as G, a as J, b as U, c as q } from './index-ByJ9tYAK.js';
import { I as y } from './index-BMMxU3x3.js';
import { R as Q } from './ReactCodemirrorNode-DavywgNu.js';
import { R as X, a as Y } from './index-DPFx0YEW.js';
import { F } from './index-DOb9TCBr.js';
import { P as Z } from './index-DgVDpqm7.js';
import { A as V } from './index-BZoq5SDd.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './Drawer-Bca0nwDn.js';
import './Markdown-DsRdo14X.js';
import './index-BmAdB2eT.js';
import './Snippet-32bXs0X7.js';
import './Spotlight-Ci0MiVmf.js';
import './useTranslation-D4BITX8Q.js';
import './image-nnCaCTxV.js';
import './index-GBroFNOX.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-9gEvDmEa.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './index-_rDckkt0.js';
import './index-CL55xzRo.js';
import './index-BpX-jdrK.js';
import './katex-BzTkCl_B.js';
import './Block-BrEJCAE1.js';
import './ScrollShadow-BNhqKWoo.js';
import './index-Da80OjH1.js';
import './index-BH6FW3T6.js';
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
import './FormGroup-kE_nus1W.js';
import './index-B8mGalR4.js';
import './form-CzkHLuiW.js';
import './engine-compile-CWG9UysY.js';
import './Menu-Bh1hldLX.js';
import './index-D3URHQbI.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './Popover-BUCP4Otk.js';
import './parseTrigger-DaLSGJKf.js';
import './useOpenInteractionType-DyLJ0hMf.js';
import './TextArea-B4vrTbs4.js';
import './style-DS5mAB1W.js';
import './index-DrbS3k5v.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './EyeOutlined-H-12C914.js';
import './TextArea-BghFpCej.js';
import './Select-oZ2297YF.js';
import './InputNumber-Bc06jjP8.js';
import './index-DD_AOBLs.js';
import './PlusOutlined-D_dh-eD9.js';
import './index-DXMTDzya.js';
import './Input-BjItQTGh.js';
import './ActionIconGroup-CVXy5BRo.js';
import './DropdownMenu-lFO5GtVP.js';
import './getPseudoElementBounds-DP7LbzHC.js';
import './Dropdown-CjuflLd4.js';
import './index-DM7ShMil.js';
import './Dropdown-CyMyEhFy.js';
import './useForm-DPetWJu5.js';
import './row-DZp4IMzh.js';
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
