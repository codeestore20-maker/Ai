import { j as e } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  a_ as B,
  a1 as E,
  g,
  ax as T,
  X as f,
  bD as I,
  v as l,
  w as N,
  i as M,
  dc as P,
  B as n,
  I as c,
  aY as Y,
  an as G,
  F as p,
} from './index-CCbaqAw2.js';
import { F as L } from './FormGroup-kE_nus1W.js';
import { S as W } from './index-CHu9DsJf.js';
import { S as z } from './SettingHeader-WJWruQ_N.js';
import { B as h } from './providerConfig-qS2Xx-oI.js';
import { F as d } from './index-DvswU7tK.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as H } from './index-CBONRMo5.js';
import { d as O } from './downloadFile-DYbfnmZ_.js';
import { e as R } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import { u as U, g as V } from './index-eRBSrsT4.js';
import { u as $ } from './store-BS_MHMXS.js';
import { u as q } from './index-DTpXAdSc.js';
import { S as J } from './index-DXMTDzya.js';
import { b_ as X, b$ as K } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Block-BrEJCAE1.js';
import './index-B8mGalR4.js';
import './index-DOb9TCBr.js';
import './useForm-DPetWJu5.js';
import './row-DZp4IMzh.js';
import './index-BEWAql7N.js';
import './useTranslation-D4BITX8Q.js';
import './form-CzkHLuiW.js';
import './Modal-Cu7YIYh_.js';
import './Drawer-Bca0nwDn.js';
import './upload-Df31PzX2.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-CGZd35pk.js';
import './v4-BKrj-4V8.js';
import './Alert-CHcyDlgq.js';
import './AccordionItem-V1uwesUy.js';
import './index-BZoq5SDd.js';
import './index-B4Zarq8E.js';
import './base-AbuBx_QK.js';
import './index-BSm68Bwa.js';
import './Trans-C_knUiir.js';
import './format-CQDeZFBW.js';
import './progress-BlUeGgfn.js';
import './Table-CFycoAE9.js';
import './index-BALqkhOe.js';
import './useBubbleLock-D8efMGR_.js';
import './index-DM7ShMil.js';
import './LeftOutlined-CAuJGpBu.js';
import './Dropdown-CyMyEhFy.js';
import './index-D3URHQbI.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './index-DrbS3k5v.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './index-BV4biRKt.js';
import './scrollTo-B51N32mC.js';
import './Pagination-Bwnh0Gn9.js';
import './index-04iJt7LS.js';
import './index-DmKnJiHm.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-H-12C914.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './clientModelRuntime-De9siZoi.js';
import './index-DCfYfopE.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DRgp3rTF.js';
import './store-BIrLg5EY.js';
import './selectors-B3Ej40yR.js';
import './tools-Dyz0Rsch.js';
import './ipc-wTHpVC92.js';
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './useClientDataSWRWithSync-Bduy47c5.js';
import './index-Cn54Zpoy.js';
import './abortableRequest-CqTkNl3n.js';
import './store-BtQN9Yy-.js';
import './browser-6Zvo89Bh.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
function Q() {
  return null;
}
class Z {
  exportData = async () => await B.exporter.exportData.mutate();
}
const tt = new Z();
class et {
  exportAll = async () => {
    const { data: a, url: o, schemaHash: i } = await tt.exportData(),
      s = `${E().format('YYYY-MM-DD-hh-mm')}_${h}-data.json`;
    if (o) {
      await O(o, s);
      return;
    }
    R({ data: a, mode: 'postgres', schemaHash: i }, s);
  };
}
const rt = new et(),
  ot = () => {
    const { t } = g('setting'),
      [a] = d.useForm(),
      { message: o, modal: i } = T.useApp(),
      s = f(I.enableBusinessFeatures),
      [m, x] = q((r) => [r.clearSessions, r.clearSessionGroups]),
      [S, v] = U((r) => [r.removeAllTopics, r.clearAllMessages]),
      [y] = $((r) => [r.removeAllFiles]),
      j = V((r) => r.removeAllPlugins),
      F = l(N.currentSettings, M),
      [b, A] = l((r) => [r.setSettings, r.resetSettings]),
      w = u.useCallback(() => {
        i.confirm({
          centered: !0,
          okButtonProps: { danger: !0 },
          onOk: async () => {
            (await m(),
              await j(),
              await S(),
              await y(),
              await v(),
              await x(),
              o.success(t('danger.clear.success')));
          },
          title: t('danger.clear.confirm'),
        });
      }, []),
      C = u.useCallback(() => {
        i.confirm({
          centered: !0,
          okButtonProps: { danger: !0 },
          onOk: () => {
            (A(), a.setFieldsValue(P), o.success(t('danger.reset.success')));
          },
          title: t('danger.reset.confirm'),
        });
      }, []),
      D = {
        children: [
          {
            children: e.jsx(J, {}),
            desc: t('analytics.telemetry.desc', { appName: h }),
            label: t('analytics.telemetry.title'),
            minWidth: void 0,
            name: ['general', 'telemetry'],
            valuePropName: 'checked',
          },
        ],
        title: t('analytics.title'),
      },
      _ = () => ({
        children: e.jsx(n, {
          icon: e.jsx(c, { icon: K }),
          onClick: () => {
            rt.exportAll();
          },
          children: t('storage.actions.export.button'),
        }),
        label: t('storage.actions.export.title'),
        layout: 'horizontal',
        minWidth: void 0,
      }),
      k = {
        children: [
          {
            children: e.jsx(H, {
              children: e.jsx(n, {
                icon: e.jsx(c, { icon: X }),
                children: t('storage.actions.import.button'),
              }),
            }),
            label: t('storage.actions.import.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
          ...(s ? [_()] : []),
          {
            children: e.jsx(n, {
              danger: !0,
              type: 'primary',
              onClick: w,
              children: t('danger.clear.action'),
            }),
            desc: t('danger.clear.desc'),
            label: t('danger.clear.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
          {
            children: e.jsx(n, {
              danger: !0,
              type: 'primary',
              onClick: C,
              children: t('danger.reset.action'),
            }),
            desc: t('danger.reset.desc'),
            label: t('danger.reset.title'),
            layout: 'horizontal',
            minWidth: void 0,
          },
        ],
        title: t('storage.actions.title'),
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(d, {
          collapsible: !1,
          form: a,
          initialValues: F,
          items: [D, k],
          itemsType: 'group',
          variant: 'filled',
          onValuesChange: b,
          ...Y,
        }),
        s && e.jsx(Q, {}),
      ],
    });
  },
  Te = () => {
    const { t } = g('setting'),
      a = f((s) => s.serverConfigInit),
      o = l(G.isLoaded),
      i = !a || !o;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(z, { title: t('tab.storage') }),
        e.jsx(p, {
          style: { display: i ? 'flex' : 'none' },
          children: e.jsx(L, {
            collapsible: !1,
            title: t('storage.actions.title'),
            variant: 'filled',
            children: e.jsx(W, { active: !0, paragraph: { rows: 4 } }),
          }),
        }),
        e.jsx(p, { style: { display: i ? 'none' : 'flex' }, children: e.jsx(ot, {}) }),
      ],
    });
  };
export { Te as default };
