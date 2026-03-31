import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as s } from './store-BIrLg5EY.js';
import { u as p } from './store-DYTo8uRs.js';
import { e as n } from './sync-BIgbMA87.js';
import { u as c } from './store-BtQN9Yy-.js';
import './index-CCbaqAw2.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
import './ipc-wTHpVC92.js';
import './useClientDataSWRWithSync-Bduy47c5.js';
const M = m.memo(({ isLogin: t }) => {
  const o = s((r) => r.useFetchAiProviderRuntimeState),
    e = c((r) => r.useFetchPersona),
    i = p((r) => n.isSyncActive(r));
  return (o(t, i), e(t), null);
});
export { M as default };
