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
} from './index-wqF_YeCD.js';
import { F as L } from './FormGroup-CwGEe0RW.js';
import { S as W } from './index-BkwR-xvn.js';
import { S as z } from './SettingHeader-DckAXuUq.js';
import { B as h } from './providerConfig-B8LLUHQ4.js';
import { F as d } from './index-DJMMkijI.js';
import { r as u } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { D as H } from './index-B81lFmfp.js';
import { d as O } from './downloadFile-DYbfnmZ_.js';
import { e as R } from './exportFile-CL2rSQ4B.js';
import './purify.es-r8glNMJW.js';
import { u as U, g as V } from './index-Cv04OX6Y.js';
import { u as $ } from './store-I8paDSMM.js';
import { u as q } from './index-BSoGnGg8.js';
import { S as J } from './index-CknUj28g.js';
import { b_ as X, b$ as K } from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './Block-BiiCaTlV.js';
import './index-D-8aLEt3.js';
import './index-Bhvd7-zP.js';
import './useForm-C9AjLT0G.js';
import './row-CjE_Fa9c.js';
import './index-C-p4Ij3D.js';
import './useTranslation-BvAL3EmF.js';
import './form-CzkHLuiW.js';
import './Modal-BOLB10DT.js';
import './Drawer-Bub1oHxZ.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-5rJL-Hpp.js';
import './v4-BKrj-4V8.js';
import './Alert-CuU2KrOP.js';
import './AccordionItem-DW0qTCcg.js';
import './index-DuLYnvqZ.js';
import './index-B4Zarq8E.js';
import './base-AbuBx_QK.js';
import './index-D9XrUQnr.js';
import './Trans-DQn6XkDw.js';
import './format-xvC2wqL3.js';
import './progress-CnpjojkM.js';
import './Table-DuZTR643.js';
import './index-dWohkCtg.js';
import './useBubbleLock-D8efMGR_.js';
import './index-DIx15oSt.js';
import './LeftOutlined-TlvAEfN5.js';
import './Dropdown-BRh18yeL.js';
import './index-Cug4OBsb.js';
import './EllipsisOutlined-DKvYkod-.js';
import './index-DoTPv69l.js';
import './Input-B_ItaHnj.js';
import './index-D3TOmt6l.js';
import './index-Dj2xCocX.js';
import './scrollTo-CSRz7SK5.js';
import './Pagination-B8LfT_Cq.js';
import './index-Bw2NYvGm.js';
import './index-DRUoAI_X.js';
import './DeleteOutlined-DFutYCzo.js';
import './EyeOutlined-DfHAjohP.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './clientModelRuntime-B08lUHU2.js';
import './index-Db66cWsi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DF0TW5D0.js';
import './store-D4ebFM1W.js';
import './selectors-ByZlqqp9.js';
import './tools-DB_zvMRN.js';
import './ipc-wTHpVC92.js';
import './discover-BbhnyhQy.js';
import './general-D3HMJCKF.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
import './index-ZbCvQEWF.js';
import './abortableRequest-CqTkNl3n.js';
import './store-DqsNUhs6.js';
import './browser-DjXL3BqG.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BMxdWhWa.js';
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
