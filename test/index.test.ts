import { describe, it, expect } from 'vitest'
import { hello } from '../src/index'

describe('hello', () => {
  it('renvoie un message de salutation', () => {
    expect(hello('Jean')).toBe('Bonjour, Jean !')
  })
})
