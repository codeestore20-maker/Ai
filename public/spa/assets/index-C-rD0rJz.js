import { j as s } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as k,
  v as n,
  w as S,
  i as x,
  Y as j,
  ch as b,
  aY as v,
  I as E,
  ci as F,
} from './index-wqF_YeCD.js';
import { S as V } from './SettingHeader-DckAXuUq.js';
import { F as l } from './index-DJMMkijI.js';
import { H } from './HotkeyInput-Bg0nHzyK.js';
import { S as I } from './index-BkwR-xvn.js';
import { r as c } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { h as C } from '../i18n/i18n-default-CO1hd6iR.js';
import { _ as w } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './index-D-8aLEt3.js';
import './FormGroup-CwGEe0RW.js';
import './index-Bhvd7-zP.js';
import './useForm-C9AjLT0G.js';
import './row-CjE_Fa9c.js';
import './index-C-p4Ij3D.js';
import './useTranslation-BvAL3EmF.js';
import './form-CzkHLuiW.js';
import './hotkey-ii61g0AV.js';
import './index-BJ9KbyB2.js';
import './Block-BiiCaTlV.js';
const T = c.memo(() => {
    const { t: e } = k(['setting', 'hotkey']),
      [a] = l.useForm(),
      { hotkey: r } = n(S.currentSettings, x),
      [i, p] = n((t) => [t.setSettings, t.isUserStateInit]),
      [d, o] = c.useState(!1);
    if (!p) return s.jsx(I, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const u = async (t) => {
        if (r[t]) {
          (o(!0), a.setFieldValue(t, ''));
          try {
            await i({ hotkey: { [t]: '' } });
          } finally {
            o(!1);
          }
        }
      },
      y = (t) => {
        const m = Object.entries(r)
          .map(([h, g]) => (h === t.id ? !1 : g))
          .filter(Boolean);
        return {
          children: s.jsx(H, {
            allowClear: !t.nonEditable,
            disabled: t.nonEditable,
            hotkeyConflicts: m,
            placeholder: e('hotkey.record'),
            resetValue: t.keys,
            texts: { clear: e('hotkey.clearBinding') },
            onClear: () => {
              u(t.id);
            },
          }),
          desc: C[`${t.id}.desc`] ? e(`${t.id}.desc`, { ns: 'hotkey' }) : void 0,
          label: e(`${t.id}.title`, { ns: 'hotkey' }),
          name: t.id,
        };
      },
      f = {
        children: j.filter((t) => t.group === b.Conversation).map((t) => y(t)),
        extra: d && s.jsx(E, { spin: !0, icon: w, size: 16, style: { opacity: 0.5 } }),
        title: e('hotkey.group.conversation'),
      };
    return s.jsx(l, {
      collapsible: !1,
      form: a,
      initialValues: r,
      items: [f],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (t) => {
        o(!0);
        try {
          await i({ hotkey: t });
        } finally {
          o(!1);
        }
      },
      ...v,
    });
  }),
  _ = c.memo(() => {
    const { t: e } = k(['setting', 'hotkey']),
      [a] = l.useForm(),
      { hotkey: r } = n(S.currentSettings, x),
      [i, p] = n((t) => [t.setSettings, t.isUserStateInit]),
      [d, o] = c.useState(!1);
    if (!p) return s.jsx(I, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const u = async (t) => {
        if (r[t]) {
          (o(!0), a.setFieldValue(t, ''));
          try {
            await i({ hotkey: { [t]: '' } });
          } finally {
            o(!1);
          }
        }
      },
      y = (t) => {
        const m = Object.entries(r)
          .map(([h, g]) => (h === t.id ? !1 : g))
          .filter(Boolean);
        return {
          children: s.jsx(H, {
            allowClear: !t.nonEditable,
            disabled: t.nonEditable,
            hotkeyConflicts: m,
            placeholder: e('hotkey.record'),
            resetValue: t.keys,
            texts: { clear: e('hotkey.clearBinding') },
            onClear: () => {
              u(t.id);
            },
          }),
          desc: C[`${t.id}.desc`] ? e(`${t.id}.desc`, { ns: 'hotkey' }) : void 0,
          label: e(`${t.id}.title`, { ns: 'hotkey' }),
          name: t.id,
        };
      },
      f = {
        children: j.filter((t) => t.group === b.Essential).map((t) => y(t)),
        extra: d && s.jsx(E, { spin: !0, icon: w, size: 16, style: { opacity: 0.5 } }),
        title: e('hotkey.group.essential'),
      };
    return s.jsx(l, {
      collapsible: !1,
      form: a,
      initialValues: r,
      items: [f],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (t) => {
        o(!0);
        try {
          await i({ hotkey: t });
        } finally {
          o(!1);
        }
      },
      ...v,
    });
  }),
  ot = () => {
    const { t: e } = k('setting');
    return s.jsxs(s.Fragment, {
      children: [s.jsx(V, { title: e('tab.hotkey') }), F, s.jsx(_, {}), s.jsx(T, {})],
    });
  };
export { ot as default };
