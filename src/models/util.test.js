import { test, expect, vi, beforeEach } from 'vitest'
import fs from 'fs'
import { promisify } from 'util'
import sizeOf from 'image-size'
import { getImageDimensions, buildImage, isValidImageSrc, Result } from './util'
import { Buffer } from 'buffer'
import path from 'path'

const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentFileUrl.pathname);
const src = 'tests/images/image.jpg';

// Mock fs to simulate readFile
vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    promises: {
      readFile: vi.fn(() => Promise.resolve(Buffer.from('dummy image data')))
    }
  }
});

vi.mock('util.js', () => {
  return {
    toSlug: vi.fn.mockImplementation('example-image-title'),
    getImageDimensions: vi.fn.mockReturnValue({
    'width': 1,
    'height': 1,
    'type': 'png'
    }),
    isValidImageSrc: vi.fn.mockImplementation(true)
  }
})

test('buildImage builds an image object containing the correct data in the correct format', async () => {
  const dummyImg = {
    src: '../tests/images/dummy.png',
    alt: 'Example alt.',
    caption: "Example caption, lorem ipsum dolor sit amet."
  }
  const dummyTitle = 'Example Image Title'
  const actualBuildImageResult = await buildImage(dummyImg, dummyTitle)
  const expectedBuildImageResult = {
    src: '../tests/images/dummy.png',
    alt: 'Example alt.',
    caption: 'Example caption, lorem ipsum dolor sit amet.',
    dimensions: { width: 1, height: 1, type: 'png' },
    webp: '../tests/images/dummy.webp'
  }

  expect(actualBuildImageResult).toEqual(expectedBuildImageResult)

})

test('Result class returns a result object on success', () => {
  const value = 'Success value'
  const result = Result.ok(value)

  expect(result.success).toBe(true)
  expect(result.value).toBe(value)
  expect(result.error).toBeNull()
  expect(result.errorMessage).toBe('')
})

test('Result class returns a result object on failure', () => {
  const error = new Error('Something went wrong')
  const errorMessage = 'Oops, an error occurred'
  const result = Result.fail(error, errorMessage)

  expect(result.success).toBe(false)
  expect(result.value).toEqual([])
  expect(result.error).toBe(error)
  expect(result.errorMessage).toBe(errorMessage)
})

// beforeEach(() => {
//   vi.clearModules();  // Clear module cache if necessary
//   vi.resetModules();  // Reset the state of all modules
// });

// Setup a default mock for image-size
// vi.mock('image-size', () => ({
//   default: vi.fn(() => ({ width: 800, height: 600 }))
// }));

// test('getImageDimensions should return the dimensions of the image', async () => {
//   const expectedDimensions = { width: 800, height: 600 };
//   const dimensions = await getImageDimensions(src, currentDir);
//   expect(dimensions).toEqual(expectedDimensions, 'The dimensions should match the expected values');
// });

// test('getImageDimensions should throw an error if image dimensions are missing', async () => {
//   // Re-mock image-size for this test to simulate missing dimensions
//   vi.mock('image-size', () => ({
//     default: vi.fn(() => ({ width: undefined, height: undefined }))
//   }));

//   await expect(getImageDimensions(src, currentDir)).rejects.toThrow('Image dimensions are missing');
// });

// test('isValidImageSrc correctly validates a valid .png path ', () => {
//   // arrange
//   const validSrc = '/assets/images/example-image-file.png'
//   const validExtension = '.png'

//   // act
//   console.log(validSrc, validExtension)
//   const actualResult = isValidImageSrc('/assets/images/example-image-file.png', '.png')

//   // assert
//   expect(actualResult).toBeTruthy()
// })

// test('isValidImageSrc correctly flags an invalid .png path ', () => {
//   // arrange
//   // act
//   // assert
// })