import { j as o } from '../vendor/vendor-motion-Dbb9VQJo.js';
import {
  g as a,
  C as p,
  F as e,
  W as s,
  f as d,
  j as n,
  ae as l,
  r as c,
  b1 as h,
} from './index-CCbaqAw2.js';
import './providerConfig-qS2Xx-oI.js';
import { G as x } from './Grid-KYqXrx43.js';
import { r as g } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { P as m } from './index-DJySiizV.js';
import { U as u } from './UserAvatar-9OQokYWw.js';
import { A as b, T as f, a as v } from './index-DXx4oJ57.js';
import '../i18n/i18n-zh-CN-BU7DHEsw.js';
import '../i18n/i18n-en-US-DgOT8d-N.js';
import '../vendor/vendor-es-toolkit-DEdCfXFH.js';
import '../vendor/vendor-icons-BHMUH78i.js';
import './index-BuK-PXoS.js';
import './index-CvPxoXfq.js';
import './useFillId-Dc6zFnxP.js';
import './index-C4tKbZNg.js';
import './index-DUktM2V3.js';
import './index-Cov8c3hl.js';
import './index-BEWAql7N.js';
import './store-DYTo8uRs.js';
import './GlobalAgentContextManager-BZJF8dFO.js';
import './ipc-wTHpVC92.js';
import './sync-BIgbMA87.js';
import './FormGroup-kE_nus1W.js';
import './Segmented-OWqMdPLY.js';
import './index-C0BUn_FY.js';
import './ProviderIcon-Dg9rvCHb.js';
import './SettingHeader-WJWruQ_N.js';
import './index-B8mGalR4.js';
import './Block-BrEJCAE1.js';
import './index-eF79sEgZ.js';
import './index-CHatxVad.js';
import './InfoCircleOutlined-BWYuV3b3.js';
import './row-DZp4IMzh.js';
import './index-CtIoZBrH.js';
import './EllipsisOutlined-y1XwGSlK.js';
import './PlusOutlined-D_dh-eD9.js';
import './Dropdown-CyMyEhFy.js';
import './index-BcXNR0iV.js';
import './index-BYDVP8or.js';
import './index-DOb9TCBr.js';
import './useForm-DPetWJu5.js';
import './index-04iJt7LS.js';
import './index-Cn54Zpoy.js';
import './abortableRequest-CqTkNl3n.js';
import './format-CQDeZFBW.js';
import './currency-iJxIWo9y.js';
import './time-DgXzZnyx.js';
import './index-CUgWEALQ.js';
import './index-CHu9DsJf.js';
import './index-qWFy24g8.js';
import './TextArea-BghFpCej.js';
import './Input-CZbfPMbV.js';
import './index-Bw1eJfiR.js';
import './_baseAssignValue-fHrU2WBP.js';
import './debounce-Bxk92SIb.js';
import './tiny-invariant-CopsF_GD.js';
import './step-B6EOmCqb.js';
import './index-Chjiymov.js';
import './band-CquvqAHh.js';
import './init-Dmth1JHB.js';
import './ordinal-DILIJJjt.js';
import './linear-BkEJkjA2.js';
import './defaultLocale-DX6XiGOO.js';
import './time-DAeG9hya.js';
import './index-Ciqn2WuZ.js';
import './Modal-Cu7YIYh_.js';
import './Drawer-Bca0nwDn.js';
import './index-9gEvDmEa.js';
import './index-BDkIsE6B.js';
import './providerConfig-DDLMhlDS.js';
import './index-Chog5AK2.js';
import './index-Dnykz53F.js';
import './index-FbvwNFNF.js';
import './index-C_P8ne77.js';
import './index-DQdi0815.js';
import './base-AbuBx_QK.js';
import './Link-Pr-WcYA3.js';
import './Trans-C_knUiir.js';
import './FormModal-8-l9szYu.js';
import './index-DvswU7tK.js';
import './useTranslation-D4BITX8Q.js';
import './form-CzkHLuiW.js';
import './useScreenshot-BttRdfvK.js';
import './dynamic-CO2KUBMq.js';
import './index-DSyNSW_g.js';
import './Table-CFycoAE9.js';
import './index-BALqkhOe.js';
import './useBubbleLock-D8efMGR_.js';
import './index-DM7ShMil.js';
import './LeftOutlined-CAuJGpBu.js';
import './index-D3URHQbI.js';
import './index-DrbS3k5v.js';
import './index-BV4biRKt.js';
import './scrollTo-B51N32mC.js';
import './Pagination-Bwnh0Gn9.js';
import './index-DSpPiFfl.js';
import './useQueryParam-B7WiEx64.js';
import './index-BMs9E8aZ.js';
import './customParseFormat-CAbVLu8E.js';
const i = d(({ css: t, cssVar: r }) => ({
    avatar: t`
    box-sizing: content-box;
    border: 4px solid ${r.colorBgLayout};
    background: ${r.colorText};
  `,
    background: t`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${r.colorBgLayout};
    background-image: url(${h('screenshot_background.webp')});
    background-position: center;
    background-size: 120% 120%;
  `,
    container: t`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${r.colorBorder};
    border-radius: calc(${r.borderRadiusLG} * 2);

    background: ${r.colorBgLayout};
    box-shadow: ${r.boxShadow};
  `,
    decs: t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,
    footer: t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,
    heatmaps: t`
    .legend-month,
    footer {
      display: none;
    }
  `,
    preview: n(
      l.noScrollbar,
      t`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadiusLG};

      background: ${r.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${c.sm} {
        max-height: 40dvh;
      }
    `,
    ),
    title: t`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `,
  })),
  hr = g.memo(() => {
    const { t } = a('auth');
    return o.jsx('div', {
      className: i.preview,
      children: o.jsx('div', {
        className: i.background,
        id: 'preview',
        children: o.jsxs(p, {
          className: i.container,
          gap: 12,
          padding: 24,
          children: [
            o.jsx(m, { size: 24, type: 'text' }),
            o.jsx('div', { className: i.title, children: t('stats.share.title') }),
            o.jsxs(e, {
              horizontal: !0,
              align: 'center',
              children: [
                o.jsx(u, {
                  className: i.avatar,
                  shape: 'circle',
                  size: 48,
                  style: { marginRight: -12, zIndex: 2 },
                }),
                o.jsx(p, {
                  className: i.avatar,
                  height: 48,
                  width: 48,
                  style: { borderRadius: '50%', zIndex: 1 },
                  children: o.jsx(m, { size: 40 }),
                }),
              ],
            }),
            o.jsxs(e, {
              gap: 12,
              paddingBlock: 12,
              width: '100%',
              children: [
                o.jsx(b, {
                  inShare: !0,
                  blockMargin: 2,
                  blockRadius: 1,
                  blockSize: 4.5,
                  className: i.heatmaps,
                  width: '100%',
                  style: { marginTop: -12 },
                }),
                o.jsxs(x, {
                  gap: 8,
                  maxItemWidth: 100,
                  rows: 2,
                  width: '100%',
                  children: [o.jsx(f, { inShare: !0 }), o.jsx(v, { inShare: !0 })],
                }),
              ],
            }),
            o.jsx('div', { className: i.footer, children: s }),
          ],
        }),
      }),
    });
  });
export { hr as default };
