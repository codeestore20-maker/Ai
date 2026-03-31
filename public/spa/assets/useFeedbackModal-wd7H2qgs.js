import { u as s } from './index-CCbaqAw2.js';
import { c as o } from './react-D51cotXY.js';
const l = o((e) => ({
  close: () => e({ initialValues: void 0, isOpen: !1 }),
  initialValues: void 0,
  isOpen: !1,
  open: (a) => {
    (s.getState().updateSystemStatus({ showCommandMenu: !1 }), e({ initialValues: a, isOpen: !0 }));
  },
}));
export { l as u };
