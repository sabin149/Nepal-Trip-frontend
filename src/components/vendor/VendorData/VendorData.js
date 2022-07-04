// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilHome,
  UilBuilding,
  UilFocusAdd,
  UilPanelAdd,
  UilComment,
  UilUser,
  UilUserCircle 
} from "@iconscout/react-unicons";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    path: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Bookings",
    path: "vendor/bookings",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    path: "/vendor/users",
  },
  {
    icon: UilUser,
    heading: "Reviews",
    path: "/vendor/reviews",
  },
  
  {
    icon: UilBuilding,
    heading: 'View Hotel',
    path:"/viewHotel"
  },

  {
    icon: UilPanelAdd,
    heading: 'Add Hotel',
    path:"/hotel"
  },
  {
    icon: UilFocusAdd,
    heading: 'Add Rooms',
    path:"/room"
  },
  {
    icon: UilUserCircle,
    //  icon: UilProfile,
    
    heading: 'Profile',
    path: `/user/profile/${localStorage.getItem('userID')}`,
  }
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "USERS",
    color: {
      backGround: "linear-gradient(180deg, #89d4cf 0%, #734ae8 100%)",
      
    },
    barValue: 70,
    value: "25",
    png: UilUsersAlt,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "HOTELS",
    
    color: {
      backGround: "linear-gradient(180deg, #ffcc2f 0%, #ef5734 100%)",
     
    },
    barValue: 80,
    value: "1",
    png: UilHome,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "BOOKINGS",
    color: {
      backGround:"linear-gradient(180deg, #0bab64 0%, #3bb78f 100%)",
      
    },
    barValue: 60,
    value: "10",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "REVIEWS",
    color: {
      backGround: "linear-gradient(180deg, #fe0944 0%, #feae96 100%)",
      
    },
    barValue: 20,
    value: "4,270",
    png: UilComment,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


