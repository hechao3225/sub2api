import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../VersionBadge.vue')
const componentSource = readFileSync(componentPath, 'utf8')

describe('VersionBadge access control', () => {
  it('renders version controls only for administrators', () => {
    expect(componentSource).toContain('<template v-if="isAdmin">')
    expect(componentSource).not.toContain('v-else-if="version"')
  })

  it('guards privileged loading and rollback actions', () => {
    expect(componentSource).toContain('const isAdmin = computed(() => authStore.isAdmin)')
    expect(componentSource).toContain('async function loadRollbackVersions() {\n  if (!isAdmin.value) return')
    expect(componentSource).toContain('async function handleRollback() {\n  if (!isAdmin.value) return')
    expect(componentSource).toContain('if (isAdmin.value) {\n    // Use cached version if available')
  })
})
