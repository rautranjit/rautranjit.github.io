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
      },{id: "post-what-is-machine-learning-how-does-it-work-surftheknowledge",
        
          title: 'What is Machine Learning? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Machine Learning? How does it work? What are the difference between Artificial Intelligence, Machine Learning, and Deep Learning, Machine.....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-machine-learning.html", "_blank");
          
        },
      },{id: "post-what-is-deep-learning-how-does-it-work-surftheknowledge",
        
          title: 'What is Deep Learning? How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Deep Learning? How does it work?, What is Artificial Intelligence, What is Machine Learning, Future of Artificial Intelligence, Pros and Cos..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-deep-learning-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-what-is-virtual-reality-vr-and-how-does-it-work-surftheknowledge",
        
          title: 'What is Virtual Reality (VR) and How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Virtual Reality (VR) and How does it work?, Types Of Virtual Reality, Applications Of Virtual Reality, Difference between Augmented Reality...",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-virtual-reality-and-how-does-i.html", "_blank");
          
        },
      },{id: "post-what-is-augmented-reality-how-does-it-work-surftheknowledge",
        
          title: 'What is Augmented Reality? How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Augmented Reality? How does it work? Difference between Virtual Reality and Augmented Reality, AR Vs VR, Applications of Augmented Reality....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-augmented-reality-how-it-works.html", "_blank");
          
        },
      },{id: "post-how-to-make-a-website-using-html-and-css-surftheknowledge",
        
          title: 'How To Make A Website Using HTML And CSS - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How To Make A Website Using HTML And CSS",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/how-to-make-website-using-html-and-css.html", "_blank");
          
        },
      },{id: "post-artificial-intelligence-what-it-is-and-how-it-works-surftheknowledge",
        
          title: 'Artificial Intelligence: What It Is And How It Works - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Artificial Intelligence? AI, artificial intelligence in healthcare, artificial intelligence, machine learning, and deep learning, How it works",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-artificial%20intelligence.html", "_blank");
          
        },
      },{id: "post-how-to-create-responsive-navigation-bar-using-html-css-amp-javascript-surftheknowledge",
        
          title: 'How to Create Responsive Navigation Bar Using HTML, CSS, &amp; JavaScript - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to Create Responsive Navigation Bar Using HTML CSS &amp; JavaScript",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/how-to-create-responsive-navigation-bar.html", "_blank");
          
        },
      },{id: "post-how-to-install-the-mingw-tools-gcc-g-compiler-for-c-c-in-windows-surftheknowledge",
        
          title: 'How to Install the MinGW Tools (GCC/G++) Compiler for C/C++ in Windows? -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to Install the MinGW Tools for C/C++ | Install MinGW (GCC/G++) Compiler in Windows 10, how to install mingw-w64 c/c++ compiler, mingw installation",
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
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-what-is-backlink-how-to-get-backlinks-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/what-is-backlink-how-to-get-backlinks.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/what-is-backlink-how-to-get-backlinks.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-the-future-of-ev-in-nepal-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/the-future-of-ev-in-nepal.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
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
      },{id: "post-how-to-create-a-free-blog-in-google-blogger-surftheknowledge",
        
          title: 'How To Create A Free Blog In Google Blogger? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How To Start Blogging In Nepal For Beginners? Does one need to start a blog the correct way? We all know that beginning a blog is often an alarming...",
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
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-06-seo-tips-for-beginners-how-to-rank-your-blog-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/06/seo-tips-for-beginners-how-to-rank-your-blog.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
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
      },{id: "post-what-is-blockchain-technology-how-does-it-work-surftheknowledge",
        
          title: 'What is Blockchain Technology? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "what is blockchain technology explained briefly, explain how it works, blockchain definition and  why is it popular, blockchain and Nepal",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-blockchain-technology-simple.html", "_blank");
          
        },
      },{id: "post-what-is-a-blog-what-is-blogging-surftheknowledge",
        
          title: 'What is A Blog? What is Blogging? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Blog, Blogger, Blogger? What are the free blogging platforms? Get to know about all the things about how to start blog, blogging and be a blog",
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
      },{id: "post-what-is-the-internet-of-things-iot-how-does-it-work-surftheknowledge",
        
          title: 'What is the Internet of Things (IoT)? How Does It Work? - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "internet of things meaning, internet of things definition,internet of things examples, internet of things applications, internet of things explained.",
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
      },{id: "post-what-are-the-best-linux-alternative-distributions-of-windows-operating-system-surftheknowledge",
        
          title: 'What Are The Best Linux Alternative Distributions Of Windows Operating System? - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Best Linux Alternative Distributions of Windows OS | Which is the best alternative for Windows OS? | SurftheKnowledge",
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
      },{id: "post-what-is-nft-how-does-nft-work-pros-and-cons-of-nft-surftheknowledge",
        
          title: 'What is NFT? How does NFT work? Pros and Cons of NFT -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is NFT? How does NFT work? What are the advantage and disadvantage of NFT? What is Non-fungible Tokens? How do Non-fungible Tokens work?",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/03/what-is-nft-how-it-works.html", "_blank");
          
        },
      },{id: "post-https-wesurftheknowledge-blogspot-com-2021-04-10-amazing-websites-to-you-should-visit-html",
        
          title: 'https://wesurftheknowledge.blogspot.com/2021/04/10-amazing-websites-to-you-should-visit.html <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
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
      },{id: "news-i-m-tryin-to-fit-the-curve",
          title: 'I’m tryin’ to fit the curve!',
          description: "",
          section: "News",},{id: "projects-agromind",
          title: 'AgroMind',
          description: "A complete agriculture toolkit",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-finfish",
          title: 'FinFish',
          description: "A finance tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
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
            },},{id: "projects-deep-one-class-svdd-anomaly-detection",
          title: 'Deep One class SVDD Anomaly Detection',
          description: "A deep one class classification",
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
