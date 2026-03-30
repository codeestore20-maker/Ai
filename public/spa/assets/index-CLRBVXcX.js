import { B as r } from './providerConfig-B8LLUHQ4.js';
import { r as t } from '../vendor/vendor-emotion-DdM-9MtU.js';
import { u as m } from './store-DyGj1ua_.js';
const c = t.memo(({ title: e }) => {
  const o = m((s) => s.setCurrentPageTitle);
  return (
    t.useEffect(() => {
      document.title = e ? `${e} · ${r}` : r;
    }, [e, o]),
    null
  );
});
export { c as P };
