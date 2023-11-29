import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Srinivasa",
    username: "acousticomofficial",
    password: "omkarSrini123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Food blogger and traveller",
    avatarUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    _id: uuid(),
    firstName: "Neha",
    lastName: "Sharma",
    username: "nehasharma",
    password: "nehaSharma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Be yourself !!!",
    avatarUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    _id: uuid(),
    firstName: "Payal",
    lastName: "Oberoi",
    username: "paylaoberoi",
    password: "payalOberoi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Thug Life buddy food is love, food critic",
    avatarUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
  },
  {
    _id: uuid(),
    firstName: "Mahesh",
    lastName: "Bhalle",
    username: "maheshbhalle",
    password: "maheshBhalle123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Song writter and music lover and a cafe owner named Sham Mastani in banglore",
    avatarUrl:"https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    _id: uuid(),
    firstName: "Tuntun",
    lastName: "Mausi",
    username: "tuntunmausi",
    password: "tuntunMausi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Owner of Ladoo shop in dholakpur ",
    avatarUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
  },
  {
    _id: uuid(),
    firstName: "Sonakshi",
    lastName: "Singh",
    username: "sonakshisingh",
    password: "sonakshiSingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"Baker and passionate food lover",
    avatarUrl:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
];
