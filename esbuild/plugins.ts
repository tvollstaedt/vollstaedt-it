// esbuild/plugins.ts
import type { Plugin, PluginBuild } from 'esbuild';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import chokidar from 'chokidar';
import { dirname } from 'node:path';

const alreadyGenerated = new Set<string>();

const portfolioIndexPlugin: Plugin = {
  name: 'portfolio-index-generator',
  setup(build: PluginBuild) {
    const outdir = build.initialOptions.outdir || '';

    if (alreadyGenerated.has(outdir)) {
      return;
    }
    alreadyGenerated.add(outdir);

    const inputDir = path.resolve('src/content/portfolio');
    const outputPath = path.resolve('public/content/portfolio-index.json');
    const summaryFields = [
      'slug',
      'title',
      'type',
      'coverImage',
      'highlight',
      'date',
    ];

    const generateRoutes = (index: any[]) => {
      const routesOutputPath = path.resolve('dist/routes.txt');
      fs.mkdirSync(dirname(routesOutputPath), { recursive: true });
      const staticRoutes = [
        '/',
        '/portfolio',
        '/shopware-migration',
        '/datenschutz',
        '/impressum',
      ];
      const portfolioRoutes = index.map((entry) => `/portfolio/${entry.slug}`);
      const allRoutes = [...staticRoutes, ...portfolioRoutes].join('\n');
      fs.writeFileSync(routesOutputPath, allRoutes);
      console.log(`✅ Prerender routes written to ${routesOutputPath}`);
    };

    const generateIndex = () => {
      if (!fs.existsSync(inputDir)) return;

      const files = fs.readdirSync(inputDir).filter((f) => f.endsWith('.yaml'));

      const index = files.map((file) => {
        const slug = file.replace(/\.yaml$/, '');
        const fullPath = path.join(inputDir, file);
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const parsed = yaml.parse(raw);

        return Object.fromEntries(
          summaryFields.map((key) => [
            key,
            key === 'slug' ? slug : parsed[key],
          ]),
        );
      });
      generateRoutes(index);

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
      console.log(`✅ Portfolio index updated (${index.length} projects).`);
    };

    build.onStart(() => {
      generateIndex();
    });

    const isWatchMode = (build.initialOptions as any).watch === true;
    if (isWatchMode) {
      chokidar
        .watch(inputDir, { ignoreInitial: true })
        .on('add', generateIndex)
        .on('change', generateIndex)
        .on('unlink', generateIndex);
    }
  },
};
export default [portfolioIndexPlugin];
