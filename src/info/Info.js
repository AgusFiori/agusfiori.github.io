import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(36, 180, 189)", "rgb(251, 113, 202)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Agustin",
    lastName: "Fiori",
    initials: "af", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: "🌎",
            text: "based in Argentina",
        },
        {
            emoji: "💼",
            text: "Developer at PWC",
        },
        {
            emoji: "📧",
            text: "agus_fiori@hotmail.com",
        },
        {
            emoji: "☕",
            text: "fueled by coffee",
        },
    ],
    socials: [
        {
            link: "https://github.com/AgusFiori",
            icon: "fa fa-github",
            label: "github",
        },
        {
            link: "https://linkedin.com/in/agusfiori",
            icon: "fa fa-linkedin",
            label: "linkedin",
        },
        {
            link: "https://twitter.com/_agusfiori",
            icon: "fa fa-twitter",
            label: "twitter",
        },
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.
    ],
    bio: "Hello! I'm Agustin. I'm a full stack developer working with MERN. I studied systems engineering at UTN, I enjoy playing with my pets and football, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills: {
        proficientWith: [
            "javascript",
            "react",
            "git",
            "nodejs",
            "bootstrap",
            "html5",
            "css3",
            "mongodb",
        ],
        exposedTo: ["figma", "python", "adobe illustrator"],
    },
    hobbies: [
        {
            label: "football",
            emoji: "⚽",
        },
        {
            label: "music",
            emoji: "🎶",
        },
        {
            label: "movies",
            emoji: "🎥",
        },
        {
            label: "cooking",
            emoji: "🧑‍🍳",
        },
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        // This is where your portfolio projects will be detailed
        // {
        //     title: "Todo list",
        //     live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock1,
        // },
    ],
};
