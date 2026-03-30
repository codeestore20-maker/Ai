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
} from './index-NXWXCubP.js';
import { F as L } from './FormGroup-BhNhczlQ.js';
import { S as W } from './index-ByEGfox1.js';
import { S as z } from './SettingHeader-2rc9j5hd.js';
import { B as h } from './providerConfig-B8LLUHQ4.js';
import { F as d } from './index-COTQuEIN.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as H } from './index-B9V2Wxnt.js';
import { d as O } from './downloadFile-DYbfnmZ_.js';
import { e as R } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import { u as U, g as V } from './index-4ACezDLV.js';
import { u as $ } from './store-DPVFoUA8.js';
import { u as q } from './index-CXaCLYau.js';
import { S as J } from './index-BX7o7WZ0.js';
import { b_ as X, b$ as K } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Block-DRcWCw_2.js';
import './index-BVMYj18a.js';
import './index-D0G2dzZj.js';
import './useForm-Cs6bWEUv.js';
import './row-BLwlwhVW.js';
import './index-CaXSHvap.js';
import './useTranslation-BFA2TfNv.js';
import './form-CzkHLuiW.js';
import './Modal-Uxr9iemi.js';
import './Drawer-DcPiI7Le.js';
import './upload-CvUrBAvS.js';
import './index-Cus-sIud.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-BZfkIusy.js';
import './v4-BKrj-4V8.js';
import './Alert-aaU5T39z.js';
import './AccordionItem-Ct90feYU.js';
import './index-nq3t0i8P.js';
import './index-B4Zarq8E.js';
import './base-AbuBx_QK.js';
import './index-gb1tZRCT.js';
import './Trans-vAGQFfL0.js';
import './format-9T4dPj0t.js';
import './progress-Czbx5FF3.js';
import './Table-CeFUm3yf.js';
import './index-BOENUeX3.js';
import './useBubbleLock-D8efMGR_.js';
import './index-X6_ijeKF.js';
import './LeftOutlined-C065dMtK.js';
import './Dropdown-DSGh0XHq.js';
import './index-BNNY5gZK.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './index-CLnOdl7m.js';
import './Input-BV15_ma4.js';
import './index-CGuFotwq.js';
import './index-Bsfuzvfz.js';
import './scrollTo-BVQsqkUR.js';
import './Pagination-D1Fbg5s7.js';
import './index-CB71CtZh.js';
import './index-BsuRt3Ms.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-BLKRwymq.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './clientModelRuntime-CVsv_yzD.js';
import './index-DulcjDYi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-D9iY1Apm.js';
import './store-Zk6c4erU.js';
import './selectors-D69_vvgj.js';
import './tools-Bv7LuA5V.js';
import './ipc-wTHpVC92.js';
import './discover-BXfpphP1.js';
import './general-D0ZSKJyo.js';
import './useClientDataSWRWithSync-ByMJ0iDL.js';
import './index-CGoFy0Kz.js';
import './abortableRequest-CqTkNl3n.js';
import './store-RA8m3Abx.js';
import './browser-B9uGE7zv.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DRpngCPv.js';
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
