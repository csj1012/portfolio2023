import { expect, test, beforeEach, afterEach, vi } from 'vitest'
import { transformProjects } from './transform'
import expectedProjectsComplete from './projectsDummy.json'
import projectsSrc from './srcDummy'
import failingProjectsSrc from './srcDummyFails'
import tmp from 'tmp'
import fs from 'fs'

vi.mock('../util', () => ({
  buildItem: vi.fn((project) => {
    if (project.shouldFail) {
      return Promise.reject(new Error('intentional failure for buildItem().'))
    }
    return Promise.resolve({ ...project })
  })
}))

let tempFilePath

function setupTestFileSystem() {
    const tempFile = tmp.fileSync()
    console.log(`Temporary file created at ${tempFile.name}`)
    return tempFile.name
}

beforeEach(() => {
  tempFilePath = setupTestFileSystem()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('transformProjects should correctly write the expected projects to a non-empty file', async () => {
  await transformProjects(projectsSrc, tempFilePath)
  const actualProjects = JSON.parse(fs.readFileSync(tempFilePath, { encoding: 'utf-8' }))
  const fileExists = fs.existsSync(tempFilePath)
  const fileSize = fs.statSync(tempFilePath).size

  expect(fileExists).toBe(true, 'File should exist on the file system')
  expect(fileSize).toBeGreaterThan(0, 'File should not be empty')
  expect(actualProjects).toEqual(expectedProjectsComplete, 'The content of the file should match the expected projects')
  expect(actualProjects.length).toEqual(projectsSrc.length, 'The number of projects written should be correct')
})

test('transformProjects should handle partial failures', async () => {
  await transformProjects(failingProjectsSrc, tempFilePath)
  const actualProjectsPartial = JSON.parse(fs.readFileSync(tempFilePath, { encoding: 'utf-8' }))

  expect(actualProjectsPartial.length).toBe(2, 'Only projects without failures should be written')
  expect(actualProjectsPartial).toEqual([
    { id: 1, name: "Project A", shouldFail: false },
    { id: 3, name: "Project C", shouldFail: false }
  ], 'The content of the partially written file should be correct')
})
