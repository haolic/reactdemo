import NotFound from '../components/404';

const modules: any = import.meta.glob(
  [
    '../pages/*.jsx',
    '../pages/*.tsx',
    '../pages/*/index.jsx',
    '../pages/*/index.tsx',
  ],
  { eager: true }
);

const componentList: any[] = [];

for (const path in modules) {
  const mod = modules[path];
  const [, , filePath] = path.split('/');
  const fileName = filePath.split('.')[0];
  componentList.push({
    name:
      mod?.default?.label ||
      mod?.default?.title ||
      mod?.default?.name ||
      fileName,
    path: `/${fileName}`,
    component: mod.default,
  });
}

componentList.push({
  name: '找不到页面',
  path: '/page404',
  component: NotFound,
});

export default componentList;
