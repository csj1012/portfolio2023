import { test, expect, vi } from 'vitest'
import fs from 'fs'
import { promisify } from 'util'
import sizeOf from 'image-size'
import { getImageDimensions, buildImage } from './util'
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

test('buildImage builds an image object containing the correct data in the correct format', async () => {
  const dummyImg = {
    src: '../tests/images/dummy.png',
    alt: 'Example alt.',
    caption: "Example caption, lorem ipsum dolor sit amet."
  }
  const dummyTitle = 'Example Image Title'

  vi.mock('util.js', () => {
    return {
      toSlug: vi.fn.mockImplementation('example-image-title'),
      getImageDimensions: vi.fn.mockReturnValue({
      'width': 1,
      'height': 1,
      'type': 'png'
      })
    }
  })

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