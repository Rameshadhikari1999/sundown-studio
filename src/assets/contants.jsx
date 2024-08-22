import { video1,video2,video3,video4,video5 } from "./videos";
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7 } from "./images";




const menu = [ "Work", "Studio", "Contact"];
const scrollText = ["Experiences","Content","Environments"];

const projectsDetails = [
    {
        id: 1,
        title: "Capezio NYC Flagship",
        subTitle:"Capezio",
        video: video1,
    },
    {
        id: 2,
        title: "Carmelo Anthony 7pm In Brooklyn Set",
        subTitle:"Wave Sports Entertainment",
        video: video2,
    },
    {
        id: 3,
        title: "Converse SoHo",
        subTitle:"Converse",
        video: video3,
    },
    {
        id: 4,
        title: "Kelce Super Bowl Party",
        subTitle:"Wave Sports Entertainment",
        video: video4,
    },
    {
        id: 5,
        title: "Play New Kidvision",
        subTitle:"Nike",
        video: video5,
    },
]

const brands = [
    {
        id: 1,
        image: brand1,
        desc:"Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country."
    },
    {
        id: 2,
        image: brand2,
        desc:"Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners."
    },
    {
        id: 3,
        image: brand3,
        desc:"Creative Concepting, 2D & 3D Design, Design Management for work in NYC and across the country."
    },
    {
        id: 4,
        image: brand4,
        desc:"Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California."
    },
    {
        id: 5,
        image: brand5,
        desc:"Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022."
    },
    {
        id: 6,
        image: brand6,
        desc:"Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more."
    },
    {
        id: 7,
        image: brand7,
        desc:"Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve."
    }
]




export { menu, scrollText, projectsDetails, brands }