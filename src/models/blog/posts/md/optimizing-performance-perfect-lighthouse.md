#### Introduction
##### The cobbler's children have shoes, finally!

The trope <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/TheCobblersChildrenHaveNoShoes">"the cobbler's children have no shoes"</a> described me for a number of years: a front end engineer with a kind of "meh," outdated personal website that lacked personality and didn't really reflect my work or what I'd learned throughout my lifetime making websites. 

So toward the end of 2023, I threw together a preliminary version of `chelsie.dev`, just to get something recent up on the interwebs. This involved pushing past perfectionism and just getting the dang thing out the door, which was no easy feat.

Fortunately for me, writing semantically correct, accessible markup has been a core skill of mine for a long time, so even my quick and dirty work was pretty passable. In fact, on first test, I'd managed to pull off an almost perfect Lighthouse score. (Not to brag. Then again, this is my personal blog, so I'm going to brag.)

<div class="images">
  <div>
    <img src='/assets/images/blog/lighthouse-99.webp' alt='Screenshot showing a perfect lighthouse score - minus one point docked from the Performance category.' width="706" height="160">
    <p class="caption">SO CLOSE</p>
  </div>
</div>

Reader, I was *one percent away in the Performance category.* Maybe some people might shrug and go "eh, good enough." Apparently I am not most people.

That final one percent required some simple adjustments to the quick and dirty way I'd been handling fonts and images—so I figured I'd share with you some insights into how I bumped this React app's 99% performance score up to 100%.

<p class="more">Note: this post is about a prior version of this site, which has recently been redesigned slightly to accommodate the blog—so the screenshots won't look the same, but the performance improvements are still alive and well in the codebase. Also, this post would've been <em>much longer</em> if I included every single improvement I made, so I'll have to cover things like managing layout shift in a separate post. Sorry about that.</p>

##### Why a 1% improvement matters

The devil is in the details. That single percentage point highlights small intricacies that are easy to overlook, but when done right, can significantly improve the perceived stability and professionalism of a brand in visitors' eyes.

<p class="pull">Just as a slightly off-pitch note can disrupt a musical performance, a slightly delayed load time or any perception of jank can impact UX.</p>

#### Optimizing images

##### Using SVG for background gradient noise texture image instead of PNG

I'm a lover of old things. I sew clothing from vintage sewing patterns. Last year I restored a 1920s oak coffee table. I enjoy knitting vintage lace. There's an 1898 copy of <em>The Iliad</em> in the drawer next to me.

Naturally, some of this obsession was bound to bleed into the visual design of this site: <a href="https://en.wikipedia.org/wiki/Art_Nouveau">Art Nouveau</a> in particular has been a major source of creative inspiration for me over the past several years,  particularly the work of <a href="https://en.wikipedia.org/wiki/Alphonse_Mucha">Alphonse Mucha</a> and <a href="https://en.wikipedia.org/wiki/William_Morris">William Morris</a>, two of many artists of the period whose characteristic style features natural, plant-inspired forms (this also being, conveniently, a satisfying intersection between my love of creating things and wrangling the garden).

<div class='images'>
  <div class='img'>
    <img src="/assets/images/mucha-reverie.webp" alt="Art image, Rêverie by Alphonse Mucha." width="706" height="436">
    <p class="caption">Alphonse Mucha, <em>Rêverie</em>, 1898 (detail) © <a href="https://www.muchafoundation.org/en">Mucha Trust 2024</a></p>
  </div>
</div>

I'm still working on introducing more intricate design elements here, but laying the aesthetic foundation with subtle elements like backgrounds was an easy way to work in some of my creative inspiration while still being able to focus on content, accessibility, and usability at the beginning of the process.





Anyway, art from this era often uses a grainy texture wash in backgrounds, so I thought I'd like to replicate that here. Inspired by this article from <a href="https://daniel.do/article/making-noisy-svgs/">Daniel Immke</a> about <a href="https://css-tricks.com/grainy-gradients/">achieving grainy gradients with CSS</a>, I wanted to use the gradient effect to give a modern touch to my nod to the antique art form.

I wanted a background texture that was multidimensional in tone; instead of just a green-light-green gradient, I felt pulled toward something with more depth, with hints of tones bordering on yellow and orange. Wanting to get moving quickly as I was designing this mostly in the browser, I made a PNG file version of the texture image in Photoshop:

<div class='images'>
  <div class='img'>
    <img src="/assets/images/nouveau-bg.webp" alt="The original file." width="706" height="141">
  </div>
</div>

Once I was happy with the effect the old file gave the layout, I set about recreating it in SVG:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 100">
	<defs>
    <rect id="shape" x="0" y="0" width="1800" height="100" />
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="202"
        numOctaves="100"
        result="turbulence"
      />
      <feComposite operator="in" in="turbulence" in2="SourceAlpha" result="composite"/>
      <feColorMatrix in="composite" type="luminanceToAlpha" />
      <feBlend in="SourceGraphic" in2="composite" mode="overlay" />
      <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
    </filter>
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation=".13"/>
    </filter>    
      <linearGradient id="gradient">
        <stop offset="0%" stop-color="#458767ff" />
        <stop offset="33%" stop-color="#397558ff" />              
        <stop offset="66%" stop-color="#1f5952ff" />      
        <stop offset="100%" stop-color="#458767ff" />
      </linearGradient>
      <use href="#shape" />    
	</defs>
	<use href="#shape" mask="url(#gradientFade)" fill="url(#gradient)" filter="url('#noise') url('#blur') " />
</svg>
```

I'm achieving the multidimensionality by overlaying two SVGs, altering blend modes and transparency. This makes the SVG really versatile to use in different contexts across the site.

The SVG solution is markedly smaller, and since its code is easily editable from within my IDE, I was able to tweak it on the fly, with satisfying results:

<div class='images'>
  <div class='img'>
    <img src="/assets/svg/noise.svg" alt="SVG image, a color gradient with visual noise." style="width: 100%;" width="570" height="115">
    <img src="/assets/svg/noiseOverlay.svg" alt="The SVG overlay image, a color gradient with visual noise that differs in tone from the first." style="width: 100%;" width="570" height="115">
    <p class="caption">The updated SVG files: one containing the main color gradient, and the other containing the tones to be subtly overlaid on top.</p>
  </div>
</div>

Simply combining them with the overlay on top looks like this:

<div class='images'>
  <div class='img'>
    <div style="background-image: url(/assets/svg/noiseOverlay.svg), url(/assets/svg/noise.svg); width: 100%;height: 100px;"></div>
    <p class="caption">The two SVGs overlaid atop one another.</p>
  </div>
</div>


And then using a CSS blend mode property to blend the colors:

```
.example-grainy {
  background-blend-mode: overlay;
}
```

We get the finished product:

<div class='images'>
  <div class='img'>
    <div style="background-image: url(/assets/svg/noiseOverlay.svg), url(/assets/svg/noise.svg); width: 100%;height: 100px; background-blend-mode: overlay;"></div>
    <p class="caption">I think adding the orange and yellow tones back in gives it that little bit of earthiness that's so characteristic of the style.</p>
  </div>
</div>

Maybe that difference is so subtle only combination-art-nouveau-and-CSS nerds would care (I'm sure there must be dozens of us?), but I'm a happy camper. I love being able to combine artistic appreciation and technical detail into my work. 

Best of all, the file size difference: 
<ul>
  <li>Old PNG file: 303 KB</li>
  <li>New SVG files (each): 4 KB</li>
</ul>

This is a pretty miniscule difference, but a 4kb image is basically footprintless, which makes me pretty happy. This detail makes the site load that much faster and feel that much snappier (and nicer to use).

Moving on to the next set of improvements:

##### Solidifying WebP support in my Image component

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

##### Preloading an image

At the time of this effort there was an image (an art nouveau-inspired depiction of me, in fact!) on the About page:

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/image-home.webp" alt="Screenshot of the previous design of the home page, featuring an image of the author." style="width: 100%;" width="706" height="370">
    <p class="caption">The somewhat wordier older version of the About page of this site.</p>
  </div>
</div>

While this image loaded quickly, the browser was still loading this image first, and then proceeding with the rest of its paint operations (meaning the image loading was holding up the time to First Contentful Paint).

The quick fix was just to preload the image by adding a `<link rel="preload">` in the `<head>` tag of the page, in my case the parent `index.html` where the React app is rendered:

```
<link rel="preload" as="image" href="/path/to/asset">
```

This image appeared right away for all desktop users, so lazy loading wouldn't have been an effective strategy here. Preloading the image got the job done.


#### Font management

##### Self-hosting fonts

Whilst designing in the browser and <a href="https://fonts.google.com/knowledge/choosing_type/pairing_typefaces">trying out different font pairings</a>, Google Fonts CDN was my best friend. The flexibility made it easy to swap out different fonts while I decided which typefaces would add to the mood of the site while prioritizing legibility.

But once I'd chosen my desired typefaces and weights, I needed to reduce the <a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.">FOUC (Flash of Unstyled Content)</a> the load time of those font files from the CDN was causing. 

Luckily, it was trivial to self-host fonts using <a href="https://fontsource.org/">Fontsource</a> npm packages (with a bonus variable font, Mulish, which allows a high level of versatility for font weight rendering) instead of relying on a CDN:

```
npm install @fontsource/goudy-bookletter-1911
npm install @fontsource-variable/mulish
```

For the title display font, <a href="https://fontesk.com/mirra-font/">Mirra</a> by <a href="https://www.behance.net/oxanatkach">Oxana Tkach</a>, I just used a simple `font-face` declaration to make the self-hosted font available for use in a `font-family` property elsewhere in the codebase:

```
<style>
  @font-face {
    font-family: "Mirra";
    src: url("//assets/fonts/mirra.woff2") format("woff2");
  }

  @mixin display {
    font-family: "Mirra", sans-serif;
    font-size: var(--sans-2xl);
    line-height: var(--line-height-base);
  }
</style>
```

One drawback of using this custom font was that the title display font seemed to lack hinting (built-in features that allow more finely-tuned control over font rendering complexities). So I had to add a small adjustment to the font implementation to get the fonts to not look terrible on Safari, especially for iOS:

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/bad-safari.webp" alt="Screenshot of the author's title display font rendering in triplicate, making it difficult to read." style="width: 100%;" width="706" height="79">
    <p class="caption">A valiant yet vain effort on the part of Safari on iOS to render a 700-weight version of this font. To be honest, the "N" looked kinda cool I guess.</p>
  </div>
</div>

So I used this CSS to have it not do that:

```
.safari {
  font-synthesis: none;
}
```

I made this possible by using one of the oldest tricks in the book (which fortunately is much easier now than it used to be): user agent detection. Not always ideal, but I was targeting a very specific set of browsers here... 

```
const isSafari = () => {
  var ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') > -1)
}

// If truthy, the above is used to set a .safari class on necessary elements.
```

The above wasn't strictly performance related, but a detail of this work nonetheless.

#### Results

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/100-percent.webp" alt="Screenshot of a 100% set of Lighthouse scores." style="width: 100%;" width="706" height="141">
    <p class="caption">Wooooo</p>
  </div>
</div>

##### First Contentful Paint reduced by .1s

Doesn't seem like a lot, maybe, but take a look at the old timeline, and the old vs. the new metrics:

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/old-timeline.webp" alt="Screenshot of the old timeline before improvements were made, showing a late FCP, large FCP and LCP distance, and two layout shifts during page load." style="width: 100%;" width="706" height="260">
    <p class="caption">The page load timeline before improvements were made. Note the large FCP and LCP distance and two layout shifts during page load.</p>
  </div>
</div>

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/old.webp" alt="Screenshot of a Lighthouse score: First Contentful paint at .5s, Total Blocking Time 0s, Speed index .5s, Largest Contentful Paint 1s, Cumulative Layout Shift .016" style="width: 100%;" width="706" height="269">
    <p class="caption">The old Lighthouse report metrics (note the LCP happening at 1s).</p>
  </div>
</div>

<div class='images'>
  <div class='img'>
    <img src="/assets/images/blog/new.webp" alt="Screenshot of a Lighthouse score: First Contentful paint at .4s for a .1s reduction, Total Blocking Time 0s (the same), Speed index .4s for a .1s reduction, Largest Contentful Paint .5s for a .5s reduction, Cumulative Layout Shift .002 for a .014 reduction" style="width: 100%;" width="570" height="215">
    <p class="caption">The new Lighthouse report metrics.</p>
  </div>
</div>

##### Distance between FCP and LCP reduced from .5s to .1s

To my lowly human perception, the visual appearance of smoother load with less jank was the biggest payoff here. That half second between First Contentful Paint (FCP) and Largest Contentful Paint (LCP) was noticeable enough for the site to have a kind of "clunky" rhythm as the assets loaded in. With the improvements described above, that time went down to a tenth of a second.


#### Conclusion

Continuous learning is one of the best parts of this job. Some engineers dread it, but I relish every possible opportunity to learn something new—after all, I am self taught. It's how I got here.

As I mentioned above, I'll have to write another post about controlling layout shift (you can see the .1s reduction in the results above, a distinction which still matters, however small). 

And of course, there's room for improvement in perceived load perfofrmance in this redesign—I'll be posting about that, too.
