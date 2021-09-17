import online from "./images/icon-online.svg";
import budgeting from "./images/icon-budgeting.svg";
import onboarding from "./images/icon-onboarding.svg";
import api from "./images/icon-api.svg";

import currency from './images/image-currency.jpg';
import enjoyment from './images/image-restaurant.jpg'
import plane from "./images/image-plane.jpg";
import confetti from "./images/image-confetti.jpg";

const easyBank = [
    {
        id : 1,
        imageSrc : online,
        hText : "Online Banking",
        pText : "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        alt: "online banking icon"
    },
    {
        id : 2,
        imageSrc : budgeting,
        hText : " Simple Budgeting",
        pText : "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        alt: "budgeting icon"
    },
    {
        id : 3,
        imageSrc : onboarding,
        hText : "Fast Onboarding",
        pText : "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        alt: "onboarding icon"
    },
    {
        id : 4,
        imageSrc : api,
        hText : "Open API",
        pText : "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        alt: "open api icon"
    },
]

const latestArticle = [
    {
        id : 1,
        image : currency,
        heading : "Receive money in any currency with no fees",
        paragraph : "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        label: "By Claire Robinson",
        alt: "picture of money"
    },
    {
        id : 2,
        image : enjoyment,
        heading : "Treat yourself without worrying about money",
        paragraph : "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        label :"By Wilson Hutton",
        alt: "picture of drink and food"
    },
    {
        id : 3,
        image : plane,
        heading : "Take your Easybank card wherever you go",
        paragraph : "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        label :"By Wilson Hutton",
        alt: "picture of an airplane"
    },
    {
        id : 4,
        image : confetti,
        heading : "Our invite-only Beta accounts are now live!",
        paragraph : " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        label: "By Claire Robinson",
        alt: "animate picture"
    },
]


export default easyBank;
export { latestArticle };