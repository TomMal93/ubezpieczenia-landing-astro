// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetTypography from '@unocss/preset-typography';

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
    // zapewnia klasy "prose", "prose-*", "prose-elem:utility"
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(), // @apply / theme() w CSS
    transformerVariantGroup(), // hover:(underline font-semibold) itp.
  ],

  // Skróty spójne z naszymi tokenami (działają w light/dark)
  shortcuts: {
    // layout
    container: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',

    // komponenty
    card:
      'rounded-2xl shadow-sm border border-[var(--surface-3)] ' +
      'bg-[var(--surface-card)] backdrop-blur ' +
      'transition-[transform,box-shadow] duration-300 will-change-[transform] ' +
      'hover:-translate-y-0.5 hover:shadow-md',

    // focus (reszta ringa jest w global.css dla :focus-visible)
    'ring-focus': 'focus-visible:outline-none',

    btn:
      'inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold ' +
      'bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)] ' +
      'active:translate-y-0.5 transition-all duration-200 ' +
      'focus-visible:outline-none',

    'btn-ghost':
      'inline-flex items-center gap-2 px-3 py-2 rounded-xl font-medium ' +
      'text-[var(--text)] hover:bg-[var(--surface-2)] active:translate-y-0.5 ' +
      'transition-all focus-visible:outline-none',

    eyebrow: 'uppercase tracking-wider text-xs text-[var(--muted)]',
    muted: 'text-[var(--muted)]',

    // typografia treści (współpracuje z presetTypography)
    prose:
      'prose prose-neutral max-w-none ' +
      'prose-img:rounded-xl prose-headings:scroll-mt-24 ' +
      'prose-a:underline hover:prose-a:no-underline',

    // utility
    'icon-btn': 'inline-flex items-center justify-center rounded-xl p-2',
    'tap-target': 'px-4 py-3 rounded-xl text-base',
    overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm',
    drawer: 'fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-white shadow-xl p-4 overflow-y-auto',
  },

  // Klasy dokładane runtime (np. ToC) – trzymaj w CSS output
  safelist: [
    // ToC active states
    'underline',
    'font-semibold',
    // Typography (gdyby skaner ominął)
    'prose',
    'prose-neutral',
    'prose-img:rounded-xl',
    'prose-headings:scroll-mt-24',
    // nasze skróty/utility (na wszelki wypadek)
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
