// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "Ranjit Raut",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-news",
          title: "news",
          description: "highlights",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-10-most-innovative-private-space-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/10-most-innovative-private-space.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-most-innovative-private-space.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-linux-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-linux.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-linux.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-python-why-is-it-so-popular-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-python-why-is-it-so-popular.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-python-why-is-it-so-popular.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-is-linux-operating-system-or-kernel-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/is-linux-operating-system-or-kernel.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/is-linux-operating-system-or-kernel.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-dogecoin-how-does-it-work-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-dogecoin-how-does-it-work.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-dogecoin-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-10-best-search-engines-in-theworld-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/10-best-search-engines-in-theworld.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-best-search-engines-in-theworld.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-pegasus-why-is-it-harmful-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-pegasus-why-is-it-harmful.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-pegasus-why-is-it-harmful.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-20-blogging-tips-to-rank-your-blog-post-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/20-blogging-tips-to-rank-your-blog-post.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/20-blogging-tips-to-rank-your-blog-post.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-10-most-dangerous-computer-viruses-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/10-most-dangerous-computer-viruses-.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-most-dangerous-computer-viruses-.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-5-ai-personal-assistant-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/5-ai-personal-assistant.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/5-ai-personal-assistant.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-machine-learning-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-machine-learning.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-machine-learning.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-deep-learning-how-does-it-work-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-deep-learning-how-does-it-work.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-deep-learning-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-virtual-reality-and-how-does-i-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-virtual-reality-and-how-does-i.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-virtual-reality-and-how-does-i.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-augmented-reality-how-it-works-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-augmented-reality-how-it-works.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-augmented-reality-how-it-works.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-how-to-make-website-using-html-and-css-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/how-to-make-website-using-html-and-css.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/how-to-make-website-using-html-and-css.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-what-is-artificial-20intelligence-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/what-is-artificial%20intelligence.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-artificial%20intelligence.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-how-to-create-responsive-navigation-bar-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/how-to-create-responsive-navigation-bar.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/how-to-create-responsive-navigation-bar.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-08-how-to-install-mingw-tools-for-cc-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/08/how-to-install-mingw-tools-for-cc.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/how-to-install-mingw-tools-for-cc.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-07-what-is-trusted-platform-module-tpm-you-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/07/what-is-trusted-platform-module-tpm-you.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/07/what-is-trusted-platform-module-tpm-you.html", "_blank");
          
        },
      },{id: "post-what-are-the-challenges-of-living-on-mars-challenges-on-colonization-of-mars-surftheknowledge",
        
          title: 'What Are The Challenges of Living on Mars? Challenges On Colonization of Mars... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Challenges of living on Mars: The Unspoken Truth | Challenges On Colonization of Mars, Colonizing Mars, Colonized Mars, Colonize on Mars, Mars Colo..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/07/challenges-of-living-on-mars-unspoken.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-07-what-is-bitcoin-and-how-does-it-work-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/07/what-is-bitcoin-and-how-does-it-work.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/07/what-is-bitcoin-and-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-windows-11-news-features-release-date-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/windows-11-news-features-release-date.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/windows-11-news-features-release-date.html", "_blank");
          
        },
      },{id: "post-what-is-electric-vehicle-ev-how-is-it-different-than-gasoline-vehicle-surftheknowledge",
        
          title: 'What is Electric Vehicle (EV)? How Is It Different Than Gasoline Vehicle? -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Electric Vehicles: The Future of Transportation. The world is slowly shifting to renewable energy sources. If you are new to EVs.....................",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/electric-vehicles-the-future.html", "_blank");
          
        },
      },{id: "post-what-is-a-backlink-how-to-get-backlinks-and-why-you-need-them-surftheknowledge",
        
          title: 'What is a Backlink? How to Get Backlinks And Why You Need Them?... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is a Backlink?  How to Get Backlinks And Why You Need Them? and the basics of SEO backlinks. How to make Quality Backlinks, Procedure...........",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/what-is-backlink-how-to-get-backlinks.html", "_blank");
          
        },
      },{id: "post-how-is-the-future-of-electric-vehicles-in-nepal-evs-in-nepal-surftheknowledge",
        
          title: 'How is the Future of Electric Vehicles In Nepal? EVs In Nepal -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Electric Vehicles in Nepal | The Future Of EV In Nepal Electric vehicle (EV) is a trending topic in Nepal. EVs are creating a sensational............",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/the-future-of-ev-in-nepal.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-10-best-selling-video-games-of-all-time-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/10-best-selling-video-games-of-all-time.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/10-best-selling-video-games-of-all-time.html", "_blank");
          
        },
      },{id: "post-what-are-the-best-blogging-platforms-available-surftheknowledge",
        
          title: 'What Are The Best Blogging Platforms Available? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What Are The Best Blogging Platforms Available? Here are the examples of blogging platformsblogging platforms free best free blog sites to start blog",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/02/what%20are%20the%20best%20blogging%20platforms.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-how-to-extend-life-of-your-phone-10-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/how-to-extend-life-of-your-phone-10.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-extend-life-of-your-phone-10.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-how-to-post-on-instagram-from-pc-step-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/how-to-post-on-instagram-from-pc-step.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-post-on-instagram-from-pc-step.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-how-to-start-blogging-in-nepal-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/how-to-start-blogging-in-nepal.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-start-blogging-in-nepal.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-windows-11-new-features-get-windows-11-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/windows-11-new-features-get-windows-11.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/windows-11-new-features-get-windows-11.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-10-mobile-apps-every-tech-loving-person-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/10-mobile-apps-every-tech-loving-person.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/10-mobile-apps-every-tech-loving-person.html", "_blank");
          
        },
      },{id: "post-seo-tips-for-beginners-how-to-rank-your-blog-on-google-surftheknowledge",
        
          title: 'SEO Tips For Beginners - How To Rank Your Blog On Google -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "SEO Tips For Beginners - How To Rank Your Blog On Google | Get to seo tips 2021seo tips for new websiteongoing seo tipssecret seo tips",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/seo-tips-for-beginners-how-to-rank-your-blog.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-how-to-start-a-blog-in-nepal-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/how-to-start-a-blog-in-nepal.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-start-a-blog-in-nepal.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-how-to-register-free-comnp-domain-in-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/how-to-register-free-comnp-domain-in.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/how-to-register-free-comnp-domain-in.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-how-to-create-wordpress-blog-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/how-to-create-wordpress-blog.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/how-to-create-wordpress-blog.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-what-is-blockchain-technology-simple-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/what-is-blockchain-technology-simple.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-blockchain-technology-simple.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2022-02-what-is-blog-blogger-blogging-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2022/02/what-is-blog-blogger-blogging.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/02/what-is-blog-blogger-blogging.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-7-best-blogger-templates-for-your-blog-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/7-best-blogger-templates-for-your-blog.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/7-best-blogger-templates-for-your-blog.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-what-is-internet-of-things-iot-is-it-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/what-is-internet-of-things-iot-is-it.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-internet-of-things-iot-is-it.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-10-free-cloud-storage-you-should-know-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/10-free-cloud-storage-you-should-know.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/10-free-cloud-storage-you-should-know.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-best-linux-alternative-distributions-of-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/best-linux-alternative-distributions-of.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/best-linux-alternative-distributions-of.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-05-what-is-affiliate-marketing-and-how-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/05/what-is-affiliate-marketing-and-how.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-affiliate-marketing-and-how.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-04-cryptocurrency-and-nepal-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/04/cryptocurrency-and-nepal.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/04/cryptocurrency-and-nepal.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2022-03-what-is-nft-how-it-works-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2022/03/what-is-nft-how-it-works.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/03/what-is-nft-how-it-works.html", "_blank");
          
        },
      },{id: "post-10-useful-websites-that-will-help-you-in-your-daily-life-surftheknowledge",
        
          title: '10 Useful Websites That Will Help You In Your Daily Life - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/04/10-amazing-websites-to-you-should-visit.html", "_blank");
          
        },
      },{id: "post-what-is-data-structure-and-algorithm-surftheknowledge",
        
          title: 'What is Data Structure and Algorithm?  - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/03/what-is-data-structure-and-algorithm.html", "_blank");
          
        },
      },{id: "post-cloud-computing-what-it-is-types-and-services-surftheknowledge",
        
          title: 'Cloud Computing: What It Is, Types, and Services - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What Is Cloud Computing? What Are The Types Of Cloud Computing? What is IaaS, PaaS, and SaaS? What are the pros and cons of cloud computing &amp; future",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/04/what-is-cloud-computing.html", "_blank");
          
        },
      },{id: "post-how-to-install-xampp-and-set-up-php-development-environment-on-windows-surftheknowledge",
        
          title: 'How to install XAMPP and Set Up PHP Development Environment On Windows -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to install XAMPP and Set Up PHP Development Environment On Windows",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2023/08/how-to-install-xampp-and-set-up-php.html", "_blank");
          
        },
      },{id: "news-session-on-quot-introduction-to-git-and-github-quot",
          title: 'Session on &amp;quot;Introduction to Git and GitHub&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_0/";
            },},{id: "news-session-on-quot-4-day-python-git-bootcamp-quot",
          title: 'Session on &amp;quot;4-Day Python × Git Bootcamp&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-session-on-quot-what-is-research-quot",
          title: 'Session on &amp;quot;What is Research?&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-session-on-quot-ai-essentials-from-basics-to-applications-quot",
          title: 'Session on &amp;quot;AI Essentials - From Basics to Applications&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-featured-in-national-news",
          title: 'Featured in National News',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-featured-in-international-stories",
          title: 'Featured in International Stories',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-session-on-quot-data-and-artificial-intelligence-quot",
          title: 'Session on &amp;quot;Data and Artificial Intelligence&amp;quot;',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "projects-agromind",
          title: 'AgroMind',
          description: "A complete agriculture toolkit",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-finfish",
          title: 'FinFish',
          description: "A finance tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-rypton",
          title: 'Rypton',
          description: "A computer vision labeling tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-tigermove",
          title: 'TigerMove',
          description: "A Deep Reinforcement Learning Gaming AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-futvar",
          title: 'FutVAR',
          description: "Futebol Video Analytics and Reporting System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-sagedocs",
          title: 'SageDocs',
          description: "An advanced RAG-system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-nccds",
          title: 'NCCDS',
          description: "Nepalese Currency Counterfeit Detection System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-photon",
          title: 'Photon',
          description: "A Natural Language Processing and Intelligent Integrated Coding Development Environment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-facearcs",
          title: 'FaceARCs',
          description: "A 3D face reconstruciton system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-difcar",
          title: 'DifCar',
          description: "A diffusion model based synthetic tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-doggen",
          title: 'DogGen',
          description: "A GAN-based synthetic tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-voicefusion",
          title: 'VoiceFusion',
          description: "A voice-cloning system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
