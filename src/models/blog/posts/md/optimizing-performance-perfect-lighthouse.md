#### Making a website about yourself is no easy feat.
##### The cobbler's children have shoes, finally

The saying <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/TheCobblersChildrenHaveNoShoes">"the cobbler's children have no shoes"</a> described me for a number of years: a web developer with a kind of "meh," outdated personal website that lacked personality and didn't really reflect my work or what I'd learned throughout my lifetime making websites. 

So toward the end of 2023, I threw together a preliminary version of `chelsie.dev`, just to get something recent up on the interwebs. This involved pushing past perfectionism and just getting the dang thing out the door, which was no easy feat!

Fortunately for me, crafting semantically correct and accessible markup has been a core skill of mine for a long time, so even my quick and dirty work was pretty passable. In fact, on first test, I'd managed to pull off an almost perfect Lighthouse score.

<div class="images">
  <div>
    <img src='public/assets/images/blog/lighthouse-99.png'>
    <p class="caption">Ugh! So close!</p>
  </div>
</div>

Reader, I was *one percent away in the Performance category!*

All this took were some simple adjustments to the quick and dirty way I'd been handling fonts and images—so I figured I'd share with you some insights into how I improved the React app you are currently looking at from a 99% performance score to 100%.

*Note: this post is about a prior version of this site, which has recently been redesigned slightly to accommodate the blog—so the screenshots won't look the same, but the performance improvements are still alive and well in the codebase.*

##### Why a 1% improvement matters

That single percentage point highlights small details that are easy to overlook. These are often subtle enhancements that can significantly improve the perceived stability and professionalism of a brand in visitors' eyes.

<p class="pull">Just as a slightly off-pitch note can disrupt a musical performance, a slightly delayed load time or any perception of jank can impact UX.</p>

#### Optimizing images

##### Solidifying WebP support

To render images throughout the codebase, I was already using the custom `<Image>` React component I'd thrown together months ago, which uses the HTML5 `<picture>` element:

```
export default function Image({ src, alt, ...props }) {
  return <picture {...props}>
    // Supporting only one image format like it's 2018 :(
    <source type="image/png" srcSet={src} />
    <img src={src} alt={alt} />
  </picture>
}
```

 But I hadn't yet got around to supporting the webP image format, which would allow me to reduce the size of files loaded by the browser. In order to add this, I needed to make a few adjustments first.
 
 ###### Generating WebP images from PNGs

So all I needed to do was add a `<source>` to support webP—but for that I'd need webP versions of all my images, and I didn't want to generate those images manually. 

Luckily, I already had a Node script in place that I've already been using to standardize my would-be API for consumption by the React app, so it was pretty quick to tack on a function that generates webP versions from PNG images using <a href="https://www.npmjs.com/package/sharp">Sharp</a>:

  ```
  const convertToWebP = async (inputFilePath: string): Promise<void> => {
    const imagePath: string = path.resolve(currentDir, inputFilePath)
    const outputFilePath: string = imagePath.replace(/\.[^/.]+$/, '') + '.webp'

    const conversionResult: Result<void> = await sharp(imagePath)
      .toFormat('webp')
      .toFile(outputFilePath)
      .then(() => {
        return Result.ok<void>(undefined)
      })
      .catch((error) => Result.fail<void>(error, 'Could not convert image'))

    if (!conversionResult.success) {
      console.error('Could not convert image', conversionResult.error)
      return
    }
 }
 ```

 For my tiny portfolio site with only a handful of projects (and images per project) which I'd be adding manually, this level of scale made sense. If there were more editors than just lil' old me, a CMS might have made sense to handle all of this (and honestly, something like Astro handles this out of the box). But it was quick enough for me to roll my own here, and it works for now.


 ###### Side note: Functional error handling

By the way—in case you're wondering what `Result` is above, it's a class that represents an operation's result in order to provide some structured data about the outcome (following a super simplified monadic structure). It provides info such as the result value when successful, or the error and an error message if the operation fails.

Note: I'm slowly going this route in my codebase, trying to move away from `try/catch` blocks to handle exceptions (yes, I'm aware there's an implicit try/catch in the above block, but we are still not propogating exceptions outside the function, which is the general goal...).

  ```
  class Result<T> {
    constructor(
      public success: boolean,
      public value: T,
      public error: any,
      public errorMessage: string = '',
    ){}

    static ok<T>(value: T): Result<T> {
      return new Result<T>(true, value, null)
    }

    static fail<T>(error: any, errorMessage: string): Result<T> {
      return new Result<T>(false, [] as T, error, errorMessage)
    }
  }
 ```

 ###### Running the script

 Since I only need to generate these images every once in a while (when a new one is added), I chose to add a custom `npm` command to use in the terminal. This way, I can run it manually as needed (instead of alongside some other operations that are handled at build time, managed by Vite). 
 
 In `package.json`, `npm run transform` executes the script that includes the fuction call to `convertToWebP()`:

  ```
    // runTransform.js includes a function call to generate webP images.
    "transform": "node tools/runTransform.js",
 ```

 ###### Adding the webP `<source>`

Now I could update my React component:

```
export default function Image({ src, webp, alt, sizes, ...props }) {
  return <picture {...props}>
    // webP support!
    <source type="image/webp" srcSet={webp} sizes={sizes} />
    <source type="image/png" srcSet={src} sizes={sizes} />
    <img src={src} alt={alt} />
  </picture>
}
```
 
 
##### Adding inline image dimension attributes

According to Lighthouse, there was also a bit of layout shift happening as images loaded; browsers sometimes attempt to render and paint image assets before those images have loaded, which can cause page reflow. (This is one component of that annoying effect you often see on recipe blogs, by the way!)

Solution: writing `width` and `height` attributes into the markup:

```
export default function Image({ src, alt, dimensions, webp, sizes, ...props }) {
  const webPSrcSet = ${}
  return (
    <picture
      {...props}
      // Added dimensions:
      height={dimensions.height}
      width={dimensions.width}
    >
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <source type="image/png" srcSet={src} sizes={sizes} />
      <img src={src} alt={alt} />
    </picture>
  )
}

```

Keep in mind that the `dimensions` prop this component requires is referring to the expected most common dimensions of the image, which we need to estimate here—*not* the intrinsic size of the image. We are telling the browser: "hey, I know you don't have this image downloaded yet, but it should be *about this big*, so just make the image that size for now."

##### Using SVG for background gradient noise texture image instead of PNG

I'm an art nouveau fan, and the art of artists like <a href="https://en.wikipedia.org/wiki/Alphonse_Mucha">Alphonse Mucha</a> and <a href="https://en.wikipedia.org/wiki/William_Morris">William Morris</a> is the inspiration for this website's current theme. Art from this era often uses a grainy texture wash in backgrounds, so I thought I'd like to replicate that here. 

<div class='images'>
  <div class='img'>
    <img src="public/assets/images/mucha-reverie.webp" alt="Art image, Rêverie by Alphonse Mucha.">
    <p class="caption">Alphonse Mucha, <em>Rêverie</em>, 1898 (detail) © <a href="https://www.muchafoundation.org/en">Mucha Trust 2024</a></p>
  </div>
</div>

Inspired by this article from <a href="https://daniel.do/article/making-noisy-svgs/">Daniel Immke</a> about <a href="https://css-tricks.com/grainy-gradients/">achieving grainy gradients with CSS</a>, I decided to use the gradient effect to give a modern touch to my nod to the antique art form.

I wanted a noise that was multidimensional in tone; instead of just a green-light-green gradient, I wanted something with more depth, with hints of tones bordering on yellow and orange:

<div class='images'>
  <div class='img'>
    <img src="public/assets/images/mucha-reverie.webp" alt="Art image, Rêverie by Alphonse Mucha.">
    <p class="caption">Alphonse Mucha, <em>Rêverie</em>, 1898 (detail) © <a href="https://www.muchafoundation.org/en">Mucha Trust 2024</a></p>
  </div>
</div>

Wanting to get moving quickly as I was designing this mostly in the browser, I made a PNG file version of the desired texture image. However, the image was larger than an SVG.:

<div class='images'>
  <div class='img'></div>
</div>

I'm achieving the multidimensionality with blend modes and transparency. This makes the SVG really versatile to use in different contexts across the site.

The SVG version is markedly smaller, and since it was code, I was able to edit it on the fly, with satisfying results.:

<img src="public/assets/svg/noise.svg" alt="The SVG.">

file size difference

##### Preloading an image

At the time there was an image on the About page:

SCREENSHOT IMAGE

While this image loaded quickly, the browser was still loading this image first, and then proceeding with the rest of its paint operations (meaning the image loading was holding up the time to First Contentful Paint).

The quick fix was just to preload the image by adding a `<link rel="preload">` in the `<head>` tag of the page, in my case the parent `index.html` where the React app is rendered:

```
<link rel="preload" as="image" href="/assets/images/nouveau.webp">
```

This solution didn't support browsers that lacked `webp` support, though. Idk what to say about that.

##### Updating favicon.ico size and filename

This is a no-brainer, but using a `.ico` file instead of a regular old SVG.

While I was trying to figure out what to make my favicon, I messed around with different icon ideas. I ended up with a flourish I made in Adobe Illustrator - but it had a filename of `flourish.svg`. 

Changing this to `favicon.ico` was a quick win that allowed:
- Multiple file dimensions to be contained in the same file, so browsers can load and render it faster
- Improved cacheability for repeat visitors

##### Why I am not using a CDN for the images on this site right now

#### Font management

##### Using Fontsource npm package and regular font hosting methods to self-host fonts instead of using Google Fonts CDN

This gave me less ability to take advantage of hinting (I think?)

I had to do some stuff to get the fonts to not look terrible on Safari

#### Layout stability

##### Preventing layout scrollbar shift on load

##### Preventing layout scrollbar shift when navigating between pages with different lengths


#### Results

##### First Contentful Paint reduced by .1s

##### Distance between FCP and LCP reduced from .5s to .1s

Visual appearance of smoother load with less jank

##### Reduction in Cumulative Layout Shift

#### Conclusion

Continuous learning is the best part of this job. Some engineers dread it, but I relish every possible opportunity to learn something new—after all, I am self taught. It's how I got here. Keeping up with industry standards is great.
