import testing from "../assets/magnifying.png";
import reponsiveness from "../assets/phone_laptop_filled_icon_200393.png";
import WordPress from "../assets/wordPressLogo.png";

interface Services{
    image:string,
    heading:string,
    desc:string
}
export const services:Services[] =[
    {
        image:reponsiveness,
        heading:"Frontend Web Development ",
        desc:"I use HTML, CSS, and JavaScript (ReactJs) to make interactive and functional web apps."
    },
    {
        image:WordPress,
        heading:"WordPress Websites Development",
        desc:"I use WordPress to build marketing websites for people, and businesses."
    },
    {
        image:testing,
        heading:"Quality Assurance Testing",
        desc:"I use a tools, processes and manual testing to ensure the quality of websites and apps"
    },
]