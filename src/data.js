import {v4 as uuidv4} from 'uuid';

function Music() {
    return [
   
    {
        name:"Rest Until Dark",
        artist: "Sleepy Fish",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
        id: uuidv4(),
        active: true,
        color: ["#ADD4D4","#2F2E50"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    },
    {
        name:"Yesterday",
        artist: "Mo Anando",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#F7A7B2","#A8E7C7"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9281",
    },

    {
        name:"Silence",
        artist: "Toonorth",
        cover: "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BAC53E", "#CBEFFB"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8425",
    },

    {
        name:"Les Bonnes Choses",
        artist: "sadtoi",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BA6E3B","#A3A790"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9455",
    },

    {
        name:"Fond Memories",
        artist: "Sitting Duck, Hoffy Beats",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/dd0cba2d16eb4006a11f5efa542a2fec53ffa4ee-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#F9E697","#B1CD8B"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7995",
    },

    {
        name:"Let's stay inside",
        artist: "No Sprint",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#60A0C3","#EB6C60"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9428",
    },
    
    {
        name:"Ocen Patio",
        artist: "Philantrope, Dayle",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#C7361E","#6EB1C2"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=8036",
    },

  ];
}

export default Music;