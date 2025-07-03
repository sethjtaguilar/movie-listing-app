import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'
import { describe, it, expect, vi } from 'vitest'

describe('SearchBar', () => {
  it('emits search event when typing', async () => {
    vi.useFakeTimers()

    const wrapper = mount(SearchBar)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')
    vi.runAllTimers() // Use vi instead of jest

    expect(wrapper.emitted('search')).toBeTruthy()

    vi.useRealTimers()
  })
})
