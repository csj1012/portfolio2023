import { expect, test, beforeEach, afterEach, vi } from 'vitest'
import { transformProjects } from './transform'
import expectedProjectsComplete from './projectsDummy.json'
import projectsSrc from './srcDummy'
import failingProjectsSrc from './srcDummyFails'
import tmp from 'tmp'
import fs from 'fs'
import { buildItem } from '../util'

vi.mock('../util', () => ({
  buildItem: vi.fn(project => {
    if (project.shouldFail) {
      return Promise.reject(new Error('intentional failure for buildItem().'))
    }
    return Promise.resolve({ ...project })
  })
}))

let tempFilePath

beforeEach(() => { 
  const tempFile = tmp.fileSync()
  tempFilePath = tempFile.name
  console.log(`temp file ${tempFile.name} written to ${tempFilePath}`)

  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('transformProjects should transform projects correctly', async () => {
  await transformProjects(projectsSrc, tempFilePath)
  const actualProjectsComplete = JSON.parse(fs.readFileSync(tempFilePath, { encoding: 'utf-8' }))
  expect(actualProjectsComplete).toEqual(expectedProjectsComplete)

  // File exists in correct spot and is not empty (is this worth it, or redundant?)
  // File has correct number of projects (is this redundant?)
  // Each project has correct properties (is this redundant?)
  // No errors happened? (is this the right place to log this?)
})

test('transformProjects should handle partial failures in buildItem', async () => {
  await transformProjects(failingProjectsSrc, tempFilePath)
  const actualProjectsPartial = JSON.parse(fs.readFileSync(tempFilePath, { encoding: 'utf-8' }))

  expect(actualProjectsPartial.length).toBe(2)
  expect(actualProjectsPartial).toEqual([
    { id: 1, name: "Project A", shouldFail: false },
    { id: 3, name: "Project C", shouldFail: false }
  ])

  expect(console.error).toHaveBeenCalledWith(expect.stringMatching(/TRANSFORM ERROR: Could not process PROJECT \d+: Error: intentional failure for buildItem\(\)\./))
})
