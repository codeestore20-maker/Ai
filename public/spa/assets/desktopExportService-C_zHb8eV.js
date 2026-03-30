import { aW as e, aX as a } from './index-NXWXCubP.js';
import { j as r } from './index-4ACezDLV.js';
import '../vendor/vendor-motion-Dbb9VQJo.js';
import '../vendor/vendor-emotion-DdM-9MtU.js';
import '../i18n/i18n-zh-CN-BujaBhQC.js';
import '../i18n/i18n-en-US-Cy0tuvjN.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './providerConfig-B8LLUHQ4.js';
import './SiGithub-Bv-kH4Y-.js';
import './SiX-DO6VXJ8i.js';
import './store-DPVFoUA8.js';
import './abortableRequest-CqTkNl3n.js';
import './upload-CvUrBAvS.js';
import './index-Cus-sIud.js';
import './currency-iJxIWo9y.js';
import './object-CksihGcT.js';
import './_url-BZfkIusy.js';
import './v4-BKrj-4V8.js';
import './useClientDataSWRWithSync-ByMJ0iDL.js';
import './clientModelRuntime-CVsv_yzD.js';
import './index-DulcjDYi.js';
import './tslib.es6-BWnLUwbd.js';
import './_auth-D9iY1Apm.js';
import './purify.es-r8glNMJW.js';
import './store-Zk6c4erU.js';
import './selectors-D69_vvgj.js';
import './tools-Bv7LuA5V.js';
import './ipc-wTHpVC92.js';
import './discover-BXfpphP1.js';
import './general-D0ZSKJyo.js';
import './index-CGoFy0Kz.js';
import './store-RA8m3Abx.js';
import './browser-B9uGE7zv.js';
import './mcp-bmlNDBWs.js';
import './GlobalAgentContextManager-DRpngCPv.js';
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
