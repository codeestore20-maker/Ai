import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { M as b } from './Modal-Cu7YIYh_.js';
import { S as h } from './Segmented-OWqMdPLY.js';
import { i as d, f as P, g as p, F as y, I as v, Z as M, ai as _ } from './index-CCbaqAw2.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as x } from './index-DvswU7tK.js';
import { M as w } from './Markdown-DsRdo14X.js';
import { g as m, p as f, t as I, e as u } from './index-eRBSrsT4.js';
import { I as T } from './Input-BjItQTGh.js';
import { I as k } from './InputNumber-Bc06jjP8.js';
import { I as F } from './InputPassword-3Vj-9rif.js';
import { S as B } from './Select-oZ2297YF.js';
import { S as z } from './index-DXMTDzya.js';
import { S as E } from './index-D29wkt7l.js';
import { F as O } from './index-DOb9TCBr.js';
import { E as A } from './Empty-BCfh_42o.js';
import { W as C, c2 as N } from '../vendor/vendor-icons-BHMUH78i.js';
import { F as D } from './Table-CFycoAE9.js';
import { B as K } from './Block-BrEJCAE1.js';
import { P as W } from './PluginAvatar-DF2qfZWP.js';
import './providerConfig-qS2Xx-oI.js';
const H = l.memo(({ type: o, enum: a, format: n, minimum: r, maximum: i, ...s }) => {
    switch (o) {
      case 'string':
        return n === 'password'
          ? t.jsx(F, { ...s, autoComplete: 'new-password' })
          : a
            ? t.jsx(B, {
                ...s,
                options: a.map((e) => (typeof e == 'string' ? { label: e, value: e } : e)),
              })
            : t.jsx(T, { ...s });
      case 'number':
        return typeof r == 'number' || typeof i == 'number'
          ? t.jsx(E, { max: i, min: r, ...s })
          : t.jsx(k, { ...s });
      case 'boolean':
        return t.jsx(z, { ...s });
    }
  }),
  J = (o) =>
    o?.properties
      ? Object.entries(o.properties).map(([a, n]) => ({
          desc: n.description,
          enum: n.enum,
          format: n.format,
          label: n.title || a,
          maximum: n.maximum,
          minimum: n.minimum,
          name: a,
          tag: a,
          type: n.type,
        }))
      : [],
  R = P(({ css: o, cssVar: a }) => ({
    markdown: o`
    p {
      color: ${a.colorTextDescription};
    }
  `,
  })),
  $ = l.memo(({ schema: o, id: a }) => {
    const [n] = m((e) => [e.updatePluginSettings]),
      r = m(f.getPluginSettingsById(a), d),
      [i] = O.useForm(),
      s = J(o);
    return t.jsx(x, {
      footer: t.jsx(x.SubmitFooter, {}),
      form: i,
      gap: 16,
      initialValues: r,
      itemsType: 'flat',
      layout: 'vertical',
      variant: 'borderless',
      items: s.map((e) => ({
        children: t.jsx(H, {
          enum: e.enum,
          format: e.format,
          maximum: e.maximum,
          minimum: e.minimum,
          type: e.type,
        }),
        desc: e.desc && t.jsx(w, { className: R.markdown, variant: 'chat', children: e.desc }),
        key: e.label,
        label: e.label,
        name: e.name,
        tag: e.tag,
        valuePropName: e.type === 'boolean' ? 'checked' : void 0,
      })),
      onFinish: async (e) => {
        await n(a, e);
      },
    });
  }),
  q = l.memo(({ id: o }) => {
    const { t: a } = p('plugin'),
      n = m(f.getToolManifestById(o), d);
    return n?.api
      ? t.jsx(y, {
          paddingBlock: 16,
          width: '100%',
          children: t.jsx(D, {
            bordered: !0,
            dataSource: n.api,
            pagination: !1,
            rowKey: 'name',
            size: 'small',
            tableLayout: 'fixed',
            columns: [
              {
                dataIndex: 'name',
                render: (r) => t.jsx('code', { children: r }),
                title: a('detailModal.info.name'),
              },
              { dataIndex: 'description', title: a('detailModal.info.description') },
            ],
          }),
        })
      : t.jsx(A, {
          description: a('detailModal.info.description'),
          descriptionProps: { fontSize: 14 },
          icon: C,
          style: { maxWidth: 400 },
        });
  }),
  L = l.memo(({ identifier: o, size: a = 32 }) => {
    const { t: n } = p('plugin'),
      r = m(I.getMetaById(o), d),
      i = u.getPluginAvatar(r),
      s = u.getPluginTitle(r) ?? o;
    return i ? t.jsx(W, { alt: s, avatar: i, size: a }) : t.jsx(v, { icon: N });
  }),
  V = l.memo(({ id: o }) => {
    const a = m(f.getPluginMetaById(o), d);
    return t.jsxs(K, {
      horizontal: !0,
      gap: 16,
      padding: 16,
      variant: 'outlined',
      children: [
        t.jsx(L, { identifier: o, size: 40 }),
        t.jsxs(y, {
          gap: 2,
          children: [
            t.jsx('div', { children: u.getPluginTitle(a) }),
            t.jsx(M, { style: { fontSize: 12 }, type: 'secondary', children: u.getPluginDesc(a) }),
          ],
        }),
      ],
    });
  }),
  Z = l.memo(({ schema: o, onClose: a, id: n, onTabChange: r, open: i, tab: s }) => {
    const [e, j] = _('info', { onChange: r, value: s }),
      { t: c } = p('plugin'),
      g = u.isSettingSchemaNonEmpty(o);
    return t.jsxs(b, {
      allowFullscreen: !0,
      destroyOnHidden: !0,
      footer: null,
      open: i,
      title: c('dev.title.skillDetails'),
      width: 800,
      onCancel: a,
      onOk: () => {
        a();
      },
      children: [
        t.jsx(V, { id: n }),
        t.jsx(h, {
          block: !0,
          value: e,
          options: [
            { label: c('detailModal.tabs.info'), value: 'info' },
            g && { label: c('detailModal.tabs.settings'), value: 'settings' },
          ].filter(Boolean),
          style: { marginBlock: 16 },
          onChange: (S) => j(S),
        }),
        e === 'settings' ? g && t.jsx($, { id: n, schema: o }) : t.jsx(q, { id: n }),
      ],
    });
  }),
  xt = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Z }, Symbol.toStringTag, { value: 'Module' }),
  );
export { H as J, Z as P, L as a, xt as i, J as t };
