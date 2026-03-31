import { aW as e, aX as a } from './index-wqF_YeCD.js';
import { j as r } from './index-Cv04OX6Y.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-I8paDSMM.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CJBI7_uN.js';
import './index-By9RaYDB.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-5rJL-Hpp.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-BcAEm_TX.js';
import './clientModelRuntime-B08lUHU2.js';
import './index-Db66cWsi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-DF0TW5D0.js';
import './purify.es-r8glNMJW.js';
import './store-D4ebFM1W.js';
import './selectors-ByZlqqp9.js';
import './tools-DB_zvMRN.js';
import './ipc-wTHpVC92.js';
import './discover-BbhnyhQy.js';
import './general-D3HMJCKF.js';
import './index-ZbCvQEWF.js';
import './store-DqsNUhs6.js';
import './browser-DjXL3BqG.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-BMxdWhWa.js';
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
