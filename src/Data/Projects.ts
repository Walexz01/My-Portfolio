import ganleytax from '../assets/Projects/ganleytax.png'
import araismesi from '../assets/Projects/araismesi.png'
// import corelink from '../assets/Projects/corelink.png'
// import tours from '../assets/Projects/tours.png'
// import fifash from '../assets/Projects/fifash.png'
// import trippy from '../assets/Projects/trippy.png'

export interface Project {
    image: string;
    name: string;
    details: string;
    githubLinnk?: string;
    siteLink?: string;
  }
  

export const projects:Project[]=[
    {
        image:ganleytax,
        name:"Ganley Tax",
        details: "Presenting Ganley Tax & Accounting's responsive WordPress site. Showcasing services, an informative about section, and easy contact options for a seamless user experience.",
        siteLink:'https://www.ganleytax.com/'
    },
    {
        image:araismesi,
        name:"Araismesi",
        details: "Introducing ARA ISMESI Cakes and Events Decor's WooCommerce website. Featuring an About section, Gallery, Events, Shop, and seamless Checkout for an enjoyable user experience.",
        siteLink:'https://www.araismesi.com/'
    },
    // {
    //     image:corelink,
    //     name:"hero back",
    //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
    //     githubLinnk:'https://github.com/Walexz01/corelink',
    //     siteLink:'https://corelink.vercel.app/'
    // },
    // {
    //     image:tours,
    //     name:"Tours",
    //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
    //     githubLinnk:'https://github.com/Walexz01/Tours',
    //     siteLink:'https://tours-walexz01.vercel.app/'
    // },

    // {
    //     image:fifash,
    //     name:"FIFASH ",
    //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
    //     githubLinnk:'https://github.com/Walexz01/FiFash',
    //     siteLink:'https://fi-fash.vercel.app/'
    // },
    // {
    //     image:trippy,
    //     name:"Trippy",
    //     details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
    //     githubLinnk:'https://github.com/Walexz01/Trippy',
    //     siteLink:'https://trippy-rho.vercel.app/'

    // },

]