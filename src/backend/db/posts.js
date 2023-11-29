import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png",
    description:"So delicious yummy😊Are you pizza lover?",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "paylaoberoi",
        avatarURL:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "acousticomofficial",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/f4c/d5729b8dd188bdc23b84cffc26bdff4c.jpg",
    description:"Every mini burger is meticulously crafted with love by our adorable productor manager ❤️ Ensuring every bite of our mini burgers is incredibly satisfying",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "acousticomofficial",
        avatarURL:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "maheshbhalle",
        avatarURL:
          "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "tuntunmausi",
        avatarURL:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "paylaoberoi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"After a good dinner one can forgive anybody, even one's own relations.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "acousticomofficial",
        avatarURL:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "sonakshisingh",
        avatarURL:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "paylaoberoi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/8f5/a569a85cc5bb16dc9cc44c8ba8a038f5.jpg",
    description:"Look whats cooking today!!!",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "tuntunmausi",
        avatarURL:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        text: "I love the rain. It's my favorite weather.",
      }
    ],
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/a1b/33aeef5a288728d595fef0cc858aea1b.jpg",
    description:"Noodles of the day",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "sonakshisingh",
        avatarURL:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "acousticomofficial",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/pictures/6/1896/ede1a524f77ea28bb253f94cc831fda1_o2_featured_v2.jpg",
    description:"Lets celebrate 🥳 suday as the Bhaturey day 😋🍽️",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "paylaoberoi",
        avatarURL:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/657/3abc18505a6c5188348bd021ce87e657.jpg",
    description:"Masala Dosa in the house😍",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "maheshbhalle",
        avatarURL:
          "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "acousticomofficial",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/76a/7c961cd3ab18d04613db72c62d0ec76a.png",
    description:"A bite of cup cake can make your day 😇❤️",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "maheshbhalle",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    description:"Verified Change brings uncomfortable situations. Uncomfortable situations allow you to get to know and understand yourself better. Understanding yourself better brings growth and with growth, comes healing. 🌻",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "nehasharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://th.bing.com/th/id/OIP.R-AOBfjWUoWDICzZbhiZKgHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description:"So delicious yummy😊Are you pizza lover?",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
    ],
    username: "acousticomofficial",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/b41/47df77de78ac5fc128da4f50799c1b41.jpg",
    description:"Lunch at Gulati's restaurant 🍗",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "maheshbhalle",
        avatarURL:
          "https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "acousticomofficial",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/385/6f9802f2dc6532ac94b3eff6564f9385.jpg",
    description:"If you are confused what to order always go for a thali your never gonna disappoint 😊",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "nehasharma",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687246802/photo-1494790108377-be9c29b29330_tqxd5y_hkfljz_l1sks8.jpg",
        text: "I love the rain. It's my favorite weather.",
      },
      {
        _id: uuid(),
        username: "jenny_anderson",
        avatarURL:
          "https://res.cloudinary.com/drre76xpz/image/upload/v1687247119/photo-1615109398623-88346a601842_uo9khv_ha61mb.jpg",
        text: "There is no better smell than earth after a heavy rain.",
      },
    ],
    username: "sonakshisingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://b.zmtcdn.com/data/dish_photos/9bd/f5c88e4d73e4a887035cbe3fef0d39bd.jpg",
    description:"Delhi waalon ka dil❤️ aur momos aur kahin nhi milenge ",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "tuntunmausi",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    image:"https://th.bing.com/th/id/OIP.TyfmU4fVpjk3JxgvzeawJgHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    content:"End your weekend like this 🍻",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "acousticomofficial",
        avatarURL:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        text: "I love the rain. It's my favorite weather.",
      }
    ],
    username: "sonakshisingh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
