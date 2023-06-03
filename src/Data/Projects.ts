import piggyvest from '../assets/Projects/piggyvest.png'
import herobank from '../assets/Projects/herosbanks.png'
import corelink from '../assets/Projects/corelink.png'
import tours from '../assets/Projects/tours.png'
import fifash from '../assets/Projects/fifash.png'
import trippy from '../assets/Projects/trippy.png'

export interface Project {
    image: string;
    name: string;
    details: string;
    githubLinnk?: string;
    siteLink?: string;
  }
  

export const projects:Project[]=[
    {
        image:piggyvest,
        name:"Piggyvest Clone ",
        details: 'This is a clonne of the piggyvest, I cloned some pages of the site like the home page, invest page and stories page .',
        githubLinnk:'https://github.com/Walexz01/piggyvest',
        siteLink:'https://piggyvest-henna.vercel.app/'
    },
    {
        image:herobank,
        name:"Hero's bank",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
        githubLinnk:'https://github.com/Walexz01/heros-banks',
        siteLink:'https://walexz01.github.io/heros-banks/'
    },
    {
        image:corelink,
        name:"hero back",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
        githubLinnk:'https://github.com/Walexz01/corelink',
        siteLink:'https://corelink.vercel.app/'
    },
    {
        image:tours,
        name:"Tours",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
        githubLinnk:'https://github.com/Walexz01/Tours',
        siteLink:'https://tours-walexz01.vercel.app/'
    },

    {
        image:fifash,
        name:"FIFASH ",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
        githubLinnk:'https://github.com/Walexz01/FiFash',
        siteLink:'https://fi-fash.vercel.app/'
    },
    {
        image:trippy,
        name:"Trippy",
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum fuga mollitia, unde facilis voluptates ea quos sapiente commodi exercitationem.',
        githubLinnk:'https://github.com/Walexz01/Trippy',
        siteLink:'https://trippy-rho.vercel.app/'

    },

]