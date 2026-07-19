import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const source = readFileSync(
  resolve(dirname(fileURLToPath(import.meta.url)), '../StoreView.vue'),
  'utf8',
)

describe('StoreView isolation', () => {
  it('loads only the AIMate storefront path without forwarding AIMate credentials', () => {
    expect(source).toContain("const storeUrl = 'https://pay.ldxp.cn/shop/aimate'")
    expect(source).not.toContain('buildEmbeddedUrl')
    expect(source).not.toContain('authStore.token')
    expect(source).not.toContain('user_id')
  })

  it('hides the third-party navigation and prevents popup navigation', () => {
    expect(source).toContain('transform: translateY(-72px)')
    expect(source).not.toContain('target="_blank"')
    expect(source).not.toContain('allow-popups')
    expect(source).not.toContain('allow-top-navigation')
  })
})
