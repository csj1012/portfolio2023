import { expect, test } from 'vitest';
import { transformProjects } from './transform';
import expectedProjects from './projectsDummy.json';
import projectsSrc from './srcDummy'

// add tests here!
test('transformProjects should transform projects correctly', async () => {
  // Arrange
  
  // Act
  const actualProjects = await transformProjects();

  // Assert
  // Add your assertions here to verify that the transformation was successful

  // Data is correct (using direct comparison)
  // File exists in correct spot and is not empty
  // File has correct number of projects
  // Each project has correct properties
  // No errors happened? 
});
