import './index-CCbaqAw2.js';
import './providerConfig-qS2Xx-oI.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import './index-DrJt0sd8.js';
import { i as p, g as w } from './clientModelRuntime-De9siZoi.js';
import { c as d, r as h } from './_auth-DRgp3rTF.js';
import { g as b } from './store-BIrLg5EY.js';
import { A as u } from './_url-CGZd35pk.js';
import { a as C } from './selectors-B3Ej40yR.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './index-DCfYfopE.js';
import './tslib.es6-BWnLUwbd.js';
import './purify.es-r8glNMJW.js';
const f = (c) => C.isProviderFetchOnClient(c)(b());
class y {
  _abortController = null;
  getModels = async (e) => {
    const r = await d({ headers: { 'Content-Type': 'application/json' }, provider: e }),
      s = h(e);
    try {
      if (f(e)) return (await p({ provider: e, runtimeProvider: s })).models();
      const a = await fetch(u.models(e), { headers: r });
      return a.ok ? a.json() : void 0;
    } catch {
      return;
    }
  };
  downloadModel = async ({ model: e, provider: r }, { onProgress: s } = {}) => {
    try {
      this._abortController = new AbortController();
      const t = this._abortController.signal,
        a = await d({ headers: { 'Content-Type': 'application/json' }, provider: r }),
        i = h(r),
        m = f(r);
      let n;
      if (
        (m
          ? (n = await (
              await p({ provider: r, runtimeProvider: i })
            ).pullModel({ model: e }, { signal: t }))
          : (n = await fetch(u.modelPull(r), {
              body: JSON.stringify({ model: e }),
              headers: a,
              method: 'POST',
              signal: t,
            })),
        !n.ok)
      )
        throw await w(n);
      n.body && (await this.processModelPullStream(n, { onProgress: s }));
    } catch (t) {
      if (t instanceof DOMException && t.name === 'AbortError') return;
      throw (console.error('download model error:', t), t);
    } finally {
      this._abortController = null;
    }
  };
  abortPull = () => {
    this._abortController && (this._abortController.abort(), (this._abortController = null));
  };
  processModelPullStream = async (e, { onProgress: r, onError: s }) => {
    const t = e.body?.getReader();
    if (t)
      for (;;) {
        const { done: a, value: i } = await t.read();
        if (a) break;
        const n = new TextDecoder().decode(i).trim().split(`
`);
        for (const l of n) {
          let o;
          try {
            o = JSON.parse(l);
          } catch (g) {
            (console.error('Error parsing progress update:', g), console.error('raw data', l));
          }
          if ((o.status === 'canceled' && console.info('progress:', o), o.status === 'error'))
            throw (s?.({ message: o.error }), new Error(o.error));
          (o.completed !== void 0 || o.status) && r?.(o);
        }
      }
  };
}
const z = new y();
export { y as ModelsService, z as modelsService };
