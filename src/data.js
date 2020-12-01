import {v4 as uuidv4} from 'uuid';

function Music() {
    return [
   
    {
        name:"Aeolian Storm",
        artist: "Hardwired Lofi",
        cover: "https://cdnb.artstation.com/p/assets/images/images/032/156/425/large/gabriel-dias-comp2-96.jpg?1605632952",
        id: uuidv4(),
        active: true,
        color: ["#72CFBE","#6DA2C6"],
        audio: "https://media1.vocaroo.com/mp3/12SmwI5t1IA9",
    },
    {
        name:"Niten",
        artist: "Hardwired Lofi",
        cover: "https://cdnb.artstation.com/p/assets/images/images/032/156/617/large/gabriel-dias-profile-pic.jpg?1605632829",
        id: uuidv4(),
        active: false,
        color: ["#E3B6FF","#94E8FD"],
        audio: "https://media1.vocaroo.com/mp3/18OT3jwc8qO5",
    },

    {
        name:"Crossed Rainbow",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BAC53E", "#CBEFFB"],
        audio: "https://media1.vocaroo.com/mp3/1kYiOivSIG0K",
    },

    {
        name:"Afternoon Vista",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BA6E3B","#A3A790"],
        audio: "https://media1.vocaroo.com/mp3/1hkJHTol98Wm",
    },

    {
        name:"The Message",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/dd0cba2d16eb4006a11f5efa542a2fec53ffa4ee-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#F9E697","#B1CD8B"],
        audio: "https://media1.vocaroo.com/mp3/1mw9u42XEsAy",
    },

    {
        name:"Irrascible",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#60A0C3","#EB6C60"],
        audio: "https://media1.vocaroo.com/mp3/1jhUs5bzwkIN",
    },
    
    {
        name:"Porcupine",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#C7361E","#6EB1C2"],
        audio: "https://media1.vocaroo.com/mp3/1nvbCFeGgJL3",
    },


  ];
}

export default Music;