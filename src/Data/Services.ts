import github from "../assets/github.png";
import coding from "../assets/coding.png";
import reponsiveness from "../assets/phone_laptop_filled_icon_200393.png";

interface Services{
    image:string,
    heading:string,
    desc:string
}
export const services:Services[] =[
    {
        image:github,
        heading:"Version Control System",
        desc:"With the use of version control sytems(Git) and hosting services (GitHub), I can manage your website after deploments and make any updates when needed."
    },
    {
        image:coding,
        heading:"Frontend Web Dev.",
        desc:"I make use of HTML, CSS, JavScriptand React to make interactive and functional frontend framework for businesses or other purposes."
    },
    {
        image:reponsiveness,
        heading:"Responsive design",
        desc:"Making websites change dynamically depending on screen size and viewport ranging from laptop to tablets and mobile phones."
    },
]