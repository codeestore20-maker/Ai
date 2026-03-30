import { u as s } from './index-NXWXCubP.js';
import { c as o } from './react-Be3Xfkkl.js';
const l = o((e) => ({
  close: () => e({ initialValues: void 0, isOpen: !1 }),
  initialValues: void 0,
  isOpen: !1,
  open: (a) => {
    (s.getState().updateSystemStatus({ showCommandMenu: !1 }), e({ initialValues: a, isOpen: !0 }));
  },
}));
export { l as u };
