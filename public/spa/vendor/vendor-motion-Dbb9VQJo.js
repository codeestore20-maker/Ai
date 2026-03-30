import { g as Gc, r as g, R as Yc, m as me, u as Xc } from './vendor-emotion-DdM-9MtU.js';
var bn = { exports: {} },
  ie = {};
var xi;
function qc() {
  if (xi) return ie;
  xi = 1;
  var t = Symbol.for('react.transitional.element'),
    e = Symbol.for('react.fragment');
  function n(s, i, o) {
    var r = null;
    if ((o !== void 0 && (r = '' + o), i.key !== void 0 && (r = '' + i.key), 'key' in i)) {
      o = {};
      for (var a in i) a !== 'key' && (o[a] = i[a]);
    } else o = i;
    return ((i = o.ref), { $$typeof: t, type: s, key: r, ref: i !== void 0 ? i : null, props: o });
  }
  return ((ie.Fragment = e), (ie.jsx = n), (ie.jsxs = n), ie);
}
var Mi;
function Zc() {
  return (Mi || ((Mi = 1), (bn.exports = qc())), bn.exports);
}
var ot = Zc();
const rv = Gc(ot),
  Yn = (t) => {
    const e = g.useRef(t);
    return ((e.current = t), g.useCallback((...s) => e.current?.(...s), []));
  };
function Rt() {
  return !!(typeof window < 'u' && window.document && window.document.createElement);
}
const bi = Rt() ? g.useLayoutEffect : g.useEffect,
  mr = (t, e) => {
    const n = g.useRef(!0);
    (bi(() => t(n.current), e),
      bi(
        () => (
          (n.current = !1),
          () => {
            n.current = !0;
          }
        ),
        [],
      ));
  },
  av = (t, e) => {
    mr((n) => {
      if (!n) return t();
    }, e);
  },
  Qc = (t) => {
    const e = g.useRef(!1),
      [n, s] = g.useState(t);
    g.useEffect(
      () => (
        (e.current = !1),
        () => {
          e.current = !0;
        }
      ),
      [],
    );
    function i(o, r) {
      (r && e.current) || s(o);
    }
    return [n, i];
  };
function cv(t, e) {
  const [n, s] = g.useState(t),
    i = e !== void 0 ? e : n;
  return (
    mr(
      (o) => {
        o || s(e);
      },
      [e],
    ),
    [i, s]
  );
}
var wn = { exports: {} },
  L = {};
var wi;
function Jc() {
  if (wi) return L;
  wi = 1;
  var t = Symbol.for('react.element'),
    e = Symbol.for('react.portal'),
    n = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    i = Symbol.for('react.profiler'),
    o = Symbol.for('react.provider'),
    r = Symbol.for('react.context'),
    a = Symbol.for('react.server_context'),
    l = Symbol.for('react.forward_ref'),
    u = Symbol.for('react.suspense'),
    c = Symbol.for('react.suspense_list'),
    f = Symbol.for('react.memo'),
    h = Symbol.for('react.lazy'),
    p = Symbol.for('react.offscreen'),
    y;
  y = Symbol.for('react.module.reference');
  function v(d) {
    if (typeof d == 'object' && d !== null) {
      var S = d.$$typeof;
      switch (S) {
        case t:
          switch (((d = d.type), d)) {
            case n:
            case i:
            case s:
            case u:
            case c:
              return d;
            default:
              switch (((d = d && d.$$typeof), d)) {
                case a:
                case r:
                case l:
                case h:
                case f:
                case o:
                  return d;
                default:
                  return S;
              }
          }
        case e:
          return S;
      }
    }
  }
  return (
    (L.ContextConsumer = r),
    (L.ContextProvider = o),
    (L.Element = t),
    (L.ForwardRef = l),
    (L.Fragment = n),
    (L.Lazy = h),
    (L.Memo = f),
    (L.Portal = e),
    (L.Profiler = i),
    (L.StrictMode = s),
    (L.Suspense = u),
    (L.SuspenseList = c),
    (L.isAsyncMode = function () {
      return !1;
    }),
    (L.isConcurrentMode = function () {
      return !1;
    }),
    (L.isContextConsumer = function (d) {
      return v(d) === r;
    }),
    (L.isContextProvider = function (d) {
      return v(d) === o;
    }),
    (L.isElement = function (d) {
      return typeof d == 'object' && d !== null && d.$$typeof === t;
    }),
    (L.isForwardRef = function (d) {
      return v(d) === l;
    }),
    (L.isFragment = function (d) {
      return v(d) === n;
    }),
    (L.isLazy = function (d) {
      return v(d) === h;
    }),
    (L.isMemo = function (d) {
      return v(d) === f;
    }),
    (L.isPortal = function (d) {
      return v(d) === e;
    }),
    (L.isProfiler = function (d) {
      return v(d) === i;
    }),
    (L.isStrictMode = function (d) {
      return v(d) === s;
    }),
    (L.isSuspense = function (d) {
      return v(d) === u;
    }),
    (L.isSuspenseList = function (d) {
      return v(d) === c;
    }),
    (L.isValidElementType = function (d) {
      return (
        typeof d == 'string' ||
        typeof d == 'function' ||
        d === n ||
        d === i ||
        d === s ||
        d === u ||
        d === c ||
        d === p ||
        (typeof d == 'object' &&
          d !== null &&
          (d.$$typeof === h ||
            d.$$typeof === f ||
            d.$$typeof === o ||
            d.$$typeof === r ||
            d.$$typeof === l ||
            d.$$typeof === y ||
            d.getModuleId !== void 0))
      );
    }),
    (L.typeOf = v),
    L
  );
}
var Pi;
function tu() {
  return (Pi || ((Pi = 1), (wn.exports = Jc())), wn.exports);
}
var Pn = tu();
function yr(t, e, n) {
  const s = g.useRef({});
  return (
    (!('value' in s.current) || n(s.current.condition, e)) &&
      ((s.current.value = t()), (s.current.condition = e)),
    s.current.value
  );
}
const eu = Symbol.for('react.element'),
  nu = Symbol.for('react.transitional.element'),
  su = Symbol.for('react.fragment');
function gr(t) {
  return t && typeof t == 'object' && (t.$$typeof === eu || t.$$typeof === nu) && t.type === su;
}
const iu = Number(g.version.split('.')[0]),
  ou = (t, e) => {
    typeof t == 'function' ? t(e) : typeof t == 'object' && t && 'current' in t && (t.current = e);
  },
  vr = (...t) => {
    const e = t.filter(Boolean);
    return e.length <= 1
      ? e[0]
      : (n) => {
          t.forEach((s) => {
            ou(s, n);
          });
        };
  },
  uv = (...t) =>
    yr(
      () => vr(...t),
      t,
      (e, n) => e.length !== n.length || e.every((s, i) => s !== n[i]),
    ),
  ru = (t) => {
    if (!t) return !1;
    if (Os(t) && iu >= 19) return !0;
    const e = Pn.isMemo(t) ? t.type.type : t.type;
    return !(
      (typeof e == 'function' && !e.prototype?.render && e.$$typeof !== Pn.ForwardRef) ||
      (typeof t == 'function' && !t.prototype?.render && t.$$typeof !== Pn.ForwardRef)
    );
  };
function Os(t) {
  return g.isValidElement(t) && !gr(t);
}
const au = (t) => Os(t) && ru(t),
  cu = (t) => {
    if (t && Os(t)) {
      const e = t;
      return e.props.propertyIsEnumerable('ref') ? e.props.ref : e.ref;
    }
    return null;
  };
function Xn(t, e) {
  let n = t;
  for (let s = 0; s < e.length; s += 1) {
    if (n == null) return;
    n = n[e[s]];
  }
  return n;
}
function Sr(t, e, n, s) {
  if (!e.length) return n;
  const [i, ...o] = e;
  let r;
  return (
    !t && typeof i == 'number' ? (r = []) : Array.isArray(t) ? (r = [...t]) : (r = { ...t }),
    s && n === void 0 && o.length === 1 ? delete r[i][o[0]] : (r[i] = Sr(r[i], o, n, s)),
    r
  );
}
function En(t, e, n, s = !1) {
  return e.length && s && n === void 0 && !Xn(t, e.slice(0, -1)) ? t : Sr(t, e, n, s);
}
function uu(t) {
  return typeof t == 'object' && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function Ei(t) {
  return Array.isArray(t) ? [] : {};
}
const lu = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function fu(t, e = {}) {
  const { prepareArray: n } = e,
    s = n || (() => []);
  let i = Ei(t[0]);
  return (
    t.forEach((o) => {
      function r(a, l) {
        const u = new Set(l),
          c = Xn(o, a),
          f = Array.isArray(c);
        if (f || uu(c)) {
          if (!u.has(c)) {
            u.add(c);
            const h = Xn(i, a);
            (f ? (i = En(i, a, s(h, c))) : (!h || typeof h != 'object') && (i = En(i, a, Ei(c))),
              lu(c).forEach((p) => {
                Object.getOwnPropertyDescriptor(c, p).enumerable && r([...a, p], u);
              }));
          }
        } else i = En(i, a, c);
      }
      r([]);
    }),
    i
  );
}
function lv(...t) {
  return fu(t);
}
let qn = {};
const hu = (t) => {};
function du(t, e) {}
function pu(t, e) {}
function mu() {
  qn = {};
}
function Tr(t, e, n) {
  !e && !qn[n] && (t(!1, n), (qn[n] = !0));
}
function ln(t, e) {
  Tr(du, t, e);
}
function yu(t, e) {
  Tr(pu, t, e);
}
ln.preMessage = hu;
ln.resetWarned = mu;
ln.noteOnce = yu;
function fv(t, e) {
  const n = Object.assign({}, t);
  return (
    Array.isArray(e) &&
      e.forEach((s) => {
        delete n[s];
      }),
    n
  );
}
function Ci(t, e = {}) {
  let n = [];
  return (
    Yc.Children.forEach(t, (s) => {
      (s == null && !e.keepEmpty) ||
        (Array.isArray(s)
          ? (n = n.concat(Ci(s)))
          : gr(s) && s.props
            ? (n = n.concat(Ci(s.props.children, e)))
            : n.push(s));
    }),
    n
  );
}
function Ai(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function gu(t) {
  return t && typeof t == 'object' && Ai(t.nativeElement) ? t.nativeElement : Ai(t) ? t : null;
}
function xr(t) {
  var e,
    n,
    s = '';
  if (typeof t == 'string' || typeof t == 'number') s += t;
  else if (typeof t == 'object')
    if (Array.isArray(t)) {
      var i = t.length;
      for (e = 0; e < i; e++) t[e] && (n = xr(t[e])) && (s && (s += ' '), (s += n));
    } else for (n in t) t[n] && (s && (s += ' '), (s += n));
  return s;
}
function vu() {
  for (var t, e, n = 0, s = '', i = arguments.length; n < i; n++)
    (t = arguments[n]) && (e = xr(t)) && (s && (s += ' '), (s += e));
  return s;
}
let Mr = (t) => +setTimeout(t, 16),
  br = (t) => clearTimeout(t);
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((Mr = (t) => window.requestAnimationFrame(t)), (br = (t) => window.cancelAnimationFrame(t)));
let Ri = 0;
const Is = new Map();
function wr(t) {
  Is.delete(t);
}
const Zn = (t, e = 1) => {
  Ri += 1;
  const n = Ri;
  function s(i) {
    if (i === 0) (wr(n), t());
    else {
      const o = Mr(() => {
        s(i - 1);
      });
      Is.set(n, o);
    }
  }
  return (s(e), n);
};
Zn.cancel = (t) => {
  const e = Is.get(t);
  return (wr(t), br(e));
};
function Su(t, e) {
  if (!t) return !1;
  if (t.contains) return t.contains(e);
  let n = e;
  for (; n; ) {
    if (n === t) return !0;
    n = n.parentNode;
  }
  return !1;
}
const Vi = 'data-rc-order',
  Di = 'data-rc-priority',
  Tu = 'rc-util-key',
  Qn = new Map();
function Pr({ mark: t } = {}) {
  return t ? (t.startsWith('data-') ? t : `data-${t}`) : Tu;
}
function fn(t) {
  return t.attachTo ? t.attachTo : document.querySelector('head') || document.body;
}
function xu(t) {
  return t === 'queue' ? 'prependQueue' : t ? 'prepend' : 'append';
}
function Fs(t) {
  return Array.from((Qn.get(t) || t).children).filter((e) => e.tagName === 'STYLE');
}
function Er(t, e = {}) {
  if (!Rt()) return null;
  const { csp: n, prepend: s, priority: i = 0 } = e,
    o = xu(s),
    r = o === 'prependQueue',
    a = document.createElement('style');
  (a.setAttribute(Vi, o),
    r && i && a.setAttribute(Di, `${i}`),
    n?.nonce && (a.nonce = n?.nonce),
    (a.innerHTML = t));
  const l = fn(e),
    { firstChild: u } = l;
  if (s) {
    if (r) {
      const c = (e.styles || Fs(l)).filter((f) => {
        if (!['prepend', 'prependQueue'].includes(f.getAttribute(Vi))) return !1;
        const h = Number(f.getAttribute(Di) || 0);
        return i >= h;
      });
      if (c.length) return (l.insertBefore(a, c[c.length - 1].nextSibling), a);
    }
    l.insertBefore(a, u);
  } else l.appendChild(a);
  return a;
}
function Cr(t, e = {}) {
  let { styles: n } = e;
  return ((n ||= Fs(fn(e))), n.find((s) => s.getAttribute(Pr(e)) === t));
}
function Ar(t, e = {}) {
  const n = Cr(t, e);
  n && fn(e).removeChild(n);
}
function Mu(t, e) {
  const n = Qn.get(t);
  if (!n || !Su(document, n)) {
    const s = Er('', e),
      { parentNode: i } = s;
    (Qn.set(t, i), t.removeChild(s));
  }
}
function ce(t, e, n = {}) {
  const s = fn(n),
    i = Fs(s),
    o = { ...n, styles: i };
  Mu(s, o);
  const r = Cr(e, o);
  if (r)
    return (
      o.csp?.nonce && r.nonce !== o.csp?.nonce && (r.nonce = o.csp?.nonce),
      r.innerHTML !== t && (r.innerHTML = t),
      r
    );
  const a = Er(t, o);
  return (a.setAttribute(Pr(o), e), a);
}
function ki(t, e, n = !1) {
  const s = new Set();
  function i(o, r, a = 1) {
    const l = s.has(o);
    if ((ln(!l, 'Warning: There may be circular references'), l)) return !1;
    if (o === r) return !0;
    if (n && a > 1) return !1;
    s.add(o);
    const u = a + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(r) || o.length !== r.length) return !1;
      for (let c = 0; c < o.length; c++) if (!i(o[c], r[c], u)) return !1;
      return !0;
    }
    if (o && r && typeof o == 'object' && typeof r == 'object') {
      const c = Object.keys(o);
      return c.length !== Object.keys(r).length ? !1 : c.every((f) => i(o[f], r[f], u));
    }
    return !1;
  }
  return i(t, e);
}
const bu = '%';
function Jn(t) {
  return t.join(bu);
}
let Li = 0;
class wu {
  instanceId;
  constructor(e) {
    this.instanceId = e;
  }
  cache = new Map();
  updateTimes = new Map();
  extracted = new Set();
  get(e) {
    return this.opGet(Jn(e));
  }
  opGet(e) {
    return this.cache.get(e) || null;
  }
  update(e, n) {
    return this.opUpdate(Jn(e), n);
  }
  opUpdate(e, n) {
    const s = this.cache.get(e),
      i = n(s);
    i === null
      ? (this.cache.delete(e), this.updateTimes.delete(e))
      : (this.cache.set(e, i), this.updateTimes.set(e, Li), (Li += 1));
  }
}
const Pu = {},
  $s = 'data-token-hash',
  Tt = 'data-css-hash',
  jt = '__cssinjs_instance__';
function Rr() {
  const t = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    const e = document.body.querySelectorAll(`style[${Tt}]`) || [],
      { firstChild: n } = document.head;
    Array.from(e).forEach((i) => {
      ((i[jt] ||= t), i[jt] === t && document.head.insertBefore(i, n));
    });
    const s = {};
    Array.from(document.querySelectorAll(`style[${Tt}]`)).forEach((i) => {
      const o = i.getAttribute(Tt);
      s[o] ? i[jt] === t && i.parentNode?.removeChild(i) : (s[o] = !0);
    });
  }
  return new wu(t);
}
const qt = g.createContext({ hashPriority: 'low', cache: Rr(), defaultCache: !0, autoPrefix: !1 }),
  hv = (t) => {
    const { children: e, ...n } = t,
      s = g.useContext(qt),
      i = yr(
        () => {
          const o = { ...s };
          Object.keys(n).forEach((l) => {
            const u = n[l];
            n[l] !== void 0 && (o[l] = u);
          });
          const { cache: r, transformers: a = [] } = n;
          return (
            (o.cache = o.cache || Rr()),
            (o.defaultCache = !r && s.defaultCache),
            a.includes(Pu) && (o.autoPrefix = !0),
            o
          );
        },
        [s, n],
        (o, r) => !ki(o[0], r[0], !0) || !ki(o[1], r[1], !0),
      );
    return g.createElement(qt.Provider, { value: i }, e);
  };
function Eu(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
class Je {
  static MAX_CACHE_SIZE = 20;
  static MAX_CACHE_OFFSET = 5;
  cache;
  keys;
  cacheCallTimes;
  constructor() {
    ((this.cache = new Map()), (this.keys = []), (this.cacheCallTimes = 0));
  }
  size() {
    return this.keys.length;
  }
  internalGet(e, n = !1) {
    let s = { map: this.cache };
    return (
      e.forEach((i) => {
        s ? (s = s?.map?.get(i)) : (s = void 0);
      }),
      s?.value && n && (s.value[1] = this.cacheCallTimes++),
      s?.value
    );
  }
  get(e) {
    return this.internalGet(e, !0)?.[0];
  }
  has(e) {
    return !!this.internalGet(e);
  }
  set(e, n) {
    if (!this.has(e)) {
      if (this.size() + 1 > Je.MAX_CACHE_SIZE + Je.MAX_CACHE_OFFSET) {
        const [i] = this.keys.reduce(
          (o, r) => {
            const [, a] = o;
            return this.internalGet(r)[1] < a ? [r, this.internalGet(r)[1]] : o;
          },
          [this.keys[0], this.cacheCallTimes],
        );
        this.delete(i);
      }
      this.keys.push(e);
    }
    let s = this.cache;
    e.forEach((i, o) => {
      if (o === e.length - 1) s.set(i, { value: [n, this.cacheCallTimes++] });
      else {
        const r = s.get(i);
        (r ? r.map || (r.map = new Map()) : s.set(i, { map: new Map() }), (s = s.get(i).map));
      }
    });
  }
  deleteByPath(e, n) {
    const s = e.get(n[0]);
    if (n.length === 1) return (s.map ? e.set(n[0], { map: s.map }) : e.delete(n[0]), s.value?.[0]);
    const i = this.deleteByPath(s.map, n.slice(1));
    return ((!s.map || s.map.size === 0) && !s.value && e.delete(n[0]), i);
  }
  delete(e) {
    if (this.has(e))
      return ((this.keys = this.keys.filter((n) => !Eu(n, e))), this.deleteByPath(this.cache, e));
  }
}
let Oi = 0;
class Vr {
  derivatives;
  id;
  constructor(e) {
    ((this.derivatives = Array.isArray(e) ? e : [e]),
      (this.id = Oi),
      e.length === 0 && (e.length > 0, void 0),
      (Oi += 1));
  }
  getDerivativeToken(e) {
    return this.derivatives.reduce((n, s) => s(e, n), void 0);
  }
}
const Cn = new Je();
function dv(t) {
  const e = Array.isArray(t) ? t : [t];
  return (Cn.has(e) || Cn.set(e, new Vr(e)), Cn.get(e));
}
const Cu = new WeakMap(),
  An = {};
function Au(t, e) {
  let n = Cu;
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    (n.has(i) || n.set(i, new WeakMap()), (n = n.get(i)));
  }
  return (n.has(An) || n.set(An, t()), n.get(An));
}
const Ii = new WeakMap();
function ue(t) {
  let e = Ii.get(t) || '';
  return (
    e ||
      (Object.keys(t).forEach((n) => {
        const s = t[n];
        ((e += n),
          s instanceof Vr ? (e += s.id) : s && typeof s == 'object' ? (e += ue(s)) : (e += s));
      }),
      (e = me(e)),
      Ii.set(t, e)),
    e
  );
}
function Ru(t, e) {
  return me(`${e}_${ue(t)}`);
}
const ts = Rt();
function pv(t) {
  return typeof t == 'number' ? `${t}px` : t;
}
function Dr(t) {
  const { hashCls: e, hashPriority: n = 'low' } = t || {};
  if (!e) return '';
  const s = `.${e}`;
  return n === 'low' ? `:where(${s})` : s;
}
const Vu = (t) => t != null;
function js(t, e) {
  const n = typeof e == 'function' ? e() : e;
  return n ? { ...t, csp: { ...t.csp, nonce: n } } : t;
}
const Du = (t, e = '') =>
    `--${e ? `${e}-` : ''}${t}`
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase(),
  ku = (t, e, n) => {
    const { hashCls: s, hashPriority: i = 'low', scope: o } = n || {};
    if (!Object.keys(t).length) return '';
    const r = `${Dr({ hashCls: s, hashPriority: i })}.${e}`,
      a = [o].flat().filter(Boolean);
    return `${a.length ? a.map((u) => `${r}.${u}`).join(', ') : r}{${Object.entries(t)
      .map(([u, c]) => `${u}:${c};`)
      .join('')}}`;
  },
  kr = (t, e, n) => {
    const {
        hashCls: s,
        hashPriority: i = 'low',
        prefix: o,
        unitless: r,
        ignore: a,
        preserve: l,
      } = n || {},
      u = {},
      c = {};
    return (
      Object.entries(t).forEach(([f, h]) => {
        if (l?.[f]) c[f] = h;
        else if ((typeof h == 'string' || typeof h == 'number') && !a?.[f]) {
          const p = Du(f, o);
          ((u[p] = typeof h == 'number' && !r?.[f] ? `${h}px` : String(h)), (c[f] = `var(${p})`));
        }
      }),
      [c, ku(u, e, { scope: n?.scope, hashCls: s, hashPriority: i })]
    );
  },
  Ve = new Map();
function Bs(t, e, n, s, i) {
  const { cache: o } = g.useContext(qt),
    r = [t, ...e],
    a = Jn(r),
    l = (f) => {
      o.opUpdate(a, (h) => {
        const [p = 0, y] = h || [void 0, void 0],
          d = y || n(),
          S = [p, d];
        return f ? f(S) : S;
      });
    };
  g.useMemo(() => {
    l();
  }, [a]);
  const c = o.opGet(a)[1];
  return (
    g.useInsertionEffect(
      () => (
        l(([f, h]) => [f + 1, h]),
        Ve.has(a) ||
          (i?.(c),
          Ve.set(a, !0),
          Promise.resolve().then(() => {
            Ve.delete(a);
          })),
        () => {
          o.opUpdate(a, (f) => {
            const [h = 0, p] = f || [];
            return h - 1 === 0 ? (s?.(p, !1), Ve.delete(a), null) : [h - 1, p];
          });
        }
      ),
      [a],
    ),
    c
  );
}
const Lu = {},
  Ou = 'css',
  Lt = new Map();
function Iu(t) {
  Lt.set(t, (Lt.get(t) || 0) + 1);
}
function Fu(t, e) {
  typeof document < 'u' &&
    document.querySelectorAll(`style[${$s}="${t}"]`).forEach((s) => {
      s[jt] === e && s.parentNode?.removeChild(s);
    });
}
const $u = -1;
function ju(t, e) {
  Lt.set(t, (Lt.get(t) || 0) - 1);
  const n = new Set();
  (Lt.forEach((s, i) => {
    s <= 0 && n.add(i);
  }),
    Lt.size - n.size > $u &&
      n.forEach((s) => {
        (Fu(s, e), Lt.delete(s));
      }));
}
const Bu = (t, e, n, s) => {
    let o = { ...n.getDerivativeToken(t), ...e };
    return (s && (o = s(o)), o);
  },
  Nu = 'token';
function mv(t, e, n) {
  const {
      cache: { instanceId: s },
      container: i,
      hashPriority: o,
    } = g.useContext(qt),
    {
      salt: r = '',
      override: a = Lu,
      formatToken: l,
      getComputedToken: u,
      cssVar: c,
      nonce: f,
    } = n,
    h = Au(() => Object.assign({}, ...e), e),
    p = ue(h),
    y = ue(a),
    v = ue(c);
  return Bs(
    Nu,
    [r, t.id, p, y, v],
    () => {
      const S = u ? u(h, a, t) : Bu(h, a, t, l),
        T = { ...S },
        x = `${r}_${c.prefix}`,
        M = me(x),
        b = `${Ou}-${M}`;
      T._tokenKey = Ru(T, x);
      const [A, w] = kr(S, c.key, {
        prefix: c.prefix,
        ignore: c.ignore,
        unitless: c.unitless,
        preserve: c.preserve,
        hashPriority: o,
        hashCls: c.hashed ? b : void 0,
      });
      return ((A._hashId = M), Iu(c.key), [A, b, T, w, c.key]);
    },
    ([, , , , S]) => {
      ju(S, s);
    },
    ([, , , S, T]) => {
      if (!S) return;
      let x = { mark: Tt, prepend: 'queue', attachTo: i, priority: -999 };
      x = js(x, f);
      const M = ce(S, me(`css-var-${T}`), x);
      ((M[jt] = s), M.setAttribute($s, T));
    },
  );
}
var $ = '-ms-',
  le = '-moz-',
  k = '-webkit-',
  Lr = 'comm',
  Ns = 'rule',
  _s = 'decl',
  _u = '@import',
  Uu = '@namespace',
  Or = '@keyframes',
  Ku = '@layer',
  Ir = Math.abs,
  Us = String.fromCharCode,
  es = Object.assign;
function zu(t, e) {
  return H(t, 0) ^ 45
    ? (((((((e << 2) ^ H(t, 0)) << 2) ^ H(t, 1)) << 2) ^ H(t, 2)) << 2) ^ H(t, 3)
    : 0;
}
function Fr(t) {
  return t.trim();
}
function St(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function D(t, e, n) {
  return t.replace(e, n);
}
function Ne(t, e, n) {
  return t.indexOf(e, n);
}
function H(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ut(t, e, n) {
  return t.slice(e, n);
}
function lt(t) {
  return t.length;
}
function $r(t) {
  return t.length;
}
function re(t, e) {
  return (e.push(t), t);
}
function Wu(t, e) {
  return t.map(e).join('');
}
function Fi(t, e) {
  return t.filter(function (n) {
    return !St(n, e);
  });
}
var hn = 1,
  Zt = 1,
  jr = 0,
  at = 0,
  U = 0,
  te = '';
function dn(t, e, n, s, i, o, r, a) {
  return {
    value: t,
    root: e,
    parent: n,
    type: s,
    props: i,
    children: o,
    line: hn,
    column: Zt,
    length: r,
    return: '',
    siblings: a,
  };
}
function bt(t, e) {
  return es(dn('', null, null, '', null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function zt(t) {
  for (; t.root; ) t = bt(t.root, { children: [t] });
  re(t, t.siblings);
}
function Hu() {
  return U;
}
function Gu() {
  return ((U = at > 0 ? H(te, --at) : 0), Zt--, U === 10 && ((Zt = 1), hn--), U);
}
function ht() {
  return ((U = at < jr ? H(te, at++) : 0), Zt++, U === 10 && ((Zt = 1), hn++), U);
}
function Pt() {
  return H(te, at);
}
function _e() {
  return at;
}
function pn(t, e) {
  return Ut(te, t, e);
}
function ye(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Yu(t) {
  return ((hn = Zt = 1), (jr = lt((te = t))), (at = 0), []);
}
function Xu(t) {
  return ((te = ''), t);
}
function Rn(t) {
  return Fr(pn(at - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function qu(t) {
  for (; (U = Pt()) && U < 33; ) ht();
  return ye(t) > 2 || ye(U) > 3 ? '' : ' ';
}
function Zu(t, e) {
  for (; --e && ht() && !(U < 48 || U > 102 || (U > 57 && U < 65) || (U > 70 && U < 97)); );
  return pn(t, _e() + (e < 6 && Pt() == 32 && ht() == 32));
}
function ns(t) {
  for (; ht(); )
    switch (U) {
      case t:
        return at;
      case 34:
      case 39:
        t !== 34 && t !== 39 && ns(U);
        break;
      case 40:
        t === 41 && ns(t);
        break;
      case 92:
        ht();
        break;
    }
  return at;
}
function Qu(t, e) {
  for (; ht() && t + U !== 57; ) if (t + U === 84 && Pt() === 47) break;
  return '/*' + pn(e, at - 1) + '*' + Us(t === 47 ? t : ht());
}
function Ju(t) {
  for (; !ye(Pt()); ) ht();
  return pn(t, at);
}
function $i(t) {
  return Xu(Ue('', null, null, null, [''], (t = Yu(t)), 0, [0], t));
}
function Ue(t, e, n, s, i, o, r, a, l) {
  for (
    var u = 0,
      c = 0,
      f = r,
      h = 0,
      p = 0,
      y = 0,
      v = 1,
      d = 1,
      S = 1,
      T = 0,
      x = '',
      M = i,
      b = o,
      A = s,
      w = x;
    d;
  )
    switch (((y = T), (T = ht()))) {
      case 40:
        if (y != 108 && H(w, f - 1) == 58) {
          Ne((w += D(Rn(T), '&', '&\f')), '&\f', Ir(u ? a[u - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Rn(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += qu(y);
        break;
      case 92:
        w += Zu(_e() - 1, 7);
        continue;
      case 47:
        switch (Pt()) {
          case 42:
          case 47:
            (re(tl(Qu(ht(), _e()), e, n, l), l),
              (ye(y || 1) == 5 || ye(Pt() || 1) == 5) &&
                lt(w) &&
                Ut(w, -1, void 0) !== ' ' &&
                (w += ' '));
            break;
          default:
            w += '/';
        }
        break;
      case 123 * v:
        a[u++] = lt(w) * S;
      case 125 * v:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            d = 0;
          case 59 + c:
            (S == -1 && (w = D(w, /\f/g, '')),
              p > 0 &&
                (lt(w) - f || (v === 0 && y === 47)) &&
                re(
                  p > 32 ? Bi(w + ';', s, n, f - 1, l) : Bi(D(w, ' ', '') + ';', s, n, f - 2, l),
                  l,
                ));
            break;
          case 59:
            w += ';';
          default:
            if ((re((A = ji(w, e, n, u, c, i, a, x, (M = []), (b = []), f, o)), o), T === 123))
              if (c === 0) Ue(w, e, A, A, M, o, f, a, b);
              else {
                switch (h) {
                  case 99:
                    if (H(w, 3) === 110) break;
                  case 108:
                    if (H(w, 2) === 97) break;
                  default:
                    c = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                c
                  ? Ue(
                      t,
                      A,
                      A,
                      s && re(ji(t, A, A, 0, 0, i, a, x, i, (M = []), f, b), b),
                      i,
                      b,
                      f,
                      a,
                      s ? M : b,
                    )
                  : Ue(w, A, A, A, [''], b, 0, a, b);
              }
        }
        ((u = c = p = 0), (v = S = 1), (x = w = ''), (f = r));
        break;
      case 58:
        ((f = 1 + lt(w)), (p = y));
      default:
        if (v < 1) {
          if (T == 123) --v;
          else if (T == 125 && v++ == 0 && Gu() == 125) continue;
        }
        switch (((w += Us(T)), T * v)) {
          case 38:
            S = c > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            ((a[u++] = (lt(w) - 1) * S), (S = 1));
            break;
          case 64:
            (Pt() === 45 && (w += Rn(ht())), (h = Pt()), (c = f = lt((x = w += Ju(_e())))), T++);
            break;
          case 45:
            y === 45 && lt(w) == 2 && (v = 0);
        }
    }
  return o;
}
function ji(t, e, n, s, i, o, r, a, l, u, c, f) {
  for (var h = i - 1, p = i === 0 ? o : [''], y = $r(p), v = 0, d = 0, S = 0; v < s; ++v)
    for (var T = 0, x = Ut(t, h + 1, (h = Ir((d = r[v])))), M = t; T < y; ++T)
      (M = Fr(d > 0 ? p[T] + ' ' + x : D(x, /&\f/g, p[T]))) && (l[S++] = M);
  return dn(t, e, n, i === 0 ? Ns : a, l, u, c, f);
}
function tl(t, e, n, s) {
  return dn(t, e, n, Lr, Us(Hu()), Ut(t, 2, -2), 0, s);
}
function Bi(t, e, n, s, i) {
  return dn(t, e, n, _s, Ut(t, 0, s), Ut(t, s + 1, -1), s, i);
}
function Br(t, e, n) {
  switch (zu(t, e)) {
    case 5103:
      return k + 'print-' + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return k + t + t;
    case 4855:
      return (
        k +
        t
          .replace('add', 'source-over')
          .replace('substract', 'source-out')
          .replace('intersect', 'source-in')
          .replace('exclude', 'xor') +
        t
      );
    case 4789:
      return le + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + t + le + t + $ + t + t;
    case 5936:
      switch (H(t, e + 11)) {
        case 114:
          return k + t + $ + D(t, /[svh]\w+-[tblr]{2}/, 'tb') + t;
        case 108:
          return k + t + $ + D(t, /[svh]\w+-[tblr]{2}/, 'tb-rl') + t;
        case 45:
          return k + t + $ + D(t, /[svh]\w+-[tblr]{2}/, 'lr') + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + t + $ + t + t;
    case 6165:
      return k + t + $ + 'flex-' + t + t;
    case 5187:
      return k + t + D(t, /(\w+).+(:[^]+)/, k + 'box-$1$2' + $ + 'flex-$1$2') + t;
    case 5443:
      return (
        k +
        t +
        $ +
        'flex-item-' +
        D(t, /flex-|-self/g, '') +
        (St(t, /flex-|baseline/) ? '' : $ + 'grid-row-' + D(t, /flex-|-self/g, '')) +
        t
      );
    case 4675:
      return k + t + $ + 'flex-line-pack' + D(t, /align-content|flex-|-self/g, '') + t;
    case 5548:
      return k + t + $ + D(t, 'shrink', 'negative') + t;
    case 5292:
      return k + t + $ + D(t, 'basis', 'preferred-size') + t;
    case 6060:
      return k + 'box-' + D(t, '-grow', '') + k + t + $ + D(t, 'grow', 'positive') + t;
    case 4554:
      return k + D(t, /([^-])(transform)/g, '$1' + k + '$2') + t;
    case 6187:
      return D(D(D(t, /(zoom-|grab)/, k + '$1'), /(image-set)/, k + '$1'), t, '') + t;
    case 5495:
    case 3959:
      return D(t, /(image-set\([^]*)/, k + '$1$`$1');
    case 4968:
      return (
        D(
          D(t, /(.+:)(flex-)?(.*)/, k + 'box-pack:$3' + $ + 'flex-pack:$3'),
          /space-between/,
          'justify',
        ) +
        k +
        t +
        t
      );
    case 4200:
      if (!St(t, /flex-|baseline/)) return $ + 'grid-column-align' + Ut(t, e) + t;
      break;
    case 2592:
    case 3360:
      return $ + D(t, 'template-', '') + t;
    case 4384:
    case 3616:
      return n &&
        n.some(function (s, i) {
          return ((e = i), St(s.props, /grid-\w+-end/));
        })
        ? ~Ne(t + (n = n[e].value), 'span', 0)
          ? t
          : $ +
            D(t, '-start', '') +
            t +
            $ +
            'grid-row-span:' +
            (~Ne(n, 'span', 0) ? St(n, /\d+/) : +St(n, /\d+/) - +St(t, /\d+/)) +
            ';'
        : $ + D(t, '-start', '') + t;
    case 4896:
    case 4128:
      return n &&
        n.some(function (s) {
          return St(s.props, /grid-\w+-start/);
        })
        ? t
        : $ + D(D(t, '-end', '-span'), 'span ', '') + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(t, /(.+)-inline(.+)/, k + '$1$2') + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (lt(t) - 1 - e > 6)
        switch (H(t, e + 1)) {
          case 109:
            if (H(t, e + 4) !== 45) break;
          case 102:
            return (
              D(
                t,
                /(.+:)(.+)-([^]+)/,
                '$1' + k + '$2-$3$1' + le + (H(t, e + 3) == 108 ? '$3' : '$2-$3'),
              ) + t
            );
          case 115:
            return ~Ne(t, 'stretch', 0) ? Br(D(t, 'stretch', 'fill-available'), e, n) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return D(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (s, i, o, r, a, l, u) {
        return $ + i + ':' + o + u + (r ? $ + i + '-span:' + (a ? l : +l - +o) + u : '') + t;
      });
    case 4949:
      if (H(t, e + 6) === 121) return D(t, ':', ':' + k) + t;
      break;
    case 6444:
      switch (H(t, H(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            D(
              t,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                k +
                (H(t, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                k +
                '$2$3$1' +
                $ +
                '$2box$3',
            ) + t
          );
        case 100:
          return D(t, ':', ':' + $) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return D(t, 'scroll-', 'scroll-snap-') + t;
  }
  return t;
}
function ge(t, e) {
  for (var n = '', s = 0; s < t.length; s++) n += e(t[s], s, t, e) || '';
  return n;
}
function Ni(t, e, n, s) {
  switch (t.type) {
    case Ku:
      if (t.children.length) break;
    case _u:
    case Uu:
    case _s:
      return (t.return = t.return || t.value);
    case Lr:
      return '';
    case Or:
      return (t.return = t.value + '{' + ge(t.children, s) + '}');
    case Ns:
      if (!lt((t.value = t.props.join(',')))) return '';
  }
  return lt((n = ge(t.children, s))) ? (t.return = t.value + '{' + n + '}') : '';
}
function el(t) {
  var e = $r(t);
  return function (n, s, i, o) {
    for (var r = '', a = 0; a < e; a++) r += t[a](n, s, i, o) || '';
    return r;
  };
}
function nl(t, e, n, s) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case _s:
        t.return = Br(t.value, t.length, n);
        return;
      case Or:
        return ge([bt(t, { value: D(t.value, '@', '@' + k) })], s);
      case Ns:
        if (t.length)
          return Wu((n = t.props), function (i) {
            switch (St(i, (s = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                (zt(bt(t, { props: [D(i, /:(read-\w+)/, ':' + le + '$1')] })),
                  zt(bt(t, { props: [i] })),
                  es(t, { props: Fi(n, s) }));
                break;
              case '::placeholder':
                (zt(bt(t, { props: [D(i, /:(plac\w+)/, ':' + k + 'input-$1')] })),
                  zt(bt(t, { props: [D(i, /:(plac\w+)/, ':' + le + '$1')] })),
                  zt(bt(t, { props: [D(i, /:(plac\w+)/, $ + 'input-$1')] })),
                  zt(bt(t, { props: [i] })),
                  es(t, { props: Fi(n, s) }));
                break;
            }
            return '';
          });
    }
}
const _i = 'data-ant-cssinjs-cache-path',
  Nr = '_FILE_STYLE__';
let Bt,
  _r = !0;
function sl() {
  if (!Bt && ((Bt = {}), Rt())) {
    const t = document.createElement('div');
    ((t.className = _i),
      (t.style.position = 'fixed'),
      (t.style.visibility = 'hidden'),
      (t.style.top = '-9999px'),
      document.body.appendChild(t));
    let e = getComputedStyle(t).content || '';
    ((e = e.replace(/^"/, '').replace(/"$/, '')),
      e.split(';').forEach((s) => {
        const [i, o] = s.split(':');
        Bt[i] = o;
      }));
    const n = document.querySelector(`style[${_i}]`);
    (n && ((_r = !1), n.parentNode?.removeChild(n)), document.body.removeChild(t));
  }
}
function il(t) {
  return (sl(), !!Bt[t]);
}
function ol(t) {
  const e = Bt[t];
  let n = null;
  if (e && Rt())
    if (_r) n = Nr;
    else {
      const s = document.querySelector(`style[${Tt}="${Bt[t]}"]`);
      s ? (n = s.innerHTML) : delete Bt[t];
    }
  return [n, e];
}
const rl = '_skip_check_',
  Ur = '_multi_value_';
function Vn(t, e) {
  return (e ? ge($i(t), el([nl, Ni])) : ge($i(t), Ni)).replace(/\{%%%\:[^;];}/g, ';');
}
function al(t) {
  return typeof t == 'object' && t && (rl in t || Ur in t);
}
function Ui(t, e, n = 'high') {
  if (!e) return t;
  const s = Dr({ hashCls: e, hashPriority: n });
  return t
    .split(',')
    .map((o) => {
      const r = o.trim().split(/\s+/);
      let a = r[0] || '';
      const l = a.match(/^\w+/)?.[0] || '';
      return ((a = `${l}${s}${a.slice(l.length)}`), [a, ...r.slice(1)].join(' '));
    })
    .join(',');
}
const ss = (
  t,
  e = {},
  { root: n, injectHash: s, parentSelectors: i } = { root: !0, parentSelectors: [] },
) => {
  const {
    hashId: o,
    layer: r,
    path: a,
    hashPriority: l,
    transformers: u = [],
    linters: c = [],
  } = e;
  let f = '',
    h = {};
  function p(d) {
    const S = d.getName(o);
    if (!h[S]) {
      const [T] = ss(d.style, e, { root: !1, parentSelectors: i });
      h[S] = `@keyframes ${d.getName(o)}${T}`;
    }
  }
  function y(d, S = []) {
    return (
      d.forEach((T) => {
        Array.isArray(T) ? y(T, S) : T && S.push(T);
      }),
      S
    );
  }
  return (
    y(Array.isArray(t) ? t : [t]).forEach((d) => {
      const S = typeof d == 'string' && !n ? {} : d;
      if (typeof S == 'string')
        f += `${S}
`;
      else if (S._keyframe) p(S);
      else {
        const T = u.reduce((x, M) => M?.visit?.(x) || x, S);
        Object.keys(T).forEach((x) => {
          const M = T[x];
          if (typeof M == 'object' && M && (x !== 'animationName' || !M._keyframe) && !al(M)) {
            let b = !1,
              A = x.trim(),
              w = !1;
            (n || s) && o
              ? A.startsWith('@')
                ? (b = !0)
                : A === '&'
                  ? (A = Ui('', o, l))
                  : (A = Ui(x, o, l))
              : n && !o && (A === '&' || A === '') && ((A = ''), (w = !0));
            const [E, V] = ss(M, e, { root: w, injectHash: b, parentSelectors: [...i, A] });
            ((h = { ...h, ...V }), (f += `${A}${E}`));
          } else {
            let b = function (w, E) {
              const V = w.replace(/[A-Z]/g, (R) => `-${R.toLowerCase()}`);
              let P = E;
              (!Xc[w] && typeof P == 'number' && P !== 0 && (P = `${P}px`),
                w === 'animationName' && E?._keyframe && (p(E), (P = E.getName(o))),
                (f += `${V}:${P};`));
            };
            const A = M?.value ?? M;
            typeof M == 'object' && M?.[Ur] && Array.isArray(A)
              ? A.forEach((w) => {
                  b(x, w);
                })
              : Vu(A) && b(x, A);
          }
        });
      }
    }),
    n
      ? r &&
        (f && (f = `@layer ${r.name} {${f}}`),
        r.dependencies &&
          (h[`@layer ${r.name}`] = r.dependencies.map((d) => `@layer ${d}, ${r.name};`).join(`
`)))
      : (f = `{${f}}`),
    [f, h]
  );
};
function Kr(t, e) {
  return me(`${t.join('%')}${e}`);
}
const cl = 'style';
function yv(t, e) {
  const { path: n, hashId: s, layer: i, nonce: o, clientOnly: r, order: a = 0 } = t,
    {
      mock: l,
      hashPriority: u,
      container: c,
      transformers: f,
      linters: h,
      cache: p,
      layer: y,
      autoPrefix: v,
    } = g.useContext(qt),
    d = [s || ''];
  (y && d.push('layer'), d.push(...n));
  let S = ts;
  Bs(
    cl,
    d,
    () => {
      const T = d.join('|');
      if (il(T)) {
        const [E, V] = ol(T);
        if (E) return [E, V, {}, r, a];
      }
      const x = e(),
        [M, b] = ss(x, {
          hashId: s,
          hashPriority: u,
          layer: y ? i : void 0,
          path: n.join('-'),
          transformers: f,
          linters: h,
        }),
        A = Vn(M, v || !1),
        w = Kr(d, A);
      return [A, w, b, r, a];
    },
    (T, x) => {
      const [, M] = T;
      x && ts && Ar(M, { mark: Tt, attachTo: c });
    },
    (T) => {
      const [x, M, b, , A] = T;
      if (S && x !== Nr) {
        let w = { mark: Tt, prepend: y ? !1 : 'queue', attachTo: c, priority: A };
        w = js(w, o);
        const E = [],
          V = [];
        (Object.keys(b).forEach((R) => {
          R.startsWith('@layer') ? E.push(R) : V.push(R);
        }),
          E.forEach((R) => {
            ce(Vn(b[R], v || !1), `_layer-${R}`, { ...w, prepend: !0 });
          }));
        const P = ce(x, M, w);
        ((P[jt] = p.instanceId),
          V.forEach((R) => {
            ce(Vn(b[R], v || !1), `_effect-${R}`, w);
          }));
      }
    },
  );
}
const ul = 'cssVar',
  gv = (t, e) => {
    const {
        key: n,
        prefix: s,
        unitless: i,
        ignore: o,
        token: r,
        hashId: a,
        scope: l,
        nonce: u,
      } = t,
      {
        cache: { instanceId: c },
        container: f,
        hashPriority: h,
      } = g.useContext(qt),
      { _tokenKey: p } = r,
      y = Array.isArray(l) ? l.join('@@') : l,
      v = [...t.path, n, y, p];
    return Bs(
      ul,
      v,
      () => {
        const S = e(),
          [T, x] = kr(S, n, {
            prefix: s,
            unitless: i,
            ignore: o,
            scope: l,
            hashPriority: h,
            hashCls: a,
          }),
          M = Kr(v, x);
        return [T, x, M, n];
      },
      ([, , S]) => {
        ts && Ar(S, { mark: Tt, attachTo: f });
      },
      ([, S, T]) => {
        if (!S) return;
        let x = { mark: Tt, prepend: 'queue', attachTo: f, priority: -999 };
        x = js(x, u);
        const M = ce(S, T, x);
        ((M[jt] = c), M.setAttribute($s, n));
      },
    );
  };
class O {
  name;
  style;
  constructor(e, n) {
    ((this.name = e), (this.style = n));
  }
  getName(e = '') {
    return e ? `${e}-${this.name}` : this.name;
  }
  _keyframe = !0;
}
function Wt(t) {
  return ((t.notSplit = !0), t);
}
(Wt(['borderTop', 'borderBottom']),
  Wt(['borderTop']),
  Wt(['borderBottom']),
  Wt(['borderLeft', 'borderRight']),
  Wt(['borderLeft']),
  Wt(['borderRight']));
const zr = g.createContext({}),
  vv = (t) => {
    const { children: e, ...n } = t,
      s = g.useMemo(() => ({ motion: n.motion }), [n.motion]);
    return g.createElement(zr.Provider, { value: s }, e);
  };
function ll(t) {
  const [, e] = g.useReducer((o) => o + 1, 0),
    n = g.useRef(t),
    s = Yn(() => n.current),
    i = Yn((o) => {
      ((n.current = typeof o == 'function' ? o(n.current) : o), e());
    });
  return [s, i];
}
const pt = 'none',
  De = 'appear',
  ke = 'enter',
  Le = 'leave',
  Ki = 'none',
  ft = 'prepare',
  Ot = 'start',
  It = 'active',
  Ks = 'end',
  Wr = 'prepared';
function zi(t, e) {
  const n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n[`Webkit${t}`] = `webkit${e}`),
    (n[`Moz${t}`] = `moz${e}`),
    (n[`ms${t}`] = `MS${e}`),
    (n[`O${t}`] = `o${e.toLowerCase()}`),
    n
  );
}
function fl(t, e) {
  const n = {
    animationend: zi('Animation', 'AnimationEnd'),
    transitionend: zi('Transition', 'TransitionEnd'),
  };
  return (
    t &&
      ('AnimationEvent' in e || delete n.animationend.animation,
      'TransitionEvent' in e || delete n.transitionend.transition),
    n
  );
}
const hl = fl(Rt(), typeof window < 'u' ? window : {});
let Hr = {};
Rt() && ({ style: Hr } = document.createElement('div'));
const Oe = {};
function Gr(t) {
  if (Oe[t]) return Oe[t];
  const e = hl[t];
  if (e) {
    const n = Object.keys(e),
      s = n.length;
    for (let i = 0; i < s; i += 1) {
      const o = n[i];
      if (Object.prototype.hasOwnProperty.call(e, o) && o in Hr) return ((Oe[t] = e[o]), Oe[t]);
    }
  }
  return '';
}
const Yr = Gr('animationend'),
  Xr = Gr('transitionend'),
  dl = !!(Yr && Xr),
  Wi = Yr || 'animationend',
  Hi = Xr || 'transitionend';
function Gi(t, e) {
  if (!t) return null;
  if (typeof t == 'object') {
    const n = e.replace(/-\w/g, (s) => s[1].toUpperCase());
    return t[n];
  }
  return `${t}-${e}`;
}
const pl = (t) => {
    const e = g.useRef();
    function n(i) {
      i && (i.removeEventListener(Hi, t), i.removeEventListener(Wi, t));
    }
    function s(i) {
      (e.current && e.current !== i && n(e.current),
        i &&
          i !== e.current &&
          (i.addEventListener(Hi, t), i.addEventListener(Wi, t), (e.current = i)));
    }
    return (
      g.useEffect(
        () => () => {
          (n(e.current), (e.current = null));
        },
        [],
      ),
      [s, n]
    );
  },
  qr = Rt() ? g.useLayoutEffect : g.useEffect,
  ml = () => {
    const t = g.useRef(null);
    function e() {
      Zn.cancel(t.current);
    }
    function n(s, i = 2) {
      e();
      const o = Zn(() => {
        i <= 1 ? s({ isCanceled: () => o !== t.current }) : n(s, i - 1);
      });
      t.current = o;
    }
    return (
      g.useEffect(
        () => () => {
          e();
        },
        [],
      ),
      [n, e]
    );
  },
  yl = [ft, Ot, It, Ks],
  gl = [ft, Wr],
  Zr = !1,
  vl = !0;
function Qr(t) {
  return t === It || t === Ks;
}
const Sl = (t, e, n) => {
  const [s, i] = Qc(Ki),
    [o, r] = ml();
  function a() {
    i(ft, !0);
  }
  const l = e ? gl : yl;
  return (
    qr(() => {
      if (s !== Ki && s !== Ks) {
        const u = l.indexOf(s),
          c = l[u + 1],
          f = n(s);
        f === Zr
          ? i(c, !0)
          : c &&
            o((h) => {
              function p() {
                h.isCanceled() || i(c, !0);
              }
              f === !0 ? p() : Promise.resolve(f).then(p);
            });
      }
    }, [t, s]),
    g.useEffect(
      () => () => {
        r();
      },
      [],
    ),
    [a, s]
  );
};
function Tl(
  t,
  e,
  n,
  {
    motionEnter: s = !0,
    motionAppear: i = !0,
    motionLeave: o = !0,
    motionDeadline: r,
    motionLeaveImmediately: a,
    onAppearPrepare: l,
    onEnterPrepare: u,
    onLeavePrepare: c,
    onAppearStart: f,
    onEnterStart: h,
    onLeaveStart: p,
    onAppearActive: y,
    onEnterActive: v,
    onLeaveActive: d,
    onAppearEnd: S,
    onEnterEnd: T,
    onLeaveEnd: x,
    onVisibleChanged: M,
  },
) {
  const [b, A] = g.useState(),
    [w, E] = ll(pt),
    [V, P] = g.useState([null, null]),
    R = w(),
    I = g.useRef(!1),
    K = g.useRef(null);
  function G() {
    return n();
  }
  const nt = g.useRef(!1);
  function tt() {
    (E(pt), P([null, null]));
  }
  const Tn = Yn((N) => {
      const J = w();
      if (J === pt) return;
      const Kt = G();
      if (N && !N.deadline && N.target !== Kt) return;
      const Ae = nt.current;
      let Re;
      (J === De && Ae
        ? (Re = S?.(Kt, N))
        : J === ke && Ae
          ? (Re = T?.(Kt, N))
          : J === Le && Ae && (Re = x?.(Kt, N)),
        Ae && Re !== !1 && tt());
    }),
    [z] = pl(Tn),
    q = (N) => {
      switch (N) {
        case De:
          return { [ft]: l, [Ot]: f, [It]: y };
        case ke:
          return { [ft]: u, [Ot]: h, [It]: v };
        case Le:
          return { [ft]: c, [Ot]: p, [It]: d };
        default:
          return {};
      }
    },
    st = g.useMemo(() => q(R), [R]),
    [xt, Mt] = Sl(R, !t, (N) => {
      if (N === ft) {
        const J = st[ft];
        return J ? J(G()) : Zr;
      }
      return (
        N in st && P([st[N]?.(G(), null) || null, N]),
        N === It &&
          R !== pt &&
          (z(G()),
          r > 0 &&
            (clearTimeout(K.current),
            (K.current = setTimeout(() => {
              Tn({ deadline: !0 });
            }, r)))),
        N === Wr && tt(),
        vl
      );
    }),
    Wc = Qr(Mt);
  nt.current = Wc;
  const Ti = g.useRef(null);
  (qr(() => {
    if (I.current && Ti.current === e) return;
    A(e);
    const N = I.current;
    I.current = !0;
    let J;
    (!N && e && i && (J = De),
      N && e && s && (J = ke),
      ((N && !e && o) || (!N && a && !e && o)) && (J = Le));
    const Kt = q(J);
    (J && (t || Kt[ft]) ? (E(J), xt()) : E(pt), (Ti.current = e));
  }, [e]),
    g.useEffect(() => {
      ((R === De && !i) || (R === ke && !s) || (R === Le && !o)) && E(pt);
    }, [i, s, o]),
    g.useEffect(
      () => () => {
        ((I.current = !1), clearTimeout(K.current));
      },
      [],
    ));
  const xn = g.useRef(!1);
  g.useEffect(() => {
    (b && (xn.current = !0),
      b !== void 0 && R === pt && ((xn.current || b) && M?.(b), (xn.current = !0)));
  }, [b, R]);
  let Mn = V[0];
  st[ft] && Mt === Ot && (Mn = { transition: 'none', ...Mn });
  const Hc = V[1];
  return [
    w,
    Mt,
    Mn,
    b ?? e,
    !I.current && R === pt && t && i ? 'NONE' : Mt === Ot || Mt === It ? Hc === Mt : !0,
  ];
}
function Jr(t) {
  return t?.length < 2;
}
function xl(t) {
  let e = t;
  typeof t == 'object' && ({ transitionSupport: e } = t);
  function n(i, o) {
    return !!(i.motionName && e && o !== !1);
  }
  const s = g.forwardRef((i, o) => {
    const {
        visible: r = !0,
        removeOnLeave: a = !0,
        forceRender: l,
        children: u,
        motionName: c,
        leavedClassName: f,
        eventProps: h,
      } = i,
      { motion: p } = g.useContext(zr),
      y = n(i, p),
      v = g.useRef();
    function d() {
      return gu(v.current);
    }
    const [S, T, x, M, b] = Tl(y, r, d, i),
      A = S(),
      w = g.useRef(M);
    M && (w.current = !0);
    const E = g.useMemo(() => {
      const R = {};
      return (
        Object.defineProperties(R, {
          nativeElement: { enumerable: !0, get: d },
          inMotion: { enumerable: !0, get: () => () => S() !== pt },
          enableMotion: { enumerable: !0, get: () => () => y },
        }),
        R
      );
    }, []);
    g.useImperativeHandle(o, () => E, []);
    const V = g.useRef(0);
    b && (V.current += 1);
    const P = g.useMemo(() => {
      if (b === 'NONE') return null;
      let R;
      const I = { ...h, visible: r };
      if (!u) R = null;
      else if (A === pt)
        M
          ? (R = u({ ...I }, v))
          : !a && w.current && f
            ? (R = u({ ...I, className: f }, v))
            : l || (!a && !f)
              ? (R = u({ ...I, style: { display: 'none' } }, v))
              : (R = null);
      else {
        let K;
        T === ft ? (K = 'prepare') : Qr(T) ? (K = 'active') : T === Ot && (K = 'start');
        const G = Gi(c, `${A}-${K}`);
        R = u(
          { ...I, className: vu(Gi(c, A), { [G]: G && K, [c]: typeof c == 'string' }), style: x },
          v,
        );
      }
      return R;
    }, [V.current]);
    if (Jr(u) && au(P)) {
      const R = cu(P);
      if (R !== v) return g.cloneElement(P, { ref: vr(R, v) });
    }
    return P;
  });
  return ((s.displayName = 'CSSMotion'), s);
}
const Ml = xl(dl),
  is = 'add',
  os = 'keep',
  rs = 'remove',
  Dn = 'removed';
function bl(t) {
  let e;
  return (
    t && typeof t == 'object' && 'key' in t ? (e = t) : (e = { key: t }),
    { ...e, key: String(e.key) }
  );
}
function as(t = []) {
  return t.map(bl);
}
function wl(t = [], e = []) {
  let n = [],
    s = 0;
  const i = e.length,
    o = as(t),
    r = as(e);
  (o.forEach((u) => {
    let c = !1;
    for (let f = s; f < i; f += 1) {
      const h = r[f];
      if (h.key === u.key) {
        (s < f && ((n = n.concat(r.slice(s, f).map((p) => ({ ...p, status: is })))), (s = f)),
          n.push({ ...h, status: os }),
          (s += 1),
          (c = !0));
        break;
      }
    }
    c || n.push({ ...u, status: rs });
  }),
    s < i && (n = n.concat(r.slice(s).map((u) => ({ ...u, status: is })))));
  const a = {};
  return (
    n.forEach(({ key: u }) => {
      a[u] = (a[u] || 0) + 1;
    }),
    Object.keys(a)
      .filter((u) => a[u] > 1)
      .forEach((u) => {
        ((n = n.filter(({ key: c, status: f }) => c !== u || f !== rs)),
          n.forEach((c) => {
            c.key === u && (c.status = os);
          }));
      }),
    n
  );
}
function cs() {
  return (
    (cs = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
    cs.apply(this, arguments)
  );
}
const Pl = [
  'eventProps',
  'visible',
  'children',
  'motionName',
  'motionAppear',
  'motionEnter',
  'motionLeave',
  'motionLeaveImmediately',
  'motionDeadline',
  'removeOnLeave',
  'leavedClassName',
  'onAppearPrepare',
  'onAppearStart',
  'onAppearActive',
  'onAppearEnd',
  'onEnterStart',
  'onEnterActive',
  'onEnterEnd',
  'onLeaveStart',
  'onLeaveActive',
  'onLeaveEnd',
];
function El(t, e = Ml) {
  class n extends g.Component {
    static defaultProps = { component: 'div' };
    state = { keyEntities: [] };
    static getDerivedStateFromProps({ keys: i }, { keyEntities: o }) {
      const r = as(i);
      return {
        keyEntities: wl(o, r).filter((l) => {
          const u = o.find(({ key: c }) => l.key === c);
          return !(u && u.status === Dn && l.status === rs);
        }),
      };
    }
    removeKey = (i) => {
      this.setState(
        (o) => ({
          keyEntities: o.keyEntities.map((a) => (a.key !== i ? a : { ...a, status: Dn })),
        }),
        () => {
          const { keyEntities: o } = this.state;
          o.filter(({ status: a }) => a !== Dn).length === 0 &&
            this.props.onAllRemoved &&
            this.props.onAllRemoved();
        },
      );
    };
    render() {
      const { keyEntities: i } = this.state,
        { component: o, children: r, onVisibleChanged: a, onAllRemoved: l, ...u } = this.props,
        c = o || g.Fragment,
        f = {};
      return (
        Pl.forEach((h) => {
          ((f[h] = u[h]), delete u[h]);
        }),
        delete u.keys,
        g.createElement(
          c,
          u,
          i.map(({ status: h, ...p }, y) => {
            const v = h === is || h === os;
            return g.createElement(
              e,
              cs({}, f, {
                key: p.key,
                visible: v,
                eventProps: p,
                onVisibleChanged: (d) => {
                  (a?.(d, { key: p.key }), d || this.removeKey(p.key));
                },
              }),
              Jr(r) ? (d) => r({ ...d, index: y }) : (d, S) => r({ ...d, index: y }, S),
            );
          }),
        )
      );
    }
  }
  return n;
}
const Sv = El(),
  Tv = (t) => {
    const { componentCls: e, antCls: n, motionDurationMid: s, motionEaseInOut: i } = t;
    return {
      [e]: {
        [`${n}-motion-collapse-legacy`]: {
          'overflow': 'hidden',
          '&-active': {
            transition: `${['height', 'opacity'].map((o) => `${o} ${s} ${i}`).join(', ')} !important`,
          },
        },
        [`${n}-motion-collapse`]: {
          overflow: 'hidden',
          transition: `${['height', 'opacity'].map((o) => `${o} ${s} ${i}`).join(', ')} !important`,
        },
      },
    };
  },
  Yi = (t) => ({ animationDuration: t, animationFillMode: 'both' }),
  mn = (t, e, n, s, i = !1) => {
    const o = i ? '&' : '';
    return {
      [`
      ${o}${t}-enter,
      ${o}${t}-appear
    `]: { ...Yi(s), animationPlayState: 'paused' },
      [`${o}${t}-leave`]: { ...Yi(s), animationPlayState: 'paused' },
      [`
      ${o}${t}-enter${t}-enter-active,
      ${o}${t}-appear${t}-appear-active
    `]: { animationName: e, animationPlayState: 'running' },
      [`${o}${t}-leave${t}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  Cl = new O('antFadeIn', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  Al = new O('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
  xv = (t, e = !1) => {
    const { antCls: n } = t,
      s = `${n}-fade`,
      i = e ? '&' : '';
    return [
      mn(s, Cl, Al, t.motionDurationMid, e),
      {
        [`
        ${i}${s}-enter,
        ${i}${s}-appear
      `]: { opacity: 0, animationTimingFunction: 'linear' },
        [`${i}${s}-leave`]: { animationTimingFunction: 'linear' },
      },
    ];
  },
  Rl = new O('antMoveDownIn', {
    '0%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
  }),
  Vl = new O('antMoveDownOut', {
    '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    '100%': { transform: 'translate3d(0, 100%, 0)', transformOrigin: '0 0', opacity: 0 },
  }),
  Dl = new O('antMoveLeftIn', {
    '0%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
  }),
  kl = new O('antMoveLeftOut', {
    '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    '100%': { transform: 'translate3d(-100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
  }),
  Ll = new O('antMoveRightIn', {
    '0%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
  }),
  Ol = new O('antMoveRightOut', {
    '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    '100%': { transform: 'translate3d(100%, 0, 0)', transformOrigin: '0 0', opacity: 0 },
  }),
  Il = new O('antMoveUpIn', {
    '0%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
    '100%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
  }),
  Fl = new O('antMoveUpOut', {
    '0%': { transform: 'translate3d(0, 0, 0)', transformOrigin: '0 0', opacity: 1 },
    '100%': { transform: 'translate3d(0, -100%, 0)', transformOrigin: '0 0', opacity: 0 },
  }),
  $l = {
    'move-up': { inKeyframes: Il, outKeyframes: Fl },
    'move-down': { inKeyframes: Rl, outKeyframes: Vl },
    'move-left': { inKeyframes: Dl, outKeyframes: kl },
    'move-right': { inKeyframes: Ll, outKeyframes: Ol },
  },
  Mv = (t, e) => {
    const { antCls: n } = t,
      s = `${n}-${e}`,
      { inKeyframes: i, outKeyframes: o } = $l[e];
    return [
      mn(s, i, o, t.motionDurationMid),
      {
        [`
        ${s}-enter,
        ${s}-appear
      `]: { opacity: 0, animationTimingFunction: t.motionEaseOutCirc },
        [`${s}-leave`]: { animationTimingFunction: t.motionEaseInOutCirc },
      },
    ];
  },
  jl = new O('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  Bl = new O('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  Nl = new O('antSlideDownIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
  }),
  _l = new O('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
  }),
  Ul = new O('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  Kl = new O('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  zl = new O('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  Wl = new O('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
  }),
  Hl = {
    'slide-up': { inKeyframes: jl, outKeyframes: Bl },
    'slide-down': { inKeyframes: Nl, outKeyframes: _l },
    'slide-left': { inKeyframes: Ul, outKeyframes: Kl },
    'slide-right': { inKeyframes: zl, outKeyframes: Wl },
  },
  bv = (t, e) => {
    const { antCls: n } = t,
      s = `${n}-${e}`,
      { inKeyframes: i, outKeyframes: o } = Hl[e];
    return [
      mn(s, i, o, t.motionDurationMid),
      {
        [`
      ${s}-enter,
      ${s}-appear
    `]: {
          'transform': 'scale(0)',
          'transformOrigin': '0% 0%',
          'opacity': 0,
          'animationTimingFunction': t.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${s}-leave`]: { animationTimingFunction: t.motionEaseInQuint },
      },
    ];
  },
  wv = () => ({
    '@media (prefers-reduced-motion: reduce)': { transition: 'none', animation: 'none' },
  }),
  Gl = new O('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  Yl = new O('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  Xi = new O('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  qi = new O('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  Xl = new O('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  ql = new O('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  Zl = new O('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  Ql = new O('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  Jl = new O('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  tf = new O('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
  }),
  ef = new O('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  nf = new O('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
  }),
  sf = {
    'zoom': { inKeyframes: Gl, outKeyframes: Yl },
    'zoom-big': { inKeyframes: Xi, outKeyframes: qi },
    'zoom-big-fast': { inKeyframes: Xi, outKeyframes: qi },
    'zoom-left': { inKeyframes: Zl, outKeyframes: Ql },
    'zoom-right': { inKeyframes: Jl, outKeyframes: tf },
    'zoom-up': { inKeyframes: Xl, outKeyframes: ql },
    'zoom-down': { inKeyframes: ef, outKeyframes: nf },
  },
  Pv = (t, e) => {
    const { antCls: n } = t,
      s = `${n}-${e}`,
      { inKeyframes: i, outKeyframes: o } = sf[e];
    return [
      mn(s, i, o, e === 'zoom-big-fast' ? t.motionDurationFast : t.motionDurationMid),
      {
        [`
        ${s}-enter,
        ${s}-appear
      `]: {
          'transform': 'scale(0)',
          'opacity': 0,
          'animationTimingFunction': t.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${s}-leave`]: { animationTimingFunction: t.motionEaseInOutCirc },
      },
    ];
  },
  ve = g.createContext({});
function zs(t) {
  const e = g.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const of = typeof window < 'u',
  Ws = of ? g.useLayoutEffect : g.useEffect,
  be = g.createContext(null);
function Hs(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function tn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const vt = (t, e, n) => (n > e ? e : n < t ? t : n);
let Gs = () => {};
const Ct = {},
  ta = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function ea(t) {
  return typeof t == 'object' && t !== null;
}
const na = (t) => /^0[^.\s]+$/u.test(t);
function sa(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const rt = (t) => t,
  rf = (t, e) => (n) => e(t(n)),
  we = (...t) => t.reduce(rf),
  Se = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s;
  };
class Ys {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (Hs(this.subscriptions, e), () => tn(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const et = (t) => t * 1e3,
  it = (t) => t / 1e3;
function ia(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const oa = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  af = 1e-7,
  cf = 12;
function uf(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do ((r = e + (n - e) / 2), (o = oa(r, s, i) - t), o > 0 ? (n = r) : (e = r));
  while (Math.abs(o) > af && ++a < cf);
  return r;
}
function Pe(t, e, n, s) {
  if (t === e && n === s) return rt;
  const i = (o) => uf(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : oa(i(o), e, s));
}
const ra = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  aa = (t) => (e) => 1 - t(1 - e),
  ca = Pe(0.33, 1.53, 0.69, 0.99),
  Xs = aa(ca),
  ua = ra(Xs),
  la = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * Xs(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
  qs = (t) => 1 - Math.sin(Math.acos(t)),
  fa = aa(qs),
  ha = ra(qs),
  lf = Pe(0.42, 0, 1, 1),
  ff = Pe(0, 0, 0.58, 1),
  da = Pe(0.42, 0, 0.58, 1),
  hf = (t) => Array.isArray(t) && typeof t[0] != 'number',
  pa = (t) => Array.isArray(t) && typeof t[0] == 'number',
  df = {
    linear: rt,
    easeIn: lf,
    easeInOut: da,
    easeOut: ff,
    circIn: qs,
    circInOut: ha,
    circOut: fa,
    backIn: Xs,
    backInOut: ua,
    backOut: ca,
    anticipate: la,
  },
  pf = (t) => typeof t == 'string',
  Zi = (t) => {
    if (pa(t)) {
      Gs(t.length === 4);
      const [e, n, s, i] = t;
      return Pe(e, n, s, i);
    } else if (pf(t)) return df[t];
    return t;
  },
  Ie = [
    'setup',
    'read',
    'resolveKeyframes',
    'preUpdate',
    'update',
    'preRender',
    'render',
    'postRender',
  ];
function mf(t, e) {
  let n = new Set(),
    s = new Set(),
    i = !1,
    o = !1;
  const r = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (r.has(c) && (u.schedule(c), t()), c(a));
  }
  const u = {
    schedule: (c, f = !1, h = !1) => {
      const y = h && i ? n : s;
      return (f && r.add(c), y.add(c), c);
    },
    cancel: (c) => {
      (s.delete(c), r.delete(c));
    },
    process: (c) => {
      if (((a = c), i)) {
        o = !0;
        return;
      }
      i = !0;
      const f = n;
      ((n = s), (s = f), n.forEach(l), n.clear(), (i = !1), o && ((o = !1), u.process(c)));
    },
  };
  return u;
}
const yf = 40;
function ma(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Ie.reduce((x, M) => ((x[M] = mf(o)), x), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: h,
      render: p,
      postRender: y,
    } = r,
    v = () => {
      const x = Ct.useManualTiming,
        M = x ? i.timestamp : performance.now();
      ((n = !1),
        x || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(M - i.timestamp, yf), 1)),
        (i.timestamp = M),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        h.process(i),
        p.process(i),
        y.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(v)));
    },
    d = () => {
      ((n = !0), (s = !0), i.isProcessing || t(v));
    };
  return {
    schedule: Ie.reduce((x, M) => {
      const b = r[M];
      return ((x[M] = (A, w = !1, E = !1) => (n || d(), b.schedule(A, w, E))), x);
    }, {}),
    cancel: (x) => {
      for (let M = 0; M < Ie.length; M++) r[Ie[M]].cancel(x);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: F,
  cancel: At,
  state: Y,
  steps: kn,
} = ma(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : rt, !0);
let Ke;
function gf() {
  Ke = void 0;
}
const Z = {
    now: () => (
      Ke === void 0 &&
        Z.set(Y.isProcessing || Ct.useManualTiming ? Y.timestamp : performance.now()),
      Ke
    ),
    set: (t) => {
      ((Ke = t), queueMicrotask(gf));
    },
  },
  ya = (t) => (e) => typeof e == 'string' && e.startsWith(t),
  ga = ya('--'),
  vf = ya('var(--'),
  Zs = (t) => (vf(t) ? Sf.test(t.split('/*')[0].trim()) : !1),
  Sf = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Qi(t) {
  return typeof t != 'string' ? !1 : t.split('/*')[0].includes('var(--');
}
const ee = { test: (t) => typeof t == 'number', parse: parseFloat, transform: (t) => t },
  Te = { ...ee, transform: (t) => vt(0, 1, t) },
  Fe = { ...ee, default: 1 },
  fe = (t) => Math.round(t * 1e5) / 1e5,
  Qs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Tf(t) {
  return t == null;
}
const xf =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Js = (t, e) => (n) =>
    !!(
      (typeof n == 'string' && xf.test(n) && n.startsWith(t)) ||
      (e && !Tf(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  va = (t, e, n) => (s) => {
    if (typeof s != 'string') return s;
    const [i, o, r, a] = s.match(Qs);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Mf = (t) => vt(0, 255, t),
  Ln = { ...ee, transform: (t) => Math.round(Mf(t)) },
  Ft = {
    test: Js('rgb', 'red'),
    parse: va('red', 'green', 'blue'),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      'rgba(' +
      Ln.transform(t) +
      ', ' +
      Ln.transform(e) +
      ', ' +
      Ln.transform(n) +
      ', ' +
      fe(Te.transform(s)) +
      ')',
  };
function bf(t) {
  let e = '',
    n = '',
    s = '',
    i = '';
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const us = { test: Js('#'), parse: bf, transform: Ft.transform },
  Ee = (t) => ({
    test: (e) => typeof e == 'string' && e.endsWith(t) && e.split(' ').length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  wt = Ee('deg'),
  gt = Ee('%'),
  C = Ee('px'),
  wf = Ee('vh'),
  Pf = Ee('vw'),
  Ji = { ...gt, parse: (t) => gt.parse(t) / 100, transform: (t) => gt.transform(t * 100) },
  Gt = {
    test: Js('hsl', 'hue'),
    parse: va('hue', 'saturation', 'lightness'),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(t) +
      ', ' +
      gt.transform(fe(e)) +
      ', ' +
      gt.transform(fe(n)) +
      ', ' +
      fe(Te.transform(s)) +
      ')',
  },
  _ = {
    test: (t) => Ft.test(t) || us.test(t) || Gt.test(t),
    parse: (t) => (Ft.test(t) ? Ft.parse(t) : Gt.test(t) ? Gt.parse(t) : us.parse(t)),
    transform: (t) =>
      typeof t == 'string' ? t : t.hasOwnProperty('red') ? Ft.transform(t) : Gt.transform(t),
    getAnimatableNone: (t) => {
      const e = _.parse(t);
      return ((e.alpha = 0), _.transform(e));
    },
  },
  Ef =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cf(t) {
  return (
    isNaN(t) && typeof t == 'string' && (t.match(Qs)?.length || 0) + (t.match(Ef)?.length || 0) > 0
  );
}
const Sa = 'number',
  Ta = 'color',
  Af = 'var',
  Rf = 'var(',
  to = '${}',
  Vf =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qt(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      Vf,
      (l) => (
        _.test(l)
          ? (s.color.push(o), i.push(Ta), n.push(_.parse(l)))
          : l.startsWith(Rf)
            ? (s.var.push(o), i.push(Af), n.push(l))
            : (s.number.push(o), i.push(Sa), n.push(parseFloat(l))),
        ++o,
        to
      ),
    )
    .split(to);
  return { values: n, split: a, indexes: s, types: i };
}
function Df(t) {
  return Qt(t).values;
}
function xa({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = '';
    for (let o = 0; o < n; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const r = e[o];
        r === Sa ? (i += fe(s[o])) : r === Ta ? (i += _.transform(s[o])) : (i += s[o]);
      }
    return i;
  };
}
function kf(t) {
  return xa(Qt(t));
}
const Lf = (t) => (typeof t == 'number' ? 0 : _.test(t) ? _.getAnimatableNone(t) : t),
  Of = (t, e) => (typeof t == 'number' ? (e?.trim().endsWith('/') ? t : 0) : Lf(t));
function If(t) {
  const e = Qt(t);
  return xa(e)(e.values.map((s, i) => Of(s, e.split[i])));
}
const dt = { test: Cf, parse: Df, createTransformer: kf, getAnimatableNone: If };
function On(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
  );
}
function Ff({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    ((i = On(l, a, t + 1 / 3)), (o = On(l, a, t)), (r = On(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function en(t, e) {
  return (n) => (n > 0 ? e : t);
}
const j = (t, e, n) => t + (e - t) * n,
  In = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  $f = [us, Ft, Gt],
  jf = (t) => $f.find((e) => e.test(t));
function eo(t) {
  const e = jf(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === Gt && (n = Ff(n)), n);
}
const no = (t, e) => {
    const n = eo(t),
      s = eo(e);
    if (!n || !s) return en(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = In(n.red, s.red, o)),
      (i.green = In(n.green, s.green, o)),
      (i.blue = In(n.blue, s.blue, o)),
      (i.alpha = j(n.alpha, s.alpha, o)),
      Ft.transform(i)
    );
  },
  ls = new Set(['none', 'hidden']);
function Bf(t, e) {
  return ls.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function Nf(t, e) {
  return (n) => j(t, e, n);
}
function ti(t) {
  return typeof t == 'number'
    ? Nf
    : typeof t == 'string'
      ? Zs(t)
        ? en
        : _.test(t)
          ? no
          : Kf
      : Array.isArray(t)
        ? Ma
        : typeof t == 'object'
          ? _.test(t)
            ? no
            : _f
          : en;
}
function Ma(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => ti(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function _f(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = ti(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function Uf(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      r = t.indexes[o][s[o]],
      a = t.values[r] ?? 0;
    ((n[i] = a), s[o]++);
  }
  return n;
}
const Kf = (t, e) => {
  const n = dt.createTransformer(e),
    s = Qt(t),
    i = Qt(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (ls.has(t) && !i.values.length) || (ls.has(e) && !s.values.length)
      ? Bf(t, e)
      : we(Ma(Uf(s, i), i.values), n)
    : en(t, e);
};
function ba(t, e, n) {
  return typeof t == 'number' && typeof e == 'number' && typeof n == 'number'
    ? j(t, e, n)
    : ti(t)(t, e);
}
const zf = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => F.update(e, n),
      stop: () => At(e),
      now: () => (Y.isProcessing ? Y.timestamp : Z.now()),
    };
  },
  wa = (t, e, n = 10) => {
    let s = '';
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ', ';
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  nn = 2e4;
function ei(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < nn; ) ((e += n), (s = t.next(e)));
  return e >= nn ? 1 / 0 : e;
}
function Wf(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(ei(s), nn);
  return { type: 'keyframes', ease: (o) => s.next(i * o).value / e, duration: it(i) };
}
const B = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function fs(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Hf = 12;
function Gf(t, e, n) {
  let s = n;
  for (let i = 1; i < Hf; i++) s = s - t(s) / e(s);
  return s;
}
const Fn = 0.001;
function Yf({
  duration: t = B.duration,
  bounce: e = B.bounce,
  velocity: n = B.velocity,
  mass: s = B.mass,
}) {
  let i,
    o,
    r = 1 - e;
  ((r = vt(B.minDamping, B.maxDamping, r)),
    (t = vt(B.minDuration, B.maxDuration, it(t))),
    r < 1
      ? ((i = (u) => {
          const c = u * r,
            f = c * t,
            h = c - n,
            p = fs(u, r),
            y = Math.exp(-f);
          return Fn - (h / p) * y;
        }),
        (o = (u) => {
          const f = u * r * t,
            h = f * n + n,
            p = Math.pow(r, 2) * Math.pow(u, 2) * t,
            y = Math.exp(-f),
            v = fs(Math.pow(u, 2), r);
          return ((-i(u) + Fn > 0 ? -1 : 1) * ((h - p) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            f = (u - n) * t + 1;
          return -Fn + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * t),
            f = (n - u) * (t * t);
          return c * f;
        })));
  const a = 5 / t,
    l = Gf(i, o, a);
  if (((t = et(t)), isNaN(l))) return { stiffness: B.stiffness, damping: B.damping, duration: t };
  {
    const u = Math.pow(l, 2) * s;
    return { stiffness: u, damping: r * 2 * Math.sqrt(s * u), duration: t };
  }
}
const Xf = ['duration', 'bounce'],
  qf = ['stiffness', 'damping', 'mass'];
function so(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Zf(t) {
  let e = {
    velocity: B.velocity,
    stiffness: B.stiffness,
    damping: B.damping,
    mass: B.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!so(t, qf) && so(t, Xf))
    if (((e.velocity = 0), t.visualDuration)) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * vt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: B.mass, stiffness: i, damping: o };
    } else {
      const n = Yf({ ...t, velocity: 0 });
      ((e = { ...e, ...n, mass: B.mass }), (e.isResolvedFromDuration = !0));
    }
  return e;
}
function sn(t = B.visualDuration, e = B.bounce) {
  const n = typeof t != 'object' ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: h,
      isResolvedFromDuration: p,
    } = Zf({ ...n, velocity: -it(n.velocity || 0) }),
    y = h || 0,
    v = u / (2 * Math.sqrt(l * c)),
    d = r - o,
    S = it(Math.sqrt(l / c)),
    T = Math.abs(d) < 5;
  (s || (s = T ? B.restSpeed.granular : B.restSpeed.default),
    i || (i = T ? B.restDelta.granular : B.restDelta.default));
  let x, M, b, A, w, E;
  if (v < 1)
    ((b = fs(S, v)),
      (A = (y + v * S * d) / b),
      (x = (P) => {
        const R = Math.exp(-v * S * P);
        return r - R * (A * Math.sin(b * P) + d * Math.cos(b * P));
      }),
      (w = v * S * A + d * b),
      (E = v * S * d - A * b),
      (M = (P) => Math.exp(-v * S * P) * (w * Math.sin(b * P) + E * Math.cos(b * P))));
  else if (v === 1) {
    x = (R) => r - Math.exp(-S * R) * (d + (y + S * d) * R);
    const P = y + S * d;
    M = (R) => Math.exp(-S * R) * (S * P * R - y);
  } else {
    const P = S * Math.sqrt(v * v - 1);
    x = (G) => {
      const nt = Math.exp(-v * S * G),
        tt = Math.min(P * G, 300);
      return r - (nt * ((y + v * S * d) * Math.sinh(tt) + P * d * Math.cosh(tt))) / P;
    };
    const R = (y + v * S * d) / P,
      I = v * S * R - d * P,
      K = v * S * d - R * P;
    M = (G) => {
      const nt = Math.exp(-v * S * G),
        tt = Math.min(P * G, 300);
      return nt * (I * Math.sinh(tt) + K * Math.cosh(tt));
    };
  }
  const V = {
    calculatedDuration: (p && f) || null,
    velocity: (P) => et(M(P)),
    next: (P) => {
      if (!p && v < 1) {
        const I = Math.exp(-v * S * P),
          K = Math.sin(b * P),
          G = Math.cos(b * P),
          nt = r - I * (A * K + d * G),
          tt = et(I * (w * K + E * G));
        return (
          (a.done = Math.abs(tt) <= s && Math.abs(r - nt) <= i),
          (a.value = a.done ? r : nt),
          a
        );
      }
      const R = x(P);
      if (p) a.done = P >= f;
      else {
        const I = et(M(P));
        a.done = Math.abs(I) <= s && Math.abs(r - R) <= i;
      }
      return ((a.value = a.done ? r : R), a);
    },
    toString: () => {
      const P = Math.min(ei(V), nn),
        R = wa((I) => V.next(P * I).value, P, 30);
      return P + 'ms ' + R;
    },
    toTransition: () => {},
  };
  return V;
}
sn.applyToOptions = (t) => {
  const e = Wf(t, 100, sn);
  return ((t.ease = e.ease), (t.duration = et(e.duration)), (t.type = 'keyframes'), t);
};
const Qf = 5;
function Pa(t, e, n) {
  const s = Math.max(e - Qf, 0);
  return ia(n - t(s), e - s);
}
function hs({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = t[0],
    h = { done: !1, value: f },
    p = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) => (a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l);
  let v = n * e;
  const d = f + v,
    S = r === void 0 ? d : r(d);
  S !== d && (v = S - f);
  const T = (E) => -v * Math.exp(-E / s),
    x = (E) => S + T(E),
    M = (E) => {
      const V = T(E),
        P = x(E);
      ((h.done = Math.abs(V) <= u), (h.value = h.done ? S : P));
    };
  let b, A;
  const w = (E) => {
    p(h.value) &&
      ((b = E),
      (A = sn({
        keyframes: [h.value, y(h.value)],
        velocity: Pa(x, E, h.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let V = !1;
        return (
          !A && b === void 0 && ((V = !0), M(E), w(E)),
          b !== void 0 && E >= b ? A.next(E - b) : (!V && M(E), h)
        );
      },
    }
  );
}
function Jf(t, e, n) {
  const s = [],
    i = n || Ct.mix || ba,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || rt : e;
      a = we(l, a);
    }
    s.push(a);
  }
  return s;
}
function th(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((Gs(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = Jf(e, s, i),
    l = a.length,
    u = (c) => {
      if (r && c < t[0]) return e[0];
      let f = 0;
      if (l > 1) for (; f < t.length - 2 && !(c < t[f + 1]); f++);
      const h = Se(t[f], t[f + 1], c);
      return a[f](h);
    };
  return n ? (c) => u(vt(t[0], t[o - 1], c)) : u;
}
function eh(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Se(0, e, s);
    t.push(j(n, 1, i));
  }
}
function nh(t) {
  const e = [0];
  return (eh(e, t.length - 1), e);
}
function sh(t, e) {
  return t.map((n) => n * e);
}
function ih(t, e) {
  return t.map(() => e || da).splice(0, t.length - 1);
}
function he({ duration: t = 300, keyframes: e, times: n, ease: s = 'easeInOut' }) {
  const i = hf(s) ? s.map(Zi) : Zi(s),
    o = { done: !1, value: e[0] },
    r = sh(n && n.length === e.length ? n : nh(e), t),
    a = th(r, e, { ease: Array.isArray(i) ? i : ih(e, i) });
  return { calculatedDuration: t, next: (l) => ((o.value = a(l)), (o.done = l >= t), o) };
}
const oh = (t) => t !== null;
function yn(t, { repeat: e, repeatType: n = 'loop' }, s, i = 1) {
  const o = t.filter(oh),
    a = i < 0 || (e && n !== 'loop' && e % 2 === 1) ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const rh = { decay: hs, inertia: hs, tween: he, keyframes: he, spring: sn };
function Ea(t) {
  typeof t.type == 'string' && (t.type = rh[t.type]);
}
class ni {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ah = (t) => t / 100;
class on extends ni {
  constructor(e) {
    (super(),
      (this.state = 'idle'),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Z.now() && this.tick(Z.now()),
          (this.isStopped = !0),
          this.state !== 'idle' && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    Ea(e);
    const { type: n = he, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || he;
    l !== he &&
      typeof a[0] != 'number' &&
      ((this.mixKeyframes = we(ah, ba(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...e, keyframes: a });
    (o === 'mirror' &&
      (this.mirroredGenerator = l({ ...e, keyframes: [...a].reverse(), velocity: -r })),
      u.calculatedDuration === null && (u.calculatedDuration = ei(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = u));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: h,
      repeatDelay: p,
      type: y,
      onUpdate: v,
      finalKeyframe: d,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const S = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      T = this.playbackSpeed >= 0 ? S < 0 : S > i;
    ((this.currentTime = Math.max(S, 0)),
      this.state === 'finished' && this.holdTime === null && (this.currentTime = i));
    let x = this.currentTime,
      M = s;
    if (f) {
      const E = Math.min(this.currentTime, i) / a;
      let V = Math.floor(E),
        P = E % 1;
      (!P && E >= 1 && (P = 1),
        P === 1 && V--,
        (V = Math.min(V, f + 1)),
        V % 2 && (h === 'reverse' ? ((P = 1 - P), p && (P -= p / a)) : h === 'mirror' && (M = r)),
        (x = vt(0, 1, P) * a));
    }
    let b;
    (T ? ((this.delayState.value = c[0]), (b = this.delayState)) : (b = M.next(x)),
      o && !T && (b.value = o(b.value)));
    let { done: A } = b;
    !T &&
      l !== null &&
      (A = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const w =
      this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && A));
    return (
      w && y !== hs && (b.value = yn(c, this.options, d, this.speed)),
      v && v(b.value),
      w && this.finish(),
      b
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return it(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + it(e);
  }
  get time() {
    return it(this.currentTime);
  }
  set time(e) {
    ((e = et(e)),
      (this.currentTime = e),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = 'paused'), (this.holdTime = e), this.tick(e)));
  }
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return Pa((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (n && this.driver && this.updateTime(Z.now()),
      (this.playbackSpeed = e),
      n && this.driver && (this.time = it(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: e = zf, startTime: n } = this.options;
    (this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.());
    const s = this.driver.now();
    (this.state === 'finished'
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === 'finished' && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start());
  }
  pause() {
    ((this.state = 'paused'), this.updateTime(Z.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== 'running' && this.play(), (this.state = 'finished'), (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = 'finished'),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = 'idle'), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = 'keyframes'), (this.options.ease = 'linear'), this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
function ch(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const $t = (t) => (t * 180) / Math.PI,
  ds = (t) => {
    const e = $t(Math.atan2(t[1], t[0]));
    return ps(e);
  },
  uh = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: ds,
    rotateZ: ds,
    skewX: (t) => $t(Math.atan(t[1])),
    skewY: (t) => $t(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  ps = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  io = ds,
  oo = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  ro = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  lh = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: oo,
    scaleY: ro,
    scale: (t) => (oo(t) + ro(t)) / 2,
    rotateX: (t) => ps($t(Math.atan2(t[6], t[5]))),
    rotateY: (t) => ps($t(Math.atan2(-t[2], t[0]))),
    rotateZ: io,
    rotate: io,
    skewX: (t) => $t(Math.atan(t[4])),
    skewY: (t) => $t(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function ms(t) {
  return t.includes('scale') ? 1 : 0;
}
function ys(t, e) {
  if (!t || t === 'none') return ms(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) ((s = lh), (i = n));
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = uh), (i = a));
  }
  if (!i) return ms(e);
  const o = s[e],
    r = i[1].split(',').map(hh);
  return typeof o == 'function' ? o(r) : r[o];
}
const fh = (t, e) => {
  const { transform: n = 'none' } = getComputedStyle(t);
  return ys(n, e);
};
function hh(t) {
  return parseFloat(t.trim());
}
const ne = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  se = new Set(ne),
  ao = (t) => t === ee || t === C,
  dh = new Set(['x', 'y', 'z']),
  ph = ne.filter((t) => !dh.has(t));
function mh(t) {
  const e = [];
  return (
    ph.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0));
    }),
    e
  );
}
const Et = {
  width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0', boxSizing: s }) => {
    const i = t.max - t.min;
    return s === 'border-box' ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0', boxSizing: s }) => {
    const i = t.max - t.min;
    return s === 'border-box' ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => ys(e, 'x'),
  y: (t, { transform: e }) => ys(e, 'y'),
};
Et.translateX = Et.x;
Et.translateY = Et.y;
const Nt = new Set();
let gs = !1,
  vs = !1,
  Ss = !1;
function Ca() {
  if (vs) {
    const t = Array.from(Nt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    (e.forEach((s) => {
      const i = mh(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            s.getValue(o)?.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  ((vs = !1), (gs = !1), Nt.forEach((t) => t.complete(Ss)), Nt.clear());
}
function Aa() {
  Nt.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (vs = !0));
  });
}
function yh() {
  ((Ss = !0), Aa(), Ca(), (Ss = !1));
}
class si {
  constructor(e, n, s, i, o, r = !1) {
    ((this.state = 'pending'),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r));
  }
  scheduleResolve() {
    ((this.state = 'scheduled'),
      this.isAsync
        ? (Nt.add(this), gs || ((gs = !0), F.read(Aa), F.resolveKeyframes(Ca)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]));
    }
    ch(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = 'complete'),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      Nt.delete(this));
  }
  cancel() {
    this.state === 'scheduled' && (Nt.delete(this), (this.state = 'pending'));
  }
  resume() {
    this.state === 'pending' && this.scheduleResolve();
  }
}
const gh = (t) => t.startsWith('--');
function Ra(t, e, n) {
  gh(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const vh = {};
function Va(t, e) {
  const n = sa(t);
  return () => vh[e] ?? n();
}
const Sh = Va(() => window.ScrollTimeline !== void 0, 'scrollTimeline'),
  Da = Va(() => {
    try {
      document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  ae = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  co = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: ae([0, 0.65, 0.55, 1]),
    circOut: ae([0.55, 0, 1, 0.45]),
    backIn: ae([0.31, 0.01, 0.66, -0.59]),
    backOut: ae([0.33, 1.53, 0.69, 0.99]),
  };
function ka(t, e) {
  if (t)
    return typeof t == 'function'
      ? Da()
        ? wa(t, e)
        : 'ease-out'
      : pa(t)
        ? ae(t)
        : Array.isArray(t)
          ? t.map((n) => ka(n, e) || co.easeOut)
          : co[t];
}
function Th(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = 'loop',
    ease: a = 'easeOut',
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const f = ka(a, i);
  Array.isArray(f) && (c.easing = f);
  const h = {
    delay: s,
    duration: i,
    easing: Array.isArray(f) ? 'linear' : f,
    fill: 'both',
    iterations: o + 1,
    direction: r === 'reverse' ? 'alternate' : 'normal',
  };
  return (u && (h.pseudoElement = u), t.animate(c, h));
}
function La(t) {
  return typeof t == 'function' && 'applyToOptions' in t;
}
function xh({ type: t, ...e }) {
  return La(t) && Da()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = 'easeOut'), e);
}
class Oa extends ni {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      Gs(typeof e.type != 'string'));
    const u = xh(e);
    ((this.animation = Th(n, s, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = yn(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            Ra(n, s, c),
            this.animation.cancel());
        }
        (l?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === 'finished' && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === 'idle' ||
      e === 'finished' ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return it(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + it(e);
  }
  get time() {
    return it(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = et(e)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? 'finished' : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return (
      this.allowFlatten && this.animation.effect?.updateTiming({ easing: 'linear' }),
      (this.animation.onfinish = null),
      e && Sh()
        ? ((this.animation.timeline = e),
          n && (this.animation.rangeStart = n),
          s && (this.animation.rangeEnd = s),
          rt)
        : i(this)
    );
  }
}
const Ia = { anticipate: la, backInOut: ua, circInOut: ha };
function Mh(t) {
  return t in Ia;
}
function bh(t) {
  typeof t.ease == 'string' && Mh(t.ease) && (t.ease = Ia[t.ease]);
}
const $n = 10;
class wh extends Oa {
  constructor(e) {
    (bh(e),
      Ea(e),
      super(e),
      e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new on({ ...r, autoplay: !1 }),
      l = Math.max($n, Z.now() - this.startTime),
      u = vt(0, $n, l - $n),
      c = a.sample(l).value,
      { name: f } = this.options;
    (o && f && Ra(o, f, c), n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u), a.stop());
  }
}
const uo = (t, e) =>
  e === 'zIndex'
    ? !1
    : !!(
        typeof t == 'number' ||
        Array.isArray(t) ||
        (typeof t == 'string' && (dt.test(t) || t === '0') && !t.startsWith('url('))
      );
function Ph(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Eh(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === 'display' || e === 'visibility') return !0;
  const o = t[t.length - 1],
    r = uo(i, e),
    a = uo(o, e);
  return !r || !a ? !1 : Ph(t) || ((n === 'spring' || La(n)) && s);
}
function Ts(t) {
  ((t.duration = 0), (t.type = 'keyframes'));
}
const Fa = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  Ch = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Ah(t) {
  for (let e = 0; e < t.length; e++) if (typeof t[e] == 'string' && Ch.test(t[e])) return !0;
  return !1;
}
const Rh = new Set([
    'color',
    'backgroundColor',
    'outlineColor',
    'fill',
    'stroke',
    'borderColor',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
  ]),
  Vh = sa(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function Dh(t) {
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: o,
    type: r,
    keyframes: a,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: u, transformTemplate: c } = e.owner.getProps();
  return (
    Vh() &&
    n &&
    (Fa.has(n) || (Rh.has(n) && Ah(a))) &&
    (n !== 'transform' || !c) &&
    !u &&
    !s &&
    i !== 'mirror' &&
    o !== 0 &&
    r !== 'inertia'
  );
}
const kh = 40;
class Lh extends ni {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = 'loop',
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Z.now()));
    const h = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      p = c?.KeyframeResolver || si;
    ((this.keyframeResolver = new p(
      a,
      (y, v, d) => this.onKeyframesResolved(y, v, h, !d),
      l,
      u,
      c,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = Z.now();
    let f = !0;
    Eh(e, o, r, a) ||
      ((f = !1),
      (Ct.instantAnimations || !l) && c?.(yn(e, s, n)),
      (e[0] = e[e.length - 1]),
      Ts(s),
      (s.repeat = 0));
    const p = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > kh
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      y = f && !u && Dh(p),
      v = p.motionValue?.owner?.current;
    let d;
    if (y)
      try {
        d = new wh({ ...p, element: v });
      } catch {
        d = new on(p);
      }
    else d = new on(p);
    (d.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(rt),
      this.pendingTimeline &&
        ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (this._animation || (this.keyframeResolver?.resume(), yh()), this._animation);
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
  }
}
function $a(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return typeof n == 'function' ? n(o, r) : i === 1 ? o * s : a - o * s;
}
const Oh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ih(t) {
  const e = Oh.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function ja(t, e, n = 1) {
  const [s, i] = Ih(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return ta(r) ? parseFloat(r) : r;
  }
  return Zs(i) ? ja(i, e, n + 1) : i;
}
const Fh = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  $h = (t) => ({
    type: 'spring',
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jh = { type: 'keyframes', duration: 0.8 },
  Bh = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Nh = (t, { keyframes: e }) =>
    e.length > 2 ? jh : se.has(t) ? (t.startsWith('scale') ? $h(e[1]) : Fh) : Bh;
function Ba(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function ii(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? Ba(n, t) : n;
}
const _h = new Set([
  'when',
  'delay',
  'delayChildren',
  'staggerChildren',
  'staggerDirection',
  'repeat',
  'repeatType',
  'repeatDelay',
  'from',
  'elapsed',
]);
function Uh(t) {
  for (const e in t) if (!_h.has(e)) return !0;
  return !1;
}
const oi =
  (t, e, n, s = {}, i, o) =>
  (r) => {
    const a = ii(s, t) || {},
      l = a.delay || s.delay || 0;
    let { elapsed: u = 0 } = s;
    u = u - et(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: 'easeOut',
      velocity: e.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (h) => {
        (e.set(h), a.onUpdate && a.onUpdate(h));
      },
      onComplete: () => {
        (r(), a.onComplete && a.onComplete());
      },
      name: t,
      motionValue: e,
      element: o ? void 0 : i,
    };
    (Uh(a) || Object.assign(c, Nh(t, c)),
      c.duration && (c.duration = et(c.duration)),
      c.repeatDelay && (c.repeatDelay = et(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Ts(c), c.delay === 0 && (f = !0)),
      (Ct.instantAnimations || Ct.skipAnimations || i?.shouldSkipAnimations) &&
        ((f = !0), Ts(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !o && e.get() !== void 0)
    ) {
      const h = yn(c.keyframes, a);
      if (h !== void 0) {
        F.update(() => {
          (c.onUpdate(h), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new on(c) : new Lh(c);
  };
function lo(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      ((e[0][s] = n.get()), (e[1][s] = n.getVelocity()));
    }),
    e
  );
}
function ri(t, e, n, s) {
  if (typeof e == 'function') {
    const [i, o] = lo(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if ((typeof e == 'string' && (e = t.variants && t.variants[e]), typeof e == 'function')) {
    const [i, o] = lo(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function _t(t, e, n) {
  const s = t.getProps();
  return ri(s, e, n !== void 0 ? n : s.custom, t);
}
const Na = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...ne]),
  fo = 30,
  Kh = (t) => !isNaN(parseFloat(t));
class zh {
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        const i = Z.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = Z.now()),
      this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Kh(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(e) {
    return this.on('change', e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Ys());
    const s = this.events[e].add(n);
    return e === 'change'
      ? () => {
          (s(),
            F.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = Z.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > fo)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, fo);
    return ia(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Jt(t, e) {
  return new zh(t, e);
}
const xs = (t) => Array.isArray(t);
function Wh(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Jt(n));
}
function Hh(t) {
  return xs(t) ? t[t.length - 1] || 0 : t;
}
function Gh(t, e) {
  const n = _t(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Hh(o[r]);
    Wh(t, r, a);
  }
}
const X = (t) => !!(t && t.getVelocity);
function Yh(t) {
  return !!(X(t) && t.add);
}
function Ms(t, e) {
  const n = t.getValue('willChange');
  if (Yh(n)) return n.add(e);
  if (!n && Ct.WillChange) {
    const s = new Ct.WillChange('auto');
    (t.addValue('willChange', s), s.add(e));
  }
}
function ai(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const Xh = 'framerAppearId',
  _a = 'data-' + ai(Xh);
function Ua(t) {
  return t.props[_a];
}
function qh({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function Ka(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o, transitionEnd: r, ...a } = e;
  const l = t.getDefaultTransition();
  o = o ? Ba(o, l) : l;
  const u = o?.reduceMotion;
  s && (o = s);
  const c = [],
    f = i && t.animationState && t.animationState.getState()[i];
  for (const h in a) {
    const p = t.getValue(h, t.latestValues[h] ?? null),
      y = a[h];
    if (y === void 0 || (f && qh(f, h))) continue;
    const v = { delay: n, ...ii(o || {}, h) },
      d = p.get();
    if (d !== void 0 && !p.isAnimating() && !Array.isArray(y) && y === d && !v.velocity) {
      F.update(() => p.set(y));
      continue;
    }
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const M = Ua(t);
      if (M) {
        const b = window.MotionHandoffAnimation(M, h, F);
        b !== null && ((v.startTime = b), (S = !0));
      }
    }
    Ms(t, h);
    const T = u ?? t.shouldReduceMotion;
    p.start(oi(h, p, y, T && Na.has(h) ? { type: !1 } : v, t, S));
    const x = p.animation;
    x && c.push(x);
  }
  if (r) {
    const h = () =>
      F.update(() => {
        r && Gh(t, r);
      });
    c.length ? Promise.all(c).then(h) : h();
  }
  return c;
}
function bs(t, e, n = {}) {
  const s = _t(t, e, n.type === 'exit' ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Ka(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
            return Zh(t, e, l, u, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === 'beforeChildren' ? [o, r] : [r, o];
    return l().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function Zh(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    (l.notify('AnimationStart', e),
      a.push(
        bs(l, e, {
          ...r,
          delay: n + (typeof s == 'function' ? 0 : s) + $a(t.variantChildren, l, s, i, o),
        }).then(() => l.notify('AnimationComplete', e)),
      ));
  return Promise.all(a);
}
function Qh(t, e, n = {}) {
  t.notify('AnimationStart', e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => bs(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == 'string') s = bs(t, e, n);
  else {
    const i = typeof e == 'function' ? _t(t, e, n.custom) : e;
    s = Promise.all(Ka(t, i, n));
  }
  return s.then(() => {
    t.notify('AnimationComplete', e);
  });
}
const Jh = { test: (t) => t === 'auto', parse: (t) => t },
  za = (t) => (e) => e.test(t),
  Wa = [ee, C, gt, wt, Pf, wf, Jh],
  ho = (t) => Wa.find(za(t));
function td(t) {
  return typeof t == 'number' ? t === 0 : t !== null ? t === 'none' || t === '0' || na(t) : !0;
}
const ed = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function nd(t) {
  const [e, n] = t.slice(0, -1).split('(');
  if (e === 'drop-shadow') return t;
  const [s] = n.match(Qs) || [];
  if (!s) return t;
  const i = n.replace(s, '');
  let o = ed.has(e) ? 1 : 0;
  return (s !== n && (o *= 100), e + '(' + o + i + ')');
}
const sd = /\b([a-z-]*)\(.*?\)/gu,
  ws = {
    ...dt,
    getAnimatableNone: (t) => {
      const e = t.match(sd);
      return e ? e.map(nd).join(' ') : t;
    },
  },
  Ps = {
    ...dt,
    getAnimatableNone: (t) => {
      const e = dt.parse(t);
      return dt.createTransformer(t)(
        e.map((s) => (typeof s == 'number' ? 0 : typeof s == 'object' ? { ...s, alpha: 1 } : s)),
      );
    },
  },
  po = { ...ee, transform: Math.round },
  id = {
    rotate: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: Fe,
    scaleX: Fe,
    scaleY: Fe,
    scaleZ: Fe,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: C,
    translateX: C,
    translateY: C,
    translateZ: C,
    x: C,
    y: C,
    z: C,
    perspective: C,
    transformPerspective: C,
    opacity: Te,
    originX: Ji,
    originY: Ji,
    originZ: C,
  },
  ci = {
    borderWidth: C,
    borderTopWidth: C,
    borderRightWidth: C,
    borderBottomWidth: C,
    borderLeftWidth: C,
    borderRadius: C,
    borderTopLeftRadius: C,
    borderTopRightRadius: C,
    borderBottomRightRadius: C,
    borderBottomLeftRadius: C,
    width: C,
    maxWidth: C,
    height: C,
    maxHeight: C,
    top: C,
    right: C,
    bottom: C,
    left: C,
    inset: C,
    insetBlock: C,
    insetBlockStart: C,
    insetBlockEnd: C,
    insetInline: C,
    insetInlineStart: C,
    insetInlineEnd: C,
    padding: C,
    paddingTop: C,
    paddingRight: C,
    paddingBottom: C,
    paddingLeft: C,
    paddingBlock: C,
    paddingBlockStart: C,
    paddingBlockEnd: C,
    paddingInline: C,
    paddingInlineStart: C,
    paddingInlineEnd: C,
    margin: C,
    marginTop: C,
    marginRight: C,
    marginBottom: C,
    marginLeft: C,
    marginBlock: C,
    marginBlockStart: C,
    marginBlockEnd: C,
    marginInline: C,
    marginInlineStart: C,
    marginInlineEnd: C,
    fontSize: C,
    backgroundPositionX: C,
    backgroundPositionY: C,
    ...id,
    zIndex: po,
    fillOpacity: Te,
    strokeOpacity: Te,
    numOctaves: po,
  },
  od = {
    ...ci,
    color: _,
    backgroundColor: _,
    outlineColor: _,
    fill: _,
    stroke: _,
    borderColor: _,
    borderTopColor: _,
    borderRightColor: _,
    borderBottomColor: _,
    borderLeftColor: _,
    filter: ws,
    WebkitFilter: ws,
    mask: Ps,
    WebkitMask: Ps,
  },
  Ha = (t) => od[t],
  rd = new Set([ws, Ps]);
function Ga(t, e) {
  let n = Ha(t);
  return (rd.has(n) || (n = dt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0);
}
const ad = new Set(['auto', 'none', '0']);
function cd(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    (typeof o == 'string' && !ad.has(o) && Qt(o).values.length && (i = t[s]), s++);
  }
  if (i && n) for (const o of e) t[o] = Ga(n, i);
}
class ud extends si {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      if (typeof f == 'string' && ((f = f.trim()), Zs(f))) {
        const h = ja(f, n.current);
        (h !== void 0 && (e[c] = h), c === e.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !Na.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = ho(i),
      a = ho(o),
      l = Qi(i),
      u = Qi(o);
    if (l !== u && Et[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (ao(r) && ao(a))
        for (let c = 0; c < e.length; c++) {
          const f = e[c];
          typeof f == 'string' && (e[c] = parseFloat(f));
        }
      else Et[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || td(e[i])) && s.push(i);
    s.length && cd(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    (s === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Et[s](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    ((s[o] = Et[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([a, l]) => {
          e.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes());
  }
}
function Ya(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == 'string') {
    let s = document;
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const Xa = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t);
function ze(t) {
  return ea(t) && 'offsetHeight' in t && !('ownerSVGElement' in t);
}
const { schedule: ui } = ma(queueMicrotask, !1),
  ut = { x: !1, y: !1 };
function qa() {
  return ut.x || ut.y;
}
function ld(t) {
  return t === 'x' || t === 'y'
    ? ut[t]
      ? null
      : ((ut[t] = !0),
        () => {
          ut[t] = !1;
        })
    : ut.x || ut.y
      ? null
      : ((ut.x = ut.y = !0),
        () => {
          ut.x = ut.y = !1;
        });
}
function Za(t, e) {
  const n = Ya(t),
    s = new AbortController(),
    i = { passive: !0, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function fd(t) {
  return !(t.pointerType === 'touch' || qa());
}
function hd(t, e, n = {}) {
  const [s, i, o] = Za(t, n);
  return (
    s.forEach((r) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          r.removeEventListener('pointerleave', y);
        },
        f = (d) => {
          (u && (u(d), (u = void 0)), c());
        },
        h = (d) => {
          ((a = !1),
            window.removeEventListener('pointerup', h),
            window.removeEventListener('pointercancel', h),
            l && ((l = !1), f(d)));
        },
        p = () => {
          ((a = !0),
            window.addEventListener('pointerup', h, i),
            window.addEventListener('pointercancel', h, i));
        },
        y = (d) => {
          if (d.pointerType !== 'touch') {
            if (a) {
              l = !0;
              return;
            }
            f(d);
          }
        },
        v = (d) => {
          if (!fd(d)) return;
          l = !1;
          const S = e(r, d);
          typeof S == 'function' && ((u = S), r.addEventListener('pointerleave', y, i));
        };
      (r.addEventListener('pointerenter', v, i), r.addEventListener('pointerdown', p, i));
    }),
    o
  );
}
const Qa = (t, e) => (e ? (t === e ? !0 : Qa(t, e.parentElement)) : !1),
  li = (t) =>
    t.pointerType === 'mouse' ? typeof t.button != 'number' || t.button <= 0 : t.isPrimary !== !1,
  dd = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function pd(t) {
  return dd.has(t.tagName) || t.isContentEditable === !0;
}
const md = new Set(['INPUT', 'SELECT', 'TEXTAREA']);
function yd(t) {
  return md.has(t.tagName) || t.isContentEditable === !0;
}
const We = new WeakSet();
function mo(t) {
  return (e) => {
    e.key === 'Enter' && t(e);
  };
}
function jn(t, e) {
  t.dispatchEvent(new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 }));
}
const gd = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = mo(() => {
    if (We.has(n)) return;
    jn(n, 'down');
    const i = mo(() => {
        jn(n, 'up');
      }),
      o = () => jn(n, 'cancel');
    (n.addEventListener('keyup', i, e), n.addEventListener('blur', o, e));
  });
  (n.addEventListener('keydown', s, e),
    n.addEventListener('blur', () => n.removeEventListener('keydown', s), e));
};
function yo(t) {
  return li(t) && !qa();
}
const go = new WeakSet();
function vd(t, e, n = {}) {
  const [s, i, o] = Za(t, n),
    r = (a) => {
      const l = a.currentTarget;
      if (!yo(a) || go.has(a)) return;
      (We.add(l), n.stopPropagation && go.add(a));
      const u = e(l, a),
        c = (p, y) => {
          (window.removeEventListener('pointerup', f),
            window.removeEventListener('pointercancel', h),
            We.has(l) && We.delete(l),
            yo(p) && typeof u == 'function' && u(p, { success: y }));
        },
        f = (p) => {
          c(p, l === window || l === document || n.useGlobalTarget || Qa(l, p.target));
        },
        h = (p) => {
          c(p, !1);
        };
      (window.addEventListener('pointerup', f, i), window.addEventListener('pointercancel', h, i));
    };
  return (
    s.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener('pointerdown', r, i),
        ze(a) &&
          (a.addEventListener('focus', (u) => gd(u, i)),
          !pd(a) && !a.hasAttribute('tabindex') && (a.tabIndex = 0)));
    }),
    o
  );
}
function fi(t) {
  return ea(t) && 'ownerSVGElement' in t;
}
const He = new WeakMap();
let Ge;
const Ja = (t, e, n) => (s, i) =>
    i && i[0] ? i[0][t + 'Size'] : fi(s) && 'getBBox' in s ? s.getBBox()[e] : s[n],
  Sd = Ja('inline', 'width', 'offsetWidth'),
  Td = Ja('block', 'height', 'offsetHeight');
function xd({ target: t, borderBoxSize: e }) {
  He.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Sd(t, e);
      },
      get height() {
        return Td(t, e);
      },
    });
  });
}
function Md(t) {
  t.forEach(xd);
}
function bd() {
  typeof ResizeObserver > 'u' || (Ge = new ResizeObserver(Md));
}
function wd(t, e) {
  Ge || bd();
  const n = Ya(t);
  return (
    n.forEach((s) => {
      let i = He.get(s);
      (i || ((i = new Set()), He.set(s, i)), i.add(e), Ge?.observe(s));
    }),
    () => {
      n.forEach((s) => {
        const i = He.get(s);
        (i?.delete(e), i?.size || Ge?.unobserve(s));
      });
    }
  );
}
const Ye = new Set();
let Yt;
function Pd() {
  ((Yt = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Ye.forEach((e) => e(t));
  }),
    window.addEventListener('resize', Yt));
}
function Ed(t) {
  return (
    Ye.add(t),
    Yt || Pd(),
    () => {
      (Ye.delete(t),
        !Ye.size &&
          typeof Yt == 'function' &&
          (window.removeEventListener('resize', Yt), (Yt = void 0)));
    }
  );
}
function vo(t, e) {
  return typeof t == 'function' ? Ed(t) : wd(t, e);
}
function Cd(t) {
  return fi(t) && t.tagName === 'svg';
}
const Ad = [...Wa, _, dt],
  Rd = (t) => Ad.find(za(t)),
  So = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xt = () => ({ x: So(), y: So() }),
  To = () => ({ min: 0, max: 0 }),
  W = () => ({ x: To(), y: To() }),
  Vd = new WeakMap();
function gn(t) {
  return t !== null && typeof t == 'object' && typeof t.start == 'function';
}
function xe(t) {
  return typeof t == 'string' || Array.isArray(t);
}
const hi = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  di = ['initial', ...hi];
function vn(t) {
  return gn(t.animate) || di.some((e) => xe(t[e]));
}
function tc(t) {
  return !!(vn(t) || t.variants);
}
function Dd(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (X(i)) t.addValue(s, i);
    else if (X(o)) t.addValue(s, Jt(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, Jt(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Es = { current: null },
  ec = { current: !1 },
  kd = typeof window < 'u';
function Ld() {
  if (((ec.current = !0), !!kd))
    if (window.matchMedia) {
      const t = window.matchMedia('(prefers-reduced-motion)'),
        e = () => (Es.current = t.matches);
      (t.addEventListener('change', e), e());
    } else Es.current = !1;
}
const xo = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
let rn = {};
function nc(t) {
  rn = t;
}
function Od() {
  return rn;
}
class Id {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: r,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = si),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const p = Z.now();
        this.renderScheduledAt < p && ((this.renderScheduledAt = p), F.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = vn(n)),
      (this.isVariantNode = tc(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in h) {
      const y = h[p];
      u[p] !== void 0 && X(y) && y.set(u[p]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        (this.values.get(n)?.jump(this.initialValues[n]),
          (this.latestValues[n] = this.initialValues[n]));
    ((this.current = e),
      Vd.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      this.reducedMotionConfig === 'never'
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === 'always'
          ? (this.shouldReduceMotion = !0)
          : (ec.current || Ld(), (this.shouldReduceMotion = Es.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      At(this.notifyUpdate),
      At(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      n.accelerate && Fa.has(e) && this.current instanceof HTMLElement)
    ) {
      const { factory: r, keyframes: a, times: l, ease: u, duration: c } = n.accelerate,
        f = new Oa({
          element: this.current,
          name: e,
          keyframes: a,
          times: l,
          ease: u,
          duration: et(c),
        }),
        h = r(f);
      this.valueSubscriptions.set(e, () => {
        (h(), f.cancel());
      });
      return;
    }
    const s = se.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on('change', (r) => {
      ((this.latestValues[e] = r),
        this.props.onUpdate && F.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (typeof window < 'u' &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = 'animation';
    for (e in rn) {
      const n = rn[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : W();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < xo.length; s++) {
      const i = xo[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = 'on' + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    ((this.prevMotionValues = Dd(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e));
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = Jt(n === null ? void 0 : n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == 'string' && (ta(s) || na(s))
          ? (s = parseFloat(s))
          : !Rd(s) && dt.test(n) && (s = Ga(e, n)),
        this.setBaseTarget(e, X(s) ? s.get() : s)),
      X(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == 'string' || typeof n == 'object') {
      const o = ri(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !X(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (this.events[e] || (this.events[e] = new Ys()), this.events[e].add(n));
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    ui.render(this.render);
  }
}
class sc extends Id {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = ud));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    X(e) &&
      (this.childSubscription = e.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Vt {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
function ic({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Fd({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function $d(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function Bn(t) {
  return t === void 0 || t === 1;
}
function Cs({ scale: t, scaleX: e, scaleY: n }) {
  return !Bn(t) || !Bn(e) || !Bn(n);
}
function kt(t) {
  return Cs(t) || oc(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function oc(t) {
  return Mo(t.x) || Mo(t.y);
}
function Mo(t) {
  return t && t !== '0%';
}
function an(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function bo(t, e, n, s, i) {
  return (i !== void 0 && (t = an(t, i, s)), an(t, n, s) + e);
}
function As(t, e = 0, n = 1, s, i) {
  ((t.min = bo(t.min, e, n, s, i)), (t.max = bo(t.max, e, n, s, i)));
}
function rc(t, { x: e, y: n }) {
  (As(t.x, e.translate, e.scale, e.originPoint), As(t.y, n.translate, n.scale, n.originPoint));
}
const wo = 0.999999999999,
  Po = 1.0000000000001;
function jd(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (r = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === 'contents') ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        (yt(t.x, -o.scroll.offset.x), yt(t.y, -o.scroll.offset.y)),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), rc(t, r)),
      s && kt(o.latestValues) && Xe(t, o.latestValues, o.layout?.layoutBox));
  }
  (e.x < Po && e.x > wo && (e.x = 1), e.y < Po && e.y > wo && (e.y = 1));
}
function yt(t, e) {
  ((t.min += e), (t.max += e));
}
function Eo(t, e, n, s, i = 0.5) {
  const o = j(t.min, t.max, i);
  As(t, e, n, o, s);
}
function Co(t, e) {
  return typeof t == 'string' ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function Xe(t, e, n) {
  const s = n ?? t;
  (Eo(t.x, Co(e.x, s.x), e.scaleX, e.scale, e.originX),
    Eo(t.y, Co(e.y, s.y), e.scaleY, e.scale, e.originY));
}
function ac(t, e) {
  return ic($d(t.getBoundingClientRect(), e));
}
function Bd(t, e, n) {
  const s = ac(t, n),
    { scroll: i } = e;
  return (i && (yt(s.x, i.offset.x), yt(s.y, i.offset.y)), s);
}
const Nd = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  _d = ne.length;
function Ud(t, e, n) {
  let s = '',
    i = !0;
  for (let o = 0; o < _d; o++) {
    const r = ne[o],
      a = t[r];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == 'number') l = a === (r.startsWith('scale') ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = r.startsWith('scale') ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = Xa(a, ci[r]);
      if (!l) {
        i = !1;
        const c = Nd[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return ((s = s.trim()), n ? (s = n(e, i ? '' : s)) : i && (s = 'none'), s);
}
function pi(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const l in e) {
    const u = e[l];
    if (se.has(l)) {
      r = !0;
      continue;
    } else if (ga(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Xa(u, ci[l]);
      l.startsWith('origin') ? ((a = !0), (o[l] = c)) : (s[l] = c);
    }
  }
  if (
    (e.transform ||
      (r || n ? (s.transform = Ud(e, t.transform, n)) : s.transform && (s.transform = 'none')),
    a)
  ) {
    const { originX: l = '50%', originY: u = '50%', originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
function cc(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function Ao(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const oe = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == 'string')
        if (C.test(t)) t = parseFloat(t);
        else return t;
      const n = Ao(t, e.target.x),
        s = Ao(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Kd = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = dt.parse(t);
      if (i.length > 5) return s;
      const o = dt.createTransformer(t),
        r = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + r] /= a), (i[1 + r] /= l));
      const u = j(a, l, 0.5);
      return (
        typeof i[2 + r] == 'number' && (i[2 + r] /= u),
        typeof i[3 + r] == 'number' && (i[3 + r] /= u),
        o(i)
      );
    },
  },
  Rs = {
    borderRadius: {
      ...oe,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: oe,
    borderTopRightRadius: oe,
    borderBottomLeftRadius: oe,
    borderBottomRightRadius: oe,
    boxShadow: Kd,
  };
function uc(t, { layout: e, layoutId: n }) {
  return (
    se.has(t) || t.startsWith('origin') || ((e || n !== void 0) && (!!Rs[t] || t === 'opacity'))
  );
}
function mi(t, e, n) {
  const s = t.style,
    i = e?.style,
    o = {};
  if (!s) return o;
  for (const r in s)
    (X(s[r]) || (i && X(i[r])) || uc(r, t) || n?.getValue(r)?.liveStyle !== void 0) &&
      (o[r] = s[r]);
  return o;
}
function zd(t) {
  return window.getComputedStyle(t);
}
class Wd extends sc {
  constructor() {
    (super(...arguments), (this.type = 'html'), (this.renderInstance = cc));
  }
  readValueFromInstance(e, n) {
    if (se.has(n)) return this.projection?.isProjecting ? ms(n) : fh(e, n);
    {
      const s = zd(e),
        i = (ga(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == 'string' ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return ac(e, n);
  }
  build(e, n, s) {
    pi(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return mi(e, n, s);
  }
}
const Hd = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Gd = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function Yd(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Hd : Gd;
  ((t[o.offset] = `${-s}`), (t[o.array] = `${e} ${n}`));
}
const Xd = ['offsetDistance', 'offsetPath', 'offsetRotate', 'offsetAnchor'];
function lc(
  t,
  { attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o = 1, pathOffset: r = 0, ...a },
  l,
  u,
  c,
) {
  if ((pi(t, a, u), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: f, style: h } = t;
  (f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
      ((h.transformOrigin = f.transformOrigin ?? '50% 50%'), delete f.transformOrigin),
    h.transform && ((h.transformBox = c?.transformBox ?? 'fill-box'), delete f.transformBox));
  for (const p of Xd) f[p] !== void 0 && ((h[p] = f[p]), delete f[p]);
  (e !== void 0 && (f.x = e),
    n !== void 0 && (f.y = n),
    s !== void 0 && (f.scale = s),
    i !== void 0 && Yd(f, i, o, r, !1));
}
const fc = new Set([
    'baseFrequency',
    'diffuseConstant',
    'kernelMatrix',
    'kernelUnitLength',
    'keySplines',
    'keyTimes',
    'limitingConeAngle',
    'markerHeight',
    'markerWidth',
    'numOctaves',
    'targetX',
    'targetY',
    'surfaceScale',
    'specularConstant',
    'specularExponent',
    'stdDeviation',
    'tableValues',
    'viewBox',
    'gradientTransform',
    'pathLength',
    'startOffset',
    'textLength',
    'lengthAdjust',
  ]),
  hc = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function qd(t, e, n, s) {
  cc(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(fc.has(i) ? i : ai(i), e.attrs[i]);
}
function dc(t, e, n) {
  const s = mi(t, e, n);
  for (const i in t)
    if (X(t[i]) || X(e[i])) {
      const o = ne.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
class Zd extends sc {
  constructor() {
    (super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = W));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (se.has(n)) {
      const s = Ha(n);
      return (s && s.default) || 0;
    }
    return ((n = fc.has(n) ? n : ai(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return dc(e, n, s);
  }
  build(e, n, s) {
    lc(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    qd(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = hc(e.tagName)), super.mount(e));
  }
}
const Qd = di.length;
function pc(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? pc(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < Qd; n++) {
    const s = di[n],
      i = t.props[s];
    (xe(i) || i === !1) && (e[s] = i);
  }
  return e;
}
function mc(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const Jd = [...hi].reverse(),
  tp = hi.length;
function ep(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Qh(t, n, s)));
}
function np(t) {
  let e = ep(t),
    n = Ro(),
    s = !0,
    i = !1;
  const o = (u) => (c, f) => {
    const h = _t(t, f, u === 'exit' ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: y, ...v } = h;
      c = { ...c, ...v, ...y };
    }
    return c;
  };
  function r(u) {
    e = u(t);
  }
  function a(u) {
    const { props: c } = t,
      f = pc(t.parent) || {},
      h = [],
      p = new Set();
    let y = {},
      v = 1 / 0;
    for (let S = 0; S < tp; S++) {
      const T = Jd[S],
        x = n[T],
        M = c[T] !== void 0 ? c[T] : f[T],
        b = xe(M),
        A = T === u ? x.isActive : null;
      A === !1 && (v = S);
      let w = M === f[T] && M !== c[T] && b;
      if (
        (w && (s || i) && t.manuallyAnimateOnMount && (w = !1),
        (x.protectedKeys = { ...y }),
        (!x.isActive && A === null) || (!M && !x.prevProp) || gn(M) || typeof M == 'boolean')
      )
        continue;
      if (T === 'exit' && x.isActive && A !== !0) {
        x.prevResolvedValues && (y = { ...y, ...x.prevResolvedValues });
        continue;
      }
      const E = sp(x.prevProp, M);
      let V = E || (T === u && x.isActive && !w && b) || (S > v && b),
        P = !1;
      const R = Array.isArray(M) ? M : [M];
      let I = R.reduce(o(T), {});
      A === !1 && (I = {});
      const { prevResolvedValues: K = {} } = x,
        G = { ...K, ...I },
        nt = (z) => {
          ((V = !0), p.has(z) && ((P = !0), p.delete(z)), (x.needsAnimating[z] = !0));
          const q = t.getValue(z);
          q && (q.liveStyle = !1);
        };
      for (const z in G) {
        const q = I[z],
          st = K[z];
        if (y.hasOwnProperty(z)) continue;
        let xt = !1;
        (xs(q) && xs(st) ? (xt = !mc(q, st)) : (xt = q !== st),
          xt
            ? q != null
              ? nt(z)
              : p.add(z)
            : q !== void 0 && p.has(z)
              ? nt(z)
              : (x.protectedKeys[z] = !0));
      }
      ((x.prevProp = M),
        (x.prevResolvedValues = I),
        x.isActive && (y = { ...y, ...I }),
        (s || i) && t.blockInitialAnimation && (V = !1));
      const tt = w && E;
      V &&
        (!tt || P) &&
        h.push(
          ...R.map((z) => {
            const q = { type: T };
            if (typeof z == 'string' && (s || i) && !tt && t.manuallyAnimateOnMount && t.parent) {
              const { parent: st } = t,
                xt = _t(st, z);
              if (st.enteringChildren && xt) {
                const { delayChildren: Mt } = xt.transition || {};
                q.delay = $a(st.enteringChildren, t, Mt);
              }
            }
            return { animation: z, options: q };
          }),
        );
    }
    if (p.size) {
      const S = {};
      if (typeof c.initial != 'boolean') {
        const T = _t(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        T && T.transition && (S.transition = T.transition);
      }
      (p.forEach((T) => {
        const x = t.getBaseTarget(T),
          M = t.getValue(T);
        (M && (M.liveStyle = !0), (S[T] = x ?? null));
      }),
        h.push({ animation: S }));
    }
    let d = !!h.length;
    return (
      s && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (d = !1),
      (s = !1),
      (i = !1),
      d ? e(h) : Promise.resolve()
    );
  }
  function l(u, c) {
    if (n[u].isActive === c) return Promise.resolve();
    (t.variantChildren?.forEach((h) => h.animationState?.setActive(u, c)), (n[u].isActive = c));
    const f = a(u);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      ((n = Ro()), (i = !0));
    },
  };
}
function sp(t, e) {
  return typeof e == 'string' ? e !== t : Array.isArray(e) ? !mc(e, t) : !1;
}
function Dt(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Ro() {
  return {
    animate: Dt(!0),
    whileInView: Dt(),
    whileHover: Dt(),
    whileTap: Dt(),
    whileDrag: Dt(),
    whileFocus: Dt(),
    exit: Dt(),
  };
}
function Vs(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function ct(t, e) {
  (Vs(t.x, e.x), Vs(t.y, e.y));
}
function Vo(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
const yc = 1e-4,
  ip = 1 - yc,
  op = 1 + yc,
  gc = 0.01,
  rp = 0 - gc,
  ap = 0 + gc;
function Q(t) {
  return t.max - t.min;
}
function cp(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Do(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = j(e.min, e.max, t.origin)),
    (t.scale = Q(n) / Q(e)),
    (t.translate = j(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= ip && t.scale <= op) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= rp && t.translate <= ap) || isNaN(t.translate)) && (t.translate = 0));
}
function de(t, e, n, s) {
  (Do(t.x, e.x, n.x, s ? s.originX : void 0), Do(t.y, e.y, n.y, s ? s.originY : void 0));
}
function ko(t, e, n, s = 0) {
  const i = s ? j(n.min, n.max, s) : n.min;
  ((t.min = i + e.min), (t.max = t.min + Q(e)));
}
function up(t, e, n, s) {
  (ko(t.x, e.x, n.x, s?.x), ko(t.y, e.y, n.y, s?.y));
}
function Lo(t, e, n, s = 0) {
  const i = s ? j(n.min, n.max, s) : n.min;
  ((t.min = e.min - i), (t.max = t.min + Q(e)));
}
function cn(t, e, n, s) {
  (Lo(t.x, e.x, n.x, s?.x), Lo(t.y, e.y, n.y, s?.y));
}
function Oo(t, e, n, s, i) {
  return ((t -= e), (t = an(t, 1 / n, s)), i !== void 0 && (t = an(t, 1 / i, s)), t);
}
function lp(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (gt.test(e) && ((e = parseFloat(e)), (e = j(r.min, r.max, e / 100) - r.min)),
    typeof e != 'number')
  )
    return;
  let a = j(o.min, o.max, s);
  (t === o && (a -= e), (t.min = Oo(t.min, e, n, a, i)), (t.max = Oo(t.max, e, n, a, i)));
}
function Io(t, e, [n, s, i], o, r) {
  lp(t, e[n], e[s], e[i], e.scale, o, r);
}
const fp = ['x', 'scaleX', 'originX'],
  hp = ['y', 'scaleY', 'originY'];
function Fo(t, e, n, s) {
  (Io(t.x, e, fp, n ? n.x : void 0, s ? s.x : void 0),
    Io(t.y, e, hp, n ? n.y : void 0, s ? s.y : void 0));
}
function $o(t) {
  return t.translate === 0 && t.scale === 1;
}
function vc(t) {
  return $o(t.x) && $o(t.y);
}
function jo(t, e) {
  return t.min === e.min && t.max === e.max;
}
function dp(t, e) {
  return jo(t.x, e.x) && jo(t.y, e.y);
}
function Bo(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Sc(t, e) {
  return Bo(t.x, e.x) && Bo(t.y, e.y);
}
function No(t) {
  return Q(t.x) / Q(t.y);
}
function _o(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function mt(t) {
  return [t('x'), t('y')];
}
function pp(t, e, n) {
  let s = '';
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: h, skewX: p, skewY: y } = n;
    (u && (s = `perspective(${u}px) ${s}`),
      c && (s += `rotate(${c}deg) `),
      f && (s += `rotateX(${f}deg) `),
      h && (s += `rotateY(${h}deg) `),
      p && (s += `skewX(${p}deg) `),
      y && (s += `skewY(${y}deg) `));
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || 'none');
}
const Tc = [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ],
  mp = Tc.length,
  Uo = (t) => (typeof t == 'string' ? parseFloat(t) : t),
  Ko = (t) => typeof t == 'number' || C.test(t);
function yp(t, e, n, s, i, o) {
  i
    ? ((t.opacity = j(0, n.opacity ?? 1, gp(s))), (t.opacityExit = j(e.opacity ?? 1, 0, vp(s))))
    : o && (t.opacity = j(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < mp; r++) {
    const a = Tc[r];
    let l = zo(e, a),
      u = zo(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ko(l) === Ko(u)
        ? ((t[a] = Math.max(j(Uo(l), Uo(u), s), 0)), (gt.test(u) || gt.test(l)) && (t[a] += '%'))
        : (t[a] = u));
  }
  (e.rotate || n.rotate) && (t.rotate = j(e.rotate || 0, n.rotate || 0, s));
}
function zo(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const gp = xc(0, 0.5, fa),
  vp = xc(0.5, 0.95, rt);
function xc(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Se(t, e, s)));
}
function Sp(t, e, n) {
  const s = X(t) ? t : Jt(t);
  return (s.start(oi('', s, e, n)), s.animation);
}
function Me(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n));
}
const Tp = (t, e) => t.depth - e.depth;
class xp {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (Hs(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (tn(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Tp), (this.isDirty = !1), this.children.forEach(e));
  }
}
function Mp(t, e) {
  const n = Z.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (At(s), t(o - e));
    };
  return (F.setup(s, !0), () => At(s));
}
function qe(t) {
  return X(t) ? t.get() : t;
}
class bp {
  constructor() {
    this.members = [];
  }
  add(e) {
    Hs(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s === e || s === this.lead || s === this.prevLead) continue;
      const i = s.instance;
      (!i || i.isConnected === !1) && !s.snapshot && (tn(this.members, s), s.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((tn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1) return (this.promote(s), !0);
    }
    return !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.updateSnapshot(), e.scheduleRender());
      const { layoutDependency: i } = s.options,
        { layoutDependency: o } = e.options;
      ((i === void 0 || i !== o) &&
        ((e.resumeFrom = s),
        n && (s.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && s.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const Ze = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Nn = ['', 'X', 'Y', 'Z'],
  wp = 1e3;
let Pp = 0;
function _n(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Mc(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Ua(e);
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, 'transform', F, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Mc(s);
}
function bc({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e?.()) {
      ((this.id = Pp++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Ap),
            this.nodes.forEach(Op),
            this.nodes.forEach(Ip),
            this.nodes.forEach(Rp));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xp());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new Ys()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      ((this.isSVG = fi(r) && !Cd(r)), (this.instance = r));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let c,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        (F.read(() => {
          f = window.innerWidth;
        }),
          t(r, () => {
            const p = window.innerWidth;
            p !== f &&
              ((f = p),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = Mp(h, 250)),
              Ze.hasAnimatedSinceResize &&
                ((Ze.hasAnimatedSinceResize = !1), this.nodes.forEach(Go)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: p }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const y = this.options.transition || u.getDefaultTransition() || Np,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: d } = u.getProps(),
                S = !this.targetLayout || !Sc(this.targetLayout, p),
                T = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                T ||
                (f && (S || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const x = { ...ii(y, 'layout'), onPlay: v, onComplete: d };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x),
                  this.setAnimationOrigin(c, T));
              } else
                (f || Go(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = p;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        At(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Fp), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Mc(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == 'string' || typeof f.latestValues.y == 'string') &&
            (f.isLayoutDirty = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners('willUpdate'));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(Dp),
          this.nodes.forEach(Wo));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ho);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(kp),
            this.nodes.forEach(Lp),
            this.nodes.forEach(Ep),
            this.nodes.forEach(Cp))
          : this.nodes.forEach(Ho),
        this.clearAllSnapshots());
      const a = Z.now();
      ((Y.delta = vt(0, 1e3 / 60, a - Y.timestamp)),
        (Y.timestamp = a),
        (Y.isProcessing = !0),
        kn.update.process(Y),
        kn.preRender.process(Y),
        kn.render.process(Y),
        (Y.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), ui.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Vp), this.sharedNodes.forEach($p));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Q(this.snapshot.measuredBox.x) &&
          !Q(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = W()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a && a.notify('LayoutMeasure', this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
        a && this.instance)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !vc(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (a || kt(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        _p(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return W();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Up))) {
        const { scroll: u } = this.root;
        u && (yt(a.x, u.offset.x), yt(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = W();
      if ((ct(a, r), this.scroll?.wasRoot)) return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        u !== this.root &&
          c &&
          f.layoutScroll &&
          (c.wasRoot && ct(a, r), yt(a.x, c.offset.x), yt(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, l) {
      const u = l || W();
      ct(u, r);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (!a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          (yt(u.x, -f.scroll.offset.x), yt(u.y, -f.scroll.offset.y)),
          kt(f.latestValues) && Xe(u, f.latestValues, f.layout?.layoutBox));
      }
      return (kt(this.latestValues) && Xe(u, this.latestValues, this.layout?.layoutBox), u);
    }
    removeTransform(r) {
      const a = W();
      ct(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!kt(u.latestValues)) continue;
        let c;
        (u.instance &&
          (Cs(u.latestValues) && u.updateSnapshot(), (c = W()), ct(c, u.measurePageBox())),
          Fo(a, u.latestValues, u.snapshot?.layoutBox, c));
      }
      return (kt(this.latestValues) && Fo(a, this.latestValues), a);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Y.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = Y.timestamp;
      const h = this.getClosestProjectingParent();
      (h &&
        this.linkedParentVersion !== h.layoutVersion &&
        !h.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && h && h.layout
            ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = W()), (this.targetWithTransforms = W())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              up(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : ct(this.target, this.layout.layoutBox),
                rc(this.target, this.targetDelta))
              : ct(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(h, this.target, h.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Cs(this.parent.latestValues) || oc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(r, a, l) {
      ((this.relativeParent = r),
        (this.linkedParentVersion = r.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = W()),
        (this.relativeTargetOrigin = W()),
        cn(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0),
        ct(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r;
      let l = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === Y.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      ct(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      (jd(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = W())));
      const { target: p } = r;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vo(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vo(this.prevProjectionDelta.y, this.projectionDelta.y)),
        de(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !_o(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !_o(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', p)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.visualElement?.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Xt()),
        (this.projectionDelta = Xt()),
        (this.projectionDeltaWithTransform = Xt()));
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Xt();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = W(),
        p = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = p !== y,
        d = this.getStack(),
        S = !d || d.members.length <= 1,
        T = !!(v && !S && this.options.crossfade === !0 && !this.path.some(Bp));
      this.animationProgress = 0;
      let x;
      ((this.mixTargetDelta = (M) => {
        const b = M / 1e3;
        (Yo(f.x, r.x, b),
          Yo(f.y, r.y, b),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (cn(
              h,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            jp(this.relativeTarget, this.relativeTargetOrigin, h, b),
            x && dp(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = W()),
            ct(x, this.relativeTarget)),
          v && ((this.animationValues = c), yp(c, u, this.latestValues, b, T, S)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = b));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      (this.notifyListeners('animationStart'),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (At(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = F.update(() => {
          ((Ze.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Jt(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Sp(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a));
              },
              onStop: () => {},
              onComplete: () => {
                (r.onComplete && r.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete'));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(wp), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (
          this !== r &&
          this.layout &&
          u &&
          wc(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || W();
          const f = Q(this.layout.layoutBox.x);
          ((l.x.min = r.target.x.min), (l.x.max = l.x.min + f));
          const h = Q(this.layout.layoutBox.y);
          ((l.y.min = r.target.y.min), (l.y.max = l.y.min + h));
        }
        (ct(a, l), Xe(a, c), de(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(r, a) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new bp()),
        this.sharedNodes.get(r).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && _n('z', r, u, this.animationValues);
      for (let c = 0; c < Nn.length; c++)
        (_n(`rotate${Nn[c]}`, r, u, this.animationValues),
          _n(`skew${Nn[c]}`, r, u, this.animationValues));
      r.render();
      for (const c in u)
        (r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]));
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = 'hidden';
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (r.visibility = ''),
          (r.opacity = ''),
          (r.pointerEvents = qe(a?.pointerEvents) || ''),
          (r.transform = l ? l(this.latestValues, '') : 'none'));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (r.pointerEvents = qe(a?.pointerEvents) || '')),
          this.hasProjected &&
            !kt(this.latestValues) &&
            ((r.transform = l ? l({}, '') : 'none'), (this.hasProjected = !1)));
        return;
      }
      r.visibility = '';
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = pp(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (r.transform = f));
      const { x: h, y: p } = this.projectionDelta;
      ((r.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`),
        u.animationValues
          ? (r.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (r.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ''
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const y in Rs) {
        if (c[y] === void 0) continue;
        const { correct: v, applyTo: d, isCSSVariable: S } = Rs[y],
          T = f === 'none' ? c[y] : v(c[y], u);
        if (d) {
          const x = d.length;
          for (let M = 0; M < x; M++) r[d[M]] = T;
        } else S ? (this.options.visualElement.renderState.vars[y] = T) : (r[y] = T);
      }
      this.options.layoutId && (r.pointerEvents = u === this ? qe(a?.pointerEvents) || '' : 'none');
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((r) => r.currentAnimation?.stop()),
        this.root.nodes.forEach(Wo),
        this.root.sharedNodes.clear());
    }
  };
}
function Ep(t) {
  t.updateLayout();
}
function Cp(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners('didUpdate')) {
    const { layoutBox: n, measuredBox: s } = t.layout,
      { animationType: i } = t.options,
      o = e.source !== t.layout.source;
    if (i === 'size')
      mt((c) => {
        const f = o ? e.measuredBox[c] : e.layoutBox[c],
          h = Q(f);
        ((f.min = n[c].min), (f.max = f.min + h));
      });
    else if (i === 'x' || i === 'y') {
      const c = i === 'x' ? 'y' : 'x';
      Vs(o ? e.measuredBox[c] : e.layoutBox[c], n[c]);
    } else
      wc(i, e.layoutBox, n) &&
        mt((c) => {
          const f = o ? e.measuredBox[c] : e.layoutBox[c],
            h = Q(n[c]);
          ((f.max = f.min + h),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[c].max = t.relativeTarget[c].min + h)));
        });
    const r = Xt();
    de(r, n, e.layoutBox);
    const a = Xt();
    o ? de(a, t.applyTransform(s, !0), e.measuredBox) : de(a, n, e.layoutBox);
    const l = !vc(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: f, layout: h } = c;
        if (f && h) {
          const p = t.options.layoutAnchor || void 0,
            y = W();
          cn(y, e.layoutBox, f.layoutBox, p);
          const v = W();
          (cn(v, n, h.layoutBox, p),
            Sc(y, v) || (u = !0),
            c.options.layoutRoot &&
              ((t.relativeTarget = v), (t.relativeTargetOrigin = y), (t.relativeParent = c)));
        }
      }
    }
    t.notifyListeners('didUpdate', {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Ap(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Rp(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Vp(t) {
  t.clearSnapshot();
}
function Wo(t) {
  t.clearMeasurements();
}
function Dp(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Ho(t) {
  t.isLayoutDirty = !1;
}
function kp(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function Lp(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'), t.resetTransform());
}
function Go(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function Op(t) {
  t.resolveTargetDelta();
}
function Ip(t) {
  t.calcProjection();
}
function Fp(t) {
  t.resetSkewAndRotation();
}
function $p(t) {
  t.removeLeadSnapshot();
}
function Yo(t, e, n) {
  ((t.translate = j(e.translate, 0, n)),
    (t.scale = j(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Xo(t, e, n, s) {
  ((t.min = j(e.min, n.min, s)), (t.max = j(e.max, n.max, s)));
}
function jp(t, e, n, s) {
  (Xo(t.x, e.x, n.x, s), Xo(t.y, e.y, n.y, s));
}
function Bp(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Np = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  qo = (t) =>
    typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  Zo = qo('applewebkit/') && !qo('chrome/') ? Math.round : rt;
function Qo(t) {
  ((t.min = Zo(t.min)), (t.max = Zo(t.max)));
}
function _p(t) {
  (Qo(t.x), Qo(t.y));
}
function wc(t, e, n) {
  return t === 'position' || (t === 'preserve-aspect' && !cp(No(e), No(n), 0.2));
}
function Up(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Kp = bc({
    attachResizeListener: (t, e) => Me(t, 'resize', e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  zp = (t) => !t.isLayoutDirty && t.willUpdate(!1);
function Jo() {
  const t = new Set(),
    e = new WeakMap(),
    n = () => t.forEach(zp);
  return {
    add: (s) => {
      (t.add(s), e.set(s, s.addEventListener('willUpdate', n)));
    },
    remove: (s) => {
      t.delete(s);
      const i = e.get(s);
      (i && (i(), e.delete(s)), n());
    },
    dirty: n,
  };
}
const Un = { current: void 0 },
  Pc = bc({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Un.current) {
        const t = new Kp({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Un.current = t));
      }
      return Un.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : 'none';
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
  }),
  yi = g.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: 'never' });
function tr(t, e) {
  if (typeof t == 'function') return t(e);
  t != null && (t.current = e);
}
function Wp(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const o = tr(i, e);
      return (!n && typeof o == 'function' && (n = !0), o);
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const o = s[i];
          typeof o == 'function' ? o() : tr(t[i], null);
        }
      };
  };
}
function Hp(...t) {
  return g.useCallback(Wp(...t), t);
}
class Gp extends g.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (ze(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const s = n.offsetParent,
        i = (ze(s) && s.offsetWidth) || 0,
        o = (ze(s) && s.offsetHeight) || 0,
        r = getComputedStyle(n),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(r.height)),
        (a.width = parseFloat(r.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = o - a.height - a.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Yp({ children: t, isPresent: e, anchorX: n, anchorY: s, root: i, pop: o }) {
  const r = g.useId(),
    a = g.useRef(null),
    l = g.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = g.useContext(yi),
    c = t.props?.ref ?? t?.ref,
    f = Hp(a, c);
  return (
    g.useInsertionEffect(() => {
      const { width: h, height: p, top: y, left: v, right: d, bottom: S } = l.current;
      if (e || o === !1 || !a.current || !h || !p) return;
      const T = n === 'left' ? `left: ${v}` : `right: ${d}`,
        x = s === 'bottom' ? `bottom: ${S}` : `top: ${y}`;
      a.current.dataset.motionPopId = r;
      const M = document.createElement('style');
      u && (M.nonce = u);
      const b = i ?? document.head;
      return (
        b.appendChild(M),
        M.sheet &&
          M.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${T}px !important;
            ${x}px !important;
          }
        `),
        () => {
          (a.current?.removeAttribute('data-motion-pop-id'), b.contains(M) && b.removeChild(M));
        }
      );
    }, [e]),
    ot.jsx(Gp, {
      isPresent: e,
      childRef: a,
      sizeRef: l,
      pop: o,
      children: o === !1 ? t : g.cloneElement(t, { ref: f }),
    })
  );
}
const Xp = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: o,
  mode: r,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = zs(qp),
    f = g.useId();
  let h = !0,
    p = g.useMemo(
      () => (
        (h = !1),
        {
          id: f,
          initial: e,
          isPresent: n,
          custom: i,
          onExitComplete: (y) => {
            c.set(y, !0);
            for (const v of c.values()) if (!v) return;
            s && s();
          },
          register: (y) => (c.set(y, !1), () => c.delete(y)),
        }
      ),
      [n, c, s],
    );
  return (
    o && h && (p = { ...p }),
    g.useMemo(() => {
      c.forEach((y, v) => c.set(v, !1));
    }, [n]),
    g.useEffect(() => {
      !n && !c.size && s && s();
    }, [n]),
    (t = ot.jsx(Yp, {
      pop: r === 'popLayout',
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: t,
    })),
    ot.jsx(be.Provider, { value: p, children: t })
  );
};
function qp() {
  return new Map();
}
function Ec(t = !0) {
  const e = g.useContext(be);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = g.useId();
  g.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = g.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
function Cv() {
  return Zp(g.useContext(be));
}
function Zp(t) {
  return t === null ? !0 : t.isPresent;
}
const $e = (t) => t.key || '';
function er(t) {
  const e = [];
  return (
    g.Children.forEach(t, (n) => {
      g.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Av = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    presenceAffectsLayout: i = !0,
    mode: o = 'sync',
    propagate: r = !1,
    anchorX: a = 'left',
    anchorY: l = 'top',
    root: u,
  }) => {
    const [c, f] = Ec(r),
      h = g.useMemo(() => er(t), [t]),
      p = r && !c ? [] : h.map($e),
      y = g.useRef(!0),
      v = g.useRef(h),
      d = zs(() => new Map()),
      S = g.useRef(new Set()),
      [T, x] = g.useState(h),
      [M, b] = g.useState(h);
    Ws(() => {
      ((y.current = !1), (v.current = h));
      for (let E = 0; E < M.length; E++) {
        const V = $e(M[E]);
        p.includes(V) ? (d.delete(V), S.current.delete(V)) : d.get(V) !== !0 && d.set(V, !1);
      }
    }, [M, p.length, p.join('-')]);
    const A = [];
    if (h !== T) {
      let E = [...h];
      for (let V = 0; V < M.length; V++) {
        const P = M[V],
          R = $e(P);
        p.includes(R) || (E.splice(V, 0, P), A.push(P));
      }
      return (o === 'wait' && A.length && (E = A), b(er(E)), x(h), null);
    }
    const { forceRender: w } = g.useContext(ve);
    return ot.jsx(ot.Fragment, {
      children: M.map((E) => {
        const V = $e(E),
          P = r && !c ? !1 : h === M || p.includes(V),
          R = () => {
            if (S.current.has(V)) return;
            if (d.has(V)) (S.current.add(V), d.set(V, !0));
            else return;
            let I = !0;
            (d.forEach((K) => {
              K || (I = !1);
            }),
              I && (w?.(), b(v.current), r && f?.(), s && s()));
          };
        return ot.jsx(
          Xp,
          {
            isPresent: P,
            initial: !y.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: i,
            mode: o,
            root: u,
            onExitComplete: P ? void 0 : R,
            anchorX: a,
            anchorY: l,
            children: E,
          },
          V,
        );
      }),
    });
  },
  Qp = g.createContext(null);
function Jp() {
  const t = g.useRef(!1);
  return (
    Ws(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      [],
    ),
    t
  );
}
function tm() {
  const t = Jp(),
    [e, n] = g.useState(0),
    s = g.useCallback(() => {
      t.current && n(e + 1);
    }, [e]);
  return [g.useCallback(() => F.postRender(s), [s]), e];
}
const Cc = (t) => t === !0,
  em = (t) => Cc(t === !0) || t === 'id',
  Rv = ({ children: t, id: e, inherit: n = !0 }) => {
    const s = g.useContext(ve),
      i = g.useContext(Qp),
      [o, r] = tm(),
      a = g.useRef(null),
      l = s.id || i;
    a.current === null &&
      (em(n) && l && (e = e ? l + '-' + e : l),
      (a.current = { id: e, group: (Cc(n) && s.group) || Jo() }));
    const u = g.useMemo(() => ({ ...a.current, forceRender: o }), [r]);
    return ot.jsx(ve.Provider, { value: u, children: t });
  },
  gi = g.createContext({ strict: !1 }),
  nr = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  };
let sr = !1;
function nm() {
  if (sr) return;
  const t = {};
  for (const e in nr) t[e] = { isEnabled: (n) => nr[e].some((s) => !!n[s]) };
  (nc(t), (sr = !0));
}
function Ac() {
  return (nm(), Od());
}
function Ds(t) {
  const e = Ac();
  for (const n in t) e[n] = { ...e[n], ...t[n] };
  nc(e);
}
function Vv({ children: t, features: e, strict: n = !1 }) {
  const [, s] = g.useState(!Kn(e)),
    i = g.useRef(void 0);
  if (!Kn(e)) {
    const { renderer: o, ...r } = e;
    ((i.current = o), Ds(r));
  }
  return (
    g.useEffect(() => {
      Kn(e) &&
        e().then(({ renderer: o, ...r }) => {
          (Ds(r), (i.current = o), s(!0));
        });
    }, []),
    ot.jsx(gi.Provider, { value: { renderer: i.current, strict: n }, children: t })
  );
}
function Kn(t) {
  return typeof t == 'function';
}
const sm = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'propagate',
  'ignoreStrict',
  'viewport',
]);
function un(t) {
  return (
    t.startsWith('while') ||
    (t.startsWith('drag') && t !== 'draggable') ||
    t.startsWith('layout') ||
    t.startsWith('onTap') ||
    t.startsWith('onPan') ||
    t.startsWith('onLayout') ||
    sm.has(t)
  );
}
let Rc = (t) => !un(t);
function im(t) {
  typeof t == 'function' && (Rc = (e) => (e.startsWith('on') ? !un(e) : t(e)));
}
try {
  im(require('@emotion/is-prop-valid').default);
} catch {}
function om(t, e, n) {
  const s = {};
  for (const i in t)
    (i === 'values' && typeof t.values == 'object') ||
      X(t[i]) ||
      ((Rc(i) ||
        (n === !0 && un(i)) ||
        (!e && !un(i)) ||
        (t.draggable && i.startsWith('onDrag'))) &&
        (s[i] = t[i]));
  return s;
}
const Sn = g.createContext({});
function rm(t, e) {
  if (vn(t)) {
    const { initial: n, animate: s } = t;
    return { initial: n === !1 || xe(n) ? n : void 0, animate: xe(s) ? s : void 0 };
  }
  return t.inherit !== !1 ? e : {};
}
function am(t) {
  const { initial: e, animate: n } = rm(t, g.useContext(Sn));
  return g.useMemo(() => ({ initial: e, animate: n }), [ir(e), ir(n)]);
}
function ir(t) {
  return Array.isArray(t) ? t.join(' ') : t;
}
const vi = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Vc(t, e, n) {
  for (const s in e) !X(e[s]) && !uc(s, n) && (t[s] = e[s]);
}
function cm({ transformTemplate: t }, e) {
  return g.useMemo(() => {
    const n = vi();
    return (pi(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function um(t, e) {
  const n = t.style || {},
    s = {};
  return (Vc(s, n, t), Object.assign(s, cm(t, e)), s);
}
function lm(t, e) {
  const n = {},
    s = um(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
      (s.touchAction = t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const Dc = () => ({ ...vi(), attrs: {} });
function fm(t, e, n, s) {
  const i = g.useMemo(() => {
    const o = Dc();
    return (lc(o, e, hc(s), t.transformTemplate, t.style), { ...o.attrs, style: { ...o.style } });
  }, [e]);
  if (t.style) {
    const o = {};
    (Vc(o, t.style, t), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const hm = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Si(t) {
  return typeof t != 'string' || t.includes('-') ? !1 : !!(hm.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function dm(t, e, n, { latestValues: s }, i, o = !1, r) {
  const l = ((r ?? Si(t)) ? fm : lm)(e, s, i, t),
    u = om(e, typeof t == 'string', o),
    c = t !== g.Fragment ? { ...u, ...l, ref: n } : {},
    { children: f } = e,
    h = g.useMemo(() => (X(f) ? f.get() : f), [f]);
  return g.createElement(t, { ...c, children: h });
}
function pm({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: mm(n, s, i, t), renderState: e() };
}
function mm(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const h in o) i[h] = qe(o[h]);
  let { initial: r, animate: a } = t;
  const l = vn(t),
    u = tc(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const f = c ? a : r;
  if (f && typeof f != 'boolean' && !gn(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let p = 0; p < h.length; p++) {
      const y = ri(t, h[p]);
      if (y) {
        const { transitionEnd: v, transition: d, ...S } = y;
        for (const T in S) {
          let x = S[T];
          if (Array.isArray(x)) {
            const M = c ? x.length - 1 : 0;
            x = x[M];
          }
          x !== null && (i[T] = x);
        }
        for (const T in v) i[T] = v[T];
      }
    }
  }
  return i;
}
const kc = (t) => (e, n) => {
    const s = g.useContext(Sn),
      i = g.useContext(be),
      o = () => pm(t, e, s, i);
    return n ? o() : zs(o);
  },
  ym = kc({ scrapeMotionValuesFromProps: mi, createRenderState: vi }),
  gm = kc({ scrapeMotionValuesFromProps: dc, createRenderState: Dc }),
  vm = Symbol.for('motionComponentSymbol');
function Sm(t, e, n) {
  const s = g.useRef(n);
  g.useInsertionEffect(() => {
    s.current = n;
  });
  const i = g.useRef(null);
  return g.useCallback(
    (o) => {
      o && t.onMount?.(o);
      const r = s.current;
      if (typeof r == 'function')
        if (o) {
          const a = r(o);
          typeof a == 'function' && (i.current = a);
        } else i.current ? (i.current(), (i.current = null)) : r(o);
      else r && (r.current = o);
      e && (o ? e.mount(o) : e.unmount());
    },
    [e],
  );
}
const Lc = g.createContext({});
function Ht(t) {
  return t && typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current');
}
function Tm(t, e, n, s, i, o) {
  const { visualElement: r } = g.useContext(Sn),
    a = g.useContext(gi),
    l = g.useContext(be),
    u = g.useContext(yi),
    c = u.reducedMotion,
    f = u.skipAnimations,
    h = g.useRef(null),
    p = g.useRef(!1);
  ((s = s || a.renderer),
    !h.current &&
      s &&
      ((h.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: o,
      })),
      p.current && h.current && (h.current.manuallyAnimateOnMount = !0)));
  const y = h.current,
    v = g.useContext(Lc);
  y && !y.projection && i && (y.type === 'html' || y.type === 'svg') && xm(h.current, n, i, v);
  const d = g.useRef(!1);
  g.useInsertionEffect(() => {
    y && d.current && y.update(n, l);
  });
  const S = n[_a],
    T = g.useRef(
      !!S &&
        typeof window < 'u' &&
        !window.MotionHandoffIsComplete?.(S) &&
        window.MotionHasOptimisedAnimation?.(S),
    );
  return (
    Ws(() => {
      ((p.current = !0),
        y &&
          ((d.current = !0),
          (window.MotionIsMounted = !0),
          y.updateFeatures(),
          y.scheduleRenderMicrotask(),
          T.current && y.animationState && y.animationState.animateChanges()));
    }),
    g.useEffect(() => {
      y &&
        (!T.current && y.animationState && y.animationState.animateChanges(),
        T.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(S);
          }),
          (T.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function xm(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: f,
  } = e;
  ((t.projection = new n(t.latestValues, e['data-framer-portal-id'] ? void 0 : Oc(t.parent))),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && Ht(a)),
      visualElement: t,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: s,
      crossfade: f,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function Oc(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Oc(t.parent);
}
function Qe(t, { forwardMotionProps: e = !1, type: n } = {}, s, i) {
  s && Ds(s);
  const o = n ? n === 'svg' : Si(t),
    r = o ? gm : ym;
  function a(u, c) {
    let f;
    const h = { ...g.useContext(yi), ...u, layoutId: Mm(u) },
      { isStatic: p } = h,
      y = am(u),
      v = r(u, p);
    if (!p && typeof window < 'u') {
      bm();
      const d = wm(h);
      ((f = d.MeasureLayout), (y.visualElement = Tm(t, v, h, i, d.ProjectionNode, o)));
    }
    return ot.jsxs(Sn.Provider, {
      value: y,
      children: [
        f && y.visualElement ? ot.jsx(f, { visualElement: y.visualElement, ...h }) : null,
        dm(t, u, Sm(v, y.visualElement, c), v, p, e, o),
      ],
    });
  }
  a.displayName = `motion.${typeof t == 'string' ? t : `create(${t.displayName ?? t.name ?? ''})`}`;
  const l = g.forwardRef(a);
  return ((l[vm] = t), l);
}
function Mm({ layoutId: t }) {
  const e = g.useContext(ve).id;
  return e && t !== void 0 ? e + '-' + t : t;
}
function bm(t, e) {
  g.useContext(gi).strict;
}
function wm(t) {
  const e = Ac(),
    { drag: n, layout: s } = e;
  if (!n && !s) return {};
  const i = { ...n, ...s };
  return {
    MeasureLayout: n?.isEnabled(t) || s?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function Ic(t, e) {
  if (typeof Proxy > 'u') return Qe;
  const n = new Map(),
    s = (o, r) => Qe(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) => (r === 'create' ? s : (n.has(r) || n.set(r, Qe(r, void 0, t, e)), n.get(r))),
  });
}
const Dv = Ic(),
  Fc = (t, e) =>
    (e.isSVG ?? Si(t)) ? new Zd(e) : new Wd(e, { allowProjection: t !== g.Fragment });
class Pm extends Vt {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = np(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    gn(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let Em = 0;
class Cm extends Vt {
  constructor() {
    (super(...arguments), (this.id = Em++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    if (e && s === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == 'string') {
          const a = _t(this.node, o, r);
          if (a) {
            const { transition: l, transitionEnd: u, ...c } = a;
            for (const f in c) this.node.getValue(f)?.jump(c[f]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive('exit', !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive('exit', !e);
    n &&
      !e &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const $c = { animation: { Feature: Pm }, exit: { Feature: Cm } };
function Ce(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Am = (t) => (e) => li(e) && t(e, Ce(e));
function pe(t, e, n, s) {
  return Me(t, e, Am(n), s);
}
const jc = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  or = (t, e) => Math.abs(t - e);
function Rm(t, e) {
  const n = or(t.x, e.x),
    s = or(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
const rr = new Set(['auto', 'scroll']);
class Bc {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (p) => {
        this.handleScroll(p.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = je(this.lastRawMoveEventInfo, this.transformPagePoint));
        const p = zn(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          v = Rm(p.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: d } = p,
          { timestamp: S } = Y;
        this.history.push({ ...d, timestamp: S });
        const { onStart: T, onMove: x } = this.handlers;
        (y || (T && T(this.lastMoveEvent, p), (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, p));
      }),
      (this.handlePointerMove = (p, y) => {
        ((this.lastMoveEvent = p),
          (this.lastRawMoveEventInfo = y),
          (this.lastMoveEventInfo = je(y, this.transformPagePoint)),
          F.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (p, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: d, resumeAnimation: S } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const T = zn(
          p.type === 'pointercancel' ? this.lastMoveEventInfo : je(y, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && v && v(p, T), d && d(p, T));
      }),
      !li(e))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window));
    const l = Ce(e),
      u = je(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = Y;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: h } = n;
    (h && h(e, zn(u, this.history)),
      (this.removeListeners = we(
        pe(this.contextWindow, 'pointermove', this.handlePointerMove),
        pe(this.contextWindow, 'pointerup', this.handlePointerUp),
        pe(this.contextWindow, 'pointercancel', this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const s = getComputedStyle(n);
      ((rr.has(s.overflowX) || rr.has(s.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener('scroll', this.onElementScroll, { capture: !0 }),
      window.addEventListener('scroll', this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener('scroll', this.onElementScroll, { capture: !0 }),
          window.removeEventListener('scroll', this.onWindowScroll));
      }));
  }
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n) return;
    const s = e === window,
      i = s ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x), (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 && ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(e, i),
      F.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      At(this.updatePoint));
  }
}
function je(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ar(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function zn({ point: t }, e) {
  return { point: t, delta: ar(t, Nc(e)), offset: ar(t, Vm(e)), velocity: Dm(e, 0.1) };
}
function Vm(t) {
  return t[0];
}
function Nc(t) {
  return t[t.length - 1];
}
function Dm(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = Nc(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > et(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  s === t[0] && t.length > 2 && i.timestamp - s.timestamp > et(e) * 2 && (s = t[1]);
  const o = it(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function km(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? j(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? j(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function cr(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Lm(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: cr(t.x, n, i), y: cr(t.y, e, s) };
}
function ur(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s });
}
function Om(t, e) {
  return { x: ur(t.x, e.x), y: ur(t.y, e.y) };
}
function Im(t, e) {
  let n = 0.5;
  const s = Q(t),
    i = Q(e);
  return (
    i > s ? (n = Se(e.min, e.max - s, t.min)) : s > i && (n = Se(t.min, t.max - i, e.min)),
    vt(0, 1, n)
  );
}
function Fm(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const ks = 0.35;
function $m(t = ks) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = ks),
    { x: lr(t, 'left', 'right'), y: lr(t, 'top', 'bottom') }
  );
}
function lr(t, e, n) {
  return { min: fr(t, e), max: fr(t, n) };
}
function fr(t, e) {
  return typeof t == 'number' ? t : t[e] || 0;
}
const jm = new WeakMap();
class Bm {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = W()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (f) => {
        (n && this.snapToCursor(Ce(f).point), this.stopAnimation());
      },
      r = (f, h) => {
        const { drag: p, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          p &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = ld(p)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          mt((S) => {
            let T = this.getAxisMotionValue(S).get() || 0;
            if (gt.test(T)) {
              const { projection: x } = this.visualElement;
              if (x && x.layout) {
                const M = x.layout.layoutBox[S];
                M && (T = Q(M) * (parseFloat(T) / 100));
              }
            }
            this.originPoint[S] = T;
          }),
          v && F.update(() => v(f, h), !1, !0),
          Ms(this.visualElement, 'transform'));
        const { animationState: d } = this.visualElement;
        d && d.setActive('whileDrag', !0);
      },
      a = (f, h) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = h));
        const {
          dragPropagation: p,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: d,
        } = this.getProps();
        if (!p && !this.openDragLock) return;
        const { offset: S } = h;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = _m(S)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis('x', h.point, S),
          this.updateAxis('y', h.point, S),
          this.visualElement.render(),
          d && F.update(() => d(f, h), !1, !0));
      },
      l = (f, h) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Bc(
      e,
      { onSessionStart: o, onStart: r, onMove: a, onSessionEnd: l, resumeAnimation: u },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: s,
        contextWindow: jc(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && F.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: s } = this.getProps();
    (!s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive('whileDrag', !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Be(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints && this.constraints[e] && (r = km(r, this.constraints[e], this.elastic[e])),
      o.set(r));
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      i = this.constraints;
    (e && Ht(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = Lm(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = $m(n)),
      i !== this.constraints &&
        !Ht(e) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        mt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Fm(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Ht(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = Bd(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Om(i.layout.layoutBox, o);
    if (n) {
      const a = n(Fd(r));
      ((this.hasMutatedConstraints = !!a), a && (r = ic(a)));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = mt((c) => {
        if (!Be(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        (r === !0 || r === c) && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          y = {
            type: 'inertia',
            velocity: s ? e[c] : 0,
            bounceStiffness: h,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (Ms(this.visualElement, e), s.start(oi(e, s, 0, n, this.visualElement, !1)));
  }
  stopAnimation() {
    mt((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    mt((n) => {
      const { drag: s } = this.getProps();
      if (!Be(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(e[n] - j(r, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!Ht(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    mt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Im({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      mt((r) => {
        if (!Be(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: u } = this.constraints[r];
        a.set(j(l, u, i[r]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    jm.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = pe(e, 'pointerdown', (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          h = u.target,
          p = h !== e && yd(h);
        c && f && !p && this.start(u);
      });
    let s;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Ht(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s || (s = Nm(e, u.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: o } = this.visualElement,
      r = o.addEventListener('measure', i);
    (o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), F.read(i));
    const a = Me(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = o.addEventListener('didUpdate', ({ delta: u, hasLayoutChanged: c }) => {
        this.isDragging &&
          c &&
          (mt((f) => {
            const h = this.getAxisMotionValue(f);
            h && ((this.originPoint[f] += u[f].translate), h.set(h.get() + u[f].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (a(), n(), r(), l && l(), s && s());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = ks,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function hr(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function Nm(t, e, n) {
  const s = vo(t, hr(n)),
    i = vo(e, hr(n));
  return () => {
    (s(), i());
  };
}
function Be(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function _m(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n);
}
class Um extends Vt {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = rt),
      (this.removeListeners = rt),
      (this.controls = new Bm(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || rt));
  }
  update() {
    const { dragControls: e } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    e !== n &&
      (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Wn = (t) => (e, n) => {
  t && F.update(() => t(e, n), !1, !0);
};
class Km extends Vt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = rt));
  }
  onPointerDown(e) {
    this.session = new Bc(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: jc(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Wn(e),
      onStart: Wn(n),
      onMove: Wn(s),
      onEnd: (o, r) => {
        (delete this.session, i && F.postRender(() => i(o, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = pe(this.node.current, 'pointerdown', (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Hn = !1;
class zm extends g.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props,
      { projection: o } = e;
    (o &&
      (n.group && n.group.add(o),
      s && s.register && i && s.register(o),
      Hn && o.root.didUpdate(),
      o.addEventListener('animationComplete', () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ze.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = o),
        e.layoutDependency !== n && r.setOptions({ ...r.options, layoutDependency: n }),
        (Hn = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              F.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props,
      { projection: s } = e;
    s &&
      ((s.options.layoutAnchor = n),
      s.root.didUpdate(),
      ui.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props,
      { projection: i } = e;
    ((Hn = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function _c(t) {
  const [e, n] = Ec(),
    s = g.useContext(ve);
  return ot.jsx(zm, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: g.useContext(Lc),
    isPresent: e,
    safeToRemove: n,
  });
}
const Uc = { pan: { Feature: Km }, drag: { Feature: Um, ProjectionNode: Pc, MeasureLayout: _c } };
function dr(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive('whileHover', n === 'Start');
  const i = 'onHover' + n,
    o = s[i];
  o && F.postRender(() => o(e, Ce(e)));
}
class Wm extends Vt {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = hd(e, (n, s) => (dr(this.node, s, 'Start'), (i) => dr(this.node, i, 'End'))));
  }
  unmount() {}
}
class Hm extends Vt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(':focus-visible');
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = we(
      Me(this.node.current, 'focus', () => this.onFocus()),
      Me(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function pr(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive('whileTap', n === 'Start');
  const i = 'onTap' + (n === 'End' ? '' : n),
    o = s[i];
  o && F.postRender(() => o(e, Ce(e)));
}
class Gm extends Vt {
  mount() {
    const { current: e } = this.node;
    if (!e) return;
    const { globalTapTarget: n, propagate: s } = this.node.props;
    this.unmount = vd(
      e,
      (i, o) => (
        pr(this.node, o, 'Start'),
        (r, { success: a }) => pr(this.node, r, a ? 'End' : 'Cancel')
      ),
      { useGlobalTarget: n, stopPropagation: s?.tap === !1 },
    );
  }
  unmount() {}
}
const Ls = new WeakMap(),
  Gn = new WeakMap(),
  Ym = (t) => {
    const e = Ls.get(t.target);
    e && e(t);
  },
  Xm = (t) => {
    t.forEach(Ym);
  };
function qm({ root: t, ...e }) {
  const n = t || document;
  Gn.has(n) || Gn.set(n, {});
  const s = Gn.get(n),
    i = JSON.stringify(e);
  return (s[i] || (s[i] = new IntersectionObserver(Xm, { root: t, ...e })), s[i]);
}
function Zm(t, e, n) {
  const s = qm(e);
  return (
    Ls.set(t, n),
    s.observe(t),
    () => {
      (Ls.delete(t), s.unobserve(t));
    }
  );
}
const Qm = { some: 0, all: 1 };
class Jm extends Vt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = 'some', once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == 'number' ? i : Qm[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          h = u ? c : f;
        h && h(l);
      };
    this.stopObserver = Zm(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: e, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(ty(e, n)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function ty({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Kc = {
    inView: { Feature: Jm },
    tap: { Feature: Gm },
    focus: { Feature: Hm },
    hover: { Feature: Wm },
  },
  zc = { layout: { ProjectionNode: Pc, MeasureLayout: _c } },
  ey = { ...$c, ...Kc, ...Uc, ...zc },
  kv = Ic(ey, Fc),
  ny = { renderer: Fc, ...$c, ...Kc },
  Lv = { ...ny, ...Uc, ...zc };
function m(t, e) {
  return Qe(t, e);
}
const sy = m('a'),
  iy = m('abbr'),
  oy = m('address'),
  ry = m('area'),
  ay = m('article'),
  cy = m('aside'),
  uy = m('audio'),
  ly = m('b'),
  fy = m('base'),
  hy = m('bdi'),
  dy = m('bdo'),
  py = m('big'),
  my = m('blockquote'),
  yy = m('body'),
  gy = m('button'),
  vy = m('canvas'),
  Sy = m('caption'),
  Ty = m('cite'),
  xy = m('code'),
  My = m('col'),
  by = m('colgroup'),
  wy = m('data'),
  Py = m('datalist'),
  Ey = m('dd'),
  Cy = m('del'),
  Ay = m('details'),
  Ry = m('dfn'),
  Vy = m('dialog'),
  Dy = m('div'),
  ky = m('dl'),
  Ly = m('dt'),
  Oy = m('em'),
  Iy = m('embed'),
  Fy = m('fieldset'),
  $y = m('figcaption'),
  jy = m('figure'),
  By = m('footer'),
  Ny = m('form'),
  _y = m('h1'),
  Uy = m('h2'),
  Ky = m('h3'),
  zy = m('h4'),
  Wy = m('h5'),
  Hy = m('h6'),
  Gy = m('head'),
  Yy = m('header'),
  Xy = m('hgroup'),
  qy = m('hr'),
  Zy = m('html'),
  Qy = m('i'),
  Jy = m('iframe'),
  tg = m('img'),
  eg = m('input'),
  ng = m('ins'),
  sg = m('kbd'),
  ig = m('keygen'),
  og = m('label'),
  rg = m('legend'),
  ag = m('li'),
  cg = m('link'),
  ug = m('main'),
  lg = m('map'),
  fg = m('mark'),
  hg = m('menu'),
  dg = m('menuitem'),
  pg = m('meter'),
  mg = m('nav'),
  yg = m('object'),
  gg = m('ol'),
  vg = m('optgroup'),
  Sg = m('option'),
  Tg = m('output'),
  xg = m('p'),
  Mg = m('param'),
  bg = m('picture'),
  wg = m('pre'),
  Pg = m('progress'),
  Eg = m('q'),
  Cg = m('rp'),
  Ag = m('rt'),
  Rg = m('ruby'),
  Vg = m('s'),
  Dg = m('samp'),
  kg = m('script'),
  Lg = m('section'),
  Og = m('select'),
  Ig = m('small'),
  Fg = m('source'),
  $g = m('span'),
  jg = m('strong'),
  Bg = m('style'),
  Ng = m('sub'),
  _g = m('summary'),
  Ug = m('sup'),
  Kg = m('table'),
  zg = m('tbody'),
  Wg = m('td'),
  Hg = m('textarea'),
  Gg = m('tfoot'),
  Yg = m('th'),
  Xg = m('thead'),
  qg = m('time'),
  Zg = m('title'),
  Qg = m('tr'),
  Jg = m('track'),
  t0 = m('u'),
  e0 = m('ul'),
  n0 = m('video'),
  s0 = m('wbr'),
  i0 = m('webview'),
  o0 = m('animate'),
  r0 = m('circle'),
  a0 = m('defs'),
  c0 = m('desc'),
  u0 = m('ellipse'),
  l0 = m('g'),
  f0 = m('image'),
  h0 = m('line'),
  d0 = m('filter'),
  p0 = m('marker'),
  m0 = m('mask'),
  y0 = m('metadata'),
  g0 = m('path'),
  v0 = m('pattern'),
  S0 = m('polygon'),
  T0 = m('polyline'),
  x0 = m('rect'),
  M0 = m('stop'),
  b0 = m('svg'),
  w0 = m('symbol'),
  P0 = m('text'),
  E0 = m('tspan'),
  C0 = m('use'),
  A0 = m('view'),
  R0 = m('clipPath'),
  V0 = m('feBlend'),
  D0 = m('feColorMatrix'),
  k0 = m('feComponentTransfer'),
  L0 = m('feComposite'),
  O0 = m('feConvolveMatrix'),
  I0 = m('feDiffuseLighting'),
  F0 = m('feDisplacementMap'),
  $0 = m('feDistantLight'),
  j0 = m('feDropShadow'),
  B0 = m('feFlood'),
  N0 = m('feFuncA'),
  _0 = m('feFuncB'),
  U0 = m('feFuncG'),
  K0 = m('feFuncR'),
  z0 = m('feGaussianBlur'),
  W0 = m('feImage'),
  H0 = m('feMerge'),
  G0 = m('feMergeNode'),
  Y0 = m('feMorphology'),
  X0 = m('feOffset'),
  q0 = m('fePointLight'),
  Z0 = m('feSpecularLighting'),
  Q0 = m('feSpotLight'),
  J0 = m('feTile'),
  tv = m('feTurbulence'),
  ev = m('foreignObject'),
  nv = m('linearGradient'),
  sv = m('radialGradient'),
  iv = m('textPath'),
  Ov = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        a: sy,
        abbr: iy,
        address: oy,
        animate: o0,
        area: ry,
        article: ay,
        aside: cy,
        audio: uy,
        b: ly,
        base: fy,
        bdi: hy,
        bdo: dy,
        big: py,
        blockquote: my,
        body: yy,
        button: gy,
        canvas: vy,
        caption: Sy,
        circle: r0,
        cite: Ty,
        clipPath: R0,
        code: xy,
        col: My,
        colgroup: by,
        create: m,
        data: wy,
        datalist: Py,
        dd: Ey,
        defs: a0,
        del: Cy,
        desc: c0,
        details: Ay,
        dfn: Ry,
        dialog: Vy,
        div: Dy,
        dl: ky,
        dt: Ly,
        ellipse: u0,
        em: Oy,
        embed: Iy,
        feBlend: V0,
        feColorMatrix: D0,
        feComponentTransfer: k0,
        feComposite: L0,
        feConvolveMatrix: O0,
        feDiffuseLighting: I0,
        feDisplacementMap: F0,
        feDistantLight: $0,
        feDropShadow: j0,
        feFlood: B0,
        feFuncA: N0,
        feFuncB: _0,
        feFuncG: U0,
        feFuncR: K0,
        feGaussianBlur: z0,
        feImage: W0,
        feMerge: H0,
        feMergeNode: G0,
        feMorphology: Y0,
        feOffset: X0,
        fePointLight: q0,
        feSpecularLighting: Z0,
        feSpotLight: Q0,
        feTile: J0,
        feTurbulence: tv,
        fieldset: Fy,
        figcaption: $y,
        figure: jy,
        filter: d0,
        footer: By,
        foreignObject: ev,
        form: Ny,
        g: l0,
        h1: _y,
        h2: Uy,
        h3: Ky,
        h4: zy,
        h5: Wy,
        h6: Hy,
        head: Gy,
        header: Yy,
        hgroup: Xy,
        hr: qy,
        html: Zy,
        i: Qy,
        iframe: Jy,
        image: f0,
        img: tg,
        input: eg,
        ins: ng,
        kbd: sg,
        keygen: ig,
        label: og,
        legend: rg,
        li: ag,
        line: h0,
        linearGradient: nv,
        link: cg,
        main: ug,
        map: lg,
        mark: fg,
        marker: p0,
        mask: m0,
        menu: hg,
        menuitem: dg,
        metadata: y0,
        meter: pg,
        nav: mg,
        object: yg,
        ol: gg,
        optgroup: vg,
        option: Sg,
        output: Tg,
        p: xg,
        param: Mg,
        path: g0,
        pattern: v0,
        picture: bg,
        polygon: S0,
        polyline: T0,
        pre: wg,
        progress: Pg,
        q: Eg,
        radialGradient: sv,
        rect: x0,
        rp: Cg,
        rt: Ag,
        ruby: Rg,
        s: Vg,
        samp: Dg,
        script: kg,
        section: Lg,
        select: Og,
        small: Ig,
        source: Fg,
        span: $g,
        stop: M0,
        strong: jg,
        style: Bg,
        sub: Ng,
        summary: _g,
        sup: Ug,
        svg: b0,
        symbol: w0,
        table: Kg,
        tbody: zg,
        td: Wg,
        text: P0,
        textPath: iv,
        textarea: Hg,
        tfoot: Gg,
        th: Yg,
        thead: Xg,
        time: qg,
        title: Zg,
        tr: Qg,
        track: Jg,
        tspan: E0,
        u: t0,
        ul: e0,
        use: C0,
        video: n0,
        view: A0,
        wbr: s0,
        webview: i0,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
export {
  gv as $,
  Av as A,
  av as B,
  Ml as C,
  au as D,
  Tv as E,
  ki as F,
  Gl as G,
  Sv as H,
  Xn as I,
  En as J,
  O as K,
  Rv as L,
  Dy as M,
  Qc as N,
  yr as O,
  Rt as P,
  Zc as Q,
  lv as R,
  ge as S,
  Ni as T,
  $i as U,
  Pn as V,
  rv as W,
  Cv as X,
  ou as Y,
  Du as Z,
  yv as _,
  cv as a,
  dv as a0,
  mv as a1,
  ce as a2,
  Ar as a3,
  Ai as a4,
  vv as a5,
  qt as a6,
  Su as a7,
  Bu as a8,
  hv as a9,
  Ov as aa,
  Vv as ab,
  Lv as ac,
  mr as b,
  vu as c,
  vr as d,
  gu as e,
  cu as f,
  wv as g,
  Yn as h,
  Pv as i,
  ot as j,
  uv as k,
  _l as l,
  Bl as m,
  Nl as n,
  fv as o,
  jl as p,
  bv as q,
  Mv as r,
  ru as s,
  Ci as t,
  pv as u,
  ln as v,
  Zn as w,
  xv as x,
  Dv as y,
  kv as z,
};
