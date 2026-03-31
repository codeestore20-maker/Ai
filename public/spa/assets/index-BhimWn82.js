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
} from './index-CCbaqAw2.js';
import { W as F } from './index-BfriUzvd.js';
import { M as N } from './const-lbjNOSiN.js';
import { r as s } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { F as P, U, S as W } from './index-DnL23LoR.js';
import { u as H } from './MarketAuthProvider-96U-7dJV.js';
import { N as R } from './index-Bc5nJSK3.js';
import { D as E } from './DropdownMenu-lFO5GtVP.js';
import { u as V } from './useQueryRoute-BsRsj-7y.js';
import { a as $, b as z } from './navigation-Bah7Yd2Q.js';
import { D as l } from './index-C67aJrLL.js';
import { S as d } from './skills-Dr1Utsva.js';
import { M as n } from './mcp-bmlNDBWs.js';
import { P as g } from './providers-CynUfYza.js';
import { M as m } from './models-CeBX_1mO.js';
import { A as k } from './assistants-Bnb1hBSy.js';
import { b4 as L, c7 as O } from '../vendor/vendor-icons-BHMUH78i.js';
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
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './index-CHu9DsJf.js';
import './Block-BrEJCAE1.js';
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
import './getPseudoElementBounds-DP7LbzHC.js';
import './index-DXMTDzya.js';
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
