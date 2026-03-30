import { u as s } from './index-wqF_YeCD.js';
import { c as o } from './react-bYT9p5Gn.js';
const l = o((e) => ({
  close: () => e({ initialValues: void 0, isOpen: !1 }),
  initialValues: void 0,
  isOpen: !1,
  open: (a) => {
    (s.getState().updateSystemStatus({ showCommandMenu: !1 }), e({ initialValues: a, isOpen: !0 }));
  },
}));
export { l as u };
