import {v4 as uuidv4} from 'uuid';

function Music() {
    return [
    {
        name:"Slim Bobby",
        artist: "Aviino",
        cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
        id: uuidv4(),
        active: true,
        color: ["#4479BB","#C571BC"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
    },
    {
        name:"Canção",
        artist: "The Breed",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
        id: uuidv4(),
        active: false,
    color: ["#C6598F","#68A5CA"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=7961",
    },
        
  ];
}

export default Music;