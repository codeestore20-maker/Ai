import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as s } from './store-Zk6c4erU.js';
import { u as p } from './store-DyGj1ua_.js';
import { e as n } from './sync-BWr1C5I8.js';
import { u as c } from './store-RA8m3Abx.js';
import './index-NXWXCubP.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './index-Cus-sIud.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './GlobalAgentContextManager-DRpngCPv.js';
import './ipc-wTHpVC92.js';
import './useClientDataSWRWithSync-ByMJ0iDL.js';
const M = m.memo(({ isLogin: t }) => {
  const o = s((r) => r.useFetchAiProviderRuntimeState),
    e = c((r) => r.useFetchPersona),
    i = p((r) => n.isSyncActive(r));
  return (o(t, i), e(t), null);
});
export { M as default };
