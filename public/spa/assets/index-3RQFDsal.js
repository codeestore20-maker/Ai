import { j as t } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { S as u } from './SettingHeader-2rc9j5hd.js';
import { g as n, v as s, w as y, i as g, aY as S, I as h } from './index-NXWXCubP.js';
import { F as a } from './index-COTQuEIN.js';
import { S as x } from './index-ByEGfox1.js';
import { r as l } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { L as v } from './LevelSlider-IzVdq3Bu.js';
import { S as j } from './index-BX7o7WZ0.js';
import { _ as E } from '../vendor/vendor-icons-BHMUH78i.js';
import './index-BVMYj18a.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './FormGroup-BhNhczlQ.js';
import './index-D0G2dzZj.js';
import './useForm-Cs6bWEUv.js';
import './row-BLwlwhVW.js';
import './index-CaXSHvap.js';
import './useTranslation-BFA2TfNv.js';
import './form-CzkHLuiW.js';
import './Block-DRcWCw_2.js';
import './index-8W6WZSVI.js';
const b = ['low', 'medium', 'high'],
  w = l.memo(() => {
    const { t: e } = n('setting'),
      [f] = a.useForm(),
      { memory: i } = s(y.currentSettings, g),
      [m, p] = s((r) => [r.setSettings, r.isUserStateInit]),
      [c, o] = l.useState(!1);
    if (!p) return t.jsx(x, { active: !0, paragraph: { rows: 3 }, title: !1 });
    const d = {
      children: [
        {
          children: t.jsx(j, {}),
          desc: e('memory.enabled.desc'),
          label: e('memory.enabled.title'),
          layout: 'horizontal',
          minWidth: void 0,
          name: 'enabled',
          valuePropName: 'checked',
        },
        {
          children: t.jsx(v, {
            defaultValue: 'medium',
            levels: b,
            style: { minWidth: 160 },
            value: i?.effort ?? 'medium',
            marks: {
              0: e('memory.effort.level.low'),
              1: e('memory.effort.level.medium'),
              2: e('memory.effort.level.high'),
            },
            onChange: async (r) => {
              (o(!0), await m({ memory: { effort: r } }), o(!1));
            },
          }),
          desc: e('memory.effort.desc'),
          label: e('memory.effort.title'),
          layout: 'horizontal',
          minWidth: void 0,
        },
      ],
      extra: c && t.jsx(h, { spin: !0, icon: E, size: 16, style: { opacity: 0.5 } }),
      title: e('memory.title'),
    };
    return t.jsx(a, {
      collapsible: !1,
      form: f,
      initialValues: i,
      items: [d],
      itemsType: 'group',
      variant: 'filled',
      onValuesChange: async (r) => {
        (o(!0), await m({ memory: r }), o(!1));
      },
      ...S,
    });
  }),
  J = () => {
    const { t: e } = n('setting');
    return t.jsxs(t.Fragment, { children: [t.jsx(u, { title: e('tab.memory') }), t.jsx(w, {})] });
  };
export { J as default };
