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
        },{id: "post-cloud-computing-what-it-is-types-and-services-surftheknowledge",
        
          title: 'Cloud Computing: What It Is, Types, and Services - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What Is Cloud Computing? What Are The Types Of Cloud Computing? What is IaaS, PaaS, and SaaS? What are the pros and cons of cloud computing &amp; future",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/04/what-is-cloud-computing.html", "_blank");
          
        },
      },{id: "post-what-is-nft-how-does-nft-work-pros-and-cons-of-nft-surftheknowledge",
        
          title: 'What is NFT? How does NFT work? Pros and Cons of NFT -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is NFT? How does NFT work? What are the advantage and disadvantage of NFT? What is Non-fungible Tokens? How do Non-fungible Tokens work?",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/03/what-is-nft-how-it-works.html", "_blank");
          
        },
      },{id: "post-what-is-a-blog-what-is-blogging-surftheknowledge",
        
          title: 'What is A Blog? What is Blogging? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Blog, Blogger, Blogger? What are the free blogging platforms? Get to know about all the things about how to start blog, blogging and be a blog",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2022/02/what-is-blog-blogger-blogging.html", "_blank");
          
        },
      },{id: "post-what-is-augmented-reality-how-does-it-work-surftheknowledge",
        
          title: 'What is Augmented Reality? How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Augmented Reality? How does it work? Difference between Virtual Reality and Augmented Reality, AR Vs VR, Applications of Augmented Reality....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-augmented-reality-how-it-works.html", "_blank");
          
        },
      },{id: "post-is-linux-an-operating-system-or-a-kernel-surftheknowledge",
        
          title: 'Is Linux an Operating System or a Kernel? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Is Linux an Operating System or a Kernel? Difference between Operating System and Kernel, What is Kernel?, What are the types of Kernel? Brief Exp...",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/is-linux-operating-system-or-kernel.html", "_blank");
          
        },
      },{id: "post-what-is-machine-learning-how-does-it-work-surftheknowledge",
        
          title: 'What is Machine Learning? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Machine Learning? How does it work? What are the difference between Artificial Intelligence, Machine Learning, and Deep Learning, Machine.....",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-machine-learning.html", "_blank");
          
        },
      },{id: "post-artificial-intelligence-what-it-is-and-how-it-works-surftheknowledge",
        
          title: 'Artificial Intelligence: What It Is And How It Works - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Artificial Intelligence? AI, artificial intelligence in healthcare, artificial intelligence, machine learning, and deep learning, How it works",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-artificial%20intelligence.html", "_blank");
          
        },
      },{id: "post-what-is-virtual-reality-vr-and-how-does-it-work-surftheknowledge",
        
          title: 'What is Virtual Reality (VR) and How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Virtual Reality (VR) and How does it work?, Types Of Virtual Reality, Applications Of Virtual Reality, Difference between Augmented Reality...",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-virtual-reality-and-how-does-i.html", "_blank");
          
        },
      },{id: "post-what-is-linux-world-39-s-most-popular-operating-system-surftheknowledge",
        
          title: 'What is Linux? World&#39;s Most Popular Operating System - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Linux? History Of Linux | World&#39;s Most Popular Operating System, What are the famous distributions of Linux, Is Linux an Operating System or..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-linux.html", "_blank");
          
        },
      },{id: "post-what-is-deep-learning-how-does-it-work-surftheknowledge",
        
          title: 'What is Deep Learning? How does it work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "What is Deep Learning? How does it work?, What is Artificial Intelligence, What is Machine Learning, Future of Artificial Intelligence, Pros and Cos..",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/08/what-is-deep-learning-how-does-it-work.html", "_blank");
          
        },
      },{id: "post-what-is-blockchain-technology-how-does-it-work-surftheknowledge",
        
          title: 'What is Blockchain Technology? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "what is blockchain technology explained briefly, explain how it works, blockchain definition and  why is it popular, blockchain and Nepal",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-blockchain-technology-simple.html", "_blank");
          
        },
      },{id: "post-what-is-the-internet-of-things-iot-how-does-it-work-surftheknowledge",
        
          title: 'What is the Internet of Things (IoT)? How Does It Work? - SurfTheKnowledge... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "internet of things meaning, internet of things definition,internet of things examples, internet of things applications, internet of things explained.",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/05/what-is-internet-of-things-iot-is-it.html", "_blank");
          
        },
      },{id: "post-what-is-cryptocurrency-how-does-it-work-surftheknowledge",
        
          title: 'What is Cryptocurrency? How Does It Work? - SurfTheKnowledge <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://wesurftheknowledge.blogspot.com/2021/04/cryptocurrency-and-nepal.html", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-m-tryin-to-fit-the-curve",
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Kok0OGgAAAAJ", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/theranjitraut/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/theranjitraut", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/theranjitraut", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/theranjitraut", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Ranjit-Raut", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@ranjitraut", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/theranjitraut", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%65%6C%6C%6F@%72%61%6E%6A%69%74%72%61%75%74.%63%6F%6D.%6E%70", "_blank");
        },
      },{
        id: 'social-blogger',
        title: 'Blogger',
        section: 'Socials',
        handler: () => {
          window.open("https://www.wesurftheknowledge.blogspot.com", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
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
