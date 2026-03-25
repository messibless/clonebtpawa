// dummyMenuData.js
// Dummy data for LeftSidebarMenu - Ready for API integration

// Import flags
import EuropeFlag from '../../../assets/media/Europe_43bd11c816.svg'
import International from '../../../assets/img/flags/international.png'

export const dummyMenuData = {
  leagues: [
    { 
      id: 11965, 
      name: 'Premier League', 
      count: 21, 
      flagCode: 'gb-eng', 
      flagImg: null 
    },
    { 
      id: 12145, 
      name: 'FA Cup', 
      count: 6, 
      flagCode: 'gb-eng', 
      flagImg: null 
    },
    { 
      id: 12097, 
      name: 'Serie A', 
      count: 17, 
      flagCode: 'it', 
      flagImg: null 
    },
    { 
      id: 12110, 
      name: 'Bundesliga', 
      count: 11, 
      flagCode: 'de', 
      flagImg: null 
    },
    { 
      id: 12039, 
      name: 'LaLiga', 
      count: 16, 
      flagCode: 'es', 
      flagImg: null 
    },
    { 
      id: 12127, 
      name: 'Ligue 1', 
      count: 13, 
      flagCode: 'fr', 
      flagImg: null 
    },
    { 
      id: 12541, 
      name: 'UEFA Champions League', 
      count: 8, 
      flagCode: null, 
      flagImg: EuropeFlag 
    },
    { 
      id: 12546, 
      name: 'UEFA Europa League', 
      count: 8, 
      flagCode: null, 
      flagImg: EuropeFlag 
    },
    { 
      id: 12545, 
      name: 'UEFA Conference League', 
      count: 8, 
      flagCode: null, 
      flagImg: EuropeFlag 
    }
  ],

  popularCountries: [
    { 
      id: 288, 
      name: 'England', 
      count: 128, 
      flagCode: 'gb-eng', 
      flagImg: null 
    },
    { 
      id: 241, 
      name: 'France', 
      count: 34, 
      flagCode: 'fr', 
      flagImg: null 
    },
    { 
      id: 242, 
      name: 'Germany', 
      count: 29, 
      flagCode: 'de', 
      flagImg: null 
    },
    { 
      id: 1, 
      name: 'International', 
      count: 94, 
      flagCode: null, 
      flagImg: International 
    },
    { 
      id: 230, 
      name: 'Italy', 
      count: 59, 
      flagCode: 'it', 
      flagImg: null 
    },
    { 
      id: 237, 
      name: 'Spain', 
      count: 48, 
      flagCode: 'es', 
      flagImg: null 
    }
  ],

  otherCountries: [
    { 
      id: 61, 
      name: 'Algeria', 
      count: 5, 
      flagCode: 'dz', 
      flagImg: new URL('../../../assets/sidebarFlags/dz-EwXBYPv9.svg', import.meta.url).href 
    },
    { 
      id: 126, 
      name: 'Argentina', 
      count: 50, 
      flagCode: 'ar', 
      flagImg: new URL('../../../assets/sidebarFlags/ar-apVegy4c.svg', import.meta.url).href 
    },
    { 
      id: 248, 
      name: 'Australia', 
      count: 11, 
      flagCode: 'au', 
      flagImg: new URL('../../../assets/sidebarFlags/au-kL8f0uMB.svg', import.meta.url).href 
    },
    { 
      id: 239, 
      name: 'Austria', 
      count: 20, 
      flagCode: 'at', 
      flagImg: new URL('../../../assets/sidebarFlags/at-D-LsLSdx.svg', import.meta.url).href 
    },
    { 
      id: 178, 
      name: 'Azerbaijan', 
      count: 5, 
      flagCode: 'az', 
      flagImg: new URL('../../../assets/sidebarFlags/az-z2IthT8Q.svg', import.meta.url).href 
    },
    { 
      id: 240, 
      name: 'Belgium', 
      count: 16, 
      flagCode: 'be', 
      flagImg: new URL('../../../assets/sidebarFlags/be-Dtq4MkQz.svg', import.meta.url).href 
    },
    { 
      id: 225, 
      name: 'Bosnia and Herzegovina', 
      count: 3, 
      flagCode: 'ba', 
      flagImg: new URL('../../../assets/sidebarFlags/ba-CiiOt6u0.svg', import.meta.url).href 
    },
    { 
      id: 128, 
      name: 'Brazil', 
      count: 53, 
      flagCode: 'br', 
      flagImg: new URL('../../../assets/sidebarFlags/br-Yf30zEjB.svg', import.meta.url).href 
    },
    { 
      id: 196, 
      name: 'Bulgaria', 
      count: 16, 
      flagCode: 'bg', 
      flagImg: new URL('../../../assets/sidebarFlags/bg-cWragUdK.svg', import.meta.url).href 
    },
    { 
      id: 129, 
      name: 'Chile', 
      count: 10, 
      flagCode: 'cl', 
      flagImg: new URL('../../../assets/sidebarFlags/cl-B2rf9gTF.svg', import.meta.url).href 
    }
  ]
}

// Optional: Function to simulate API call
export const fetchDummyMenuData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyMenuData)
    }, 500) // Simulate network delay
  })
}