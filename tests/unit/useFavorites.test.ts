import { describe, it, expect, beforeEach } from 'vitest'
import { useFavorites } from '@/composables/useFavorites'

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('initializes with empty favorites', () => {
    const { favorites } = useFavorites()
    expect(favorites.value).toEqual([])
  })
})
