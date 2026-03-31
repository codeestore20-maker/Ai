import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as F,
  ax as H,
  aD as q,
  F as r,
  Z as te,
  aG as ae,
  k as se,
  bl as V,
  f as oe,
  ao as le,
  c as re,
  L as ne,
  B as R,
} from './index-CCbaqAw2.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { a as I, u as j } from './store-D9FEKBil.js';
import {
  T as ie,
  R as ce,
  E as de,
  D as pe,
  a as ue,
  b as me,
  c as xe,
} from './RunCard-JqsnCfrv.js';
import { A as he, a as fe } from './AccordionItem-V1uwesUy.js';
import { M as ge } from './Modal-Cu7YIYh_.js';
import { F as p } from './index-DOb9TCBr.js';
import { I as C } from './index-BMMxU3x3.js';
import {
  bp as je,
  bq as ye,
  br as ve,
  P as be,
  bs as Ce,
  a_ as we,
} from '../vendor/vendor-icons-BHMUH78i.js';
import { r as Te } from './selectors-D8FoU16Z.js';
import { T as w } from './index-qWFy24g8.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './Input-BjItQTGh.js';
import './style-DS5mAB1W.js';
import './TextArea-B4vrTbs4.js';
import './upload-Df31PzX2.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-CGZd35pk.js';
import './v4-BKrj-4V8.js';
import './index-BALqkhOe.js';
import './useBubbleLock-D8efMGR_.js';
import './Table-CFycoAE9.js';
import './index-DM7ShMil.js';
import './LeftOutlined-CAuJGpBu.js';
import './Dropdown-CyMyEhFy.js';
import './index-BEWAql7N.js';
import './index-D3URHQbI.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './index-DrbS3k5v.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './index-BV4biRKt.js';
import './useForm-DPetWJu5.js';
import './scrollTo-B51N32mC.js';
import './Pagination-Bwnh0Gn9.js';
import './index-04iJt7LS.js';
import './index-B8mGalR4.js';
import './index-DmKnJiHm.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-H-12C914.js';
import './progress-BlUeGgfn.js';
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-DD_AOBLs.js';
import './PlusOutlined-D_dh-eD9.js';
import './Empty-BCfh_42o.js';
import './Block-BrEJCAE1.js';
import './index-BWTHgoM0.js';
import './index-CtIoZBrH.js';
import './StatusBadge-BtNx830R.js';
import './utils-DdCRt2d3.js';
import './Drawer-Bca0nwDn.js';
import './row-DZp4IMzh.js';
import './TextArea-BghFpCej.js';
const ke = l.memo(({ open: t, onClose: n, testCase: s, onSuccess: y }) => {
    const { t: a } = F('eval'),
      { message: d } = H.useApp(),
      [c] = p.useForm(),
      [v, f] = l.useState(!1),
      k = p.useWatch('evalMode', c);
    l.useEffect(() => {
      t &&
        s &&
        c.setFieldsValue({
          category: s.content?.category,
          difficulty: s.metadata?.difficulty,
          evalConfig: s.evalConfig,
          evalMode: s.evalMode || void 0,
          expected: s.content?.expected,
          input: s.content?.input,
          tags: s.metadata?.tags?.join(', '),
        });
    }, [t, s, c]);
    const m = l.useCallback(() => {
        (c.resetFields(), n());
      }, [c, n]),
      S = l.useCallback(async () => {
        const i = await c.validateFields();
        f(!0);
        try {
          const b = i.tags
            ? i.tags
                .split(',')
                .map((T) => T.trim())
                .filter(Boolean)
            : void 0;
          (await I.updateTestCase({
            content: { category: i.category || void 0, expected: i.expected, input: i.input },
            evalConfig: i.evalConfig?.judgePrompt ? i.evalConfig : null,
            evalMode: i.evalMode || null,
            id: s.id,
            metadata: {
              ...(i.difficulty ? { difficulty: i.difficulty } : {}),
              ...(b ? { tags: b } : {}),
            },
          }),
            await y?.(s.datasetId),
            d.success(a('testCase.edit.success')),
            m());
        } catch {
          d.error(a('testCase.edit.error'));
        } finally {
          f(!1);
        }
      }, [s, c, m, d, y, a]);
    return e.jsx(ge, {
      destroyOnHidden: !0,
      okButtonProps: { loading: v },
      okText: a('common.update'),
      open: t,
      title: a('testCase.edit.title'),
      width: 520,
      onCancel: m,
      onOk: S,
      children: e.jsxs(p, {
        form: c,
        layout: 'vertical',
        style: { paddingTop: 16 },
        children: [
          e.jsx(p.Item, {
            label: a('testCase.create.input.label'),
            name: 'input',
            rules: [{ required: !0 }],
            children: e.jsx(C.TextArea, {
              autoSize: { maxRows: 6, minRows: 3 },
              placeholder: a('testCase.create.input.placeholder'),
            }),
          }),
          e.jsx(p.Item, {
            label: a('testCase.create.expected.label'),
            name: 'expected',
            rules: [{ message: a('testCase.create.expected.required'), required: !0 }],
            children: e.jsx(C.TextArea, {
              autoSize: { maxRows: 6, minRows: 2 },
              placeholder: a('testCase.create.expected.placeholder'),
            }),
          }),
          e.jsx(p.Item, {
            label: a('evalMode.label'),
            name: 'evalMode',
            children: e.jsx(q, {
              allowClear: !0,
              placeholder: a('evalMode.placeholder'),
              optionRender: (i) =>
                e.jsxs(r, {
                  gap: 2,
                  style: { padding: '4px 0' },
                  children: [
                    e.jsx('div', { children: i.label }),
                    e.jsx(te, {
                      style: { fontSize: 12 },
                      type: 'secondary',
                      children: a(`evalMode.${i.value}.desc`),
                    }),
                  ],
                }),
              options: [
                { label: a('evalMode.equals'), value: 'equals' },
                { label: a('evalMode.contains'), value: 'contains' },
                { label: a('evalMode.llm-rubric'), value: 'llm-rubric' },
              ],
            }),
          }),
          k === 'llm-rubric' &&
            e.jsx(p.Item, {
              label: a('evalMode.prompt.label'),
              name: ['evalConfig', 'judgePrompt'],
              children: e.jsx(C.TextArea, {
                autoSize: { maxRows: 8, minRows: 3 },
                placeholder: a('evalMode.prompt.placeholder'),
              }),
            }),
          e.jsx(he, {
            children: e.jsx(fe, {
              itemKey: 'advanced',
              paddingBlock: 6,
              paddingInline: 4,
              title: a('testCase.create.advanced'),
              children: e.jsxs(r, {
                gap: 16,
                style: { paddingTop: 8 },
                children: [
                  e.jsx(p.Item, {
                    label: a('table.columns.category'),
                    name: 'category',
                    style: { marginBottom: 0 },
                    children: e.jsx(C, { placeholder: a('dataset.import.categoryDesc') }),
                  }),
                  e.jsx(p.Item, {
                    label: a('testCase.create.difficulty.label'),
                    name: 'difficulty',
                    style: { marginBottom: 0 },
                    children: e.jsx(q, {
                      allowClear: !0,
                      placeholder: a('testCase.create.difficulty.label'),
                      options: [
                        { label: a('difficulty.easy'), value: 'easy' },
                        { label: a('difficulty.medium'), value: 'medium' },
                        { label: a('difficulty.hard'), value: 'hard' },
                      ],
                    }),
                  }),
                  e.jsx(p.Item, {
                    label: a('testCase.create.tags.label'),
                    name: 'tags',
                    style: { marginBottom: 0 },
                    children: e.jsx(C, { placeholder: a('testCase.create.tags.placeholder') }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  }),
  u = oe(({ css: t, cssVar: n }) => ({
    container: t`
    flex-shrink: 0;
    width: 360px;
    border-inline-start: 1px solid ${n.colorBorderSecondary};
  `,
    content: t`
    overflow-y: auto;
    flex: 1;
    padding: 16px;
  `,
    fieldLabel: t`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: ${n.colorTextTertiary};
  `,
    fieldValue: t`
    padding-block: 10px;
    padding-inline: 12px;
    border-radius: 8px;

    font-size: 13px;
    line-height: 1.6;
    color: ${n.colorText};
    word-break: break-word;
    white-space: pre-wrap;

    background: ${n.colorFillQuaternary};
  `,
    header: t`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${n.colorBorderSecondary};
  `,
    title: t`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${n.colorText};
  `,
  })),
  Se = l.memo(({ testCase: t, onClose: n }) => {
    const { t: s } = F('eval');
    return e.jsxs(r, {
      className: u.container,
      height: '100%',
      children: [
        e.jsxs('div', {
          className: u.header,
          children: [
            e.jsx('p', { className: u.title, children: s('testCase.preview.title') }),
            e.jsx(ae, {
              icon: e.jsx(je, { size: 14 }),
              size: 'small',
              style: { color: se.colorTextTertiary, height: 28, padding: 0, width: 28 },
              type: 'text',
              onClick: n,
            }),
          ],
        }),
        e.jsx('div', {
          className: u.content,
          children: e.jsxs(r, {
            gap: 16,
            children: [
              e.jsxs(r, {
                gap: 4,
                children: [
                  e.jsxs(r, {
                    horizontal: !0,
                    align: 'center',
                    justify: 'space-between',
                    children: [
                      e.jsx('p', {
                        className: u.fieldLabel,
                        children: s('testCase.preview.input'),
                      }),
                      t.content?.input && e.jsx(V, { content: t.content.input, size: 'small' }),
                    ],
                  }),
                  e.jsx('div', { className: u.fieldValue, children: t.content?.input }),
                ],
              }),
              t.content?.expected &&
                e.jsxs(r, {
                  gap: 4,
                  children: [
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'center',
                      justify: 'space-between',
                      children: [
                        e.jsx('p', {
                          className: u.fieldLabel,
                          children: s('testCase.preview.expected'),
                        }),
                        e.jsx(V, { content: t.content.expected, size: 'small' }),
                      ],
                    }),
                    e.jsx('div', { className: u.fieldValue, children: t.content.expected }),
                  ],
                }),
              t.content?.category &&
                e.jsxs(r, {
                  gap: 4,
                  children: [
                    e.jsx('p', { className: u.fieldLabel, children: s('table.columns.category') }),
                    e.jsx('div', { className: u.fieldValue, children: t.content.category }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  }),
  Pt = l.memo(() => {
    const { t } = F('eval'),
      { benchmarkId: n, datasetId: s } = le(),
      y = re(),
      { modal: a, message: d } = H.useApp(),
      [c, v] = l.useState({ current: 1, pageSize: 10 }),
      [f, k] = l.useState(''),
      [m, S] = l.useState('all'),
      [i, b] = l.useState(null),
      [T, B] = l.useState(!1),
      [z, P] = l.useState(null),
      [W, A] = l.useState(!1),
      [G, E] = l.useState(!1),
      [K, D] = l.useState(!1),
      Q = j((o) => o.useFetchDatasetDetail),
      X = j((o) => o.useFetchTestCases),
      Z = j((o) => o.useFetchDatasetRuns),
      L = j(Te.datasetRunList(s)),
      N = j((o) => o.refreshTestCases),
      O = j((o) => o.refreshDatasetDetail),
      { data: x } = Q(s);
    Z(s);
    const M = l.useMemo(
        () =>
          [...L].sort((o, h) => new Date(h.createdAt).getTime() - new Date(o.createdAt).getTime()),
        [L],
      ),
      { data: $ } = X({ datasetId: s, limit: c.pageSize, offset: (c.current - 1) * c.pageSize }),
      J = $?.data || [],
      _ = $?.total || 0,
      U = J.filter(
        (o) =>
          !(
            (m !== 'all' && o.metadata?.difficulty !== m) ||
            (f && !o.content?.input?.toLowerCase().includes(f.toLowerCase()))
          ),
      ),
      g = l.useCallback(async () => {
        s && (await N(s), await O(s));
      }, [s, N, O]),
      Y = l.useCallback(
        (o) => {
          a.confirm({
            content: t('testCase.delete.confirm'),
            okButtonProps: { danger: !0 },
            okText: t('common.delete'),
            onOk: async () => {
              try {
                (await I.deleteTestCase(o.id), d.success(t('testCase.delete.success')), await g());
              } catch {
                d.error(t('testCase.delete.error'));
              }
            },
            title: t('common.delete'),
          });
        },
        [g, d, a, t],
      ),
      ee = l.useCallback(() => {
        a.confirm({
          content: t('dataset.delete.confirm'),
          okButtonProps: { danger: !0 },
          okText: t('common.delete'),
          onOk: async () => {
            try {
              (await I.deleteDataset(s),
                d.success(t('dataset.delete.success')),
                y(`/eval/bench/${n}`));
            } catch {
              d.error(t('dataset.delete.error'));
            }
          },
          title: t('common.delete'),
        });
      }, [n, s, d, a, y, t]);
    return x
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsxs(r, {
              horizontal: !0,
              style: { flex: 1, minHeight: 0 },
              children: [
                e.jsxs(r, {
                  flex: 1,
                  gap: 24,
                  style: { minWidth: 0, overflow: 'auto', paddingBlock: 24, paddingInline: 32 },
                  children: [
                    e.jsxs(ne, {
                      to: `/eval/bench/${n}`,
                      style: {
                        alignItems: 'center',
                        color: 'var(--ant-color-text-tertiary)',
                        display: 'inline-flex',
                        fontSize: 14,
                        gap: 4,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        width: 'fit-content',
                      },
                      onMouseEnter: (o) => {
                        o.currentTarget.style.color = 'var(--ant-color-text)';
                      },
                      onMouseLeave: (o) => {
                        o.currentTarget.style.color = 'var(--ant-color-text-tertiary)';
                      },
                      children: [e.jsx(ye, { size: 16 }), t('dataset.detail.backToBenchmark')],
                    }),
                    e.jsxs(r, {
                      horizontal: !0,
                      align: 'start',
                      justify: 'space-between',
                      children: [
                        e.jsxs(r, {
                          horizontal: !0,
                          align: 'start',
                          gap: 12,
                          children: [
                            e.jsx('div', {
                              style: {
                                alignItems: 'center',
                                background: 'var(--ant-color-primary-bg)',
                                borderRadius: 10,
                                display: 'flex',
                                flexShrink: 0,
                                height: 40,
                                justifyContent: 'center',
                                width: 40,
                              },
                              children: e.jsx(ve, {
                                size: 20,
                                style: { color: 'var(--ant-color-primary)' },
                              }),
                            }),
                            e.jsxs(r, {
                              gap: 4,
                              children: [
                                e.jsx(w.Title, {
                                  level: 4,
                                  style: { margin: 0 },
                                  children: x.name,
                                }),
                                x.description &&
                                  e.jsx(w.Text, { type: 'secondary', children: x.description }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(r, {
                          horizontal: !0,
                          gap: 8,
                          children: [
                            e.jsx(R, {
                              icon: be,
                              size: 'small',
                              variant: 'outlined',
                              onClick: () => B(!0),
                              children: t('common.edit'),
                            }),
                            e.jsx(R, {
                              danger: !0,
                              icon: Ce,
                              size: 'small',
                              variant: 'outlined',
                              onClick: ee,
                              children: t('common.delete'),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(r, {
                      gap: 12,
                      children: [
                        e.jsxs(r, {
                          horizontal: !0,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            e.jsx(w.Text, { strong: !0, children: t('dataset.detail.testCases') }),
                            e.jsx(w.Text, {
                              type: 'secondary',
                              children: t('dataset.detail.caseCount', { count: _ }),
                            }),
                          ],
                        }),
                        e.jsx('div', {
                          style: {
                            border: '1px solid var(--ant-color-border-secondary)',
                            borderRadius: 8,
                            overflow: 'hidden',
                          },
                          children: e.jsx(ie, {
                            datasetEvalMode: x?.evalMode,
                            diffFilter: m,
                            pagination: c,
                            search: f,
                            selectedId: i?.id,
                            testCases: U,
                            total: _,
                            onAddCase: () => E(!0),
                            onDelete: Y,
                            onEdit: P,
                            onImport: () => A(!0),
                            onPageChange: (o, h) => v({ current: o, pageSize: h }),
                            onPreview: b,
                            onDiffFilterChange: (o) => {
                              (S(o), v((h) => ({ ...h, current: 1 })));
                            },
                            onSearchChange: (o) => {
                              (k(o), v((h) => ({ ...h, current: 1 })));
                            },
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(r, {
                      gap: 12,
                      children: [
                        e.jsxs(r, {
                          horizontal: !0,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            e.jsx(w.Text, {
                              strong: !0,
                              children: t('dataset.detail.relatedRuns', { count: M.length }),
                            }),
                            e.jsx(R, {
                              icon: we,
                              size: 'small',
                              onClick: () => D(!0),
                              children: t('dataset.detail.addRun'),
                            }),
                          ],
                        }),
                        M.length > 0
                          ? e.jsx(r, {
                              gap: 12,
                              children: M.map((o) => e.jsx(ce, { benchmarkId: n, run: o }, o.id)),
                            })
                          : e.jsx(de, { onCreate: () => D(!0) }),
                      ],
                    }),
                  ],
                }),
                i && e.jsx(Se, { testCase: i, onClose: () => b(null) }),
              ],
            }),
            T && e.jsx(pe, { dataset: x, open: T, onCancel: () => B(!1), onSuccess: g }),
            e.jsx(ue, { datasetId: s, open: W, onClose: () => A(!1), onSuccess: g }),
            e.jsx(me, { datasetId: s, open: G, onClose: () => E(!1), onSuccess: g }),
            z && e.jsx(ke, { open: !!z, testCase: z, onClose: () => P(null), onSuccess: g }),
            e.jsx(xe, {
              benchmarkId: n,
              datasetId: s,
              datasetName: x.name,
              open: K,
              onClose: () => D(!1),
            }),
          ],
        })
      : null;
  });
export { Pt as default };
