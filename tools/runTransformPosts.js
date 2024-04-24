import { transformPosts } from '../src/models/blog/transformPosts.js'

transformPosts().then(() => {
  console.log('Transformation completed successfully.')
}).catch(err => {
  console.error('Error during transformation:', err)
})
