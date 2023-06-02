import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";
import { ReactNode } from "react";

export interface contact{
    icon: IconType;
    title:string;
    href:string;
    value:string
}

export const lists:contact[]=[
    {
        icon: BsFillTelephoneFill,
        title:"Phone",
        href:"tel:+2348145439490",
        value:'+2348145439490',
    },
    {
        icon: HiMail,
        title:"Gmail",
        href:"mailto:walexz1937@gmail.com",
        value:'walexz1937@gmail.com',
    },
    {
        icon: AiFillGithub,
        title:"Github",
        href:"https://github.com/Walexz01",
        value:'Walexz01',
    },
    {
        icon: AiFillTwitterCircle, 
        title:"Twitter",
        href:"https://twitter.com/walexz01",
        value:'walexz1937',
    },
    {
        icon: AiFillLinkedin, 
        title:"Linkedin",
        href:"https://www.linkedin.com/in/adegbite-adewale-oluwaseun-59691b237",
        value:'walexz',
    },
    {
        icon: IoLogoWhatsapp, 
        title:"Whatsapp",
        href:"https://wa.me/+2348145439490",
        value:'+2348145439490',
    },
]

