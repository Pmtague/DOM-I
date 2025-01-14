const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \nIs \nAwesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \nSomewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation

const navigation = document.querySelectorAll('nav a');
  navigation[0].textContent = siteContent["nav"]['nav-item-1'];
  navigation[1].textContent = siteContent["nav"]['nav-item-2'];
  navigation[2].textContent = siteContent["nav"]['nav-item-3'];
  navigation[3].textContent = siteContent["nav"]['nav-item-4'];
  navigation[4].textContent = siteContent["nav"]['nav-item-5'];
  navigation[5].textContent = siteContent["nav"]['nav-item-6'];

// const NavItems = document.querySelectorAll('nav a');
// NavItems.forEach((link, i) => {
//  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
// })

// #Navigation Color

navigation.forEach(navColor => {navColor.style.color = 'green'});

// #Adding to Navigation

const newNav = document.querySelector('nav');

const a1 = document.createElement('a');
  a1.textContent = 'Goats';
  a1.style.color = 'green';
  newNav.appendChild(a1);

const a2 = document.createElement('a');
  a2.textContent = 'Monkeys';
  a2.style.color = 'green';
  newNav.appendChild(a2);

// Adding H1 Text

const heading = document.querySelector('h1')
  heading.textContent = siteContent['cta']['h1']
  heading.style.whiteSpace = 'pre';

// Button

const ctaBut = document.querySelector('button').textContent = siteContent['cta']['button'];

// CTA Image

const ctaImg = document.querySelector('.cta img').setAttribute('src', siteContent['cta']['img-src']);

// Middle Content

const middleHeadings = document.querySelectorAll('.main-content h4');
  middleHeadings[0].textContent = siteContent['main-content']['features-h4'];
  middleHeadings[1].textContent = siteContent['main-content']['about-h4'];
  middleHeadings[2].textContent = siteContent['main-content']['services-h4'];
  middleHeadings[3].textContent = siteContent['main-content']['product-h4'];
  middleHeadings[4].textContent = siteContent['main-content']['vision-h4'];

const midImg = document.querySelector("#middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const middleContent = document.querySelectorAll('.main-content p');
  middleContent[0].textContent = siteContent['main-content']['features-content'];
  middleContent[1].textContent = siteContent['main-content']['about-content'];
  middleContent[2].textContent = siteContent['main-content']['services-content'];
  middleContent[3].textContent = siteContent['main-content']['product-content'];
  middleContent[4].textContent = siteContent['main-content']['vision-content'];

//Contact Info

const contactHeading = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p')
  contactP[0].textContent = siteContent['contact']['address']
  contactP[0].style.whiteSpace = 'pre';
  contactP[1].textContent = siteContent['contact']['phone'];
  contactP[2].textContent = siteContent['contact']['email'];

// Footer

const footerContent = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];