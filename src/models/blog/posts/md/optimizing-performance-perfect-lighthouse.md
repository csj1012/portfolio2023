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

#### Improvement area #1: image optimization

##### Modernizing my custom, reusable `<Image>` React component

Prior to this optimization effort, the codebase already contained a handy `<Image>` React component, which uses the HTML5 `<picture>` element:

```
export default function Image({ src, alt, webp, ...props }) {
  return <picture {...props}>
    <source type="image/webp" srcSet={webp} />
    <source type="image/png" srcSet={src} />
    <img src={src} alt={alt} />
  </picture>
}
```

Bare bones, but it mostly got the job done. 

It was also causing a teensy bit of layout shift depending on the user's viewport size. Browsers sometimes attempt to render and paint image assets before stylesheets have loaded, which can then cause the image to "jump" into its new dimensions. 

Not only does this change the size of the image itself, but the layout effects resulting from an image that changes size abruptly can cascade down the page. (This is that annoying effect you often see on recipe blogs, by the way.)

The solution: writing `width` and `height` attributes into the markup:

```
export default function Image({ src, alt, dimensions, webp, ...props }) {
  return (
    <picture
      {...props}
      height={dimensions.height}
      width={dimensions.width}
    >
      <source type="image/webp" srcSet={webp} />
      <source type="image/png" srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  )
}

```

Keep in mind that the `dimensions` prop this component requires is referring to the expected most common dimensions of the image, which we need to estimate here—*not* the intrinsic size of the image. We are telling the browser: "hey, I know you don't have the CSS for this image yet, but it should be *about this big*, so just make the image that size for now."

*will be using srcset also once i implement it*

fallback for png 
- How I am managing images instead (ditching 1x PNG?)

*sizes attribute? wtf is this?*

##### Using SVG for background gradient noise texture image instead of PNG

I'm an art nouveau fan, and the art of artists like Mucha and SoandSo is the inspiration for this website's current theme. One technique that features heavily in this style is grain. 

<div class='images'>
  <div class='img'></div>
  <div class='img'></div>
</div>

Inspired by this article from <a href="https://daniel.do/article/making-noisy-svgs/">Daniel Immke</a> about <a href="https://css-tricks.com/grainy-gradients/">achieving grainy gradients with CSS</a>, I decided to use the gradient effect to give a modern touch to the antique art form.

In several of the inspiration examples, the noise is multidimensional in tone; instead of just a green-light-green gradient, I wanted something with more depth, tones bordering on yellow and orange, etc.

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
