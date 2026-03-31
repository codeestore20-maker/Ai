import { aW as e, aX as a } from './index-CCbaqAw2.js';
import { j as r } from './index-eRBSrsT4.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-qS2Xx-oI.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-BS_MHMXS.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-Df31PzX2.js';
import './index-DrJt0sd8.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-CGZd35pk.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-Bduy47c5.js';
import './clientModelRuntime-De9siZoi.js';
import './index-DCfYfopE.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DRgp3rTF.js';
import './purify.es-r8glNMJW.js';
import './store-BIrLg5EY.js';
import './selectors-B3Ej40yR.js';
import './tools-Dyz0Rsch.js';
import './ipc-wTHpVC92.js';
import './discover-DBnDwJMR.js';
import './general-BwPDEBLy.js';
import './index-Cn54Zpoy.js';
import './store-BtQN9Yy-.js';
import './browser-6Zvo89Bh.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
class m {
  async exportMarkdown(i) {
    const { content: t, fileName: p } = i,
      o = await r.showSaveDialog({
        defaultPath: p,
        filters: [{ extensions: ['md'], name: 'Markdown' }],
        title: e.t('pageEditor.exportDialogTitle', { ns: 'file' }),
      });
    return o.canceled || !o.filePath
      ? { canceled: !0 }
      : (await r.writeFile({ content: t, path: o.filePath }),
        this.showExportSuccessToast(o.filePath),
        { canceled: !1, filePath: o.filePath });
  }
  showExportSuccessToast(i) {
    const t = e.t.bind(e);
    a.success({
      actions: [
        {
          label: t('pageEditor.exportActions.showInFolder', { ns: 'file' }),
          onClick: () => r.openFileFolder(i),
          variant: 'text',
        },
        {
          label: t('pageEditor.exportActions.openFile', { ns: 'file' }),
          onClick: () => r.openLocalFile({ path: i }),
          variant: 'primary',
        },
      ],
      title: t('pageEditor.exportSuccess', { ns: 'file' }),
    });
  }
}
const O = new m();
export { O as desktopExportService };
