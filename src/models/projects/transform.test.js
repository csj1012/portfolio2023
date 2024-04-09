import { expect, test, beforeEach } from 'vitest'
import { transformProjects } from './transform';
import expectedProjects from './projectsDummy.json'; // three example projects to compare against?
import projectsSrc from './srcDummy' // the pre-transformed dummy projects (the test should transform these into the projectsDummy file?)
import tmp from 'tmp' // allows us to create a temp directory so we don't clutter the codebase with test files.
import fs from 'fs'

let tempFilePath

beforeEach(() => { // creates temp file before each test.
  const tempFile = tmp.fileSync()
  tempFilePath = tempFile.name
  console.log(`temp file ${tempFile.name} written to ${tempFilePath}`)
})

// add tests here!
test('transformProjects should transform projects correctly', async () => {
  // Arrange
  
  // Act
  await transformProjects(projectsSrc, tempFilePath) // create the temp file output of what actually happens when we run this function

  // Assert
  const actualProjects = JSON.parse(fs.readFileSync(tempFilePath, { encoding: 'utf-8' }))

  // Data is correct (using direct comparison)
  // compare the response to the expectedProjects
  expect(actualProjects).toEqual(expectedProjects)

  // File exists in correct spot and is not empty (is this worth it, or redundant?)
  // File has correct number of projects (is this redundant?)
  // Each project has correct properties (is this redundant?)
  // No errors happened? (is this the right place to log this?)
});
