import { r as y } from './vendor-emotion-DdM-9MtU.js';
const x = (...c) =>
  c
    .filter((t, o, h) => !!t && t.trim() !== '' && h.indexOf(t) === o)
    .join(' ')
    .trim();
const g = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const u = (c) =>
  c.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, h) => (h ? h.toUpperCase() : o.toLowerCase()));
const M = (c) => {
  const t = u(c);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var f = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const $ = (c) => {
  for (const t in c) if (t.startsWith('aria-') || t === 'role' || t === 'title') return !0;
  return !1;
};
const w = y.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: t = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: h,
      className: n = '',
      children: d,
      iconNode: k,
      ...s
    },
    p,
  ) =>
    y.createElement(
      'svg',
      {
        ref: p,
        ...f,
        width: t,
        height: t,
        stroke: c,
        strokeWidth: h ? (Number(o) * 24) / Number(t) : o,
        className: x('lucide', n),
        ...(!d && !$(s) && { 'aria-hidden': 'true' }),
        ...s,
      },
      [...k.map(([i, r]) => y.createElement(i, r)), ...(Array.isArray(d) ? d : [d])],
    ),
);
const a = (c, t) => {
  const o = y.forwardRef(({ className: h, ...n }, d) =>
    y.createElement(w, {
      ref: d,
      iconNode: t,
      className: x(`lucide-${g(M(c))}`, `lucide-${c}`, h),
      ...n,
    }),
  );
  return ((o.displayName = M(c)), o);
};
const N = [
    [
      'path',
      {
        d: 'M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z',
        key: 'lh0v7k',
      },
    ],
  ],
  Eo = a('arrow-big-up', N);
const b = [
    ['path', { d: 'M12 5v14', key: 's699le' }],
    ['path', { d: 'm19 12-7 7-7-7', key: '1idqje' }],
  ],
  Go = a('arrow-down', b);
const z = [
    ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
    ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
  ],
  Wo = a('arrow-left', z);
const q = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
  ],
  Ko = a('arrow-right', q);
const j = [
    ['path', { d: 'M17 12H3', key: '8awo09' }],
    ['path', { d: 'm11 18 6-6-6-6', key: '8c2y43' }],
    ['path', { d: 'M21 5v14', key: 'nzette' }],
  ],
  Qo = a('arrow-right-to-line', j);
const H = [
    ['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
    ['path', { d: 'M12 19V5', key: 'x0mq9r' }],
  ],
  Xo = a('arrow-up', H);
const V = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  Jo = a('check', V);
const A = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  Yo = a('chevron-down', A);
const C = [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]],
  eh = a('chevron-left', C);
const L = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  ah = a('chevron-right', L);
const S = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  th = a('chevron-up', S);
const P = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  ch = a('circle-check-big', P);
const B = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
    ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
  ],
  oh = a('circle-x', B);
const D = [
    [
      'path',
      {
        d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
        key: '11bfej',
      },
    ],
  ],
  hh = a('command', D);
const T = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  dh = a('copy', T);
const U = [
    ['path', { d: 'M20 4v7a4 4 0 0 1-4 4H4', key: '6o5b7l' }],
    ['path', { d: 'm9 10-5 5 5 5', key: '1kshq7' }],
  ],
  yh = a('corner-down-left', U);
const R = [
    [
      'path',
      {
        d: 'M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
        key: '1yo7s0',
      },
    ],
    ['path', { d: 'm12 9 6 6', key: 'anjzzh' }],
    ['path', { d: 'm18 9-6 6', key: '1fp51s' }],
  ],
  nh = a('delete', R);
const Z = [
    ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
    ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
  ],
  sh = a('download', Z);
const F = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
    ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
  ],
  kh = a('ellipsis', F);
const O = [
    ['path', { d: 'M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3', key: '1i73f7' }],
    ['path', { d: 'M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3', key: 'saxlbk' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'M12 14v2', key: '8jcxud' }],
    ['path', { d: 'M12 8v2', key: '1woqiv' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ],
  ph = a('flip-horizontal', O);
const I = [
    ['path', { d: 'M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3', key: '14bfxa' }],
    ['path', { d: 'M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3', key: '14rx03' }],
    ['path', { d: 'M4 12H2', key: 'rhcxmi' }],
    ['path', { d: 'M10 12H8', key: 's88cx1' }],
    ['path', { d: 'M16 12h-2', key: '10asgb' }],
    ['path', { d: 'M22 12h-2', key: '14jgyd' }],
  ],
  ih = a('flip-vertical', I);
const E = [
    ['path', { d: 'M12 3v18', key: '108xh3' }],
    ['path', { d: 'M3 12h18', key: '1i2n21' }],
    ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', key: 'h1oib' }],
  ],
  rh = a('grid-2x2', E);
const G = [
    ['circle', { cx: '9', cy: '12', r: '1', key: '1vctgf' }],
    ['circle', { cx: '9', cy: '5', r: '1', key: 'hp0tcf' }],
    ['circle', { cx: '9', cy: '19', r: '1', key: 'fkjjf6' }],
    ['circle', { cx: '15', cy: '12', r: '1', key: '1tmaij' }],
    ['circle', { cx: '15', cy: '5', r: '1', key: '19l28e' }],
    ['circle', { cx: '15', cy: '19', r: '1', key: 'f4zoj3' }],
  ],
  lh = a('grip-vertical', G);
const W = [
    [
      'path',
      {
        d: 'M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21',
        key: '9csbqa',
      },
    ],
    ['path', { d: 'm14 19.5 3-3 3 3', key: '9vmjn0' }],
    ['path', { d: 'M17 22v-5.5', key: '1aa6fl' }],
    ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
  ],
  Mh = a('image-up', W);
const K = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ],
  _h = a('info', K);
const Q = [
    [
      'path',
      {
        d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
        key: '1gvzjb',
      },
    ],
    ['path', { d: 'M9 18h6', key: 'x1upvd' }],
    ['path', { d: 'M10 22h4', key: 'ceow96' }],
  ],
  xh = a('lightbulb', Q);
const X = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  vh = a('loader-circle', X);
const J = [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'm21 3-7 7', key: '1l2asr' }],
    ['path', { d: 'm3 21 7-7', key: 'tjx5ai' }],
    ['path', { d: 'M9 21H3v-6', key: 'wtvkvv' }],
  ],
  mh = a('maximize-2', J);
const Y = [
    ['path', { d: 'M4 5h16', key: '1tepv9' }],
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 19h16', key: '1djgab' }],
  ],
  gh = a('menu', Y);
const e1 = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    ['path', { d: 'M12 15h.01', key: 'q59x07' }],
    ['path', { d: 'M12 7v4', key: 'xawao1' }],
  ],
  uh = a('message-square-warning', e1);
const a1 = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
  ],
  fh = a('message-square', a1);
const t1 = [
    ['path', { d: 'm14 10 7-7', key: 'oa77jy' }],
    ['path', { d: 'M20 10h-6V4', key: 'mjg0md' }],
    ['path', { d: 'm3 21 7-7', key: 'tjx5ai' }],
    ['path', { d: 'M4 14h6v6', key: 'rmj7iw' }],
  ],
  $h = a('minimize-2', t1);
const c1 = [['path', { d: 'M5 12h14', key: '1ays0h' }]],
  wh = a('minus', c1);
const o1 = [
    ['rect', { width: '20', height: '14', x: '2', y: '3', rx: '2', key: '48i651' }],
    ['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
    ['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }],
  ],
  Nh = a('monitor', o1);
const h1 = [
    [
      'path',
      {
        d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
        key: 'kfwtm',
      },
    ],
  ],
  bh = a('moon', h1);
const d1 = [
    ['rect', { x: '5', y: '2', width: '14', height: '20', rx: '7', key: '11ol66' }],
    ['path', { d: 'M12 6v4', key: '16clxf' }],
  ],
  zh = a('mouse', d1);
const y1 = [
    ['path', { d: 'M12 16h.01', key: '1drbdi' }],
    ['path', { d: 'M12 8v4', key: '1got3b' }],
    [
      'path',
      {
        d: 'M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z',
        key: '1fd625',
      },
    ],
  ],
  qh = a('octagon-alert', y1);
const n1 = [
    ['path', { d: 'M3 3h6l6 18h6', key: 'ph9rgk' }],
    ['path', { d: 'M14 3h7', key: '16f0ms' }],
  ],
  jh = a('option', n1);
const s1 = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
  ],
  Hh = a('panel-left', s1);
const k1 = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9h18', key: '1pudct' }],
    ['path', { d: 'm9 16 3-3 3 3', key: '1idcnm' }],
  ],
  Vh = a('panel-top-close', k1);
const p1 = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9h18', key: '1pudct' }],
    ['path', { d: 'm15 14-3 3-3-3', key: 'g215vf' }],
  ],
  Ah = a('panel-top-open', p1);
const i1 = [
    ['path', { d: 'M13 21h8', key: '1jsn5i' }],
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  Ch = a('pen-line', i1);
const r1 = [
    ['path', { d: 'M12 17v5', key: 'bb1du9' }],
    ['path', { d: 'M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89', key: 'znwnzq' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    [
      'path',
      {
        d: 'M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11',
        key: 'c9qhm2',
      },
    ],
  ],
  Lh = a('pin-off', r1);
const l1 = [
    ['path', { d: 'M12 17v5', key: 'bb1du9' }],
    [
      'path',
      {
        d: 'M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z',
        key: '1nkz8b',
      },
    ],
  ],
  Sh = a('pin', l1);
const M1 = [
    [
      'path',
      {
        d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z',
        key: '10ikf1',
      },
    ],
  ],
  Ph = a('play', M1);
const _1 = [
    ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
    ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
  ],
  Bh = a('rotate-ccw', _1);
const x1 = [
    ['path', { d: 'M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8', key: '1p45f6' }],
    ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
  ],
  Dh = a('rotate-cw', x1);
const v1 = [
    [
      'path',
      {
        d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
        key: '1c8476',
      },
    ],
    ['path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' }],
    ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
  ],
  Th = a('save', v1);
const m1 = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  Uh = a('search', m1);
const g1 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M8 14s1.5 2 4 2 4-2 4-2', key: '1y1vjs' }],
    ['line', { x1: '9', x2: '9.01', y1: '9', y2: '9', key: 'yxxnd0' }],
    ['line', { x1: '15', x2: '15.01', y1: '9', y2: '9', key: '1p4y9e' }],
  ],
  Rh = a('smile', g1);
const u1 = [['path', { d: 'M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1', key: 'lt2kga' }]],
  Zh = a('space', u1);
const f1 = [
    ['path', { d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7', key: '1m0v6g' }],
    [
      'path',
      {
        d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
        key: 'ohrbg2',
      },
    ],
  ],
  Fh = a('square-pen', f1);
const $1 = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  Oh = a('sun', $1);
const w1 = [
    ['line', { x1: '10', x2: '14', y1: '2', y2: '2', key: '14vaq8' }],
    ['line', { x1: '12', x2: '15', y1: '14', y2: '11', key: '17fdiu' }],
    ['circle', { cx: '12', cy: '14', r: '8', key: '1e1u0o' }],
  ],
  Ih = a('timer', w1);
const N1 = [
    ['path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', key: 'miytrc' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
    ['path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', key: 'e791ji' }],
  ],
  Eh = a('trash', N1);
const b1 = [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  Gh = a('triangle-alert', b1);
const z1 = [
    ['path', { d: 'M9 14 4 9l5-5', key: '102s5s' }],
    ['path', { d: 'M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11', key: 'f3b9sd' }],
  ],
  Wh = a('undo-2', z1);
const q1 = [
    ['path', { d: 'M12 3v12', key: '1x0j5s' }],
    ['path', { d: 'm17 8-5-5-5 5', key: '7q97r8' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ],
  Kh = a('upload', q1);
const j1 = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Qh = a('x', j1);
const H1 = [
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
    ['line', { x1: '21', x2: '16.65', y1: '21', y2: '16.65', key: '13gj7c' }],
    ['line', { x1: '11', x2: '11', y1: '8', y2: '14', key: '1vmskp' }],
    ['line', { x1: '8', x2: '14', y1: '11', y2: '11', key: 'durymu' }],
  ],
  Xh = a('zoom-in', H1);
const V1 = [
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
    ['line', { x1: '21', x2: '16.65', y1: '21', y2: '16.65', key: '13gj7c' }],
    ['line', { x1: '8', x2: '14', y1: '11', y2: '11', key: 'durymu' }],
  ],
  Jh = a('zoom-out', V1);
const A1 = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  v = (...c) =>
    c
      .filter((t, o, h) => !!t && t.trim() !== '' && h.indexOf(t) === o)
      .join(' ')
      .trim();
var C1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const L1 = y.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: t = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: h,
      className: n = '',
      children: d,
      iconNode: k,
      ...s
    },
    p,
  ) =>
    y.createElement(
      'svg',
      {
        ref: p,
        ...C1,
        width: t,
        height: t,
        stroke: c,
        strokeWidth: h ? (Number(o) * 24) / Number(t) : o,
        className: v('lucide', n),
        ...s,
      },
      [...k.map(([i, r]) => y.createElement(i, r)), ...(Array.isArray(d) ? d : [d])],
    ),
);
const l = (c, t) => {
  const o = y.forwardRef(({ className: h, ...n }, d) =>
    y.createElement(L1, { ref: d, iconNode: t, className: v(`lucide-${A1(c)}`, h), ...n }),
  );
  return ((o.displayName = `${c}`), o);
};
const Yh = l('Brain', [
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
      key: 'l5xja',
    },
  ],
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z',
      key: 'ep3f8r',
    },
  ],
  ['path', { d: 'M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4', key: '1p4c4q' }],
  ['path', { d: 'M17.599 6.5a3 3 0 0 0 .399-1.375', key: 'tmeiqw' }],
  ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5', key: '105sqy' }],
  ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396', key: 'ql3yin' }],
  ['path', { d: 'M19.938 10.5a4 4 0 0 1 .585.396', key: '1qfode' }],
  ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516', key: '2e4loj' }],
  ['path', { d: 'M19.967 17.484A4 4 0 0 1 18 18', key: '159ez6' }],
]);
const ed = l('CirclePause', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '10', x2: '10', y1: '15', y2: '9', key: 'c1nkhi' }],
  ['line', { x1: '14', x2: '14', y1: '15', y2: '9', key: 'h65svq' }],
]);
const ad = l('CircleStop', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['rect', { x: '9', y: '9', width: '6', height: '6', rx: '1', key: '1ssd4o' }],
]);
const td = l('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
]);
const cd = l('Play', [['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }]]);
const S1 = (c) => c.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  P1 = (c) =>
    c.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, h) => (h ? h.toUpperCase() : o.toLowerCase())),
  _ = (c) => {
    const t = P1(c);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  m = (...c) =>
    c
      .filter((t, o, h) => !!t && t.trim() !== '' && h.indexOf(t) === o)
      .join(' ')
      .trim(),
  B1 = (c) => {
    for (const t in c) if (t.startsWith('aria-') || t === 'role' || t === 'title') return !0;
  };
var D1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const T1 = y.forwardRef(
  (
    {
      color: c = 'currentColor',
      size: t = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: h,
      className: n = '',
      children: d,
      iconNode: k,
      ...s
    },
    p,
  ) =>
    y.createElement(
      'svg',
      {
        ref: p,
        ...D1,
        width: t,
        height: t,
        stroke: c,
        strokeWidth: h ? (Number(o) * 24) / Number(t) : o,
        className: m('lucide', n),
        ...(!d && !B1(s) && { 'aria-hidden': 'true' }),
        ...s,
      },
      [...k.map(([i, r]) => y.createElement(i, r)), ...(Array.isArray(d) ? d : [d])],
    ),
);
const e = (c, t) => {
  const o = y.forwardRef(({ className: h, ...n }, d) =>
    y.createElement(T1, {
      ref: d,
      iconNode: t,
      className: m(`lucide-${S1(_(c))}`, `lucide-${c}`, h),
      ...n,
    }),
  );
  return ((o.displayName = _(c)), o);
};
const U1 = [
    [
      'path',
      {
        d: 'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2',
        key: '169zse',
      },
    ],
  ],
  od = e('activity', U1);
const R1 = [
    ['path', { d: 'M12 6.528V3a1 1 0 0 1 1-1h0', key: '11qiee' }],
    [
      'path',
      {
        d: 'M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21',
        key: '110c12',
      },
    ],
  ],
  hd = e('apple', R1);
const Z1 = [
    ['rect', { width: '20', height: '5', x: '2', y: '3', rx: '1', key: '1wp1u1' }],
    ['path', { d: 'M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8', key: '1s80jp' }],
    ['path', { d: 'M10 12h4', key: 'a56b0p' }],
  ],
  dd = e('archive', Z1);
const F1 = [
    ['path', { d: 'm3 16 4 4 4-4', key: '1co6wj' }],
    ['path', { d: 'M7 20V4', key: '1yoxec' }],
    ['path', { d: 'M20 8h-5', key: '1vsyxs' }],
    ['path', { d: 'M15 10V6.5a2.5 2.5 0 0 1 5 0V10', key: 'ag13bf' }],
    ['path', { d: 'M15 14h5l-5 6h5', key: 'ur5jdg' }],
  ],
  yd = e('arrow-down-a-z', F1);
const O1 = [
    ['path', { d: 'M19 3H5', key: '1236rx' }],
    ['path', { d: 'M12 21V7', key: 'gj6g52' }],
    ['path', { d: 'm6 15 6 6 6-6', key: 'h15q88' }],
  ],
  nd = e('arrow-down-from-line', O1);
const I1 = [
    ['path', { d: 'm3 16 4 4 4-4', key: '1co6wj' }],
    ['path', { d: 'M7 20V4', key: '1yoxec' }],
    ['path', { d: 'M11 4h4', key: '6d7r33' }],
    ['path', { d: 'M11 8h7', key: 'djye34' }],
    ['path', { d: 'M11 12h10', key: '1438ji' }],
  ],
  sd = e('arrow-down-narrow-wide', I1);
const E1 = [
    ['path', { d: 'M12 2v14', key: 'jyx4ut' }],
    ['path', { d: 'm19 9-7 7-7-7', key: '1oe3oy' }],
    ['circle', { cx: '12', cy: '21', r: '1', key: 'o0uj5v' }],
  ],
  kd = e('arrow-down-to-dot', E1);
const G1 = [
    ['path', { d: 'm3 16 4 4 4-4', key: '1co6wj' }],
    ['path', { d: 'M7 20V4', key: '1yoxec' }],
    ['path', { d: 'm21 8-4-4-4 4', key: '1c9v7m' }],
    ['path', { d: 'M17 4v16', key: '7dpous' }],
  ],
  pd = e('arrow-down-up', G1);
const W1 = [
    ['path', { d: 'm3 16 4 4 4-4', key: '1co6wj' }],
    ['path', { d: 'M7 20V4', key: '1yoxec' }],
    ['path', { d: 'M11 4h10', key: '1w87gc' }],
    ['path', { d: 'M11 8h7', key: 'djye34' }],
    ['path', { d: 'M11 12h4', key: 'q8tih4' }],
  ],
  id = e('arrow-down-wide-narrow', W1);
const K1 = [
    ['path', { d: 'M12 5v14', key: 's699le' }],
    ['path', { d: 'm19 12-7 7-7-7', key: '1idqje' }],
  ],
  rd = e('arrow-down', K1);
const Q1 = [
    ['path', { d: 'M8 3 4 7l4 4', key: '9rb6wj' }],
    ['path', { d: 'M4 7h16', key: '6tx8e3' }],
    ['path', { d: 'm16 21 4-4-4-4', key: 'siv7j2' }],
    ['path', { d: 'M20 17H4', key: 'h6l3hr' }],
  ],
  ld = e('arrow-left-right', Q1);
const X1 = [
    ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
    ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
  ],
  Md = e('arrow-left', X1);
const J1 = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
  ],
  _d = e('arrow-right', J1);
const Y1 = [
    ['path', { d: 'm21 16-4 4-4-4', key: 'f6ql7i' }],
    ['path', { d: 'M17 20V4', key: '1ejh1v' }],
    ['path', { d: 'm3 8 4-4 4 4', key: '11wl7u' }],
    ['path', { d: 'M7 4v16', key: '1glfcx' }],
  ],
  xd = e('arrow-up-down', Y1);
const e2 = [
    ['path', { d: 'm5 9 7-7 7 7', key: '1hw5ic' }],
    ['path', { d: 'M12 16V2', key: 'ywoabb' }],
    ['circle', { cx: '12', cy: '21', r: '1', key: 'o0uj5v' }],
  ],
  vd = e('arrow-up-from-dot', e2);
const a2 = [
    ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
    ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
  ],
  md = e('arrow-up-right', a2);
const t2 = [
    ['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
    ['path', { d: 'M12 19V5', key: 'x0mq9r' }],
  ],
  gd = e('arrow-up', t2);
const c2 = [
    ['path', { d: 'M12 6v12', key: '1vza4d' }],
    ['path', { d: 'M17.196 9 6.804 15', key: '1ah31z' }],
    ['path', { d: 'm6.804 9 10.392 6', key: '1b6pxd' }],
  ],
  ud = e('asterisk', c2);
const o2 = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8', key: '7n84p3' }],
  ],
  fd = e('at-sign', o2);
const h2 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    [
      'path',
      {
        d: 'M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z',
        key: '1l2ple',
      },
    ],
    [
      'path',
      {
        d: 'M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z',
        key: '1wam0m',
      },
    ],
  ],
  $d = e('atom', h2);
const d2 = [
    ['path', { d: 'M2 10v3', key: '1fnikh' }],
    ['path', { d: 'M6 6v11', key: '11sgs0' }],
    ['path', { d: 'M10 3v18', key: 'yhl04a' }],
    ['path', { d: 'M14 8v7', key: '3a1oy3' }],
    ['path', { d: 'M18 5v13', key: '123xd1' }],
    ['path', { d: 'M22 10v3', key: '154ddg' }],
  ],
  wd = e('audio-lines', d2);
const y2 = [
    [
      'path',
      {
        d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526',
        key: '1yiouv',
      },
    ],
    ['circle', { cx: '12', cy: '8', r: '6', key: '1vp47v' }],
  ],
  Nd = e('award', y2);
const n2 = [
    [
      'path',
      {
        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
        key: '3c2336',
      },
    ],
    ['path', { d: 'M12 7v10', key: 'jspqdw' }],
    ['path', { d: 'M15.4 10a4 4 0 1 0 0 4', key: '2eqtx8' }],
  ],
  bd = e('badge-cent', n2);
const s2 = [
    [
      'path',
      {
        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
        key: '3c2336',
      },
    ],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  zd = e('badge-check', s2);
const k2 = [
    [
      'path',
      {
        d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z',
        key: '3c2336',
      },
    ],
    ['path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8', key: '1h4pet' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
  ],
  qd = e('badge-dollar-sign', k2);
const p2 = [
    ['path', { d: 'M4.929 4.929 19.07 19.071', key: '196cmz' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  jd = e('ban', p2);
const i2 = [
    ['path', { d: 'M4 20h16', key: '14thso' }],
    ['path', { d: 'm6 16 6-12 6 12', key: '1b4byz' }],
    ['path', { d: 'M8 12h8', key: '1wcyev' }],
  ],
  Hd = e('baseline', i2);
const r2 = [
    ['path', { d: 'M10.268 21a2 2 0 0 0 3.464 0', key: 'vwvbt9' }],
    [
      'path',
      {
        d: 'M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742',
        key: '178tsu',
      },
    ],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    ['path', { d: 'M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05', key: '1hqiys' }],
  ],
  Vd = e('bell-off', r2);
const l2 = [
    ['path', { d: 'M10.268 21a2 2 0 0 0 3.464 0', key: 'vwvbt9' }],
    [
      'path',
      {
        d: 'M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
        key: '11g9vi',
      },
    ],
  ],
  Ad = e('bell', l2);
const M2 = [
    ['circle', { cx: '9', cy: '9', r: '7', key: 'p2h5vp' }],
    ['circle', { cx: '15', cy: '15', r: '7', key: '19ennj' }],
  ],
  Cd = e('blend', M2);
const _2 = [
    [
      'path',
      {
        d: 'M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2',
        key: '1ah6g2',
      },
    ],
    ['rect', { x: '14', y: '2', width: '8', height: '8', rx: '1', key: '88lufb' }],
  ],
  Ld = e('blocks', _2);
const x2 = [
    [
      'path',
      { d: 'M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8', key: 'mg9rjx' },
    ],
  ],
  Sd = e('bold', x2);
const v2 = [
    [
      'path',
      {
        d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
        key: 'yt0hxn',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ],
  Pd = e('bolt', v2);
const m2 = [
    [
      'path',
      {
        d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20',
        key: 'k3hazp',
      },
    ],
    ['path', { d: 'M9 10h6', key: '9gxzsh' }],
  ],
  Bd = e('book-minus', m2);
const g2 = [
    ['path', { d: 'M12 7v14', key: '1akyts' }],
    ['path', { d: 'M16 12h2', key: '7q9ll5' }],
    ['path', { d: 'M16 8h2', key: 'msurwy' }],
    [
      'path',
      {
        d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
        key: 'ruj8y',
      },
    ],
    ['path', { d: 'M6 12h2', key: '32wvfc' }],
    ['path', { d: 'M6 8h2', key: '30oboj' }],
  ],
  Dd = e('book-open-text', g2);
const u2 = [
    ['path', { d: 'M12 7v14', key: '1akyts' }],
    [
      'path',
      {
        d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
        key: 'ruj8y',
      },
    ],
  ],
  Td = e('book-open', u2);
const f2 = [
    ['path', { d: 'M12 7v6', key: 'lw1j43' }],
    [
      'path',
      {
        d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20',
        key: 'k3hazp',
      },
    ],
    ['path', { d: 'M9 10h6', key: '9gxzsh' }],
  ],
  Ud = e('book-plus', f2);
const $2 = [
    [
      'path',
      {
        d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20',
        key: 'k3hazp',
      },
    ],
    ['path', { d: 'M8 11h8', key: 'vwpz6n' }],
    ['path', { d: 'M8 7h6', key: '1f0q6e' }],
  ],
  Rd = e('book-text', $2);
const w2 = [
    ['path', { d: 'M12 13V7', key: 'h0r20n' }],
    ['path', { d: 'M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20', key: '161d7n' }],
    ['path', { d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2', key: '1lorq7' }],
    ['path', { d: 'm9 10 3-3 3 3', key: '11gsxs' }],
    ['path', { d: 'm9 5 3-3 3 3', key: 'l8vdw6' }],
  ],
  Zd = e('book-up-2', w2);
const N2 = [
    [
      'path',
      {
        d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20',
        key: 'k3hazp',
      },
    ],
  ],
  Fd = e('book', N2);
const b2 = [
    ['path', { d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z', key: '169p4p' }],
    ['path', { d: 'm9 10 2 2 4-4', key: '1gnqz4' }],
  ],
  Od = e('bookmark-check', b2);
const z2 = [
    ['path', { d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z', key: '1fy3hk' }],
    ['line', { x1: '15', x2: '9', y1: '10', y2: '10', key: '1gty7f' }],
  ],
  Id = e('bookmark-minus', z2);
const q2 = [['path', { d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z', key: '1fy3hk' }]],
  Ed = e('bookmark', q2);
const j2 = [
    ['path', { d: 'M12 6V2H8', key: '1155em' }],
    ['path', { d: 'M15 11v2', key: 'i11awn' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    [
      'path',
      {
        d: 'M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z',
        key: '11gyqh',
      },
    ],
    ['path', { d: 'M9 11v2', key: '1ueba0' }],
  ],
  Gd = e('bot-message-square', j2);
const H2 = [
    ['path', { d: 'M12 8V4H8', key: 'hb8ula' }],
    ['rect', { width: '16', height: '12', x: '4', y: '8', rx: '2', key: 'enze0r' }],
    ['path', { d: 'M2 14h2', key: 'vft8re' }],
    ['path', { d: 'M20 14h2', key: '4cs60a' }],
    ['path', { d: 'M15 13v2', key: '1xurst' }],
    ['path', { d: 'M9 13v2', key: 'rq6x2g' }],
  ],
  Wd = e('bot', H2);
const V2 = [
    [
      'path',
      {
        d: 'M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z',
        key: 'lc1i9w',
      },
    ],
    ['path', { d: 'm7 16.5-4.74-2.85', key: '1o9zyk' }],
    ['path', { d: 'm7 16.5 5-3', key: 'va8pkn' }],
    ['path', { d: 'M7 16.5v5.17', key: 'jnp8gn' }],
    [
      'path',
      {
        d: 'M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z',
        key: '8zsnat',
      },
    ],
    ['path', { d: 'm17 16.5-5-3', key: '8arw3v' }],
    ['path', { d: 'm17 16.5 4.74-2.85', key: '8rfmw' }],
    ['path', { d: 'M17 16.5v5.17', key: 'k6z78m' }],
    [
      'path',
      {
        d: 'M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z',
        key: '1xygjf',
      },
    ],
    ['path', { d: 'M12 8 7.26 5.15', key: '1vbdud' }],
    ['path', { d: 'm12 8 4.74-2.85', key: '3rx089' }],
    ['path', { d: 'M12 13.5V8', key: '1io7kd' }],
  ],
  Kd = e('boxes', V2);
const A2 = [
    [
      'path',
      { d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1', key: 'ezmyqa' },
    ],
    [
      'path',
      {
        d: 'M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1',
        key: 'e1hn23',
      },
    ],
  ],
  Qd = e('braces', A2);
const C2 = [
    [
      'path',
      {
        d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
        key: 'l5xja',
      },
    ],
    ['path', { d: 'M9 13a4.5 4.5 0 0 0 3-4', key: '10igwf' }],
    ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5', key: '105sqy' }],
    ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396', key: 'ql3yin' }],
    ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516', key: '2e4loj' }],
    ['path', { d: 'M12 13h4', key: '1ku699' }],
    ['path', { d: 'M12 18h6a2 2 0 0 1 2 2v1', key: '105ag5' }],
    ['path', { d: 'M12 8h8', key: '1lhi5i' }],
    ['path', { d: 'M16 8V5a2 2 0 0 1 2-2', key: 'u6izg6' }],
    ['circle', { cx: '16', cy: '13', r: '.5', key: 'ry7gng' }],
    ['circle', { cx: '18', cy: '3', r: '.5', key: '1aiba7' }],
    ['circle', { cx: '20', cy: '21', r: '.5', key: 'yhc1fs' }],
    ['circle', { cx: '20', cy: '8', r: '.5', key: '1e43v0' }],
  ],
  Xd = e('brain-circuit', C2);
const L2 = [
    ['path', { d: 'M12 18V5', key: 'adv99a' }],
    ['path', { d: 'M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4', key: '1e3is1' }],
    ['path', { d: 'M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5', key: '1gqd8o' }],
    ['path', { d: 'M17.997 5.125a4 4 0 0 1 2.526 5.77', key: 'iwvgf7' }],
    ['path', { d: 'M18 18a4 4 0 0 0 2-7.464', key: 'efp6ie' }],
    ['path', { d: 'M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517', key: '1gq6am' }],
    ['path', { d: 'M6 18a4 4 0 0 1-2-7.464', key: 'k1g0md' }],
    ['path', { d: 'M6.003 5.125a4 4 0 0 0-2.526 5.77', key: 'q97ue3' }],
  ],
  Jd = e('brain', L2);
const S2 = [
    ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
    ['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' }],
  ],
  Yd = e('briefcase', S2);
const P2 = [
    ['path', { d: 'M7.001 15.085A1.5 1.5 0 0 1 9 16.5', key: 'y44lvh' }],
    ['circle', { cx: '18.5', cy: '8.5', r: '3.5', key: '1wadoa' }],
    ['circle', { cx: '7.5', cy: '16.5', r: '5.5', key: '6mdt3g' }],
    ['circle', { cx: '7.5', cy: '4.5', r: '2.5', key: '637s54' }],
  ],
  e4 = e('bubbles', P2);
const B2 = [
    ['path', { d: 'M12 20v-8', key: 'i3yub9' }],
    ['path', { d: 'M14.12 3.88 16 2', key: 'qol33r' }],
    ['path', { d: 'M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2', key: 'vl8zik' }],
    ['path', { d: 'M18 12.34V11a4 4 0 0 0-4-4h-1.3', key: 'sz915m' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    ['path', { d: 'M21 5a4 4 0 0 1-3.55 3.97', key: '5cxbf6' }],
    ['path', { d: 'M22 13h-3.34', key: '1y15gv' }],
    ['path', { d: 'M3 21a4 4 0 0 1 3.81-4', key: '1fjd4g' }],
    ['path', { d: 'M6 13H2', key: '82j7cp' }],
    ['path', { d: 'M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13', key: '1njkjs' }],
  ],
  a4 = e('bug-off', B2);
const D2 = [
    ['path', { d: 'M12 20v-9', key: '1qisl0' }],
    ['path', { d: 'M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z', key: 'uouzyp' }],
    ['path', { d: 'M14.12 3.88 16 2', key: 'qol33r' }],
    ['path', { d: 'M21 21a4 4 0 0 0-3.81-4', key: '1b0z45' }],
    ['path', { d: 'M21 5a4 4 0 0 1-3.55 3.97', key: '5cxbf6' }],
    ['path', { d: 'M22 13h-4', key: '1jl80f' }],
    ['path', { d: 'M3 21a4 4 0 0 1 3.81-4', key: '1fjd4g' }],
    ['path', { d: 'M3 5a4 4 0 0 0 3.55 3.97', key: '1d7oge' }],
    ['path', { d: 'M6 13H2', key: '82j7cp' }],
    ['path', { d: 'm8 2 1.88 1.88', key: 'fmnt4t' }],
    ['path', { d: 'M9 7.13V6a3 3 0 1 1 6 0v1.13', key: '1vgav8' }],
  ],
  t4 = e('bug', D2);
const T2 = [
    ['path', { d: 'M16 14v2.2l1.6 1', key: 'fo4ql5' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    ['path', { d: 'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5', key: '1osxxc' }],
    ['path', { d: 'M3 10h5', key: 'r794hk' }],
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['circle', { cx: '16', cy: '16', r: '6', key: 'qoo3c4' }],
  ],
  c4 = e('calendar-clock', T2);
const U2 = [
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' }],
    ['path', { d: 'M3 10h18', key: '8toen8' }],
    ['path', { d: 'M8 14h.01', key: '6423bh' }],
    ['path', { d: 'M12 14h.01', key: '1etili' }],
    ['path', { d: 'M16 14h.01', key: '1gbofw' }],
    ['path', { d: 'M8 18h.01', key: 'lrp35t' }],
    ['path', { d: 'M12 18h.01', key: 'mhygvu' }],
    ['path', { d: 'M16 18h.01', key: 'kzsmim' }],
  ],
  o4 = e('calendar-days', U2);
const R2 = [
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' }],
    ['path', { d: 'M3 10h18', key: '8toen8' }],
  ],
  h4 = e('calendar', R2);
const Z2 = [
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['path', { d: 'M7 16h8', key: 'srdodz' }],
    ['path', { d: 'M7 11h12', key: '127s9w' }],
    ['path', { d: 'M7 6h3', key: 'w9rmul' }],
  ],
  d4 = e('chart-bar', Z2);
const F2 = [
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['rect', { x: '15', y: '5', width: '4', height: '12', rx: '1', key: 'q8uenq' }],
    ['rect', { x: '7', y: '8', width: '4', height: '9', rx: '1', key: 'sr5ea' }],
  ],
  y4 = e('chart-column-big', F2);
const O2 = [
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['path', { d: 'M18 17V9', key: '2bz60n' }],
    ['path', { d: 'M13 17V5', key: '1frdt8' }],
    ['path', { d: 'M8 17v-3', key: '17ska0' }],
  ],
  n4 = e('chart-column', O2);
const I2 = [
    ['path', { d: 'm13.11 7.664 1.78 2.672', key: 'go2gg9' }],
    ['path', { d: 'm14.162 12.788-3.324 1.424', key: '11x848' }],
    ['path', { d: 'm20 4-6.06 1.515', key: '1wxxh7' }],
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['circle', { cx: '12', cy: '6', r: '2', key: '1jj5th' }],
    ['circle', { cx: '16', cy: '12', r: '2', key: '4ma0v8' }],
    ['circle', { cx: '9', cy: '15', r: '2', key: 'lf2ghp' }],
  ],
  s4 = e('chart-network', I2);
const E2 = [
    ['path', { d: 'M5 21v-6', key: '1hz6c0' }],
    ['path', { d: 'M12 21V3', key: '1lcnhd' }],
    ['path', { d: 'M19 21V9', key: 'unv183' }],
  ],
  k4 = e('chart-no-axes-column', E2);
const G2 = [
    ['path', { d: 'M18 6 7 17l-5-5', key: '116fxf' }],
    ['path', { d: 'm22 10-7.5 7.5L13 16', key: 'ke71qq' }],
  ],
  p4 = e('check-check', G2);
const W2 = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  i4 = e('check', W2);
const K2 = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  r4 = e('chevron-down', K2);
const Q2 = [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]],
  l4 = e('chevron-left', Q2);
const X2 = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  M4 = e('chevron-right', X2);
const J2 = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  _4 = e('chevron-up', J2);
const Y2 = [
    ['path', { d: 'm6 17 5-5-5-5', key: 'xnjwq' }],
    ['path', { d: 'm13 17 5-5-5-5', key: '17xmmf' }],
  ],
  x4 = e('chevrons-right', Y2);
const e0 = [
    ['path', { d: 'm7 15 5 5 5-5', key: '1hf1tw' }],
    ['path', { d: 'm7 9 5-5 5 5', key: 'sgt6xg' }],
  ],
  v4 = e('chevrons-up-down', e0);
const a0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
    ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
  ],
  m4 = e('circle-alert', a0);
const t0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm12 16 4-4-4-4', key: '1i9zcv' }],
    ['path', { d: 'M8 12h8', key: '1wcyev' }],
  ],
  g4 = e('circle-arrow-right', t0);
const c0 = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  u4 = e('circle-check-big', c0);
const o0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  f4 = e('circle-check', o0);
const h0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm14 16-4-4 4-4', key: 'ojs7w8' }],
  ],
  $4 = e('circle-chevron-left', h0);
const d0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm10 8 4 4-4 4', key: '1wy4r4' }],
  ],
  w4 = e('circle-chevron-right', d0);
const y0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm8 14 4-4 4 4', key: 'fy2ptz' }],
  ],
  N4 = e('circle-chevron-up', y0);
const n0 = [
    ['path', { d: 'M10.1 2.182a10 10 0 0 1 3.8 0', key: '5ilxe3' }],
    ['path', { d: 'M13.9 21.818a10 10 0 0 1-3.8 0', key: '11zvb9' }],
    ['path', { d: 'M17.609 3.721a10 10 0 0 1 2.69 2.7', key: '1iw5b2' }],
    ['path', { d: 'M2.182 13.9a10 10 0 0 1 0-3.8', key: 'c0bmvh' }],
    ['path', { d: 'M20.279 17.609a10 10 0 0 1-2.7 2.69', key: '1ruxm7' }],
    ['path', { d: 'M21.818 10.1a10 10 0 0 1 0 3.8', key: 'qkgqxc' }],
    ['path', { d: 'M3.721 6.391a10 10 0 0 1 2.7-2.69', key: '1mcia2' }],
    ['path', { d: 'M6.391 20.279a10 10 0 0 1-2.69-2.7', key: '1fvljs' }],
  ],
  b4 = e('circle-dashed', n0);
const s0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8', key: '1h4pet' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
  ],
  z4 = e('circle-dollar-sign', s0);
const k0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
  ],
  q4 = e('circle-dot', k0);
const p0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M17 12h.01', key: '1m0b6t' }],
    ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
    ['path', { d: 'M7 12h.01', key: 'eqddd0' }],
  ],
  j4 = e('circle-ellipsis', p0);
const i0 = [
    ['path', { d: 'M12 2a10 10 0 0 1 7.38 16.75', key: '175t95' }],
    ['path', { d: 'm16 12-4-4-4 4', key: '177agl' }],
    ['path', { d: 'M12 16V8', key: '1sbj14' }],
    ['path', { d: 'M2.5 8.875a10 10 0 0 0-.5 3', key: '1vce0s' }],
    ['path', { d: 'M2.83 16a10 10 0 0 0 2.43 3.4', key: 'o3fkw4' }],
    ['path', { d: 'M4.636 5.235a10 10 0 0 1 .891-.857', key: '1szpfk' }],
    ['path', { d: 'M8.644 21.42a10 10 0 0 0 7.631-.38', key: '9yhvd4' }],
  ],
  H4 = e('circle-fading-arrow-up', i0);
const r0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  V4 = e('circle-question-mark', r0);
const l0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['line', { x1: '9', x2: '15', y1: '15', y2: '9', key: '1dfufj' }],
  ],
  A4 = e('circle-slash', l0);
const M0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
    ['path', { d: 'M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662', key: '154egf' }],
  ],
  C4 = e('circle-user', M0);
const _0 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
    ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
  ],
  L4 = e('circle-x', _0);
const x0 = [['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }]],
  S4 = e('circle', x0);
const v0 = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M11 9h4a2 2 0 0 0 2-2V3', key: '1ve2rv' }],
    ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
    ['path', { d: 'M7 21v-4a2 2 0 0 1 2-2h4', key: '1fwkro' }],
    ['circle', { cx: '15', cy: '15', r: '2', key: '3i40o0' }],
  ],
  P4 = e('circuit-board', v0);
const m0 = [
    [
      'path',
      {
        d: 'M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z',
        key: '1tn4o7',
      },
    ],
    ['path', { d: 'm6.2 5.3 3.1 3.9', key: 'iuk76l' }],
    ['path', { d: 'm12.4 3.4 3.1 4', key: '6hsd6n' }],
    ['path', { d: 'M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z', key: 'ltgou9' }],
  ],
  B4 = e('clapperboard', m0);
const g0 = [
    ['path', { d: 'M12 6v6h4', key: '135r8i' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  D4 = e('clock-3', g0);
const u0 = [
    ['path', { d: 'M12 6v6l1.56.78', key: '14ed3g' }],
    ['path', { d: 'M13.227 21.925a10 10 0 1 1 8.767-9.588', key: 'jwkls1' }],
    ['path', { d: 'm14 18 4-4 4 4', key: 'ftkppy' }],
    ['path', { d: 'M18 22v-8', key: 'su0gjh' }],
  ],
  T4 = e('clock-arrow-up', u0);
const f0 = [
    ['path', { d: 'M12 6v6l4 2', key: 'mmk7yg' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  U4 = e('clock', f0);
const $0 = [
    ['path', { d: 'M12 13v8', key: '1l5pq0' }],
    ['path', { d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242', key: '1pljnt' }],
    ['path', { d: 'm8 17 4-4 4 4', key: '1quai1' }],
  ],
  R4 = e('cloud-upload', $0);
const w0 = [['path', { d: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z', key: 'p7xjir' }]],
  Z4 = e('cloud', w0);
const N0 = [
    ['path', { d: 'M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z', key: 'gqqjvc' }],
    ['path', { d: 'M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5', key: '1p2s76' }],
  ],
  F4 = e('cloudy', N0);
const b0 = [
    ['path', { d: 'm18 16 4-4-4-4', key: '1inbqp' }],
    ['path', { d: 'm6 8-4 4 4 4', key: '15zrgr' }],
    ['path', { d: 'm14.5 4-5 16', key: 'e7oirm' }],
  ],
  O4 = e('code-xml', b0);
const z0 = [
    ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
    ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }],
  ],
  I4 = e('code', z0);
const q0 = [
    ['path', { d: 'M10 2v2', key: '7u0qdc' }],
    ['path', { d: 'M14 2v2', key: '6buw04' }],
    [
      'path',
      {
        d: 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1',
        key: 'pwadti',
      },
    ],
    ['path', { d: 'M6 2v2', key: 'colzsn' }],
  ],
  E4 = e('coffee', q0);
const j0 = [
    ['circle', { cx: '8', cy: '8', r: '6', key: '3yglwk' }],
    ['path', { d: 'M18.09 10.37A6 6 0 1 1 10.34 18', key: 't5s6rm' }],
    ['path', { d: 'M7 6h1v4', key: '1obek4' }],
    ['path', { d: 'm16.71 13.88.7.71-2.82 2.82', key: '1rbuyh' }],
  ],
  G4 = e('coins', j0);
const H0 = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M12 3v18', key: '108xh3' }],
  ],
  W4 = e('columns-2', H0);
const V0 = [
    [
      'path',
      {
        d: 'm16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z',
        key: '9ktpf1',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  K4 = e('compass', V0);
const A0 = [
    ['line', { x1: '15', x2: '15', y1: '12', y2: '18', key: '1p7wdc' }],
    ['line', { x1: '12', x2: '18', y1: '15', y2: '15', key: '1nscbv' }],
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  Q4 = e('copy-plus', A0);
const C0 = [
    ['rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2', key: '17jyea' }],
    ['path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2', key: 'zix9uf' }],
  ],
  X4 = e('copy', C0);
const L0 = [
    ['path', { d: 'M20 4v7a4 4 0 0 1-4 4H4', key: '6o5b7l' }],
    ['path', { d: 'm9 10-5 5 5 5', key: '1kshq7' }],
  ],
  J4 = e('corner-down-left', L0);
const S0 = [
    ['path', { d: 'm10 9 5-5 5 5', key: '9ctzwi' }],
    ['path', { d: 'M4 20h7a4 4 0 0 0 4-4V4', key: '1plgdj' }],
  ],
  Y4 = e('corner-right-up', S0);
const P0 = [
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M17 20v2', key: '1rnc9c' }],
    ['path', { d: 'M17 2v2', key: '11trls' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M2 17h2', key: '7oei6x' }],
    ['path', { d: 'M2 7h2', key: 'asdhe0' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'M20 17h2', key: '1fpfkl' }],
    ['path', { d: 'M20 7h2', key: '1o8tra' }],
    ['path', { d: 'M7 20v2', key: '4gnj0m' }],
    ['path', { d: 'M7 2v2', key: '1i4yhu' }],
    ['rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', key: '1vbyd7' }],
    ['rect', { x: '8', y: '8', width: '8', height: '8', rx: '1', key: 'z9xiuo' }],
  ],
  ey = e('cpu', P0);
const B0 = [
    ['rect', { width: '20', height: '14', x: '2', y: '5', rx: '2', key: 'ynyp8z' }],
    ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }],
  ],
  ay = e('credit-card', B0);
const D0 = [
    [
      'path',
      {
        d: 'M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z',
        key: '1vdc57',
      },
    ],
    ['path', { d: 'M5 21h14', key: '11awu3' }],
  ],
  ty = e('crown', D0);
const T0 = [
    ['ellipse', { cx: '12', cy: '5', rx: '9', ry: '3', key: 'msslwz' }],
    ['path', { d: 'M3 5V19A9 3 0 0 0 21 19V5', key: '1wlel7' }],
    ['path', { d: 'M3 12A9 3 0 0 0 21 12', key: 'mv7ke4' }],
  ],
  cy = e('database', T0);
const U0 = [
    [
      'path',
      {
        d: 'M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
        key: '1yo7s0',
      },
    ],
    ['path', { d: 'm12 9 6 6', key: 'anjzzh' }],
    ['path', { d: 'm18 9-6 6', key: '1fp51s' }],
  ],
  oy = e('delete', U0);
const R0 = [
    ['rect', { width: '12', height: '12', x: '2', y: '10', rx: '2', ry: '2', key: '6agr2n' }],
    [
      'path',
      {
        d: 'm17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6',
        key: '1o487t',
      },
    ],
    ['path', { d: 'M6 18h.01', key: 'uhywen' }],
    ['path', { d: 'M10 14h.01', key: 'ssrbsk' }],
    ['path', { d: 'M15 6h.01', key: 'cblpky' }],
    ['path', { d: 'M18 9h.01', key: '2061c0' }],
  ],
  hy = e('dices', R0);
const Z0 = [
    ['path', { d: 'M12 3v14', key: '7cf3v8' }],
    ['path', { d: 'M5 10h14', key: 'elsbfy' }],
    ['path', { d: 'M5 21h14', key: '11awu3' }],
  ],
  dy = e('diff', Z0);
const F0 = [
    ['line', { x1: '12', x2: '12', y1: '2', y2: '22', key: '7eqyqh' }],
    ['path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', key: '1b0p4s' }],
  ],
  yy = e('dollar-sign', F0);
const O0 = [['circle', { cx: '12.1', cy: '12.1', r: '1', key: '18d7e5' }]],
  ny = e('dot', O0);
const I0 = [
    ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
    ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
  ],
  sy = e('download', I0);
const E0 = [
    ['path', { d: 'M10 11h.01', key: 'd2at3l' }],
    ['path', { d: 'M14 6h.01', key: 'k028ub' }],
    ['path', { d: 'M18 6h.01', key: '1v4wsw' }],
    ['path', { d: 'M6.5 13.1h.01', key: '1748ia' }],
    ['path', { d: 'M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3', key: '172yzv' }],
    ['path', { d: 'M17.4 9.9c-.8.8-2 .8-2.8 0', key: '1obv0w' }],
    [
      'path',
      {
        d: 'M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7',
        key: 'rqjl8i',
      },
    ],
    ['path', { d: 'M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4', key: '1mr6wy' }],
  ],
  ky = e('drama', E0);
const G0 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
    ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }],
  ],
  py = e('ellipsis-vertical', G0);
const W0 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
    ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
  ],
  iy = e('ellipsis', W0);
const K0 = [
    [
      'path',
      {
        d: 'M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21',
        key: 'g5wo59',
      },
    ],
    ['path', { d: 'm5.082 11.09 8.828 8.828', key: '1wx5vj' }],
  ],
  ry = e('eraser', K0);
const Q0 = [
    ['path', { d: 'm15 15 6 6', key: '1s409w' }],
    ['path', { d: 'm15 9 6-6', key: 'ko1vev' }],
    ['path', { d: 'M21 16v5h-5', key: '1ck2sf' }],
    ['path', { d: 'M21 8V3h-5', key: '1qoq8a' }],
    ['path', { d: 'M3 16v5h5', key: '1t08am' }],
    ['path', { d: 'm3 21 6-6', key: 'wwnumi' }],
    ['path', { d: 'M3 8V3h5', key: '1ln10m' }],
    ['path', { d: 'M9 9 3 3', key: 'v551iv' }],
  ],
  ly = e('expand', Q0);
const X0 = [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
    ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }],
  ],
  My = e('external-link', X0);
const J0 = [
    [
      'path',
      {
        d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49',
        key: 'ct8e1f',
      },
    ],
    ['path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242', key: '151rxh' }],
    [
      'path',
      {
        d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143',
        key: '13bj9a',
      },
    ],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
  ],
  _y = e('eye-off', J0);
const Y0 = [
    [
      'path',
      {
        d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
        key: '1nclc0',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  xy = e('eye', Y0);
const ee = [
    [
      'path',
      {
        d: 'M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z',
        key: '18jl4k',
      },
    ],
    ['path', { d: 'M16 8 2 22', key: 'vp34q' }],
    ['path', { d: 'M17.5 15H9', key: '1oz8nu' }],
  ],
  vy = e('feather', ee);
const ae = [
    [
      'path',
      {
        d: 'M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5',
        key: '4pqfef',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M8 12v-1', key: '1ej8lb' }],
    ['path', { d: 'M8 18v-2', key: 'qcmpov' }],
    ['path', { d: 'M8 7V6', key: '1nbb54' }],
    ['circle', { cx: '8', cy: '20', r: '2', key: 'ckkr5m' }],
  ],
  my = e('file-archive', ae);
const te = [
    [
      'path',
      {
        d: 'M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8',
        key: '1kchwa',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M11.7 14.2 7 17l-4.7-2.8', key: '1yk8tc' }],
    [
      'path',
      {
        d: 'M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z',
        key: '19flxy',
      },
    ],
    ['path', { d: 'M7 17v5', key: '1yj1jh' }],
  ],
  gy = e('file-box', te);
const ce = [
    [
      'path',
      {
        d: 'M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85',
        key: 'ryk6xj',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M8 14v2.2l1.6 1', key: '6m4bie' }],
    ['circle', { cx: '8', cy: '16', r: '6', key: '10v15b' }],
  ],
  uy = e('file-clock', ce);
const oe = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 12.5 8 15l2 2.5', key: '1tg20x' }],
    ['path', { d: 'm14 12.5 2 2.5-2 2.5', key: 'yinavb' }],
  ],
  fy = e('file-code', oe);
const he = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['circle', { cx: '10', cy: '12', r: '2', key: '737tya' }],
    ['path', { d: 'm20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22', key: 'wt3hpn' }],
  ],
  $y = e('file-image', he);
const de = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M9 15h6', key: 'cctwl0' }],
  ],
  wy = e('file-minus', de);
const ye = [
    [
      'path',
      {
        d: 'm18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351',
        key: '1k2beg',
      },
    ],
    [
      'path',
      {
        d: 'M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
        key: '2t3380',
      },
    ],
    ['path', { d: 'M8 18h1', key: '13wk12' }],
  ],
  Ny = e('file-pen-line', ye);
const ne = [
    [
      'path',
      {
        d: 'M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34',
        key: 'o6klzx',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    [
      'path',
      {
        d: 'M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z',
        key: 'zhnas1',
      },
    ],
  ],
  by = e('file-pen', ne);
const se = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
    ['path', { d: 'M16 13H8', key: 't4e002' }],
    ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
  ],
  zy = e('file-text', se);
const ke = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M12 12v6', key: '3ahymv' }],
    ['path', { d: 'm15 15-3-3-3 3', key: '15xj92' }],
  ],
  qy = e('file-up', ke);
const pe = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
  ],
  jy = e('file', pe);
const ie = [
    ['path', { d: 'M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8', key: '14sh0y' }],
    [
      'path',
      {
        d: 'M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z',
        key: '1970lx',
      },
    ],
    ['path', { d: 'M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1', key: 'l4dndm' }],
  ],
  Hy = e('files', ie);
const re = [
    [
      'path',
      {
        d: 'M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4',
        key: '1slcih',
      },
    ],
  ],
  Vy = e('flame', re);
const le = [
    [
      'path',
      {
        d: 'M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2',
        key: '18mbvz',
      },
    ],
    ['path', { d: 'M6.453 15h11.094', key: '3shlmq' }],
    ['path', { d: 'M8.5 2h7', key: 'csnxdl' }],
  ],
  Ay = e('flask-conical', le);
const Me = [
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
    [
      'path',
      {
        d: 'M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5',
        key: '14wa3c',
      },
    ],
    ['path', { d: 'M12 7.5V9', key: '1oy5b0' }],
    ['path', { d: 'M7.5 12H9', key: 'eltsq1' }],
    ['path', { d: 'M16.5 12H15', key: 'vk5kw4' }],
    ['path', { d: 'M12 16.5V15', key: 'k7eayi' }],
    ['path', { d: 'm8 8 1.88 1.88', key: 'nxy4qf' }],
    ['path', { d: 'M14.12 9.88 16 8', key: '1lst6k' }],
    ['path', { d: 'm8 16 1.88-1.88', key: 'h2eex1' }],
    ['path', { d: 'M14.12 14.12 16 16', key: 'uqkrx3' }],
  ],
  Cy = e('flower', Me);
const _e = [
    [
      'path',
      {
        d: 'M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3',
        key: '128dxu',
      },
    ],
    ['path', { d: 'm14.305 19.53.923-.382', key: '3m78fa' }],
    ['path', { d: 'm15.228 16.852-.923-.383', key: 'npixar' }],
    ['path', { d: 'm16.852 15.228-.383-.923', key: '5xggr7' }],
    ['path', { d: 'm16.852 20.772-.383.924', key: 'dpfhf9' }],
    ['path', { d: 'm19.148 15.228.383-.923', key: '1reyyz' }],
    ['path', { d: 'm19.53 21.696-.382-.924', key: '1goivc' }],
    ['path', { d: 'm20.772 16.852.924-.383', key: 'htqkph' }],
    ['path', { d: 'm20.772 19.148.924.383', key: '9w9pjp' }],
    ['circle', { cx: '18', cy: '18', r: '3', key: '1xkwt0' }],
  ],
  Ly = e('folder-cog', _e);
const xe = [
    [
      'path',
      {
        d: 'M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1',
        key: 'fm4g5t',
      },
    ],
    ['path', { d: 'M2 13h10', key: 'pgb2dq' }],
    ['path', { d: 'm9 16 3-3-3-3', key: '6m91ic' }],
  ],
  Sy = e('folder-input', xe);
const ve = [
    [
      'path',
      {
        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
        key: 'usdka0',
      },
    ],
  ],
  Py = e('folder-open', ve);
const me = [
    [
      'path',
      {
        d: 'M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5',
        key: 'a8xqs0',
      },
    ],
    [
      'path',
      {
        d: 'M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
        key: '1saktj',
      },
    ],
  ],
  By = e('folder-pen', me);
const ge = [
    ['path', { d: 'M12 10v6', key: '1bos4e' }],
    ['path', { d: 'M9 13h6', key: '1uhe8q' }],
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
  ],
  Dy = e('folder-plus', ge);
const ue = [
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
    ['path', { d: 'M12 10v6', key: '1bos4e' }],
    ['path', { d: 'm9 13 3-3 3 3', key: '1pxg3c' }],
  ],
  Ty = e('folder-up', ue);
const fe = [
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
  ],
  Uy = e('folder', fe);
const $e = [
    [
      'path',
      {
        d: 'M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z',
        key: '1dudjm',
      },
    ],
    [
      'path',
      {
        d: 'M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z',
        key: 'l2t8xc',
      },
    ],
    ['path', { d: 'M16 17h4', key: '1dejxt' }],
    ['path', { d: 'M4 13h4', key: '1bwh8b' }],
  ],
  Ry = e('footprints', $e);
const we = [
    ['path', { d: 'M7 2h10', key: 'nczekb' }],
    ['path', { d: 'M5 6h14', key: 'u2x4p' }],
    ['rect', { width: '18', height: '12', x: '3', y: '10', rx: '2', key: 'l0tzu3' }],
  ],
  Zy = e('gallery-vertical-end', we);
const Ne = [
    ['line', { x1: '6', x2: '10', y1: '12', y2: '12', key: '161bw2' }],
    ['line', { x1: '8', x2: '8', y1: '10', y2: '14', key: '1i6ji0' }],
    ['line', { x1: '15', x2: '15.01', y1: '13', y2: '13', key: 'dqpgro' }],
    ['line', { x1: '18', x2: '18.01', y1: '11', y2: '11', key: 'meh2c' }],
    ['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2', key: '9lu3g6' }],
  ],
  Fy = e('gamepad', Ne);
const be = [
    ['path', { d: 'm12 14 4-4', key: '9kzdfg' }],
    ['path', { d: 'M3.34 19a10 10 0 1 1 17.32 0', key: '19p75a' }],
  ],
  Oy = e('gauge', be);
const ze = [
    ['rect', { x: '3', y: '8', width: '18', height: '4', rx: '1', key: 'bkv52' }],
    ['path', { d: 'M12 8v13', key: '1c76mn' }],
    ['path', { d: 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7', key: '6wjy6b' }],
    [
      'path',
      {
        d: 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5',
        key: '1ihvrl',
      },
    ],
  ],
  Iy = e('gift', ze);
const qe = [
    ['line', { x1: '6', x2: '6', y1: '3', y2: '15', key: '17qcm7' }],
    ['circle', { cx: '18', cy: '6', r: '3', key: '1h7g24' }],
    ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
    ['path', { d: 'M18 9a9 9 0 0 1-9 9', key: 'n2h4wq' }],
  ],
  Ey = e('git-branch', qe);
const je = [
    ['circle', { cx: '12', cy: '18', r: '3', key: '1mpf1b' }],
    ['circle', { cx: '6', cy: '6', r: '3', key: '1lh9wr' }],
    ['circle', { cx: '18', cy: '6', r: '3', key: '1h7g24' }],
    ['path', { d: 'M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9', key: '1uq4wg' }],
    ['path', { d: 'M12 12v3', key: '158kv8' }],
  ],
  Gy = e('git-fork', je);
const He = [
    [
      'path',
      {
        d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
        key: 'tonef',
      },
    ],
    ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
  ],
  Wy = e('github', He);
const Ve = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
    ['path', { d: 'M2 12h20', key: '9i4pu4' }],
  ],
  Ky = e('globe', Ve);
const Ae = [
    [
      'path',
      {
        d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z',
        key: 'j76jl0',
      },
    ],
    ['path', { d: 'M22 10v6', key: '1lu8f3' }],
    ['path', { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5', key: '1r8lef' }],
  ],
  Qy = e('graduation-cap', Ae);
const Ce = [
    [
      'path',
      {
        d: 'M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3',
        key: '11za1p',
      },
    ],
    ['path', { d: 'M16 19h6', key: 'xwg31i' }],
    ['path', { d: 'M19 22v-6', key: 'qhmiwi' }],
  ],
  Xy = e('grid-2x2-plus', Ce);
const Le = [
    [
      'path',
      {
        d: 'M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3',
        key: '11za1p',
      },
    ],
    ['path', { d: 'm16 16 5 5', key: '8tpb07' }],
    ['path', { d: 'm16 21 5-5', key: '193jll' }],
  ],
  Jy = e('grid-2x2-x', Le);
const Se = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9h18', key: '1pudct' }],
    ['path', { d: 'M3 15h18', key: '5xshup' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ['path', { d: 'M15 3v18', key: '14nvp0' }],
  ],
  Yy = e('grid-3x3', Se);
const Pe = [
    ['path', { d: 'm15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9', key: '1hayfq' }],
    ['path', { d: 'm18 15 4-4', key: '16gjal' }],
    [
      'path',
      {
        d: 'm21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5',
        key: '15ts47',
      },
    ],
  ],
  e5 = e('hammer', Pe);
const Be = [
    ['path', { d: 'M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17', key: 'geh8rc' }],
    [
      'path',
      {
        d: 'm7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9',
        key: '1fto5m',
      },
    ],
    ['path', { d: 'm2 16 6 6', key: '1pfhp9' }],
    ['circle', { cx: '16', cy: '9', r: '2.9', key: '1n0dlu' }],
    ['circle', { cx: '6', cy: '5', r: '3', key: '151irh' }],
  ],
  a5 = e('hand-coins', Be);
const De = [
    ['path', { d: 'M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2', key: '1fvzgz' }],
    ['path', { d: 'M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2', key: '1kc0my' }],
    ['path', { d: 'M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8', key: '10h0bg' }],
    [
      'path',
      {
        d: 'M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15',
        key: '1s1gnw',
      },
    ],
  ],
  t5 = e('hand', De);
const Te = [
    ['path', { d: 'M12 2v8', key: '1q4o3n' }],
    ['path', { d: 'm16 6-4 4-4-4', key: '6wukr' }],
    ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', key: 'w68u3i' }],
    ['path', { d: 'M6 18h.01', key: 'uhywen' }],
    ['path', { d: 'M10 18h.01', key: 'h775k' }],
  ],
  c5 = e('hard-drive-download', Te);
const Ue = [
    ['path', { d: 'm16 6-4-4-4 4', key: '13yo43' }],
    ['path', { d: 'M12 2v8', key: '1q4o3n' }],
    ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', key: 'w68u3i' }],
    ['path', { d: 'M6 18h.01', key: 'uhywen' }],
    ['path', { d: 'M10 18h.01', key: 'h775k' }],
  ],
  o5 = e('hard-drive-upload', Ue);
const Re = [
    ['line', { x1: '22', x2: '2', y1: '12', y2: '12', key: '1y58io' }],
    [
      'path',
      {
        d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
        key: 'oot6mr',
      },
    ],
    ['line', { x1: '6', x2: '6.01', y1: '16', y2: '16', key: 'sgf278' }],
    ['line', { x1: '10', x2: '10.01', y1: '16', y2: '16', key: '1l4acy' }],
  ],
  h5 = e('hard-drive', Re);
const Ze = [
    ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
    ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
    ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
    ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
  ],
  d5 = e('hash', Ze);
const Fe = [
    ['path', { d: 'M4 12h8', key: '17cfdx' }],
    ['path', { d: 'M4 18V6', key: '1rz3zl' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
    ['path', { d: 'm17 12 3-2v8', key: '1hhhft' }],
  ],
  y5 = e('heading-1', Fe);
const Oe = [
    ['path', { d: 'M4 12h8', key: '17cfdx' }],
    ['path', { d: 'M4 18V6', key: '1rz3zl' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
    ['path', { d: 'M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1', key: '9jr5yi' }],
  ],
  n5 = e('heading-2', Oe);
const Ie = [
    ['path', { d: 'M4 12h8', key: '17cfdx' }],
    ['path', { d: 'M4 18V6', key: '1rz3zl' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
    ['path', { d: 'M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2', key: '68ncm8' }],
    ['path', { d: 'M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2', key: '1ejuhz' }],
  ],
  s5 = e('heading-3', Ie);
const Ee = [
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
    ['path', { d: 'M17 10v3a1 1 0 0 0 1 1h3', key: 'tj5zdr' }],
    ['path', { d: 'M21 10v8', key: '1kdml4' }],
    ['path', { d: 'M4 12h8', key: '17cfdx' }],
    ['path', { d: 'M4 18V6', key: '1rz3zl' }],
  ],
  k5 = e('heading-4', Ee);
const Ge = [
    ['path', { d: 'M4 12h8', key: '17cfdx' }],
    ['path', { d: 'M4 18V6', key: '1rz3zl' }],
    ['path', { d: 'M12 18V6', key: 'zqpxq5' }],
    ['path', { d: 'M17 13v-3h4', key: '1nvgqp' }],
    [
      'path',
      { d: 'M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17', key: '2nebdn' },
    ],
  ],
  p5 = e('heading-5', Ge);
const We = [
    [
      'path',
      {
        d: 'M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762',
        key: '17lmqv',
      },
    ],
  ],
  i5 = e('heart-handshake', We);
const Ke = [
    [
      'path',
      {
        d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
        key: 'mvr1a0',
      },
    ],
    ['path', { d: 'M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27', key: 'auskq0' }],
  ],
  r5 = e('heart-pulse', Ke);
const Qe = [
    [
      'path',
      {
        d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
        key: 'mvr1a0',
      },
    ],
  ],
  l5 = e('heart', Qe);
const Xe = [
    ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
    ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
    ['path', { d: 'M12 7v5l4 2', key: '1fdv2h' }],
  ],
  M5 = e('history', Xe);
const Je = [
    ['path', { d: 'M5 22h14', key: 'ehvnwv' }],
    ['path', { d: 'M5 2h14', key: 'pdyrp9' }],
    [
      'path',
      {
        d: 'M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22',
        key: '1d314k',
      },
    ],
    [
      'path',
      {
        d: 'M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2',
        key: '1vvvr6',
      },
    ],
  ],
  _5 = e('hourglass', Je);
const Ye = [
    ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
    [
      'path',
      {
        d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
        key: 'r6nss1',
      },
    ],
  ],
  x5 = e('house', Ye);
const ea = [
    ['line', { x1: '2', x2: '22', y1: '2', y2: '22', key: 'a6p6uj' }],
    ['path', { d: 'M10.41 10.41a2 2 0 1 1-2.83-2.83', key: '1bzlo9' }],
    ['line', { x1: '13.5', x2: '6', y1: '13.5', y2: '21', key: '1q0aeu' }],
    ['line', { x1: '18', x2: '21', y1: '12', y2: '15', key: '5mozeu' }],
    [
      'path',
      {
        d: 'M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59',
        key: 'mmje98',
      },
    ],
    ['path', { d: 'M21 15V5a2 2 0 0 0-2-2H9', key: '43el77' }],
  ],
  v5 = e('image-off', ea);
const aa = [
    ['path', { d: 'M16 5h6', key: '1vod17' }],
    ['path', { d: 'M19 2v6', key: '4bpg5p' }],
    ['path', { d: 'M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5', key: '1ue2ih' }],
    ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }],
    ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
  ],
  m5 = e('image-plus', aa);
const ta = [
    [
      'path',
      {
        d: 'M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21',
        key: '9csbqa',
      },
    ],
    ['path', { d: 'm14 19.5 3-3 3 3', key: '9vmjn0' }],
    ['path', { d: 'M17 22v-5.5', key: '1aa6fl' }],
    ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
  ],
  g5 = e('image-up', ta);
const ca = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2', key: '1m3agn' }],
    ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
    ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }],
  ],
  u5 = e('image', ca);
const oa = [
    ['path', { d: 'm22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16', key: '9kzy35' }],
    ['path', { d: 'M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2', key: '1t0f0t' }],
    ['circle', { cx: '13', cy: '7', r: '1', fill: 'currentColor', key: '1obus6' }],
    ['rect', { x: '8', y: '2', width: '14', height: '14', rx: '2', key: '1gvhby' }],
  ],
  f5 = e('images', oa);
const ha = [
    ['path', { d: 'M12 3v12', key: '1x0j5s' }],
    ['path', { d: 'm8 11 4 4 4-4', key: '1dohi6' }],
    [
      'path',
      {
        d: 'M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4',
        key: '1ywtjm',
      },
    ],
  ],
  $5 = e('import', ha);
const da = [
    ['polyline', { points: '22 12 16 12 14 15 10 15 8 12 2 12', key: 'o97t9d' }],
    [
      'path',
      {
        d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
        key: 'oot6mr',
      },
    ],
  ],
  w5 = e('inbox', da);
const ya = [
    ['path', { d: 'M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8', key: '18ogeb' }],
  ],
  N5 = e('infinity', ya);
const na = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ],
  b5 = e('info', na);
const sa = [
    ['line', { x1: '19', x2: '10', y1: '4', y2: '4', key: '15jd3p' }],
    ['line', { x1: '14', x2: '5', y1: '20', y2: '20', key: 'bu0au3' }],
    ['line', { x1: '15', x2: '9', y1: '4', y2: '20', key: 'uljnxc' }],
  ],
  z5 = e('italic', sa);
const ka = [
    [
      'path',
      {
        d: 'M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z',
        key: '1s6t7t',
      },
    ],
    ['circle', { cx: '16.5', cy: '7.5', r: '.5', fill: 'currentColor', key: 'w0ekpg' }],
  ],
  q5 = e('key-round', ka);
const pa = [
    [
      'path',
      { d: 'm15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4', key: 'g0fldk' },
    ],
    ['path', { d: 'm21 2-9.6 9.6', key: '1j0ho8' }],
    ['circle', { cx: '7.5', cy: '15.5', r: '5.5', key: 'yqb3hr' }],
  ],
  j5 = e('key', pa);
const ia = [
    ['path', { d: 'M10 8h.01', key: '1r9ogq' }],
    ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
    ['path', { d: 'M14 8h.01', key: '1primd' }],
    ['path', { d: 'M16 12h.01', key: '1l6xoz' }],
    ['path', { d: 'M18 8h.01', key: 'emo2bl' }],
    ['path', { d: 'M6 8h.01', key: 'x9i8wu' }],
    ['path', { d: 'M7 16h10', key: 'wp8him' }],
    ['path', { d: 'M8 12h.01', key: 'czm47f' }],
    ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' }],
  ],
  H5 = e('keyboard', ia);
const ra = [
    ['path', { d: 'm5 8 6 6', key: '1wu5hv' }],
    ['path', { d: 'm4 14 6-6 2-3', key: '1k1g8d' }],
    ['path', { d: 'M2 5h12', key: 'or177f' }],
    ['path', { d: 'M7 2h1', key: '1t2jsx' }],
    ['path', { d: 'm22 22-5-10-5 10', key: 'don7ne' }],
    ['path', { d: 'M14 18h6', key: '1m8k6r' }],
  ],
  V5 = e('languages', ra);
const la = [
    ['rect', { width: '18', height: '12', x: '3', y: '4', rx: '2', ry: '2', key: '1qhy41' }],
    ['line', { x1: '2', x2: '22', y1: '20', y2: '20', key: 'ni3hll' }],
  ],
  A5 = e('laptop-minimal', la);
const Ma = [
    [
      'path',
      {
        d: 'M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z',
        key: '1pdavp',
      },
    ],
    ['path', { d: 'M20.054 15.987H3.946', key: '14rxg9' }],
  ],
  C5 = e('laptop', Ma);
const _a = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z', key: 'b2q4dd' }],
    ['line', { x1: '9', x2: '9.01', y1: '9', y2: '9', key: 'yxxnd0' }],
    ['line', { x1: '15', x2: '15.01', y1: '9', y2: '9', key: '1p4y9e' }],
  ],
  L5 = e('laugh', _a);
const xa = [
    [
      'path',
      {
        d: 'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z',
        key: 'zw3jo',
      },
    ],
    [
      'path',
      {
        d: 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12',
        key: '1wduqc',
      },
    ],
    [
      'path',
      {
        d: 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
        key: 'kqbvx6',
      },
    ],
  ],
  S5 = e('layers', xa);
const va = [
    ['rect', { width: '7', height: '9', x: '3', y: '3', rx: '1', key: '10lvy0' }],
    ['rect', { width: '7', height: '5', x: '14', y: '3', rx: '1', key: '16une8' }],
    ['rect', { width: '7', height: '9', x: '14', y: '12', rx: '1', key: '1hutg5' }],
    ['rect', { width: '7', height: '5', x: '3', y: '16', rx: '1', key: 'ldoo1y' }],
  ],
  P5 = e('layout-dashboard', va);
const ma = [
    ['rect', { width: '7', height: '7', x: '3', y: '3', rx: '1', key: '1g98yp' }],
    ['rect', { width: '7', height: '7', x: '14', y: '3', rx: '1', key: '6d4xhi' }],
    ['rect', { width: '7', height: '7', x: '14', y: '14', rx: '1', key: 'nxv5o0' }],
    ['rect', { width: '7', height: '7', x: '3', y: '14', rx: '1', key: '1bb6yr' }],
  ],
  B5 = e('layout-grid', ma);
const ga = [
    ['rect', { width: '18', height: '7', x: '3', y: '3', rx: '1', key: 'f1a2em' }],
    ['rect', { width: '7', height: '7', x: '3', y: '14', rx: '1', key: '1bb6yr' }],
    ['rect', { width: '7', height: '7', x: '14', y: '14', rx: '1', key: 'nxv5o0' }],
  ],
  D5 = e('layout-panel-top', ga);
const ua = [
    [
      'path',
      {
        d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z',
        key: 'nnexq3',
      },
    ],
    ['path', { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12', key: 'mt58a7' }],
  ],
  T5 = e('leaf', ua);
const fa = [
    ['rect', { width: '8', height: '18', x: '3', y: '3', rx: '1', key: 'oynpb5' }],
    ['path', { d: 'M7 3v18', key: 'bbkbws' }],
    [
      'path',
      {
        d: 'M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z',
        key: '1qboyk',
      },
    ],
  ],
  U5 = e('library-big', fa);
const $a = [
    ['path', { d: 'm16 6 4 14', key: 'ji33uf' }],
    ['path', { d: 'M12 6v14', key: '1n7gus' }],
    ['path', { d: 'M8 8v12', key: '1gg7y9' }],
    ['path', { d: 'M4 4v16', key: '6qkkli' }],
  ],
  R5 = e('library', $a);
const wa = [
    [
      'path',
      {
        d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
        key: '1gvzjb',
      },
    ],
    ['path', { d: 'M9 18h6', key: 'x1upvd' }],
    ['path', { d: 'M10 22h4', key: 'ceow96' }],
  ],
  Z5 = e('lightbulb', wa);
const Na = [
    ['path', { d: 'M9 17H7A5 5 0 0 1 7 7', key: '10o201' }],
    ['path', { d: 'M15 7h2a5 5 0 0 1 4 8', key: '1d3206' }],
    ['line', { x1: '8', x2: '12', y1: '12', y2: '12', key: 'rvw6j4' }],
    ['line', { x1: '2', x2: '22', y1: '2', y2: '22', key: 'a6p6uj' }],
  ],
  F5 = e('link-2-off', Na);
const ba = [
    ['path', { d: 'M9 17H7A5 5 0 0 1 7 7h2', key: '8i5ue5' }],
    ['path', { d: 'M15 7h2a5 5 0 1 1 0 10h-2', key: '1b9ql8' }],
    ['line', { x1: '8', x2: '16', y1: '12', y2: '12', key: '1jonct' }],
  ],
  O5 = e('link-2', ba);
const za = [
    ['path', { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', key: '1cjeqo' }],
    ['path', { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71', key: '19qd67' }],
  ],
  I5 = e('link', za);
const qa = [
    ['path', { d: 'M13 5h8', key: 'a7qcls' }],
    ['path', { d: 'M13 12h8', key: 'h98zly' }],
    ['path', { d: 'M13 19h8', key: 'c3s6r1' }],
    ['path', { d: 'm3 17 2 2 4-4', key: '1jhpwq' }],
    ['path', { d: 'm3 7 2 2 4-4', key: '1obspn' }],
  ],
  E5 = e('list-checks', qa);
const ja = [
    ['path', { d: 'M3 5h8', key: '18g2rq' }],
    ['path', { d: 'M3 12h8', key: '1xfjp6' }],
    ['path', { d: 'M3 19h8', key: 'fpbke4' }],
    ['path', { d: 'm15 5 3 3 3-3', key: '1t4thf' }],
    ['path', { d: 'm15 19 3-3 3 3', key: 'y4ckd2' }],
  ],
  G5 = e('list-chevrons-down-up', ja);
const Ha = [
    ['path', { d: 'M3 5h8', key: '18g2rq' }],
    ['path', { d: 'M3 12h8', key: '1xfjp6' }],
    ['path', { d: 'M3 19h8', key: 'fpbke4' }],
    ['path', { d: 'm15 8 3-3 3 3', key: 'bc4io6' }],
    ['path', { d: 'm15 16 3 3 3-3', key: '9wmg1l' }],
  ],
  W5 = e('list-chevrons-up-down', Ha);
const Va = [
    ['path', { d: 'M16 5H3', key: 'm91uny' }],
    ['path', { d: 'M16 12H3', key: '1a2rj7' }],
    ['path', { d: 'M9 19H3', key: 's61nz1' }],
    ['path', { d: 'm16 16-3 3 3 3', key: '117b85' }],
    ['path', { d: 'M21 5v12a2 2 0 0 1-2 2h-6', key: 'hey24a' }],
  ],
  K5 = e('list-end', Va);
const Aa = [
    ['path', { d: 'M2 5h20', key: '1fs1ex' }],
    ['path', { d: 'M6 12h12', key: '8npq4p' }],
    ['path', { d: 'M9 19h6', key: '456am0' }],
  ],
  Q5 = e('list-filter', Aa);
const Ca = [
    ['path', { d: 'M11 5h10', key: '1cz7ny' }],
    ['path', { d: 'M11 12h10', key: '1438ji' }],
    ['path', { d: 'M11 19h10', key: '11t30w' }],
    ['path', { d: 'M4 4h1v5', key: '10yrso' }],
    ['path', { d: 'M4 9h2', key: 'r1h2o0' }],
    ['path', { d: 'M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02', key: 'xtkcd5' }],
  ],
  X5 = e('list-ordered', Ca);
const La = [
    ['path', { d: 'M21 5H3', key: '1fi0y6' }],
    ['path', { d: 'M7 12H3', key: '13ou7f' }],
    ['path', { d: 'M7 19H3', key: 'wbqt3n' }],
    [
      'path',
      {
        d: 'M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14',
        key: 'qth677',
      },
    ],
    ['path', { d: 'M11 10v4h4', key: '172dkj' }],
  ],
  J5 = e('list-restart', La);
const Sa = [
    ['path', { d: 'M13 5h8', key: 'a7qcls' }],
    ['path', { d: 'M13 12h8', key: 'h98zly' }],
    ['path', { d: 'M13 19h8', key: 'c3s6r1' }],
    ['path', { d: 'm3 17 2 2 4-4', key: '1jhpwq' }],
    ['rect', { x: '3', y: '4', width: '6', height: '6', rx: '1', key: 'cif1o7' }],
  ],
  Y5 = e('list-todo', Sa);
const Pa = [
    ['path', { d: 'M8 5h13', key: '1pao27' }],
    ['path', { d: 'M13 12h8', key: 'h98zly' }],
    ['path', { d: 'M13 19h8', key: 'c3s6r1' }],
    ['path', { d: 'M3 10a2 2 0 0 0 2 2h3', key: '1npucw' }],
    ['path', { d: 'M3 5v12a2 2 0 0 0 2 2h3', key: 'x1gjn2' }],
  ],
  en = e('list-tree', Pa);
const Ba = [
    ['path', { d: 'M3 5h.01', key: '18ugdj' }],
    ['path', { d: 'M3 12h.01', key: 'nlz23k' }],
    ['path', { d: 'M3 19h.01', key: 'noohij' }],
    ['path', { d: 'M8 5h13', key: '1pao27' }],
    ['path', { d: 'M8 12h13', key: '1za7za' }],
    ['path', { d: 'M8 19h13', key: 'm83p4d' }],
  ],
  an = e('list', Ba);
const Da = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  tn = e('loader-circle', Da);
const Ta = [
    ['path', { d: 'M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0', key: '1lzz15' }],
    ['path', { d: 'M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6', key: '1gnrpi' }],
    ['path', { d: 'M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6', key: 'u9yy5q' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  cn = e('loader-pinwheel', Ta);
const Ua = [
    ['path', { d: 'M12 2v4', key: '3427ic' }],
    ['path', { d: 'm16.2 7.8 2.9-2.9', key: 'r700ao' }],
    ['path', { d: 'M18 12h4', key: 'wj9ykh' }],
    ['path', { d: 'm16.2 16.2 2.9 2.9', key: '1bxg5t' }],
    ['path', { d: 'M12 18v4', key: 'jadmvz' }],
    ['path', { d: 'm4.9 19.1 2.9-2.9', key: 'bwix9q' }],
    ['path', { d: 'M2 12h4', key: 'j09sii' }],
    ['path', { d: 'm4.9 4.9 2.9 2.9', key: 'giyufr' }],
  ],
  on = e('loader', Ua);
const Ra = [
    ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
    ['path', { d: 'M7 11V7a5 5 0 0 1 9.9-1', key: '1mm8w8' }],
  ],
  hn = e('lock-open', Ra);
const Za = [
    ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2', key: '1w4ew1' }],
    ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4', key: 'fwvmzm' }],
  ],
  dn = e('lock', Za);
const Fa = [
    ['path', { d: 'm10 17 5-5-5-5', key: '1bsop3' }],
    ['path', { d: 'M15 12H3', key: '6jk70r' }],
    ['path', { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4', key: 'u53s6r' }],
  ],
  yn = e('log-in', Fa);
const Oa = [
    ['path', { d: 'm16 17 5-5-5-5', key: '1bji2h' }],
    ['path', { d: 'M21 12H9', key: 'dn1m92' }],
    ['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' }],
  ],
  nn = e('log-out', Oa);
const Ia = [
    ['path', { d: 'M3 5h1', key: '1mv5vm' }],
    ['path', { d: 'M3 12h1', key: 'lp3yf2' }],
    ['path', { d: 'M3 19h1', key: 'w6f3n9' }],
    ['path', { d: 'M8 5h1', key: '1nxr5w' }],
    ['path', { d: 'M8 12h1', key: '1con00' }],
    ['path', { d: 'M8 19h1', key: 'k7p10e' }],
    ['path', { d: 'M13 5h8', key: 'a7qcls' }],
    ['path', { d: 'M13 12h8', key: 'h98zly' }],
    ['path', { d: 'M13 19h8', key: 'c3s6r1' }],
  ],
  sn = e('logs', Ia);
const Ea = [
    [
      'path',
      {
        d: 'M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z',
        key: '169xi5',
      },
    ],
    ['path', { d: 'M15 5.764v15', key: '1pn4in' }],
    ['path', { d: 'M9 3.236v15', key: '1uimfh' }],
  ],
  kn = e('map', Ea);
const Ga = [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'm21 3-7 7', key: '1l2asr' }],
    ['path', { d: 'm3 21 7-7', key: 'tjx5ai' }],
    ['path', { d: 'M9 21H3v-6', key: 'wtvkvv' }],
  ],
  pn = e('maximize-2', Ga);
const Wa = [
    ['path', { d: 'M8 3H5a2 2 0 0 0-2 2v3', key: '1dcmit' }],
    ['path', { d: 'M21 8V5a2 2 0 0 0-2-2h-3', key: '1e4gt3' }],
    ['path', { d: 'M3 16v3a2 2 0 0 0 2 2h3', key: 'wsl5sc' }],
    ['path', { d: 'M16 21h3a2 2 0 0 0 2-2v-3', key: '18trek' }],
  ],
  rn = e('maximize', Wa);
const Ka = [
    [
      'path',
      {
        d: 'M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
        key: 'q8bfy3',
      },
    ],
    ['path', { d: 'M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14', key: '1853fq' }],
    ['path', { d: 'M8 6v8', key: '15ugcq' }],
  ],
  ln = e('megaphone', Ka);
const Qa = [
    [
      'path',
      {
        d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719',
        key: '1sd12s',
      },
    ],
    [
      'path',
      {
        d: 'M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z',
        key: 'hoo97p',
      },
    ],
  ],
  Mn = e('message-circle-heart', Qa);
const Xa = [
    [
      'path',
      {
        d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719',
        key: '1sd12s',
      },
    ],
    ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  _n = e('message-circle-question-mark', Xa);
const Ja = [
    [
      'path',
      {
        d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719',
        key: '1sd12s',
      },
    ],
  ],
  xn = e('message-circle', Ja);
const Ya = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    ['path', { d: 'm10 8-3 3 3 3', key: 'fp6dz7' }],
    ['path', { d: 'm14 14 3-3-3-3', key: '1yrceu' }],
  ],
  vn = e('message-square-code', Ya);
const et = [
    ['path', { d: 'M12 19h.01', key: '1wutuc' }],
    ['path', { d: 'M12 3h.01', key: 'n36tog' }],
    ['path', { d: 'M16 19h.01', key: '1vcnzz' }],
    ['path', { d: 'M16 3h.01', key: 'll0zb8' }],
    ['path', { d: 'M2 13h.01', key: '1aptou' }],
    [
      'path',
      { d: 'M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8', key: '4cp7zq' },
    ],
    ['path', { d: 'M2 5a2 2 0 0 1 2-2', key: '1iztiu' }],
    ['path', { d: 'M2 9h.01', key: '1nzd1v' }],
    ['path', { d: 'M20 3a2 2 0 0 1 2 2', key: 'm48m3a' }],
    ['path', { d: 'M22 13h.01', key: 'ke7esy' }],
    ['path', { d: 'M22 17a2 2 0 0 1-2 2', key: '17q5fo' }],
    ['path', { d: 'M22 9h.01', key: 'npkp49' }],
    ['path', { d: 'M8 3h.01', key: '133hau' }],
  ],
  mn = e('message-square-dashed', et);
const at = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    [
      'path',
      {
        d: 'M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5',
        key: '1faxuh',
      },
    ],
  ],
  gn = e('message-square-heart', at);
const tt = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    ['path', { d: 'M12 8v6', key: '1ib9pf' }],
    ['path', { d: 'M9 11h6', key: '1fldmi' }],
  ],
  un = e('message-square-plus', tt);
const ct = [
    ['path', { d: 'M14 14a2 2 0 0 0 2-2V8h-2', key: '1r06pg' }],
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    ['path', { d: 'M8 14a2 2 0 0 0 2-2V8H8', key: '1jzu5j' }],
  ],
  fn = e('message-square-quote', ct);
const ot = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
    ['path', { d: 'M7 11h10', key: '1twpyw' }],
    ['path', { d: 'M7 15h6', key: 'd9of3u' }],
    ['path', { d: 'M7 7h8', key: 'af5zfr' }],
  ],
  $n = e('message-square-text', ot);
const ht = [
    [
      'path',
      {
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
        key: '18887p',
      },
    ],
  ],
  wn = e('message-square', ht);
const dt = [
    [
      'path',
      {
        d: 'M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
        key: '1n2ejm',
      },
    ],
    [
      'path',
      {
        d: 'M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1',
        key: '1qfcsi',
      },
    ],
  ],
  Nn = e('messages-square', dt);
const yt = [
    ['path', { d: 'M12 19v3', key: 'npa21l' }],
    ['path', { d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33', key: '1gzdoj' }],
    ['path', { d: 'M16.95 16.95A7 7 0 0 1 5 12v-2', key: 'cqa7eg' }],
    ['path', { d: 'M18.89 13.23A7 7 0 0 0 19 12v-2', key: '16hl24' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    ['path', { d: 'M9 9v3a3 3 0 0 0 5.12 2.12', key: 'r2i35w' }],
  ],
  bn = e('mic-off', yt);
const nt = [
    [
      'path',
      {
        d: 'm11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12',
        key: '80a601',
      },
    ],
    [
      'path',
      {
        d: 'M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5',
        key: 'j0ngtp',
      },
    ],
    ['circle', { cx: '16', cy: '7', r: '5', key: 'd08jfb' }],
  ],
  zn = e('mic-vocal', nt);
const st = [
    ['path', { d: 'M12 19v3', key: 'npa21l' }],
    ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
    ['rect', { x: '9', y: '2', width: '6', height: '13', rx: '3', key: 's6n7sd' }],
  ],
  qn = e('mic', st);
const kt = [
    ['path', { d: 'M6 18h8', key: '1borvv' }],
    ['path', { d: 'M3 22h18', key: '8prr45' }],
    ['path', { d: 'M14 22a7 7 0 1 0 0-14h-1', key: '1jwaiy' }],
    ['path', { d: 'M9 14h2', key: '197e7h' }],
    ['path', { d: 'M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z', key: '1bmzmy' }],
    ['path', { d: 'M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3', key: '1drr47' }],
  ],
  jn = e('microscope', kt);
const pt = [
    ['path', { d: 'm14 10 7-7', key: 'oa77jy' }],
    ['path', { d: 'M20 10h-6V4', key: 'mjg0md' }],
    ['path', { d: 'm3 21 7-7', key: 'tjx5ai' }],
    ['path', { d: 'M4 14h6v6', key: 'rmj7iw' }],
  ],
  Hn = e('minimize-2', pt);
const it = [
    ['path', { d: 'M8 3v3a2 2 0 0 1-2 2H3', key: 'hohbtr' }],
    ['path', { d: 'M21 8h-3a2 2 0 0 1-2-2V3', key: '5jw1f3' }],
    ['path', { d: 'M3 16h3a2 2 0 0 1 2 2v3', key: '198tvr' }],
    ['path', { d: 'M16 21v-3a2 2 0 0 1 2-2h3', key: 'ph8mxp' }],
  ],
  Vn = e('minimize', it);
const rt = [['path', { d: 'M5 12h14', key: '1ays0h' }]],
  An = e('minus', rt);
const lt = [
    ['path', { d: 'M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2', key: 'k0q8oc' }],
    ['path', { d: 'M22 15V5a2 2 0 0 0-2-2H9', key: 'cp1ac0' }],
    ['path', { d: 'M8 21h8', key: '1ev6f3' }],
    ['path', { d: 'M12 17v4', key: '1riwvh' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
  ],
  Cn = e('monitor-off', lt);
const Mt = [
    ['rect', { width: '20', height: '14', x: '2', y: '3', rx: '2', key: '48i651' }],
    ['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
    ['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }],
  ],
  Ln = e('monitor', Mt);
const _t = [
    [
      'path',
      {
        d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
        key: 'kfwtm',
      },
    ],
  ],
  Sn = e('moon', _t);
const xt = [
    ['rect', { x: '5', y: '2', width: '14', height: '20', rx: '7', key: '11ol66' }],
    ['path', { d: 'M12 6v4', key: '16clxf' }],
  ],
  Pn = e('mouse', xt);
const vt = [
    ['path', { d: 'M9 18V5l12-2v13', key: '1jmyc2' }],
    ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
    ['circle', { cx: '18', cy: '16', r: '3', key: '1hluhg' }],
  ],
  Bn = e('music', vt);
const mt = [
    ['rect', { x: '16', y: '16', width: '6', height: '6', rx: '1', key: '4q2zg0' }],
    ['rect', { x: '2', y: '16', width: '6', height: '6', rx: '1', key: '8cvhb9' }],
    ['rect', { x: '9', y: '2', width: '6', height: '6', rx: '1', key: '1egb70' }],
    ['path', { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3', key: '1jsf9p' }],
    ['path', { d: 'M12 12V8', key: '2874zd' }],
  ],
  Dn = e('network', mt);
const gt = [
    ['path', { d: 'M15 18h-5', key: '95g1m2' }],
    ['path', { d: 'M18 14h-8', key: 'sponae' }],
    [
      'path',
      {
        d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2',
        key: '39pd36',
      },
    ],
    ['rect', { width: '8', height: '4', x: '10', y: '6', rx: '1', key: 'aywv1n' }],
  ],
  Tn = e('newspaper', gt);
const ut = [
    ['path', { d: 'M2 6h4', key: 'aawbzj' }],
    ['path', { d: 'M2 10h4', key: 'l0bgd4' }],
    ['path', { d: 'M2 14h4', key: '1gsvsf' }],
    ['path', { d: 'M2 18h4', key: '1bu2t1' }],
    ['rect', { width: '16', height: '20', x: '4', y: '2', rx: '2', key: '1nb95v' }],
    ['path', { d: 'M9.5 8h5', key: '11mslq' }],
    ['path', { d: 'M9.5 12H16', key: 'ktog6x' }],
    ['path', { d: 'M9.5 16H14', key: 'p1seyn' }],
  ],
  Un = e('notebook-text', ut);
const ft = [
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['path', { d: 'M12 2v4', key: '3427ic' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    ['rect', { width: '16', height: '18', x: '4', y: '4', rx: '2', key: '1u9h20' }],
    ['path', { d: 'M8 10h6', key: '3oa6kw' }],
    ['path', { d: 'M8 14h8', key: '1fgep2' }],
    ['path', { d: 'M8 18h5', key: '17enja' }],
  ],
  Rn = e('notepad-text', ft);
const $t = [
    [
      'path',
      { d: 'M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025', key: '1bx4vc' },
    ],
    [
      'path',
      {
        d: 'm12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009',
        key: '1h3km6',
      },
    ],
    [
      'path',
      {
        d: 'm12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027',
        key: '1hj4wg',
      },
    ],
  ],
  Zn = e('origami', $t);
const wt = [
    ['path', { d: 'm16 16 2 2 4-4', key: 'gfu2re' }],
    [
      'path',
      {
        d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
        key: 'e7tb2h',
      },
    ],
    ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
    ['polyline', { points: '3.29 7 12 12 20.71 7', key: 'ousv84' }],
    ['line', { x1: '12', x2: '12', y1: '22', y2: '12', key: 'a4e8g8' }],
  ],
  Fn = e('package-check', wt);
const Nt = [
    [
      'path',
      {
        d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
        key: 'e7tb2h',
      },
    ],
    ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
    ['polyline', { points: '3.29 7 12 12 20.71 7', key: 'ousv84' }],
    ['line', { x1: '12', x2: '12', y1: '22', y2: '12', key: 'a4e8g8' }],
    ['circle', { cx: '18.5', cy: '15.5', r: '2.5', key: 'b5zd12' }],
    ['path', { d: 'M20.27 17.27 22 19', key: '1l4muz' }],
  ],
  On = e('package-search', Nt);
const bt = [
    [
      'path',
      {
        d: 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z',
        key: '1a0edw',
      },
    ],
    ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
    ['polyline', { points: '3.29 7 12 12 20.71 7', key: 'ousv84' }],
    ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
  ],
  In = e('package', bt);
const zt = [
    ['path', { d: 'M11 7 6 2', key: '1jwth8' }],
    ['path', { d: 'M18.992 12H2.041', key: 'xw1gg' }],
    [
      'path',
      {
        d: 'M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595',
        key: '1nkol4',
      },
    ],
    [
      'path',
      {
        d: 'm8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33',
        key: '1nk1rd',
      },
    ],
  ],
  En = e('paint-bucket', zt);
const qt = [
    [
      'path',
      {
        d: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z',
        key: 'e79jfc',
      },
    ],
    ['circle', { cx: '13.5', cy: '6.5', r: '.5', fill: 'currentColor', key: '1okk4w' }],
    ['circle', { cx: '17.5', cy: '10.5', r: '.5', fill: 'currentColor', key: 'f64h9f' }],
    ['circle', { cx: '6.5', cy: '12.5', r: '.5', fill: 'currentColor', key: 'qy21gx' }],
    ['circle', { cx: '8.5', cy: '7.5', r: '.5', fill: 'currentColor', key: 'fotxhn' }],
  ],
  Gn = e('palette', qt);
const jt = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 15h18', key: '5xshup' }],
    ['path', { d: 'm15 8-3 3-3-3', key: '1oxy1z' }],
  ],
  Wn = e('panel-bottom-close', jt);
const Ht = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ['path', { d: 'm16 15-3-3 3-3', key: '14y99z' }],
  ],
  Kn = e('panel-left-close', Ht);
const Vt = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ['path', { d: 'm14 9 3 3-3 3', key: '8010ee' }],
  ],
  Qn = e('panel-left-open', Vt);
const At = [
    ['path', { d: 'M15 10V9', key: '4dkmfx' }],
    ['path', { d: 'M15 15v-1', key: '6a4afx' }],
    ['path', { d: 'M15 21v-2', key: '1qshmc' }],
    ['path', { d: 'M15 5V3', key: '1fk0mb' }],
    ['path', { d: 'M9 10V9', key: '1lazqi' }],
    ['path', { d: 'M9 15v-1', key: '9lx740' }],
    ['path', { d: 'M9 21v-2', key: '1fwk0n' }],
    ['path', { d: 'M9 5V3', key: '2q8zi6' }],
    ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', key: 'h1oib' }],
  ],
  Xn = e('panel-left-right-dashed', At);
const Ct = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M15 3v18', key: '14nvp0' }],
    ['path', { d: 'm8 9 3 3-3 3', key: '12hl5m' }],
  ],
  Jn = e('panel-right-close', Ct);
const Lt = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M15 3v18', key: '14nvp0' }],
    ['path', { d: 'm10 15-3-3 3-3', key: '1pgupc' }],
  ],
  Yn = e('panel-right-open', Lt);
const St = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9h18', key: '1pudct' }],
    ['path', { d: 'm9 16 3-3 3 3', key: '1idcnm' }],
  ],
  es = e('panel-top-close', St);
const Pt = [
    [
      'path',
      {
        d: 'm16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551',
        key: '1miecu',
      },
    ],
  ],
  as = e('paperclip', Pt);
const Bt = [
    ['rect', { x: '14', y: '3', width: '5', height: '18', rx: '1', key: 'kaeet6' }],
    ['rect', { x: '5', y: '3', width: '5', height: '18', rx: '1', key: '1wsw3u' }],
  ],
  ts = e('pause', Bt);
const Dt = [
    ['path', { d: 'M13 21h8', key: '1jsn5i' }],
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  cs = e('pen-line', Dt);
const Tt = [
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  os = e('pen', Tt);
const Ut = [
    ['path', { d: 'M13 21h8', key: '1jsn5i' }],
    ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
  ],
  hs = e('pencil-line', Ut);
const Rt = [
    [
      'path',
      {
        d: 'M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13',
        key: 'orapub',
      },
    ],
    ['path', { d: 'm8 6 2-2', key: '115y1s' }],
    ['path', { d: 'm18 16 2-2', key: 'ee94s4' }],
    [
      'path',
      {
        d: 'm17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17',
        key: 'cfq27r',
      },
    ],
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
    ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
  ],
  ds = e('pencil-ruler', Rt);
const Zt = [
    [
      'path',
      {
        d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
        key: '1a8usu',
      },
    ],
    ['path', { d: 'm15 5 4 4', key: '1mk7zo' }],
  ],
  ys = e('pencil', Zt);
const Ft = [
    ['line', { x1: '19', x2: '5', y1: '5', y2: '19', key: '1x9vlm' }],
    ['circle', { cx: '6.5', cy: '6.5', r: '2.5', key: '4mh3h7' }],
    ['circle', { cx: '17.5', cy: '17.5', r: '2.5', key: '1mdrzq' }],
  ],
  ns = e('percent', Ft);
const Ot = [
    [
      'path',
      {
        d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
        key: '9njp5v',
      },
    ],
  ],
  ss = e('phone', Ot);
const It = [
    ['path', { d: 'm14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999', key: '1lw9ds' }],
    [
      'path',
      {
        d: 'M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024',
        key: 'ffj4ej',
      },
    ],
    [
      'path',
      {
        d: 'M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069',
        key: '8tj4zw',
      },
    ],
    [
      'path',
      {
        d: 'M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z',
        key: 'hh6h97',
      },
    ],
  ],
  ks = e('pickaxe', It);
const Et = [
    ['path', { d: 'M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4', key: 'daa4of' }],
    ['rect', { width: '10', height: '7', x: '12', y: '13', rx: '2', key: '1nb8gs' }],
  ],
  ps = e('picture-in-picture-2', Et);
const Gt = [
    ['path', { d: 'M12 17v5', key: 'bb1du9' }],
    ['path', { d: 'M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89', key: 'znwnzq' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    [
      'path',
      {
        d: 'M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11',
        key: 'c9qhm2',
      },
    ],
  ],
  is = e('pin-off', Gt);
const Wt = [
    ['path', { d: 'M12 17v5', key: 'bb1du9' }],
    [
      'path',
      {
        d: 'M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z',
        key: '1nkz8b',
      },
    ],
  ],
  rs = e('pin', Wt);
const Kt = [
    [
      'path',
      {
        d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z',
        key: '10ikf1',
      },
    ],
  ],
  ls = e('play', Kt);
const Qt = [
    ['path', { d: 'M12 22v-5', key: '1ega77' }],
    ['path', { d: 'M15 8V2', key: '18g5xt' }],
    [
      'path',
      { d: 'M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z', key: '1xoxul' },
    ],
    ['path', { d: 'M9 8V2', key: '14iosj' }],
  ],
  Ms = e('plug', Qt);
const Xt = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'M12 5v14', key: 's699le' }],
  ],
  _s = e('plus', Xt);
const Jt = [
    [
      'path',
      {
        d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
        key: '143wyd',
      },
    ],
    ['path', { d: 'M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6', key: '1itne7' }],
    ['rect', { x: '6', y: '14', width: '12', height: '8', rx: '1', key: '1ue0tg' }],
  ],
  xs = e('printer', Jt);
const Yt = [
    [
      'path',
      {
        d: 'M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z',
        key: 'w46dr5',
      },
    ],
  ],
  vs = e('puzzle', Yt);
const ec = [
    ['rect', { width: '5', height: '5', x: '3', y: '3', rx: '1', key: '1tu5fj' }],
    ['rect', { width: '5', height: '5', x: '16', y: '3', rx: '1', key: '1v8r4q' }],
    ['rect', { width: '5', height: '5', x: '3', y: '16', rx: '1', key: '1x03jg' }],
    ['path', { d: 'M21 16h-3a2 2 0 0 0-2 2v3', key: '177gqh' }],
    ['path', { d: 'M21 21v.01', key: 'ents32' }],
    ['path', { d: 'M12 7v3a2 2 0 0 1-2 2H7', key: '8crl2c' }],
    ['path', { d: 'M3 12h.01', key: 'nlz23k' }],
    ['path', { d: 'M12 3h.01', key: 'n36tog' }],
    ['path', { d: 'M12 16v.01', key: '133mhm' }],
    ['path', { d: 'M16 12h1', key: '1slzba' }],
    ['path', { d: 'M21 12v.01', key: '1lwtk9' }],
    ['path', { d: 'M12 21v-1', key: '1880an' }],
  ],
  ms = e('qr-code', ec);
const ac = [
    [
      'path',
      {
        d: 'M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
        key: 'rib7q0',
      },
    ],
    [
      'path',
      {
        d: 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z',
        key: '1ymkrd',
      },
    ],
  ],
  gs = e('quote', ac);
const tc = [
    ['path', { d: 'M4.9 16.1C1 12.2 1 5.8 4.9 1.9', key: 's0qx1y' }],
    ['path', { d: 'M7.8 4.7a6.14 6.14 0 0 0-.8 7.5', key: '1idnkw' }],
    ['circle', { cx: '12', cy: '9', r: '2', key: '1092wv' }],
    ['path', { d: 'M16.2 4.8c2 2 2.26 5.11.8 7.47', key: 'ojru2q' }],
    ['path', { d: 'M19.1 1.9a9.96 9.96 0 0 1 0 14.1', key: 'rhi7fg' }],
    ['path', { d: 'M9.5 18h5', key: 'mfy3pd' }],
    ['path', { d: 'm8 22 4-11 4 11', key: '25yftu' }],
  ],
  us = e('radio-tower', tc);
const cc = [
    ['path', { d: 'm15 14 5-5-5-5', key: '12vg1m' }],
    ['path', { d: 'M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13', key: '6uklza' }],
  ],
  fs = e('redo-2', cc);
const oc = [
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '14sxne' }],
    ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16', key: '1hlbsb' }],
    ['path', { d: 'M16 16h5v5', key: 'ccwih5' }],
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
  ],
  $s = e('refresh-ccw-dot', oc);
const hc = [
    ['path', { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', key: 'v9h5vc' }],
    ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
    ['path', { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', key: '3uifl3' }],
    ['path', { d: 'M8 16H3v5', key: '1cv678' }],
  ],
  ws = e('refresh-cw', hc);
const dc = [
    ['path', { d: 'm17 2 4 4-4 4', key: 'nntrym' }],
    ['path', { d: 'M3 11v-1a4 4 0 0 1 4-4h14', key: '84bu3i' }],
    ['path', { d: 'm7 22-4-4 4-4', key: '1wqhfi' }],
    ['path', { d: 'M21 13v1a4 4 0 0 1-4 4H3', key: '1rx37r' }],
  ],
  Ns = e('repeat', dc);
const yc = [
    [
      'path',
      {
        d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
        key: 'm3kijz',
      },
    ],
    [
      'path',
      {
        d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
        key: '1fmvmk',
      },
    ],
    ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', key: '1f8sc4' }],
    ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', key: 'qeys4' }],
  ],
  bs = e('rocket', yc);
const nc = [
    ['path', { d: 'M20 9V7a2 2 0 0 0-2-2h-6', key: '19z8uc' }],
    ['path', { d: 'm15 2-3 3 3 3', key: '177bxs' }],
    ['path', { d: 'M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2', key: 'd36hnl' }],
  ],
  zs = e('rotate-ccw-square', nc);
const sc = [
    ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '1357e3' }],
    ['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
  ],
  qs = e('rotate-ccw', sc);
const kc = [
    ['path', { d: 'M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8', key: '1p45f6' }],
    ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
  ],
  js = e('rotate-cw', kc);
const pc = [
    ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', key: 'w68u3i' }],
    ['path', { d: 'M6.01 18H6', key: '19vcac' }],
    ['path', { d: 'M10.01 18H10', key: 'uamcmx' }],
    ['path', { d: 'M15 10v4', key: 'qjz1xs' }],
    ['path', { d: 'M17.84 7.17a4 4 0 0 0-5.66 0', key: '1rif40' }],
    ['path', { d: 'M20.66 4.34a8 8 0 0 0-11.31 0', key: '6a5xfq' }],
  ],
  Hs = e('router', pc);
const ic = [
    [
      'path',
      {
        d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
        key: '1c8476',
      },
    ],
    ['path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' }],
    ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
  ],
  Vs = e('save', ic);
const rc = [
    ['path', { d: 'M12 3v18', key: '108xh3' }],
    ['path', { d: 'm19 8 3 8a5 5 0 0 1-6 0zV7', key: 'zcdpyk' }],
    ['path', { d: 'M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1', key: '1yorad' }],
    ['path', { d: 'm5 8 3 8a5 5 0 0 1-6 0zV7', key: 'eua70x' }],
    ['path', { d: 'M7 21h10', key: '1b0cd5' }],
  ],
  As = e('scale', rc);
const lc = [
    ['path', { d: 'M15 12h-5', key: 'r7krc0' }],
    ['path', { d: 'M15 8h-5', key: '1khuty' }],
    ['path', { d: 'M19 17V5a2 2 0 0 0-2-2H4', key: 'zz82l3' }],
    [
      'path',
      {
        d: 'M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3',
        key: '1ph1d7',
      },
    ],
  ],
  Cs = e('scroll-text', lc);
const Mc = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  Ls = e('search', Mc);
const _c = [
    [
      'path',
      {
        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
        key: '1ffxy3',
      },
    ],
    ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
  ],
  Ss = e('send', _c);
const xc = [
    [
      'path',
      {
        d: 'M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2',
        key: '4b9dqc',
      },
    ],
    [
      'path',
      {
        d: 'M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2',
        key: '22nnkd',
      },
    ],
    ['path', { d: 'M6 6h.01', key: '1utrut' }],
    ['path', { d: 'M6 18h.01', key: 'uhywen' }],
    ['path', { d: 'm13 6-4 6h6l-4 6', key: '14hqih' }],
  ],
  Ps = e('server-crash', xc);
const vc = [
    ['rect', { width: '20', height: '8', x: '2', y: '2', rx: '2', ry: '2', key: 'ngkwjq' }],
    ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', ry: '2', key: 'iecqi9' }],
    ['line', { x1: '6', x2: '6.01', y1: '6', y2: '6', key: '16zg32' }],
    ['line', { x1: '6', x2: '6.01', y1: '18', y2: '18', key: 'nzw8ys' }],
  ],
  Bs = e('server', vc);
const mc = [
    [
      'path',
      {
        d: 'M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915',
        key: '1i5ecw',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  Ds = e('settings', mc);
const gc = [
    ['path', { d: 'M14 17H5', key: 'gfn3mx' }],
    ['path', { d: 'M19 7h-9', key: '6i9tg' }],
    ['circle', { cx: '17', cy: '17', r: '3', key: '18b49y' }],
    ['circle', { cx: '7', cy: '7', r: '3', key: 'dfmy0x' }],
  ],
  Ts = e('settings-2', gc);
const uc = [
    [
      'path',
      {
        d: 'M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z',
        key: '1bo67w',
      },
    ],
    ['rect', { x: '3', y: '14', width: '7', height: '7', rx: '1', key: '1bkyp8' }],
    ['circle', { cx: '17.5', cy: '17.5', r: '3.5', key: 'w3z12y' }],
  ],
  Us = e('shapes', uc);
const fc = [
    ['circle', { cx: '18', cy: '5', r: '3', key: 'gq8acd' }],
    ['circle', { cx: '6', cy: '12', r: '3', key: 'w7nqdw' }],
    ['circle', { cx: '18', cy: '19', r: '3', key: '1xt0gg' }],
    ['line', { x1: '8.59', x2: '15.42', y1: '13.51', y2: '17.49', key: '47mynk' }],
    ['line', { x1: '15.41', x2: '8.59', y1: '6.51', y2: '10.49', key: '1n3mei' }],
  ],
  Rs = e('share-2', fc);
const $c = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
    ['path', { d: 'M12 8v4', key: '1got3b' }],
    ['path', { d: 'M12 16h.01', key: '1drbdi' }],
  ],
  Zs = e('shield-alert', $c);
const wc = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  Fs = e('shield-check', wc);
const Nc = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
  ],
  Os = e('shield', Nc);
const bc = [
    ['path', { d: 'M16 10a4 4 0 0 1-8 0', key: '1ltviw' }],
    ['path', { d: 'M3.103 6.034h17.794', key: 'awc11p' }],
    [
      'path',
      {
        d: 'M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z',
        key: 'o988cm',
      },
    ],
  ],
  Is = e('shopping-bag', bc);
const zc = [
    ['circle', { cx: '8', cy: '21', r: '1', key: 'jimo8o' }],
    ['circle', { cx: '19', cy: '21', r: '1', key: '13723u' }],
    [
      'path',
      {
        d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12',
        key: '9zh506',
      },
    ],
  ],
  Es = e('shopping-cart', zc);
const qc = [
    [
      'path',
      {
        d: 'M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2',
        key: 'wuwx1p',
      },
    ],
  ],
  Gs = e('sigma', qc);
const jc = [
    [
      'path',
      {
        d: 'm21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284',
        key: 'y32ogt',
      },
    ],
    ['path', { d: 'M3 21h18', key: 'itz85i' }],
  ],
  Ws = e('signature', jc);
const Hc = [
    ['path', { d: 'M10 5H3', key: '1qgfaw' }],
    ['path', { d: 'M12 19H3', key: 'yhmn1j' }],
    ['path', { d: 'M14 3v4', key: '1sua03' }],
    ['path', { d: 'M16 17v4', key: '1q0r14' }],
    ['path', { d: 'M21 12h-9', key: '1o4lsq' }],
    ['path', { d: 'M21 19h-5', key: '1rlt1p' }],
    ['path', { d: 'M21 5h-7', key: '1oszz2' }],
    ['path', { d: 'M8 10v4', key: 'tgpxqk' }],
    ['path', { d: 'M8 12H3', key: 'a7s4jb' }],
  ],
  Ks = e('sliders-horizontal', Hc);
const Vc = [
    ['rect', { width: '14', height: '20', x: '5', y: '2', rx: '2', ry: '2', key: '1yt0o3' }],
    ['path', { d: 'M12 18h.01', key: 'mhygvu' }],
  ],
  Qs = e('smartphone', Vc);
const Ac = [
    ['path', { d: 'M22 11v1a10 10 0 1 1-9-10', key: 'ew0xw9' }],
    ['path', { d: 'M8 14s1.5 2 4 2 4-2 4-2', key: '1y1vjs' }],
    ['line', { x1: '9', x2: '9.01', y1: '9', y2: '9', key: 'yxxnd0' }],
    ['line', { x1: '15', x2: '15.01', y1: '9', y2: '9', key: '1p4y9e' }],
    ['path', { d: 'M16 5h6', key: '1vod17' }],
    ['path', { d: 'M19 2v6', key: '4bpg5p' }],
  ],
  Xs = e('smile-plus', Ac);
const Cc = [
    [
      'path',
      {
        d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
        key: '1s2grr',
      },
    ],
  ],
  Js = e('sparkle', Cc);
const Lc = [
    [
      'path',
      {
        d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
        key: '1s2grr',
      },
    ],
    ['path', { d: 'M20 2v4', key: '1rf3ol' }],
    ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
    ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
  ],
  Ys = e('sparkles', Lc);
const Sc = [
    ['path', { d: 'M16 3h5v5', key: '1806ms' }],
    ['path', { d: 'M8 3H3v5', key: '15dfkv' }],
    ['path', { d: 'M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3', key: '1qrqzj' }],
    ['path', { d: 'm15 9 6-6', key: 'ko1vev' }],
  ],
  e3 = e('split', Sc);
const Pc = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M12 8v8', key: 'napkw2' }],
    ['path', { d: 'm8 12 4 4 4-4', key: 'k98ssh' }],
  ],
  a3 = e('square-arrow-down', Pc);
const Bc = [
    ['path', { d: 'M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6', key: 'y09zxi' }],
    ['path', { d: 'm21 3-9 9', key: 'mpx6sq' }],
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
  ],
  t3 = e('square-arrow-out-up-right', Bc);
const Dc = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M9 8h7', key: 'kbo1nt' }],
    ['path', { d: 'M8 12h6', key: 'ikassy' }],
    ['path', { d: 'M11 16h5', key: 'oq65wt' }],
  ],
  c3 = e('square-chart-gantt', Dc);
const Tc = [
    [
      'path',
      { d: 'M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344', key: '2acyp4' },
    ],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  o3 = e('square-check-big', Tc);
const Uc = [
    ['path', { d: 'M10 9.5 8 12l2 2.5', key: '3mjy60' }],
    ['path', { d: 'M14 21h1', key: 'v9vybs' }],
    ['path', { d: 'm14 9.5 2 2.5-2 2.5', key: '1bir2l' }],
    [
      'path',
      { d: 'M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2', key: 'as5y1o' },
    ],
    ['path', { d: 'M9 21h1', key: '15o7lz' }],
  ],
  h3 = e('square-dashed-bottom-code', Uc);
const Rc = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2', key: '1m3agn' }],
    ['path', { d: 'M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3', key: 'm1af9g' }],
    ['path', { d: 'M9 11.2h5.7', key: '3zgcl2' }],
  ],
  d3 = e('square-function', Rc);
const Zc = [
    ['path', { d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7', key: '1m0v6g' }],
    [
      'path',
      {
        d: 'M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z',
        key: 'ohrbg2',
      },
    ],
  ],
  y3 = e('square-pen', Zc);
const Fc = [
    ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', key: 'h1oib' }],
    [
      'path',
      {
        d: 'M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z',
        key: 'kmsa83',
      },
    ],
  ],
  n3 = e('square-play', Fc);
const Oc = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M8 12h8', key: '1wcyev' }],
    ['path', { d: 'M12 8v8', key: 'napkw2' }],
  ],
  s3 = e('square-plus', Oc);
const Ic = [
    ['path', { d: 'm7 11 2-2-2-2', key: '1lz0vl' }],
    ['path', { d: 'M11 13h4', key: '1p7l4v' }],
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2', key: '1m3agn' }],
  ],
  k3 = e('square-terminal', Ic);
const Ec = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
    ['path', { d: 'M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2', key: '1m6ac2' }],
  ],
  p3 = e('square-user', Ec);
const Gc = [['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }]],
  i3 = e('square', Gc);
const Wc = [
    ['path', { d: 'M13.77 3.043a34 34 0 0 0-3.54 0', key: '1oaobr' }],
    ['path', { d: 'M13.771 20.956a33 33 0 0 1-3.541.001', key: '95iq0j' }],
    ['path', { d: 'M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44', key: '1u6qty' }],
    ['path', { d: 'M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438', key: '1ew6g6' }],
    ['path', { d: 'M20.957 10.23a33 33 0 0 1 0 3.54', key: '1l9npr' }],
    ['path', { d: 'M3.043 10.23a34 34 0 0 0 .001 3.541', key: '1it6jm' }],
    ['path', { d: 'M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438', key: '14uchd' }],
    ['path', { d: 'M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44', key: '8k4agb' }],
  ],
  r3 = e('squircle-dashed', Wc);
const Kc = [
    [
      'path',
      {
        d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
        key: 'r04s7s',
      },
    ],
  ],
  l3 = e('star', Kc);
const Qc = [
    [
      'path',
      {
        d: 'M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z',
        key: '1ystz2',
      },
    ],
    ['path', { d: 'M3 4v16', key: '1ph11n' }],
  ],
  M3 = e('step-forward', Qc);
const Xc = [
    ['path', { d: 'M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5', key: 'slp6dd' }],
    [
      'path',
      {
        d: 'M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244',
        key: 'o0xfot',
      },
    ],
    ['path', { d: 'M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05', key: 'wn3emo' }],
  ],
  _3 = e('store', Xc);
const Jc = [
    ['path', { d: 'M16 4H9a3 3 0 0 0-2.83 4', key: '43sutm' }],
    ['path', { d: 'M14 12a4 4 0 0 1 0 8H6', key: 'nlfj13' }],
    ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
  ],
  x3 = e('strikethrough', Jc);
const Yc = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  v3 = e('sun', Yc);
const eo = [
    [
      'path',
      {
        d: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
        key: 'gugj83',
      },
    ],
  ],
  m3 = e('table-2', eo);
const ao = [
    ['path', { d: 'M14 14v2', key: 'w2a1xv' }],
    ['path', { d: 'M14 20v2', key: '1lq872' }],
    ['path', { d: 'M14 2v2', key: '6buw04' }],
    ['path', { d: 'M14 8v2', key: 'i67w9a' }],
    ['path', { d: 'M2 15h8', key: '82wtch' }],
    ['path', { d: 'M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2', key: 'up0l64' }],
    ['path', { d: 'M2 9h8', key: 'yelfik' }],
    ['path', { d: 'M22 15h-4', key: '1es58f' }],
    ['path', { d: 'M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2', key: 'pdjoqf' }],
    ['path', { d: 'M22 9h-4', key: '1luja7' }],
    ['path', { d: 'M5 3v18', key: '14hmio' }],
  ],
  g3 = e('table-columns-split', ao);
const to = [
    ['path', { d: 'M14 10h2', key: '1lstlu' }],
    ['path', { d: 'M15 22v-8', key: '1fwwgm' }],
    ['path', { d: 'M15 2v4', key: '1044rn' }],
    ['path', { d: 'M2 10h2', key: '1r8dkt' }],
    ['path', { d: 'M20 10h2', key: '1ug425' }],
    ['path', { d: 'M3 19h18', key: 'awlh7x' }],
    ['path', { d: 'M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6', key: 'ibqhof' }],
    ['path', { d: 'M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2', key: '1uenja' }],
    ['path', { d: 'M8 10h2', key: '66od0' }],
    ['path', { d: 'M9 22v-8', key: 'fmnu31' }],
    ['path', { d: 'M9 2v4', key: 'j1yeou' }],
  ],
  u3 = e('table-rows-split', to);
const co = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
    ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ],
  f3 = e('target', co);
const oo = [
    [
      'path',
      {
        d: 'm10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44',
        key: 'k4qptu',
      },
    ],
    ['path', { d: 'm13.56 11.747 4.332-.924', key: '19l80z' }],
    ['path', { d: 'm16 21-3.105-6.21', key: '7oh9d' }],
    [
      'path',
      {
        d: 'M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z',
        key: 'm7xp4m',
      },
    ],
    ['path', { d: 'm6.158 8.633 1.114 4.456', key: '74o979' }],
    ['path', { d: 'm8 21 3.105-6.21', key: '1fvxut' }],
    ['circle', { cx: '12', cy: '13', r: '2', key: '1c1ljs' }],
  ],
  $3 = e('telescope', oo);
const ho = [
    ['path', { d: 'M12 19h8', key: 'baeox8' }],
    ['path', { d: 'm4 17 6-6-6-6', key: '1yngyt' }],
  ],
  w3 = e('terminal', ho);
const yo = [
    ['path', { d: 'M21 5H3', key: '1fi0y6' }],
    ['path', { d: 'M15 12H3', key: '6jk70r' }],
    ['path', { d: 'M17 19H3', key: 'z6ezky' }],
  ],
  N3 = e('text-align-start', yo);
const no = [
    ['path', { d: 'M21 5H3', key: '1fi0y6' }],
    ['path', { d: 'M10 12H3', key: '1ulcyk' }],
    ['path', { d: 'M10 19H3', key: '108z41' }],
    ['circle', { cx: '17', cy: '15', r: '3', key: '1upz2a' }],
    ['path', { d: 'm21 19-1.9-1.9', key: 'dwi7p8' }],
  ],
  b3 = e('text-search', no);
const so = [['path', { d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z', key: '17jzev' }]],
  z3 = e('thermometer', so);
const ko = [
    ['path', { d: 'M10 2h4', key: 'n1abiw' }],
    ['path', { d: 'M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7', key: '10he05' }],
    ['path', { d: 'M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2', key: '15f7sh' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
    ['path', { d: 'M12 12v-2', key: 'fwoke6' }],
  ],
  q3 = e('timer-off', ko);
const po = [
    ['line', { x1: '10', x2: '14', y1: '2', y2: '2', key: '14vaq8' }],
    ['line', { x1: '12', x2: '15', y1: '14', y2: '11', key: '17fdiu' }],
    ['circle', { cx: '12', cy: '14', r: '8', key: '1e1u0o' }],
  ],
  j3 = e('timer', po);
const io = [
    ['circle', { cx: '9', cy: '12', r: '3', key: 'u3jwor' }],
    ['rect', { width: '20', height: '14', x: '2', y: '5', rx: '7', key: 'g7kal2' }],
  ],
  H3 = e('toggle-left', io);
const ro = [
    ['circle', { cx: '15', cy: '12', r: '3', key: '1afu0r' }],
    ['rect', { width: '20', height: '14', x: '2', y: '5', rx: '7', key: 'g7kal2' }],
  ],
  V3 = e('toggle-right', ro);
const lo = [
    ['rect', { width: '18', height: '12', x: '3', y: '8', rx: '1', key: '158fvp' }],
    ['path', { d: 'M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3', key: 's0042v' }],
    ['path', { d: 'M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3', key: '9wmeh2' }],
  ],
  A3 = e('toy-brick', lo);
const Mo = [
    ['path', { d: 'M2 22V12a10 10 0 1 1 20 0v10', key: 'o0fyp0' }],
    ['path', { d: 'M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8', key: 'm8q3n9' }],
    ['path', { d: 'M10 15h.01', key: '44in9x' }],
    ['path', { d: 'M14 15h.01', key: '5mohn5' }],
    ['path', { d: 'M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z', key: 'hckbmu' }],
    ['path', { d: 'm9 19-2 3', key: 'iij7hm' }],
    ['path', { d: 'm15 19 2 3', key: 'npx8sa' }],
  ],
  C3 = e('train-front-tunnel', Mo);
const _o = [
    ['path', { d: 'M10 11v6', key: 'nco0om' }],
    ['path', { d: 'M14 11v6', key: 'outv1u' }],
    ['path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', key: 'miytrc' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
    ['path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', key: 'e791ji' }],
  ],
  L3 = e('trash-2', _o);
const xo = [
    ['path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6', key: 'miytrc' }],
    ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
    ['path', { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', key: 'e791ji' }],
  ],
  S3 = e('trash', xo);
const vo = [
    ['path', { d: 'M16 7h6v6', key: 'box55l' }],
    ['path', { d: 'm22 7-8.5 8.5-5-5L2 17', key: '1t1m79' }],
  ],
  P3 = e('trending-up', vo);
const mo = [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  B3 = e('triangle-alert', mo);
const go = [
    ['path', { d: 'M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978', key: '1n3hpd' }],
    ['path', { d: 'M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978', key: 'rfe1zi' }],
    ['path', { d: 'M18 9h1.5a1 1 0 0 0 0-5H18', key: '7xy6bh' }],
    ['path', { d: 'M4 22h16', key: '57wxv0' }],
    ['path', { d: 'M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z', key: '1mhfuq' }],
    ['path', { d: 'M6 9H4.5a1 1 0 0 1 0-5H6', key: 'tex48p' }],
  ],
  D3 = e('trophy', go);
const uo = [
    ['path', { d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2', key: 'wrbu53' }],
    ['path', { d: 'M15 18H9', key: '1lyqi6' }],
    [
      'path',
      {
        d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14',
        key: 'lysw3i',
      },
    ],
    ['circle', { cx: '17', cy: '18', r: '2', key: '332jqn' }],
    ['circle', { cx: '7', cy: '18', r: '2', key: '19iecd' }],
  ],
  T3 = e('truck', uo);
const fo = [
    ['path', { d: 'M12 4v16', key: '1654pz' }],
    ['path', { d: 'M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2', key: 'e0r10z' }],
    ['path', { d: 'M9 20h6', key: 's66wpe' }],
  ],
  U3 = e('type', fo);
const $o = [
    ['path', { d: 'M6 4v6a6 6 0 0 0 12 0V4', key: '9kb039' }],
    ['line', { x1: '4', x2: '20', y1: '20', y2: '20', key: 'nun2al' }],
  ],
  R3 = e('underline', $o);
const wo = [
    ['path', { d: 'M9 14 4 9l5-5', key: '102s5s' }],
    ['path', { d: 'M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11', key: 'f3b9sd' }],
  ],
  Z3 = e('undo-2', wo);
const No = [
    [
      'path',
      {
        d: 'm18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71',
        key: 'yqzxt4',
      },
    ],
    [
      'path',
      {
        d: 'm5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71',
        key: '4qinb0',
      },
    ],
    ['line', { x1: '8', x2: '8', y1: '2', y2: '5', key: '1041cp' }],
    ['line', { x1: '2', x2: '5', y1: '8', y2: '8', key: '14m1p5' }],
    ['line', { x1: '16', x2: '16', y1: '19', y2: '22', key: 'rzdirn' }],
    ['line', { x1: '19', x2: '22', y1: '16', y2: '16', key: 'ox905f' }],
  ],
  F3 = e('unlink', No);
const bo = [
    ['path', { d: 'm19 5 3-3', key: 'yk6iyv' }],
    ['path', { d: 'm2 22 3-3', key: '19mgm9' }],
    [
      'path',
      { d: 'M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z', key: 'goz73y' },
    ],
    ['path', { d: 'M7.5 13.5 10 11', key: '7xgeeb' }],
    ['path', { d: 'M10.5 16.5 13 14', key: '10btkg' }],
    [
      'path',
      { d: 'm12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z', key: '1snsnr' },
    ],
  ],
  O3 = e('unplug', bo);
const zo = [
    ['path', { d: 'M12 3v12', key: '1x0j5s' }],
    ['path', { d: 'm17 8-5-5-5 5', key: '7q97r8' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ],
  I3 = e('upload', zo);
const qo = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
    ['line', { x1: '22', x2: '16', y1: '11', y2: '11', key: '1shjgl' }],
  ],
  E3 = e('user-minus', qo);
const jo = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
    ['line', { x1: '19', x2: '19', y1: '8', y2: '14', key: '1bvyxn' }],
    ['line', { x1: '22', x2: '16', y1: '11', y2: '11', key: '1shjgl' }],
  ],
  G3 = e('user-plus', jo);
const Ho = [
    ['circle', { cx: '12', cy: '8', r: '5', key: '1hypcn' }],
    ['path', { d: 'M20 21a8 8 0 0 0-16 0', key: 'rfgkzh' }],
  ],
  W3 = e('user-round', Ho);
const Vo = [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
  ],
  K3 = e('user', Vo);
const Ao = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ],
  Q3 = e('users', Ao);
const Co = [
    [
      'path',
      { d: 'M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196', key: 'w8jjjt' },
    ],
    ['path', { d: 'M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2', key: '1xawa7' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
  ],
  X3 = e('video-off', Co);
const Lo = [
    [
      'path',
      {
        d: 'm16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5',
        key: 'ftymec',
      },
    ],
    ['rect', { x: '2', y: '6', width: '14', height: '12', rx: '2', key: '158x01' }],
  ],
  J3 = e('video', Lo);
const So = [
    ['path', { d: 'M11.1 7.1a16.55 16.55 0 0 1 10.9 4', key: '2880wi' }],
    ['path', { d: 'M12 12a12.6 12.6 0 0 1-8.7 5', key: '113sja' }],
    ['path', { d: 'M16.8 13.6a16.55 16.55 0 0 1-9 7.5', key: '1qmsgl' }],
    ['path', { d: 'M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10', key: '1bmeqp' }],
    ['path', { d: 'M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5', key: 'iekzv9' }],
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ],
  Y3 = e('volleyball', So);
const Po = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2', key: '4125el' }],
    [
      'path',
      {
        d: 'M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21',
        key: '1dpki6',
      },
    ],
  ],
  ek = e('wallet-cards', Po);
const Bo = [
    [
      'path',
      {
        d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72',
        key: 'ul74o6',
      },
    ],
    ['path', { d: 'm14 7 3 3', key: '1r5n42' }],
    ['path', { d: 'M5 6v4', key: 'ilb8ba' }],
    ['path', { d: 'M19 14v4', key: 'blhpug' }],
    ['path', { d: 'M10 2v2', key: '7u0qdc' }],
    ['path', { d: 'M7 8H3', key: 'zfb6yr' }],
    ['path', { d: 'M21 16h-4', key: '1cnmox' }],
    ['path', { d: 'M11 3H9', key: '1obp7u' }],
  ],
  ak = e('wand-sparkles', Bo);
const Do = [
    [
      'path',
      {
        d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
        key: 'knzxuh',
      },
    ],
    [
      'path',
      {
        d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
        key: '2jd2cc',
      },
    ],
    [
      'path',
      {
        d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
        key: 'rd2r6e',
      },
    ],
  ],
  tk = e('waves', Do);
const To = [
    ['path', { d: 'M12 20h.01', key: 'zekei9' }],
    ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0', key: '1bycff' }],
    ['path', { d: 'M5 12.859a10 10 0 0 1 5.17-2.69', key: '1dl1wf' }],
    ['path', { d: 'M19 12.859a10 10 0 0 0-2.007-1.523', key: '4k23kn' }],
    ['path', { d: 'M2 8.82a15 15 0 0 1 4.177-2.643', key: '1grhjp' }],
    ['path', { d: 'M22 8.82a15 15 0 0 0-11.288-3.764', key: 'z3jwby' }],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
  ],
  ck = e('wifi-off', To);
const Uo = [
    ['path', { d: 'M12 20h.01', key: 'zekei9' }],
    ['path', { d: 'M2 8.82a15 15 0 0 1 20 0', key: 'dnpr2z' }],
    ['path', { d: 'M5 12.859a10 10 0 0 1 14 0', key: '1x1e6c' }],
    ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0', key: '1bycff' }],
  ],
  ok = e('wifi', Uo);
const Ro = [
    ['rect', { width: '8', height: '8', x: '3', y: '3', rx: '2', key: 'by2w9f' }],
    ['path', { d: 'M7 11v4a2 2 0 0 0 2 2h4', key: 'xkn7yn' }],
    ['rect', { width: '8', height: '8', x: '13', y: '13', rx: '2', key: '1cgmvn' }],
  ],
  hk = e('workflow', Ro);
const Zo = [
    [
      'path',
      {
        d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z',
        key: '1ngwbx',
      },
    ],
  ],
  dk = e('wrench', Zo);
const Fo = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  yk = e('x', Fo);
const Oo = [
    [
      'path',
      {
        d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
        key: '1xq2db',
      },
    ],
  ],
  nk = e('zap', Oo);
export {
  Uy as $,
  hd as A,
  Yd as B,
  K4 as C,
  ky as D,
  Bs as E,
  zy as F,
  Qy as G,
  l5 as H,
  u5 as I,
  Qs as J,
  Fd as K,
  D5 as L,
  jn as M,
  k4 as N,
  yy as O,
  ys as P,
  Dn as Q,
  M4 as R,
  k3 as S,
  w3 as T,
  K3 as U,
  Kn as V,
  dk as W,
  Qn as X,
  ry as Y,
  V4 as Z,
  tn as _,
  L5 as a,
  gd as a$,
  Qh as a0,
  I4 as a1,
  e5 as a2,
  Tn as a3,
  Q3 as a4,
  T5 as a5,
  kn as a6,
  c3 as a7,
  Xn as a8,
  O5 as a9,
  $h as aA,
  mh as aB,
  kh as aC,
  Gh as aD,
  ch as aE,
  _h as aF,
  oh as aG,
  S3 as aH,
  vh as aI,
  Uh as aJ,
  Yo as aK,
  as as aL,
  xy as aM,
  J3 as aN,
  N5 as aO,
  p5 as aP,
  k5 as aQ,
  s5 as aR,
  n5 as aS,
  Jn as aT,
  Yn as aU,
  v3 as aV,
  Sn as aW,
  Bh as aX,
  Th as aY,
  Ch as aZ,
  _s as a_,
  od as aa,
  U4 as ab,
  L4 as ac,
  _5 as ad,
  f4 as ae,
  ts as af,
  t3 as ag,
  os as ah,
  O4 as ai,
  En as aj,
  s4 as ak,
  ns as al,
  f3 as am,
  a5 as an,
  Hn as ao,
  vn as ap,
  a3 as aq,
  d3 as ar,
  Qd as as,
  t5 as at,
  m4 as au,
  ny as av,
  My as aw,
  $n as ax,
  m5 as ay,
  Ss as az,
  Fy as b,
  o5 as b$,
  Wh as b0,
  dn as b1,
  I5 as b2,
  jy as b3,
  r4 as b4,
  Py as b5,
  Ad as b6,
  dd as b7,
  Vd as b8,
  G4 as b9,
  l3 as bA,
  wn as bB,
  wh as bC,
  B3 as bD,
  _d as bE,
  I3 as bF,
  Ay as bG,
  cn as bH,
  Y3 as bI,
  Nd as bJ,
  D3 as bK,
  n4 as bL,
  P3 as bM,
  Oy as bN,
  nk as bO,
  Ry as bP,
  d5 as bQ,
  l4 as bR,
  Us as bS,
  fh as bT,
  Xd as bU,
  Ws as bV,
  e4 as bW,
  r5 as bX,
  Z5 as bY,
  c4 as bZ,
  c5 as b_,
  Gy as ba,
  Rd as bb,
  gn as bc,
  C4 as bd,
  Jo as be,
  Sd as bf,
  z5 as bg,
  R3 as bh,
  x3 as bi,
  an as bj,
  X5 as bk,
  Y5 as bl,
  fn as bm,
  Gs as bn,
  h3 as bo,
  yk as bp,
  Md as bq,
  cy as br,
  L3 as bs,
  ws as bt,
  ey as bu,
  wd as bv,
  Bn as bw,
  ss as bx,
  Pd as by,
  sy as bz,
  a as c,
  Mn as c$,
  Vs as c0,
  un as c1,
  A3 as c2,
  v4 as c3,
  Vn as c4,
  rn as c5,
  P5 as c6,
  id as c7,
  Mh as c8,
  eh as c9,
  n3 as cA,
  lh as cB,
  In as cC,
  F5 as cD,
  Zs as cE,
  u4 as cF,
  $5 as cG,
  R4 as cH,
  i3 as cI,
  jd as cJ,
  tk as cK,
  Pn as cL,
  ms as cM,
  qs as cN,
  X4 as cO,
  B5 as cP,
  zd as cQ,
  O3 as cR,
  _3 as cS,
  xh as cT,
  uh as cU,
  qh as cV,
  Ud as cW,
  Bd as cX,
  Sy as cY,
  p3 as cZ,
  M5 as c_,
  Rh as ca,
  Kh as cb,
  Eh as cc,
  y4 as cd,
  Gn as ce,
  H5 as cf,
  ay as cg,
  Iy as ch,
  Ys as ci,
  q5 as cj,
  j5 as ck,
  iy as cl,
  b5 as cm,
  Rs as cn,
  A4 as co,
  q4 as cp,
  y3 as cq,
  py as cr,
  z4 as cs,
  qy as ct,
  A5 as cu,
  Cd as cv,
  i4 as cw,
  An as cx,
  hs as cy,
  zn as cz,
  S5 as d,
  V3 as d$,
  _n as d0,
  Od as d1,
  Ed as d2,
  Z3 as d3,
  ds as d4,
  i5 as d5,
  Fs as d6,
  yn as d7,
  _4 as d8,
  sd as d9,
  oy as dA,
  wy as dB,
  ks as dC,
  Hh as dD,
  Sh as dE,
  Lh as dF,
  ah as dG,
  th as dH,
  _y as dI,
  v5 as dJ,
  f5 as dK,
  W5 as dL,
  J5 as dM,
  G5 as dN,
  M3 as dO,
  rd as dP,
  d4 as dQ,
  Hd as dR,
  es as dS,
  Wn as dT,
  g3 as dU,
  u3 as dV,
  Jy as dW,
  Ld as dX,
  ty as dY,
  $s as dZ,
  H3 as d_,
  o4 as da,
  Q4 as db,
  F3 as dc,
  Gd as dd,
  e3 as de,
  $3 as df,
  N4 as dg,
  w4 as dh,
  $4 as di,
  K5 as dj,
  ek as dk,
  pd as dl,
  ld as dm,
  D4 as dn,
  hy as dp,
  X3 as dq,
  gs as dr,
  zs as ds,
  cs as dt,
  Dh as du,
  Fh as dv,
  dh as dw,
  Ih as dx,
  Ts as dy,
  z3 as dz,
  E4 as e,
  Vy as e$,
  Yy as e0,
  nn as e1,
  Ds as e2,
  W3 as e3,
  As as e4,
  b4 as e5,
  Kd as e6,
  y5 as e7,
  m3 as e8,
  pn as e9,
  vy as eA,
  Wy as eB,
  R5 as eC,
  Ms as eD,
  vs as eE,
  P4 as eF,
  Zn as eG,
  en as eH,
  Ny as eI,
  Ty as eJ,
  gy as eK,
  j4 as eL,
  yd as eM,
  h5 as eN,
  Hs as eO,
  fy as eP,
  Xy as eQ,
  my as eR,
  On as eS,
  gh as eT,
  sh as eU,
  Nh as eV,
  Oh as eW,
  bh as eX,
  Vh as eY,
  Ah as eZ,
  T4 as e_,
  Xs as ea,
  g4 as eb,
  by as ec,
  Ps as ed,
  w5 as ee,
  Id as ef,
  S4 as eg,
  Fn as eh,
  ak as ei,
  E3 as ej,
  G3 as ek,
  mn as el,
  Nn as em,
  j3 as en,
  q3 as eo,
  us as ep,
  $d as eq,
  kd as er,
  H4 as es,
  vd as et,
  fs as eu,
  Ks as ev,
  hn as ew,
  J4 as ex,
  xd as ey,
  U5 as ez,
  qd as f,
  hk as f$,
  ph as f0,
  ih as f1,
  Jh as f2,
  Xh as f3,
  Ph as f4,
  Ko as f5,
  on as f6,
  ok as f7,
  ck as f8,
  bs as f9,
  r3 as fA,
  js as fB,
  N3 as fC,
  Yh as fD,
  ed as fE,
  ad as fF,
  cd as fG,
  td as fH,
  Cs as fI,
  ly as fJ,
  nd as fK,
  x4 as fL,
  Zd as fM,
  bd as fN,
  W4 as fO,
  dy as fP,
  ud as fQ,
  Un as fR,
  Rn as fS,
  s3 as fT,
  Is as fU,
  Hy as fV,
  B4 as fW,
  b3 as fX,
  sn as fY,
  a4 as fZ,
  t4 as f_,
  is as fa,
  rs as fb,
  Y4 as fc,
  Dy as fd,
  Ly as fe,
  By as ff,
  ps as fg,
  p4 as fh,
  Q5 as fi,
  F4 as fj,
  md as fk,
  uy as fl,
  $y as fm,
  fd as fn,
  Dd as fo,
  Ns as fp,
  Js as fq,
  Cy as fr,
  C3 as fs,
  Zy as ft,
  bn as fu,
  U3 as fv,
  g5 as fw,
  E5 as fx,
  Cn as fy,
  C5 as fz,
  xs as g,
  Xo as g0,
  Qo as g1,
  Zh as g2,
  Eo as g3,
  hh as g4,
  zh as g5,
  rh as g6,
  Wo as g7,
  yh as g8,
  Go as g9,
  nh as ga,
  jh as gb,
  V5 as h,
  Wd as i,
  Ln as j,
  Z4 as k,
  Ls as l,
  Ky as m,
  o3 as n,
  Jd as o,
  Ey as p,
  xn as q,
  T3 as r,
  ln as s,
  ls as t,
  Td as u,
  h4 as v,
  Es as w,
  Os as x,
  qn as y,
  x5 as z,
};
