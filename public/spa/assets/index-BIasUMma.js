import { j as a } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as o, v as s, w, i as y, aY as I, f as k, I as M } from './index-NXWXCubP.js';
import './providerConfig-B8LLUHQ4.js';
import { F as _ } from './index-COTQuEIN.js';
import { S as L } from './index-ByEGfox1.js';
import { S as E } from './Select-BqqYx4F9.js';
import { S as l } from './Switch-DMGcmbu9.js';
import { r as n } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { S as F } from './SettingHeader-2rc9j5hd.js';
import { a as P } from './autoUpdate-BG2otmas.js';
import { p as U } from './preference-Bz-M9G8l.js';
import { l as R } from './labPrefer-C2TVXe7g.js';
import { _ as T } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './FormGroup-BhNhczlQ.js';
import './index-BVMYj18a.js';
import './index-D0G2dzZj.js';
import './useForm-Cs6bWEUv.js';
import './row-BLwlwhVW.js';
import './index-CaXSHvap.js';
import './useTranslation-BFA2TfNv.js';
import './form-CzkHLuiW.js';
import './Block-DRcWCw_2.js';
import './getPseudoElementBounds-dE4zhuHB.js';
import './useOpenInteractionType-D-fuFThM.js';
import './index-DaaCQ1_i.js';
import './styles-D-NiO2rb.js';
import './ipc-wTHpVC92.js';
const G = k(({ css: t }) => ({
    labItem: t`
    .ant-form-item-row {
      align-items: center !important;
    }
  `,
  })),
  ue = n.memo(() => {
    const { t } = o('setting'),
      { t: r } = o('labs'),
      c = s((e) => w.currentSettings(e).general, y),
      [d, m] = s((e) => [e.setSettings, e.isUserStateInit]),
      [p, i] = n.useState(!1),
      [u, f, h] = s((e) => [U.isPreferenceInit(e), R.enableInputMarkdown(e), e.updateLab]),
      [b, g] = n.useState('stable');
    n.useEffect(() => {}, []);
    const v = n.useCallback((e) => {
      (g(e), P.setUpdateChannel(e));
    }, []);
    if (!m) return a.jsx(L, { active: !0, paragraph: { rows: 5 }, title: !1 });
    const S = {
        children: [
          {
            children: a.jsx(l, {}),
            desc: t('settingCommon.devMode.desc'),
            label: t('settingCommon.devMode.title'),
            minWidth: void 0,
            name: 'isDevMode',
            valuePropName: 'checked',
          },
        ],
        extra: p && a.jsx(M, { spin: !0, icon: T, size: 16, style: { opacity: 0.5 } }),
        title: t('tab.advanced'),
      },
      C = [
        { label: t('tab.advanced.updateChannel.stable'), value: 'stable' },
        { label: t('tab.advanced.updateChannel.nightly'), value: 'nightly' },
        { label: t('tab.advanced.updateChannel.canary'), value: 'canary' },
      ];
    (E,
      t('tab.advanced.updateChannel.desc'),
      t('tab.advanced.updateChannel.title'),
      t('tab.advanced.updateChannel.title'));
    const x = {
        children: [
          {
            avatar: a.jsx('img', {
              alt: r('features.inputMarkdown.title'),
              src: 'https://github.com/user-attachments/assets/0527a966-3d95-46b4-b880-c0f3fca18f02',
              style: {
                borderRadius: 8,
                height: 72,
                marginRight: 12,
                objectFit: 'cover',
                width: 120,
              },
            }),
            children: a.jsx(l, {
              checked: f,
              loading: !u,
              onChange: (e) => h({ enableInputMarkdown: e }),
            }),
            className: G.labItem,
            desc: r('features.inputMarkdown.desc'),
            label: r('features.inputMarkdown.title'),
            minWidth: void 0,
          },
        ],
        title: r('title'),
      },
      j = [S, x];
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(F, { title: t('tab.advanced') }),
        a.jsx(_, {
          collapsible: !1,
          initialValues: c,
          items: j,
          itemsType: 'group',
          variant: 'filled',
          onValuesChange: async (e) => {
            (i(!0), await d({ general: e }), i(!1));
          },
          ...I,
        }),
      ],
    });
  });
export { ue as default };
