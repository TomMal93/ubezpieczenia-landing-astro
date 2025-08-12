import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons({ scale: 1.1 })],
  transformers: [transformerDirectives()],
  shortcuts: {
    container: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    card: 'rounded-2xl shadow-sm border border-[var(--surface-3)] bg-white/90 backdrop-blur',
    'ring-focus':
      'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
    btn: 'inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)] transition-colors duration-200 ring-focus',
    'btn-ghost':
      'inline-flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors ring-focus',
    eyebrow: 'uppercase tracking-wider text-xs text-[var(--muted)]',
    muted: 'text-[var(--muted)]',
    prose:
      'prose prose-neutral max-w-none prose-img:rounded-xl prose-headings:scroll-mt-24 prose-a:underline hover:prose-a:no-underline',
    // NEW – mobile helpers
    'icon-btn': 'inline-flex items-center justify-center rounded-xl p-2 ring-focus',
    'tap-target': 'px-4 py-3 rounded-xl text-base',
    overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm',
    drawer: 'fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-white shadow-xl p-4 overflow-y-auto',
  },
  safelist:
    'btn btn-ghost card container eyebrow muted prose icon-btn tap-target overlay drawer'.split(
      ' ',
    ),
});
