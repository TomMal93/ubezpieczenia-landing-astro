// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    // typografia: klasy typu `prose prose-neutral ...`
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(), // @apply / @unocss w CSS
    transformerVariantGroup(), // group wariantów: hover:(underline font-semibold)
  ],
  shortcuts: {
    container: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',

    // karty z delikatną animacją
    card:
      'rounded-2xl shadow-sm border border-[var(--surface-3)] bg-white/90 backdrop-blur ' +
      'transition-[transform,box-shadow] duration-300 will-change-[transform] ' +
      'hover:-translate-y-0.5 hover:shadow-md',

    // focus ring bez wtyczek
    'ring-focus':
      'focus-visible:outline-none ' +
      'focus-visible:outline-[3px] focus-visible:outline-[var(--brand)] ' +
      'focus-visible:outline-offset-2',

    // przyciski
    btn:
      'inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold ' +
      'bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)] ' +
      'active:translate-y-0.5 transition-all duration-200 ' +
      'focus-visible:outline-none focus-visible:outline-offset-2 ' +
      'focus-visible:outline-[3px] focus-visible:outline-[var(--brand)]',

    'btn-ghost':
      'inline-flex items-center gap-2 px-3 py-2 rounded-xl font-medium ' +
      'text-[var(--text)] hover:bg-[var(--surface-2)] active:translate-y-0.5 ' +
      'transition-all focus-visible:outline-none focus-visible:outline-offset-2 ' +
      'focus-visible:outline-[3px] focus-visible:outline-[var(--brand)]',

    eyebrow: 'uppercase tracking-wider text-xs text-[var(--muted)]',
    muted: 'text-[var(--muted)]',

    // blog / treść
    prose:
      'prose prose-neutral max-w-none ' +
      'prose-img:rounded-xl prose-headings:scroll-mt-24 ' +
      'prose-a:underline hover:prose-a:no-underline',

    // UI helpers
    'icon-btn': 'inline-flex items-center justify-center rounded-xl p-2',
    'tap-target': 'px-4 py-3 rounded-xl text-base',
    overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm',
    drawer: 'fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-white shadow-xl p-4 overflow-y-auto',
  },
  // Klasy dodawane w runtime (ToC, itp.) — niech nie wypadną w tree-shake
  safelist: [
    'underline',
    'font-semibold',
    'prose',
    'prose-neutral',
    'prose-img:rounded-xl',
    'prose-headings:scroll-mt-24',
    'btn',
    'btn-ghost',
    'card',
    'container',
    'eyebrow',
    'muted',
    'icon-btn',
    'tap-target',
    'overlay',
    'drawer',
  ],
});
