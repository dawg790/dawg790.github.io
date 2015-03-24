## dawg790 Optimizations

### Index.html

The following steps were taken to acheive a PageSpeed Insight score of 90 or higher:
* The Google webfont styles were placed inline (I used the code from the source URL)
* The styles from style.css were also placed inline
* The pizzeria.jpg image was optimized and replaced saving many bytes of data.
* Both scripts were set to run asynchronously.
* The print.css was file was changed to render block only on print media.
* Finally, the HTML file was minified and delivered as the production version.

### pizza.html

The following steps were taken to ensure a 60fps frame rate:
* All the for loops were optimized so that any redundant variable creation was moved outside the loop.
* All uses of querySelector or querySelectorAll were replaced with getElementById or getElementsByClassName.
* The number of pizzas generated on screen was decreased.
* The changeSliderLabel function was optimized by utilizing #1 and #2 above.
* The requestAnimationFrame function was used to group painting of pizza elements on the screen.
* The scrollY calculation was moved outside the for loop in the updatePositions function so that it wasn't
calculated for every pizza.
* The phase variable was optimized as was the use of translate3d in the loop.
* CSS3 transform property was used in place of style.left to force load onto the GPU.


## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

Project Links:
* <a href="https://www.udacity.com/wiki/ud884">Web Optimization Wiki</a>
* <a href="https://developer.chrome.com/devtools/docs/device-mode">Device Mode &amp; Mobile Emulation - Google</a>
* <a href="https://developer.chrome.com/devtools/docs/timeline#making-a-recording">Performance Profiling with the Timeline</a>
* <a href="https://developer.chrome.com/devtools/docs/timeline#timeline-event-reference">Timeline Event Reference</a>
* <a href="https://developer.chrome.com/devtools/docs/remote-debugging">Remote Debugging with Android</a>
* <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/">Critical Rendering Path - Google</a>
* <a href="http://www.stevesouders.com/blog/2009/05/18/flushing-the-document-early/">Flushing Document Early</a>
* <a href="http://blog.cowchimp.com/chunk-scatter-http-chunked-response-analysis-tool/">Chunk Scatter - Visualize chunked HTTP responses</a>
* <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model#css-object-model-cssom">Constructing the CSS Object Model</a>
* <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css">Render Blocking CSS</a>
