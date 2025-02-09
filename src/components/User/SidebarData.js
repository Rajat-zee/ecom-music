import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
  // addmusic,addmembership,showallusers,showallorders(detail);
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-textu",
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-textu",
  },
  {
    title: "BuyMembership",
    path: "/buymem",
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-textu",
  },
  {
    title: "My Music",
    path: "/mymusic",
    icon: <MdIcons.MdPlaylistPlay />,
    cName: "nav-textu",
  },
  {
    title: "My Playlist",
    path: "/myplaylist",
    icon: <MdIcons.MdPlaylistPlay />,
    cName: "nav-textu",
  },
  {
    title: "AllMusic",
    path: "/allmusic",
    icon: <IoIcons.IoMdMusicalNotes />,
    cName: "nav-textu",
  },
   
  {
    title: "By Genre",
    path: "/bygenre",
    icon: <IoIcons.IoMdMusicalNotes />,
    cName: "nav-textu",
  },
  {
    title: "By Artist",
    path: "/byartist",
    icon: <IoIcons.IoMdMusicalNotes />,
    cName: "nav-textu",
  },
  
  
   
   
   
];
