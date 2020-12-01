import {v4 as uuidv4} from 'uuid';

function Music() {
    return [
   
    {
        name:"Aeolian Storm",
        artist: "Hardwired Lofi",
        cover: "https://i.pinimg.com/originals/a9/69/63/a9696326b0a817f01e8192ed58418c60.jpg",
        id: uuidv4(),
        active: true,
        color: ["#39486C","#CD8787"],
        audio: "https://media1.vocaroo.com/mp3/12SmwI5t1IA9",
    },
    {
        name:"Niten",
        artist: "Hardwired Lofi",
        cover: "https://64.media.tumblr.com/2ed38029c449fd1e3939a1524f8ed098/188e400b0596d65d-d1/s640x960/d622bd35cbf5fd0000e606e806124b8096c2f3f4.jpg",
        id: uuidv4(),
        active: false,
        color: ["#DFC1B6","#C6BBC1"],
        audio: "https://media1.vocaroo.com/mp3/18OT3jwc8qO5",
    },

    {
        name:"Crossed Rainbow",
        artist: "Hardwired Lofi",
        cover: "https://i.pinimg.com/originals/35/ee/b2/35eeb22d79cc884aa35801cc3dc26925.jpg",
        id: uuidv4(),
        active: false,
        color: ["#F29585", "#FAE77A","#BCFDA8","#72A7EB","#8876C5"],
        audio: "https://media1.vocaroo.com/mp3/1kYiOivSIG0K",
    },

    {
        name:"Afternoon Vista",
        artist: "Hardwired Lofi",
        cover: "https://i.pinimg.com/originals/ba/73/45/ba7345ac66f54b6370695dd8c82969c7.jpg",
        id: uuidv4(),
        active: false,
        color: ["#FA6A50","#9583AD"],
        audio: "https://media1.vocaroo.com/mp3/1hkJHTol98Wm",
    },

    {
        name:"The Message",
        artist: "Hardwired Lofi",
        cover: "https://d.newsweek.com/en/full/1233576/end-evangelion-netflix-neon-genesis.jpg?w=1600&h=1600&q=88&f=1bd8d0e32d5d7f618d6671dcb6e82388",
        id: uuidv4(),
        active: false,
        color: ["#362360","#8A3155"],
        audio: "https://media1.vocaroo.com/mp3/1mw9u42XEsAy",
    },

    {
        name:"Irrascible",
        artist: "Hardwired Lofi",
        cover: "https://i.pinimg.com/474x/be/52/98/be5298bd1e3c74edbe5256c468c85bea.jpg",
        id: uuidv4(),
        active: false,
        color: ["#7E1B29","#34283C"],
        audio: "https://media1.vocaroo.com/mp3/1jhUs5bzwkIN",
    },
    
    {
        name:"Porcupine",
        artist: "Hardwired Lofi",
        cover: "https://64.media.tumblr.com/7b8c6651ec236b075e032c5edebf7e2a/4b07af55ea283e8f-1c/s400x600/8b80bb3c6dbce01b9c4a78457b41a9ffc512e2e7.png  ",
        id: uuidv4(),
        active: false,
        color: ["#748994","#0E193B"],
        audio: "https://media1.vocaroo.com/mp3/1nvbCFeGgJL3",
    },


  ];
}

export default Music;