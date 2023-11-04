import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "Cinder Music",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 플리",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 채널",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "플리 No.1",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "플리 No.2",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "플리 No.3",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "플리 No.4",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "플리 No.5",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "Playlist",
        src: "/search/Playlist"
    },
    {
        title: "CinderMusic",
        src: "/search/CinderMusic"
    },
    {
        title: "OST",
        src: "/search/OST"
    },
    {
        title: "Pop",
        src: "/search/Pop"
    },
    {
        title: "Jazz",
        src: "/search/Jazz"
    },
    {
        title: "Music",
        src: "/search/Newjeans"
    },
    {
        title: "Hiphop",
        src: "/search/Hiphop"
    },
    {
        title: "Movie",
        src: "/search/Movie"
    },
    {
        title: "Cozy",
        src: "/search/Cozy"
    },
    {
        title: "Portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "b myself, coolkids",
        src: "/search/b myself, coolkids"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/CinderMusic/Music.git",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://youtube.com/@sungjaekim9856?si=xYqDFo85qOETStDu",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://blog.naver.com/sjaeyin",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/k_s_j_ae/",
        icon: <AiOutlineInstagram />
    },
]