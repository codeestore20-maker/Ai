const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-CHi6vrrB.js',
      'assets/store-DPVFoUA8.js',
      'assets/index-NXWXCubP.js',
      'vendor/vendor-motion-Dbb9VQJo.js',
      'vendor/vendor-emotion-DdM-9MtU.js',
      'i18n/i18n-zh-CN-BujaBhQC.js',
      'i18n/i18n-en-US-Cy0tuvjN.js',
      'vendor/vendor-es-toolkit-DEdCfXFH.js',
      'vendor/vendor-icons-BHMUH78i.js',
      'assets/providerConfig-B8LLUHQ4.js',
      'assets/index-yzzpVuwK.css',
      'assets/abortableRequest-CqTkNl3n.js',
      'assets/upload-CvUrBAvS.js',
      'assets/index-Cus-sIud.js',
      'assets/currency-iJxIWo9y.js',
      'assets/object-CksihGcT.js',
      'assets/_url-BZfkIusy.js',
      'assets/v4-BKrj-4V8.js',
      'assets/useClientDataSWRWithSync-ByMJ0iDL.js',
      'assets/selectors-BbK7iMLu.js',
      'assets/index-DGFOs9t7.js',
      'assets/store-BjR_Vge-.js',
    ]),
) => i.map((i) => d[i]);
import { cD as _, cE as g, _ as i, cF as y, cG as A, au as p } from './index-NXWXCubP.js';
import { u as v } from './store-DPVFoUA8.js';
var I = ((t) => (
  (t.All = 'all'),
  (t.Audios = 'audios'),
  (t.Documents = 'documents'),
  (t.Home = 'home'),
  (t.Images = 'images'),
  (t.Pages = 'pages'),
  (t.Videos = 'videos'),
  (t.Websites = 'websites'),
  t
))(I || {});
const F = {
  category: I.All,
  currentViewItemId: void 0,
  libraryId: void 0,
  mode: 'explorer',
  pendingRenameItemId: null,
  searchQuery: null,
  selectAllState: 'none',
  selectedFileIds: [],
  sortType: _.Desc,
  sorter: 'createdAt',
  viewMode: 'list',
};
class R {
  #t;
  #e;
  constructor(e, s, a) {
    ((this.#e = e), (this.#t = s));
  }
  clearSelectAllState = () => {
    this.#e({ selectAllState: 'none', selectedFileIds: [] });
  };
  handleBackToList = () => {
    this.#e({ currentViewItemId: void 0, mode: 'explorer' });
  };
  onActionClick = async (e) => {
    const {
        libraryId: s,
        resolveSelectedResourceIds: a,
        selectAllState: c,
        selectedFileIds: n,
      } = this.#t(),
      { useFileStore: w } = await i(
        async () => {
          const { useFileStore: r } = await import('./index-CHi6vrrB.js');
          return { useFileStore: r };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
      ),
      { useKnowledgeBaseStore: o } = await i(
        async () => {
          const { useKnowledgeBaseStore: r } = await import('./index-DGFOs9t7.js');
          return { useKnowledgeBaseStore: r };
        },
        __vite__mapDeps([20, 21, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 11, 12, 13, 14, 15, 16, 17, 18]),
      ),
      { isChunkingUnsupported: h } = await i(
        async () => {
          const { isChunkingUnsupported: r } = await import('./store-DPVFoUA8.js').then((u) => u.e);
          return { isChunkingUnsupported: r };
        },
        __vite__mapDeps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
      ),
      l = w.getState(),
      m = o.getState();
    switch (e) {
      case 'delete': {
        if (c === 'all' && n.length === 0 && l.queryParams) {
          const { resourceService: u } = await i(
            async () => {
              const { resourceService: S } = await import('./store-DPVFoUA8.js').then((d) => d.h);
              return { resourceService: S };
            },
            __vite__mapDeps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
          );
          (await u.deleteResourcesByQuery(l.queryParams),
            l.clearCurrentQueryResources(),
            this.#e({ selectAllState: 'none', selectedFileIds: [] }));
          return;
        }
        const r = c === 'all' ? await a() : n;
        (await l.deleteResources(r), this.#e({ selectAllState: 'none', selectedFileIds: [] }));
        return;
      }
      case 'removeFromKnowledgeBase': {
        const r = await a();
        if (!s) return;
        (await m.removeFilesFromKnowledgeBase(s, r),
          this.#e({ selectAllState: 'none', selectedFileIds: [] }));
        return;
      }
      case 'addToKnowledgeBase':
      case 'moveToOtherKnowledgeBase':
        return;
      case 'batchChunking': {
        const u = (await a()).filter((S) => {
          const d = l.resourceMap?.get(S);
          return d ? !h(d.fileType) : c === 'all';
        });
        (await l.parseFilesToChunks(u, { skipExist: !0 }),
          this.#e({ selectAllState: 'none', selectedFileIds: [] }));
        return;
      }
      case 'deleteLibrary': {
        if (!s) return;
        (await m.removeKnowledgeBase(s),
          typeof window < 'u' && (window.location.href = '/knowledge'));
      }
    }
  };
  resolveSelectedResourceIds = async () => {
    const { selectAllState: e, selectedFileIds: s } = this.#t();
    if (e !== 'all') return s;
    const { resourceService: a } = await i(
        async () => {
          const { resourceService: o } = await import('./store-DPVFoUA8.js').then((h) => h.h);
          return { resourceService: o };
        },
        __vite__mapDeps([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]),
      ),
      { useFileStore: c } = await i(
        async () => {
          const { useFileStore: o } = await import('./index-CHi6vrrB.js');
          return { useFileStore: o };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
      ),
      n = c.getState().queryParams;
    return n ? (await a.resolveSelectionIds(n)).ids.filter((o) => !s.includes(o)) : s;
  };
  selectAllLoadedResources = (e) => {
    this.#e({ selectedFileIds: e, selectAllState: 'loaded' });
  };
  selectAllResources = () => {
    this.#e({ selectAllState: 'all', selectedFileIds: [] });
  };
  setCategory = (e) => {
    this.#e({ category: e });
  };
  setCurrentViewItemId = (e) => {
    this.#e({ currentViewItemId: e });
  };
  setLibraryId = (e) => {
    this.#e({ libraryId: e });
  };
  setMode = (e) => {
    this.#e({ mode: e });
  };
  setPendingRenameItemId = (e) => {
    this.#e({ pendingRenameItemId: e });
  };
  setSearchQuery = (e) => {
    this.#e({ searchQuery: e });
  };
  setSelectAllState = (e) => {
    this.#e({ selectAllState: e });
  };
  setSelectedFileIds = (e) => {
    const { selectAllState: s } = this.#t();
    this.#e({ selectAllState: e.length === 0 && s !== 'all' ? 'none' : s, selectedFileIds: e });
  };
  setSorter = (e) => {
    this.#e({ sorter: e });
  };
  setSortType = (e) => {
    this.#e({ sortType: e });
  };
  setViewMode = (e) => {
    this.#e({ viewMode: e });
  };
}
const f = (t, e, s) => new R(t, e, s),
  E =
    (t) =>
    (...e) => ({ ...F, ...t, ...g([f(...e)]) }),
  P = () => y()(A(E()), p),
  k = P(),
  L = (t) => v((e) => e.useFetchFolderBreadcrumb)(t);
export { I as F, L as a, k as u };
