// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
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
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is my Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-10-most-innovative-private-space-companies-in-the-world-surftheknowledge",
        
          title: '10 Most Innovative Private Space Companies In The World - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "10 Most Innovative Private Space Companies In The World | The Future of Space Exploration, Top space companies 2021, Best private space companies.....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-most-innovative-private-space.html", "_blank");
          
        },
      },{id: "post-what-is-linux-world-39-s-most-popular-operating-system-surftheknowledge",
        
          title: 'What is Linux? World&#39;s Most Popular Operating System - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Linux? History Of Linux | World&#39;s Most Popular Operating System, What are the famous distributions of Linux, Is Linux an Operating System or..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-linux.html", "_blank");
          
        },
      },{id: "post-what-is-python-programming-language-what-are-its-uses-complete-roadmap-surftheknowledge",
        
          title: 'What is Python Programming Language? What are Its Uses? [Complete Roadmap] - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is python? What is python used for? What are the advantages of python? Python Complete Roadmap, Python Tutorial, why python is better than other",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-python-why-is-it-so-popular.html", "_blank");
          
        },
      },{id: "post-is-linux-an-operating-system-or-a-kernel-surftheknowledge",
        
          title: 'Is Linux an Operating System or a Kernel? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Is Linux an Operating System or a Kernel? Difference between Operating System and Kernel, What is Kernel?, What are the types of Kernel? Brief Exp...",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/is-linux-operating-system-or-kernel.html", "_blank");
          
        },
      },{id: "post-what-is-dogecoin-how-does-it-work-surftheknowledge",
        
          title: 'What Is Dogecoin? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What Is Dogecoin? How Does It Work? Dogecoin news, Dogecoin memes, Dogecoin Market Value, How has Dogecoin fared in the market? What is the value of..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-dogecoin-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-10-best-search-engines-in-the-world-surftheknowledge",
        
          title: '10 Best Search Engines In The World - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "10 Best Search Engines In The World, 10 Popular Search Engines That Every Techie Should Know, What are the 10 most commonly used search engine?,......",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-best-search-engines-in-theworld.html", "_blank");
          
        },
      },{id: "post-what-is-pegasus-why-is-it-harmful-surftheknowledge",
        
          title: 'What is Pegasus? Why is It Harmful? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Pegasus? Why is it harmful? | Why you should care?, What is Pegasus Spyware? How to protect from Pegasus,  Who is using Pegasus, What is .....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-pegasus-why-is-it-harmful.html", "_blank");
          
        },
      },{id: "post-20-blogging-tips-to-rank-your-blog-post-surftheknowledge",
        
          title: '20 Blogging Tips To Rank Your Blog Post - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "20 Blogging Tips To Rank Your Blog Post, 20 Blogging Techniques To Rank Your Post On Popular Search Engine, Blogging Tips and Techniques, How to......",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/20-blogging-tips-to-rank-your-blog-post.html", "_blank");
          
        },
      },{id: "post-10-most-dangerous-computer-viruses-in-the-history-surftheknowledge",
        
          title: '10 Most Dangerous Computer Viruses In The History - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "10 Most Dangerous Computer Viruses In The History, Mydoom, SoBig, Sasser, ILOVEYOU, NotPretya/ExPetr, StromWorm, Conficker, WannaCry, Coder Red, .....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/10-most-dangerous-computer-viruses-.html", "_blank");
          
        },
      },{id: "post-5-ai-personal-assistant-that-every-techie-should-know-surftheknowledge",
        
          title: '5 AI Personal Assistant That Every Techie Should Know - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "5 AI Personal Assistant That Every Techie Should Know | Best AI Personal Assistant | Siri, Cortana, Google Assistant, Alexa, and Bixby................",
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
      },{id: "post-what-is-trusted-platform-module-tpm-you-won-39-t-be-able-to-use-windows-11-if-you-don-39-t-have-tpm-on-your-pc-surftheknowledge",
        
          title: 'What is Trusted Platform Module (TPM)? You won&#39;t be able to use Windows... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
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
      },{id: "post-what-is-bitcoin-how-does-it-work-world-39-s-first-cryptocurrency-surftheknowledge",
        
          title: 'What Is Bitcoin? How Does It Work? World&#39;s First Cryptocurrency - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Bitcoin, And How Does It Work? | World&#39;s First Cryptocurrency. What is Bitcoin Mining? History of Bitcoin. Who created Bitcoin? Is Bitcoin....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/07/what-is-bitcoin-and-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-windows-11-features-release-date-and-everything-you-need-to-know-surftheknowledge",
        
          title: 'Windows 11: Features, Release Date, And Everything You Need To Know - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Windows 11 News, Features, Release Date, And Everything You Need To Know",
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
      },{id: "post-10-best-selling-video-games-of-all-time-surftheknowledge",
        
          title: '10 Best Selling Video Games of All Time - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Highest-grossing video games of all time,Best-selling games of all time 2020most popular video games of all timebest-selling video game franchise..",
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
      },{id: "post-10-simple-habits-to-extend-the-life-of-your-phone-surftheknowledge",
        
          title: '10 Simple Habits To Extend The Life Of Your Phone - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How To Extend the Life of Your Phone: 10 Simple Habits You Can Start Right Now You’ve probably heard that the average lifespan of a mobile device.....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-extend-life-of-your-phone-10.html", "_blank");
          
        },
      },{id: "post-how-to-post-on-instagram-from-pc-step-by-step-latest-update-surftheknowledge",
        
          title: 'How To Post On Instagram From PC [Step-by-Step] Latest Update - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to post on instagram from pc, How to post on instagram from laptop, How to upload photos to instagram from pc, How can i post pictures on inst....",
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
      },{id: "post-how-to-get-windows-11-upgrade-in-free-windows-11-surftheknowledge",
        
          title: 'How To Get Windows 11 Upgrade In Free? Windows 11 - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Windows 11 New Features | Get Windows 11 Upgrade Free: How To Get Windows 11 For Free. Microsoft announced the release of Windows 11 on June 24......",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/windows-11-new-features-get-windows-11.html", "_blank");
          
        },
      },{id: "post-10-mobile-apps-every-tech-loving-person-should-be-using-surftheknowledge",
        
          title: '10 Mobile Apps Every Tech-Loving Person Should Be Using - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "In this article, we list top 10 must-have android apps that is best apps for 2021. You must use these apps to increase your tech..useful mobile apps",
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
      },{id: "post-how-to-start-a-blog-in-nepal-surftheknowledge",
        
          title: 'How To Start A Blog In Nepal? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to start a blog in Nepal? How to earn money from blog in Nepal? How to start blogging in Nepal?",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/06/how-to-start-a-blog-in-nepal.html", "_blank");
          
        },
      },{id: "post-how-to-register-free-com-np-domain-in-nepal-surftheknowledge",
        
          title: 'How To Register Free .com.np Domain In Nepal? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to register .com.np domain in Nepal, free domain without any cost",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/how-to-register-free-comnp-domain-in.html", "_blank");
          
        },
      },{id: "post-how-to-create-a-free-wordpress-blog-surftheknowledge",
        
          title: 'How To Create A Free WordPress Blog? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How to create a free WordPress blog in Nepal, Blogging in Nepal,    learn step-by-step...",
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
      },{id: "post-7-best-blogger-templates-for-your-blog-surftheknowledge",
        
          title: '7 Best Blogger Templates For Your Blog - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "professional blogger ,templates free,simple blogger templates free,best free responsive blogger templates,responsive blogger templates,.....",
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
      },{id: "post-10-free-cloud-storage-that-you-should-know-surftheknowledge",
        
          title: '10 Free Cloud Storage That You Should Know - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "10 free cloud storage you should know, cloud computing, SurftheKnowledge | Nepal,....",
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
      },{id: "post-what-is-affiliate-marketing-how-to-make-money-with-affiliate-marketing-surftheknowledge",
        
          title: 'What is Affiliate Marketing? | How To Make Money With Affiliate Marketing? -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Affiliate Marketing? | How to Make Money With Affiliate Marketing: An Ultimate Guide. Have you ever heard of affiliate marketing? What comes..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-affiliate-marketing-and-how.html", "_blank");
          
        },
      },{id: "post-what-is-cryptocurrency-how-does-it-work-surftheknowledge",
        
          title: 'What is Cryptocurrency? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
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
      },{id: "news-i-m-tryin-to-fit-the-curve",
          title: 'I’m tryin’ to fit the curve!',
          description: "",
          section: "News",},{id: "projects-tigermove",
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
