import {v4 as uuidv4} from 'uuid';

function Music() {
    return [
   
    {
        name:"Aeolian Storm",
        artist: "Hardwired Lo-fi",
        cover: "https://cdnb.artstation.com/p/assets/images/images/032/156/617/large/gabriel-dias-profile-pic.jpg?1605632829",
        id: uuidv4(),
        active: true,
        color: ["#EBB6FE","#A3DEFD"],
        audio: "https://srv-store6.gofile.io/download/JMOJpp/AeolianStorm.mp3",
    },
    {
        name:"Afternoon Vista",
        artist: "Hardwired Lo-fi",
        cover: "https://i.pinimg.com/474x/03/b1/81/03b1813b294094509049f8b912eb4f23.jpg",
        id: uuidv4(),
        active: false,
        color: ["#328DF6","#EBC4CF"],
        audio: "https://srv-store6.gofile.io/download/4Fa2Bo/AfternoonVista.mp3",
    },

    {
        name:"Crossed Rainbow",
        artist: "Hardwired Lo-fi",
        cover: "https://64.media.tumblr.com/7a532ceb2f00fd551bb4f4c0f2826849/tumblr_pgzeklkG4Q1vvs8ux_1280.jpg",
        id: uuidv4(),
        active: false,
        color: ["#96C2B3","#C9D9A8"],
        audio: "https://srv-store4.gofile.io/download/MGD212/CrossedRainbow.mp3",
    },

    {
        name:"Irrascible",
        artist: "Hardwired Lo-fi",
        cover: "https://srv-store3.gofile.io/download/mREXDu/behelit.jpg",
        id: uuidv4(),
        active: false,
        color: ["#C03A37","#DACA96"],
        audio: "https://srv-store4.gofile.io/download/IvPk8D/Irrascible.mp3",
    },

    {
        name:"Niten",
        artist: "Hardwired Lo-fi",
        cover: "https://images.8tracks.com/cover/i/002/337/739/qwerty78-5683.jpg?rect=244,0,1512,1512&q=98&fm=jpg&fit=max&w=640&h=640",
        id: uuidv4(),
        active: false,
        color: ["#C6598F","#68A5CA"],
        audio: "https://srv-store6.gofile.io/download/79ehEE/Niten.mp3",
    },

    {
        name:"The Message",
        artist: "Hardwired Lo-fi",
        cover: "https://i.pinimg.com/originals/7d/92/3a/7d923afac8f9eb9bf439a9154e62a8f6.jpg",
        id: uuidv4(),
        active: false,
        color: ["#AC6B5F","#2E8984"],
        audio: "https://srv-store3.gofile.io/download/K4u7c6/TheMessage.mp3",
    },
    
  ];
}

export default Music;