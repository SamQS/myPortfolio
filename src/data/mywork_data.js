import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

import portfolio from '../assets/portfolio.png'
import mobile from '../assets/mobile.png'
import pelicula from '../assets/pelicula.png'
import pokedex from '../assets/pokedex.png'
import branding from '../assets/branding.png'
import minsa from '../assets/minsa.png'
import portfolioPy from '../assets/portfolioPy.png'
import urban from '../assets/urban.png'



import cshare from '../assets/logosSkills/cshare.svg'
import css from '../assets/logosSkills/css.svg'
import django from '../assets/logosSkills/django.svg'
import djangoRest from '../assets/logosSkills/djangoRest.svg'
import html from '../assets/logosSkills/html.svg'
import java from '../assets/logosSkills/java.svg'
import javascript from '../assets/logosSkills/javascript.svg'
import mysql from '../assets/logosSkills/mysql.svg'
import python from '../assets/logosSkills/python.svg'
import react from '../assets/logosSkills/react.svg'
import tailwind from '../assets/logosSkills/tailwind.svg'
import unity from '../assets/logosSkills/unity.svg'
import vite from '../assets/logosSkills/vite.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Portfolio Website",
        w_tools: [
            { img: react, name: "React" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: tailwind, name: "Tailwind" },
            { img: javascript, name: "Javascript" }

        ],
        w_img:portfolio,
        work_demo_link : true,
        web_link : "https://samqs.github.io/myPortfolio/",
        github_link : "https://github.com/SamQS/myPortfolio",

    },
    {
        w_no:2,
        w_name:"Aplicativo Mobile Psicologico Educacional",
        w_tools: [
            { img: cshare, name: "C#" },
            { img: python, name: "Python" },
            { img: unity, name: "Unity" },
            { img: django, name: "Django" },
            { img: djangoRest, name: "Django Rest Framework" },
        ],
        w_img:mobile,
        work_demo_link : false,
        github_link : "https://github.com/SamQS/ProyectoPsicologicoEduUnity",
        githubApi_link : "https://github.com/SamQS/ProyectoPsicologicoEdu",
        web_api: true
    },
    {
        w_no:3,
        w_name:"Movie App",
        w_tools: [
            { img: react, name: "React" },
            { img: react, name: "ReactRouter" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
            { img: vite, name: "Vite" }
        ],
        w_img:pelicula,
        work_demo_link : true,
        web_link : "https://samqs.github.io/peliculas-project/",
        github_link : "https://github.com/SamQS/peliculas-project"
    },
    {
        w_no:4,
        w_name:"Pokedex App",
        w_tools: [
            { img: react, name: "React" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
            { img: vite, name: "Vite" }
        ],
        w_img:pokedex,
        work_demo_link : false,
        github_link : "https://github.com/SamQS/pokedex-react"
    },
    {
        w_no:5,
        w_name:"Branding Website",
        w_tools: [
            { img: cshare, name: "C#" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
        ],
        w_img:branding,
        work_demo_link : false,
        github_link : "https://github.com/SamQS/Branding"
    },
    {
        w_no:6,
        w_name:"Minsa Website",
        w_tools: [
            { img: java, name: "Java" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
        ],
        w_img:minsa,
        work_demo_link : false,
        web_link : "https://samqs.github.io/myPortfolio/",
        github_link : "https://github.com/SamQS/minsapp"
    },
    {
        w_no:7,
        w_name:"Portfolio - Python",
        w_tools: [
            { img: python, name: "Python" },
            { img: django, name: "Django" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
        ],
        w_img:portfolioPy,
        work_demo_link : false,
        github_link : "https://github.com/SamQS/web_portafolio"
    },
     {
        w_no:7,
        w_name:"Inmobiliaria Urban Website",
        w_tools: [
            { img: cshare, name: "C#" },
            { img: css, name: "Css" },
            { img: html, name: "Html" },
            { img: javascript, name: "Javascript" },
        ],
        w_img:urban,
        work_demo_link : false,
        github_link : "https://github.com/SamQS/crmUrbano"
    },

]
 
export default mywork_data;