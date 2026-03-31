import { r as a } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { s as u } from './index-BJ9KbyB2.js';
import { u as c } from './index--jilRddp.js';
import { u as p } from './useInterceptingRoutes-BgKxaUAO.js';
import { H as n, u as i, a as l, b as o } from './index-CCbaqAw2.js';
import { u as g } from './index-eRBSrsT4.js';
import { u as s } from './useHotkeyById-nSPi_zq4.js';
const C = () => {
    const e = g((r) => r.openNewTopicOrSaveTopic),
      { mutate: t } = l('openNewTopicOrSaveTopic', e);
    return s(o.SaveTopic, () => t(), { enableOnContentEditable: !0 });
  },
  m = () => {
    const e = i((t) => t.toggleZenMode);
    return s(o.ToggleZenMode, e, { enableOnContentEditable: !0 });
  },
  S = () => {
    const e = p();
    return s(o.OpenChatSettings, e);
  },
  k = (e) =>
    s(
      o.AddUserMessage,
      () => {
        e();
      },
      { enableOnContentEditable: !0 },
    ),
  d = () => {
    const e = c();
    return s(o.ClearCurrentMessages, () => e(), { enableOnContentEditable: !0 });
  },
  h = () => {
    const { enableScope: e, disableScope: t } = u();
    (S(), m(), C(), d(), a.useEffect(() => (e(n.Chat), () => t(n.Chat)), []));
  };
export { h as a, k as u };
