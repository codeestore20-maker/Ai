import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as I,
  by as w,
  F as C,
  Z as A,
  B as M,
  j as _,
  f as S,
  I as v,
  d as T,
  k as D,
  aE as B,
} from './index-wqF_YeCD.js';
import { W as F } from './index-CuXRElpN.js';
import { M as N } from './const-lbjNOSiN.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as P, U, S as W } from './index-DFnapB1A.js';
import { u as H } from './MarketAuthProvider-DbqeEkZ0.js';
import { N as R } from './index-CM5xBcBb.js';
import { D as E } from './DropdownMenu-Bcey0IX9.js';
import { u as V } from './useQueryRoute-DE6qajN7.js';
import { a as $, b as z } from './navigation--piBCllx.js';
import { D as l } from './index-C67aJrLL.js';
import { S as d } from './skills-Dr1Utsva.js';
import { M as n } from './mcp-bmlNDBWs.js';
import { P as g } from './providers-CynUfYza.js';
import { M as m } from './models-CeBX_1mO.js';
import { A as k } from './assistants-Bnb1hBSy.js';
import { b4 as L, c7 as O } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './index-DX6H0ZUv.js';
import './SearchBar-CtP9K3Py.js';
import './Input-CFCD7LRl.js';
import './style-DH5CJqbo.js';
import './index-vHLvwros.js';
import './index-DoTPv69l.js';
import './Input-B_ItaHnj.js';
import './index-D3TOmt6l.js';
import './EyeOutlined-DfHAjohP.js';
import './TextArea-dBYiV5h5.js';
import './Spotlight-Bb0bqvsS.js';
import './index-BJ9KbyB2.js';
import './withSuspense-twnyXsUR.js';
import './index-wR6vMS6h.js';
import './index-9X-Qy44z.js';
import './index-ZAuWfDM0.js';
import './index-C-p4Ij3D.js';
import './index-BkwR-xvn.js';
import './Block-BiiCaTlV.js';
import './_url-5rJL-Hpp.js';
import './Modal-BOLB10DT.js';
import './Drawer-Bub1oHxZ.js';
import './index-02V2dFou.js';
import './row-CjE_Fa9c.js';
import './Pagination-B8LfT_Cq.js';
import './LeftOutlined-TlvAEfN5.js';
import './index-Bw2NYvGm.js';
import './index-dWohkCtg.js';
import './useBubbleLock-D8efMGR_.js';
import './events-NnJKY1rz.js';
import './Trans-DQn6XkDw.js';
import './TextArea-HEXidvoE.js';
import './index-D3L0HQGD.js';
import './EmojiPicker-CPvx8pel.js';
import './useTranslation-BvAL3EmF.js';
import './emojiPicker-fXP8_c7a.js';
import './Popover-DbrKwSZe.js';
import './parseTrigger-J7YMesNw.js';
import './useOpenInteractionType-DzU6ZbbX.js';
import './Tabs-Cn9A48o2.js';
import './index-B6BaVDQW.js';
import './EllipsisOutlined-DKvYkod-.js';
import './PlusOutlined-DJcgxPPp.js';
import './Dropdown-BRh18yeL.js';
import './index-DRUoAI_X.js';
import './DeleteOutlined-DFutYCzo.js';
import './progress-CnpjojkM.js';
import './index-Ciqn2WuZ.js';
import './general-D3HMJCKF.js';
import './store-I8paDSMM.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
import './SiX-DO6VXJ8i.js';
import './SiGithub-Bv-kH4Y-.js';
import './tools-DB_zvMRN.js';
import './index-Bhvd7-zP.js';
import './useForm-C9AjLT0G.js';
import './ToggleLeftPanelButton-B9amFjO3.js';
import './getPseudoElementBounds-DdOMOuAX.js';
import './index-CknUj28g.js';
import './base-AbuBx_QK.js';
var y = ((t) => (
  (t.CreatedAt = 'createdAt'),
  (t.Identifier = 'identifier'),
  (t.Title = 'title'),
  t
))(y || {});
const h = S(({ css: t }) => ({
    footer: t`
    min-height: 320px;
    padding-block-start: 32px;

    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 512px auto;
  `,
    footer_dark: t`
    background-image: url('/images/community_footer_dark.webp');
    background-blend-mode: screen;
  `,
    footer_light: t`
    background-image: url('/images/community_footer_light.webp');
    background-blend-mode: multiply;
  `,
  })),
  Q = s.memo(() => {
    const { t } = I('discover'),
      r = w(),
      { isAuthenticated: a, signIn: c } = H(),
      [u, i] = s.useState(!1),
      p = s.useCallback(async () => {
        i(!0);
        try {
          await c();
        } catch {}
        i(!1);
      }, [c]);
    return a
      ? e.jsx(P, {})
      : e.jsxs(C, {
          align: 'center',
          className: _(h.footer, r ? h.footer_dark : h.footer_light),
          flex: 'none',
          gap: 4,
          children: [
            e.jsx(A, {
              strong: !0,
              align: 'center',
              as: 'h2',
              fontSize: 22,
              children: t('footer.title'),
            }),
            e.jsx(A, {
              align: 'center',
              fontSize: 16,
              type: 'secondary',
              children: t('footer.desc'),
            }),
            e.jsx(M, {
              loading: u,
              type: 'primary',
              style: { marginTop: 16 },
              onClick: p,
              children: t('user.login'),
            }),
          ],
        });
  }),
  q = s.memo(() => {
    const { t } = I('discover'),
      r = $(),
      { sort: a } = z(),
      c = V(),
      u = s.useMemo(() => r.split('community/')[1], [r]),
      i = s.useMemo(() => {
        switch (u) {
          case l.Assistants:
            return [
              { key: k.Recommended, label: t('assistants.sorts.recommended') },
              { key: k.UpdatedAt, label: t('assistants.sorts.updatedAt') },
              { key: k.MostUsage, label: t('assistants.sorts.mostUsage') },
              { key: k.HaveSkills, label: t('assistants.sorts.haveSkills') },
            ];
          case l.Plugins:
            return [
              { key: y.CreatedAt, label: t('plugins.sorts.createdAt') },
              { key: y.Title, label: t('plugins.sorts.title') },
              { key: y.Identifier, label: t('plugins.sorts.identifier') },
            ];
          case l.Models:
            return [
              { key: m.ReleasedAt, label: t('models.sorts.releasedAt') },
              { key: m.Identifier, label: t('models.sorts.identifier') },
              { key: m.ContextWindowTokens, label: t('models.sorts.contextWindowTokens') },
              { key: m.InputPrice, label: t('models.sorts.inputPrice') },
              { key: m.OutputPrice, label: t('models.sorts.outputPrice') },
              { key: m.ProviderCount, label: t('models.sorts.providerCount') },
            ];
          case l.Providers:
            return [
              { key: g.Default, label: t('providers.sorts.default') },
              { key: g.Identifier, label: t('providers.sorts.identifier') },
              { key: g.ModelCount, label: t('providers.sorts.modelCount') },
            ];
          case l.Mcp:
            return [
              { key: n.Recommended, label: t('mcp.sorts.recommended') },
              { key: n.IsFeatured, label: t('mcp.sorts.isFeatured') },
              { key: n.IsValidated, label: t('mcp.sorts.isValidated') },
              { key: n.InstallCount, label: t('mcp.sorts.installCount') },
              { key: n.RatingCount, label: t('mcp.sorts.ratingCount') },
              { key: n.UpdatedAt, label: t('mcp.sorts.updatedAt') },
              { key: n.CreatedAt, label: t('mcp.sorts.createdAt') },
            ];
          case l.Skills:
            return [
              { key: d.InstallCount, label: t('skills.sorts.installCount') },
              { key: d.UpdatedAt, label: t('skills.sorts.updatedAt') },
              { key: d.CreatedAt, label: t('skills.sorts.createdAt') },
              { key: d.Stars, label: t('skills.sorts.stars') },
              { key: d.Name, label: t('skills.sorts.name') },
            ];
          default:
            return [];
        }
      }, [t, u]),
      p = s.useMemo(() => {
        if (a) {
          const o = i.find((b) => String(b.key) === a);
          if (o) return o;
        }
        return i[0];
      }, [i, a]),
      j = (o) => {
        c.push(r, { query: { sort: o } });
      },
      f = s.useMemo(
        () =>
          i.map((o) => ({
            checked: o.key === p?.key,
            closeOnClick: !0,
            key: o.key,
            label: o.label,
            onCheckedChange: (b) => {
              b && j(String(o.key));
            },
            type: 'checkbox',
          })),
        [p?.key, j, i],
      );
    return f.length === 0
      ? null
      : e.jsx(E, {
          items: f,
          trigger: 'both',
          children: e.jsxs(M, {
            'data-testid': 'sort-dropdown',
            'icon': e.jsx(v, { icon: O }),
            'type': 'text',
            'children': [p?.label ?? f[0]?.label, e.jsx(v, { icon: L })],
          }),
        });
  }),
  X = S(({ css: t, cssVar: r }) => ({
    headerContainer: t`
    border-block-end: 1px solid var(--header-border-color, ${r.colorBorderSecondary});
  `,
  })),
  Z = s.memo(() => {
    const r = T().pathname === '/',
      a = { '--header-border-color': D.colorBorderSecondary };
    return e.jsx(R, {
      className: X.headerContainer,
      left: e.jsx(W, {}),
      style: a,
      right: !r && e.jsxs(e.Fragment, { children: [e.jsx(q, {}), e.jsx(U, {})] }),
      styles: { left: { flex: 1 } },
    });
  }),
  x = S(({ css: t }) => ({
    contentContainer: t`
    min-height: 100%;
  `,
    mainContainer: t`
    overflow-y: auto;
  `,
    spacer: t`
    flex: 1;
  `,
  })),
  Te = () =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, {}),
        e.jsx(C, {
          className: x.mainContainer,
          height: '100%',
          width: '100%',
          children: e.jsxs(F, {
            className: x.contentContainer,
            gap: 16,
            minWidth: N,
            style: { paddingBottom: 56, paddingTop: 16 },
            wrapperStyle: { minHeight: '100%', position: 'relative' },
            children: [
              e.jsx(C, {
                gap: 16,
                style: { paddingBlockEnd: 40 },
                width: '100%',
                children: e.jsx(B, {}),
              }),
              e.jsx('div', { className: x.spacer }),
              e.jsx(Q, {}),
            ],
          }),
        }),
      ],
    });
export { Te as default };
