import { j as i } from '../vendor/vendor-motion-Dbb9VQJo.js';
import { g as o, C as a } from './index-wqF_YeCD.js';
import { E as r } from './Empty-mDwtuxWq.js';
import { r as m } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { i as p } from '../vendor/vendor-icons-BHMUH78i.js';
const n = m.memo(({ search: t, ...e }) => {
  const { t: s } = o('discover');
  return i.jsx(a, {
    height: '100%',
    style: { minHeight: '50vh' },
    width: '100%',
    children: i.jsx(r, {
      description: s(t ? 'assistants.empty.search' : 'assistants.empty.description'),
      icon: p,
      title: t ? void 0 : s('assistants.empty.title'),
      type: t ? 'default' : 'page',
      descriptionProps: { fontSize: 14 },
      style: { maxWidth: 400 },
      ...e,
    }),
  });
});
n.displayName = 'AssistantEmpty';
export { n as A };
