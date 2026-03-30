import { j as n } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { B as b } from './Block-DRcWCw_2.js';
import { g as f, I as t, aI as a } from './index-NXWXCubP.js';
import { T as j } from './Tabs-BLDljoJ7.js';
import { r as o } from '../vendor/vendor-emotion-DdM-9MtU.js';
import {
  ap as x,
  aq as y,
  ar as k,
  as as S,
  at as v,
  au as J,
} from '../vendor/vendor-icons-BHMUH78i.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './providerConfig-B8LLUHQ4.js';
import './index-C0LzPXdP.js';
import './EllipsisOutlined-nWT-Ze57.js';
import './PlusOutlined-C_qoJHqn.js';
import './Dropdown-DSGh0XHq.js';
const q = o.memo(
  ({
    result: r,
    requestArgs: i,
    toolCallId: l,
    apiName: c,
    identifier: d,
    type: u,
    intervention: g,
  }) => {
    const { t: e } = f('plugin'),
      m = o.useMemo(() => {
        try {
          return JSON.stringify(JSON.parse(i || ''), null, 2);
        } catch {
          return '';
        }
      }, [i]),
      h = o.useMemo(
        () => ({ apiName: c, arguments: i, id: l, identifier: d, type: u }),
        [i, l, c, d, u],
      ),
      s = r?.content?.trim().startsWith('{') || r?.content?.trim().startsWith('['),
      p = o.useMemo(
        () => [
          {
            children: n.jsx(a, {
              language: 'json',
              style: { background: 'transparent', borderRadius: 0, height: '100%' },
              variant: 'filled',
              children: m,
            }),
            icon: n.jsx(t, { icon: x }),
            key: 'arguments',
            label: e('debug.arguments'),
          },
          {
            children: n.jsx(a, {
              language: s ? 'json' : 'plaintext',
              style: { background: 'transparent', borderRadius: 0, height: '100%' },
              variant: 'filled',
              children: s ? JSON.stringify(r?.content, null, 2) : r?.content || '',
            }),
            icon: n.jsx(t, { icon: y }),
            key: 'response',
            label: e('debug.response'),
          },
          {
            children: n.jsx(a, {
              language: 'json',
              style: { background: 'transparent', borderRadius: 0, height: '100%' },
              variant: 'filled',
              children: JSON.stringify(h, null, 2),
            }),
            icon: n.jsx(t, { icon: k }),
            key: 'function_call',
            label: e('debug.function_call'),
          },
          {
            children: n.jsx(a, {
              language: 'json',
              style: { background: 'transparent', borderRadius: 0, height: '100%' },
              variant: 'filled',
              children: JSON.stringify(r?.state, null, 2),
            }),
            icon: n.jsx(t, { icon: S }),
            key: 'pluginState',
            label: e('debug.pluginState'),
          },
          {
            children: n.jsx(a, {
              language: 'json',
              style: { background: 'transparent', borderRadius: 0, height: '100%' },
              variant: 'filled',
              children: JSON.stringify(g, null, 2),
            }),
            icon: n.jsx(t, { icon: v }),
            key: 'intervention',
            label: e('debug.intervention'),
          },
          ...(r?.error
            ? [
                {
                  children: n.jsx(a, {
                    language: 'json',
                    style: { background: 'transparent', borderRadius: 0, height: '100%' },
                    variant: 'filled',
                    children: JSON.stringify(r.error, null, 2),
                  }),
                  icon: n.jsx(t, { icon: J }),
                  key: 'error',
                  label: e('debug.error'),
                },
              ]
            : []),
        ],
        [h, s, m, r?.content, r?.error, r?.state, g, e],
      );
    return n.jsx(b, {
      variant: 'outlined',
      children: n.jsx(j, {
        compact: !0,
        items: p,
        tabPlacement: 'start',
        styles: { content: { height: 300, padding: 0 } },
      }),
    });
  },
);
export { q as default };
