import { u } from './store-I8paDSMM.js';
import { f as U } from './store-I8paDSMM.js';
import { f as j } from './selectors-HurxzVRR.js';
import './index-wqF_YeCD.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-5rJL-Hpp.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
const i = (t) => (n) => {
    if (!t) return;
    const e = n.localDocumentMap.get(t),
      o = n.documents.find((r) => r.id === t);
    return e && o ? (new Date(e.updatedAt) >= new Date(o.updatedAt) ? e : o) : e || o;
  },
  m = (t) => {
    const n = new Set(),
      e = t.documents.map((o) => {
        n.add(o.id);
        const r = t.localDocumentMap.get(o.id);
        return r && new Date(r.updatedAt) >= new Date(o.updatedAt) ? r : o;
      });
    for (const [o, r] of t.localDocumentMap.entries()) n.has(o) || e.unshift(r);
    return e;
  },
  s = (t) => t.hasMoreDocuments,
  a = (t) => t.isLoadingMoreDocuments,
  c = (t) => t.documentsTotal,
  C = {
    documentsTotal: c,
    getDocumentById: i,
    getOptimisticDocuments: m,
    hasMoreDocuments: s,
    isLoadingMoreDocuments: a,
  };
export {
  C as documentSelectors,
  j as fileChatSelectors,
  U as fileManagerSelectors,
  u as useFileStore,
};
