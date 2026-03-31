import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  f as N,
  N as O,
  g as A,
  ax as E,
  u as I,
  s as V,
  aL as B,
  bx as F,
  F as p,
  Z as d,
  B as C,
} from './index-CCbaqAw2.js';
import { C as H } from './index-kXZleJOZ.js';
import { k as U, l as D } from './Popover-BUCP4Otk.js';
import { S as $ } from './index-CHu9DsJf.js';
import { S as G } from './Select-iTIGGd-y.js';
import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as Z } from './useAppOrigin-NMK6zePa.js';
import { t as x } from './index-Cn54Zpoy.js';
import { u as q } from './index-eRBSrsT4.js';
import { b1 as J, b2 as w, aw as K } from '../vendor/vendor-icons-BHMUH78i.js';
import { D as Q } from './index-B8mGalR4.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-qS2Xx-oI.js';
import './Block-BrEJCAE1.js';
import './parseTrigger-DaLSGJKf.js';
import './useOpenInteractionType-DyLJ0hMf.js';
import './getPseudoElementBounds-DP7LbzHC.js';
import './index-C03UT8zo.js';
import './styles-Ck54IgRq.js';
import './store-DYTo8uRs.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
import './ipc-wTHpVC92.js';
import './sync-BIgbMA87.js';
import './abortableRequest-CqTkNl3n.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-BS_MHMXS.js';
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
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './store-BtQN9Yy-.js';
import './browser-6Zvo89Bh.js';
import './mcp-bmlNDBWs.js';
const y = N(({ css: s }) => ({
    container: s`
    padding: 16px;
  `,
    hint: s`
    font-size: 12px;
  `,
  })),
  X = a.memo(({ onOpenModal: s }) => {
    const { t } = A('chat'),
      { message: o, modal: k } = E.useApp(),
      [T, S] = a.useState(!1),
      { close: b } = D(),
      L = a.useRef(null),
      z = Z(),
      r = q((i) => i.activeTopicId),
      [j, M] = I((i) => [
        V.systemStatus(i).hideTopicSharePrivacyWarning ?? !1,
        i.updateSystemStatus,
      ]),
      {
        data: l,
        isLoading: h,
        mutate: c,
      } = B(r ? ['topic-share-info', r] : null, () => x.getShareInfo(r), { revalidateOnFocus: !1 });
    a.useEffect(() => {
      !h && !l && r && x.enableSharing(r, 'private').then(() => c());
    }, [h, l, r, c]);
    const u = l?.id ? `${z}/share/t/${l.id}` : '',
      m = l?.visibility || 'private',
      f = a.useCallback(
        async (i) => {
          if (r) {
            S(!0);
            try {
              (await x.updateShareVisibility(r, i),
                await c(),
                o.success(t('shareModal.link.visibilityUpdated')));
            } catch {
              o.error(t('shareModal.link.updateError'));
            } finally {
              S(!1);
            }
          }
        },
        [r, c, o, t],
      ),
      P = a.useCallback(
        (i) => {
          if (m === 'private' && i === 'link' && !j) {
            let n = !1;
            k.confirm({
              cancelText: t('cancel', { ns: 'common' }),
              centered: !0,
              content: e.jsxs('div', {
                children: [
                  e.jsx('p', { children: t('shareModal.popover.privacyWarning.content') }),
                  e.jsx('div', {
                    style: { marginTop: 16 },
                    children: e.jsx(H, {
                      onChange: (g) => {
                        n = g;
                      },
                      children: t('shareModal.popover.privacyWarning.doNotShowAgain'),
                    }),
                  }),
                ],
              }),
              okText: t('shareModal.popover.privacyWarning.confirm'),
              onOk: () => {
                (n && M({ hideTopicSharePrivacyWarning: !0 }), f(i));
              },
              title: t('shareModal.popover.privacyWarning.title'),
              type: 'warning',
            });
          } else f(i);
        },
        [m, j, k, t, M, f],
      ),
      W = a.useCallback(async () => {
        u && (await F(u), o.success(t('shareModal.copyLinkSuccess')));
      }, [u, o, t]),
      R = a.useCallback(() => {
        (b(), s?.());
      }, [b, s]);
    if (h || !l)
      return e.jsxs(p, {
        className: y.container,
        gap: 16,
        children: [
          e.jsx(d, { strong: !0, children: t('share', { ns: 'common' }) }),
          e.jsx($, { active: !0, paragraph: { rows: 2 } }),
        ],
      });
    const v = [
        {
          icon: e.jsx(J, { size: 14 }),
          label: t('shareModal.link.permissionPrivate'),
          value: 'private',
        },
        { icon: e.jsx(w, { size: 14 }), label: t('shareModal.link.permissionLink'), value: 'link' },
      ],
      _ = () => {
        switch (m) {
          case 'private':
            return t('shareModal.link.privateHint');
          case 'link':
            return t('shareModal.link.linkHint');
        }
      };
    return e.jsxs(p, {
      className: y.container,
      gap: 12,
      ref: L,
      children: [
        e.jsx(d, { strong: !0, children: t('shareModal.popover.title') }),
        e.jsxs(p, {
          gap: 4,
          children: [
            e.jsx(d, { type: 'secondary', children: t('shareModal.popover.visibility') }),
            e.jsx(G, {
              disabled: T,
              options: v,
              style: { width: '100%' },
              value: m,
              labelRender: ({ value: i }) => {
                const n = v.find((g) => g.value === i);
                return e.jsxs(p, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [n?.icon, n?.label],
                });
              },
              optionRender: (i) =>
                e.jsxs(p, {
                  horizontal: !0,
                  align: 'center',
                  gap: 8,
                  children: [v.find((n) => n.value === i.value)?.icon, i.label],
                }),
              onChange: P,
            }),
          ],
        }),
        e.jsx(d, { className: y.hint, type: 'secondary', children: _() }),
        e.jsx(Q, { style: { margin: '4px 0' } }),
        e.jsxs(p, {
          horizontal: !0,
          align: 'center',
          justify: 'space-between',
          children: [
            e.jsx(C, {
              icon: K,
              size: 'small',
              type: 'text',
              variant: 'text',
              onClick: R,
              children: t('shareModal.popover.moreOptions'),
            }),
            e.jsx(C, {
              icon: w,
              size: 'small',
              type: 'primary',
              onClick: W,
              children: t('shareModal.copyLink'),
            }),
          ],
        }),
      ],
    });
  }),
  Je = a.memo(({ children: s, onOpenModal: t }) => {
    const o = O();
    return e.jsx(U, {
      arrow: !1,
      content: e.jsx(X, { onOpenModal: t }),
      placement: o ? 'top' : 'bottomRight',
      trigger: ['click'],
      styles: { content: { padding: 0, width: o ? '100vw' : 366 } },
      children: s,
    });
  });
export { Je as default };
