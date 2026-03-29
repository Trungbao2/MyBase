import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  // ── Rendering ────────────────────────────────────────────────────────────
  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(BaseButton, {
        slots: { default: 'Click me' },
      })
      expect(wrapper.text()).toContain('Click me')
      expect(wrapper.classes()).toContain('btn--primary')
      expect(wrapper.classes()).toContain('btn--md')
    })

    it('renders slot content correctly', () => {
      const wrapper = mount(BaseButton, {
        slots: { default: 'Submit' },
      })
      expect(wrapper.find('.btn__label').text()).toBe('Submit')
    })
  })

  // ── Variants ─────────────────────────────────────────────────────────────
  describe('Variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger']

    variants.forEach((variant) => {
      it(`applies class for variant "${variant}"`, () => {
        const wrapper = mount(BaseButton, {
          props: { variant },
          slots: { default: variant },
        })
        expect(wrapper.classes()).toContain(`btn--${variant}`)
      })
    })
  })

  // ── Sizes ─────────────────────────────────────────────────────────────────
  describe('Sizes', () => {
    const sizes = ['sm', 'md', 'lg']

    sizes.forEach((size) => {
      it(`applies class for size "${size}"`, () => {
        const wrapper = mount(BaseButton, {
          props: { size },
          slots: { default: size },
        })
        expect(wrapper.classes()).toContain(`btn--${size}`)
      })
    })
  })

  // ── Disabled ──────────────────────────────────────────────────────────────
  describe('Disabled state', () => {
    it('is disabled when prop is true', () => {
      const wrapper = mount(BaseButton, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      })
      expect(wrapper.classes()).toContain('btn--disabled')
      expect(wrapper.attributes('disabled')).toBeDefined()
      expect(wrapper.attributes('aria-disabled')).toBe('true')
    })

    it('does not emit click when disabled', async () => {
      const wrapper = mount(BaseButton, {
        props: { disabled: true },
        slots: { default: 'Disabled' },
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  // ── Loading ───────────────────────────────────────────────────────────────
  describe('Loading state', () => {
    it('shows spinner when loading', () => {
      const wrapper = mount(BaseButton, {
        props: { loading: true },
        slots: { default: 'Loading...' },
      })
      expect(wrapper.classes()).toContain('btn--loading')
      expect(wrapper.find('.btn__spinner').exists()).toBe(true)
      expect(wrapper.attributes('aria-busy')).toBe('true')
    })

    it('does not emit click when loading', async () => {
      const wrapper = mount(BaseButton, {
        props: { loading: true },
        slots: { default: 'Loading...' },
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  // ── Block ─────────────────────────────────────────────────────────────────
  describe('Block mode', () => {
    it('applies block class when block prop is true', () => {
      const wrapper = mount(BaseButton, {
        props: { block: true },
        slots: { default: 'Block' },
      })
      expect(wrapper.classes()).toContain('btn--block')
    })
  })

  // ── Events ────────────────────────────────────────────────────────────────
  describe('Events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(BaseButton, {
        slots: { default: 'Click' },
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('passes native click event in emit', async () => {
      const onClick = vi.fn()
      const wrapper = mount(BaseButton, {
        props: { onClick },
        slots: { default: 'Click' },
      })
      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalledOnce()
    })
  })

  // ── Type attribute ────────────────────────────────────────────────────────
  describe('Type attribute', () => {
    it('has default type "button"', () => {
      const wrapper = mount(BaseButton, {
        slots: { default: 'Button' },
      })
      expect(wrapper.attributes('type')).toBe('button')
    })

    it('can be set to "submit"', () => {
      const wrapper = mount(BaseButton, {
        props: { type: 'submit' },
        slots: { default: 'Submit' },
      })
      expect(wrapper.attributes('type')).toBe('submit')
    })
  })
})
