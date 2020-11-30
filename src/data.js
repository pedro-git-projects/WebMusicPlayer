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
        audio: "https://t4.bcbits.com/stream/81b780ae20af6718e75514ce47c32d40/mp3-v0/3616695086?p=1&ts=1606779998&t=6335c432d63de20d891c0ad7b0baa73f0eefcc15&token=1606779998_0ca8e453e25737138b5cf5e7348a8c86236a4646",
    },
    {
        name:"Niten",
        artist: "Hardwired Lofi",
        cover: "https://cdnb.artstation.com/p/assets/images/images/032/156/617/large/gabriel-dias-profile-pic.jpg?1605632829",
        id: uuidv4(),
        active: false,
        color: ["#E3B6FF","#94E8FD"],
        audio: "https://t4.bcbits.com/stream/aa79606918b70a7a89fb4a6716bf4c3d/mp3-v0/3034688838?p=1&ts=1606779998&t=d2c930914b7ee2da340ee00fb7617989268afd84&token=1606779998_c9d214b761fa373246e44f915786de84b18c4c88",
    },

    {
        name:"Silence",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BAC53E", "#CBEFFB"],
        audio: "https://t4.bcbits.com/stream/9a3b68abc0b6d4a33e6fe1c00f4374ee/mp3-v0/3341221306?p=1&ts=1606779998&t=d86b1e0a1d5e9908505f9b096cc386814c842714&token=1606779998_2fe7876fe3434413d2c906ab08a4672fc3e1b226",
    },

    {
        name:"Les Bonnes Choses",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#BA6E3B","#A3A790"],
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9455",
    },

    {
        name:"Fond Memories",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/dd0cba2d16eb4006a11f5efa542a2fec53ffa4ee-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#F9E697","#B1CD8B"],
        audio: "https://t4.bcbits.com/stream/bf37028dbe4b3692bd620c773b200301/mp3-v0/1649659455?p=1&ts=1606779998&t=42cf617360b7298440480dbb3ea94c8d9ceae00e&token=1606779998_25e97b5d47d882e36d6986d6ccad4699d32c0363",
    },

    {
        name:"Let's stay inside",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#60A0C3","#EB6C60"],
        audio: "https://t4.bcbits.com/stream/e4861a6b1eb5547d689f2805c9a92b76/mp3-v0/255744774?p=1&ts=1606779998&t=a07a947d8de01c8c18662f2b08c693813919e0e6&token=1606779998_b3ffc4158e141cd5d8e0e00d8bc842e2b111f89d",
    },
    
    {
        name:"Ocen Patio",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#C7361E","#6EB1C2"],
        audio: "https://t4.bcbits.com/stream/b11134cad012875784ea56f4b50621ee/mp3-v0/3323754896?p=1&ts=1606779998&t=c4c9f875ee7666ff39f1194d59c59747c8a870c3&token=1606779998_d954c9dd9d5619b22462c92a46d747e0e2fc54e4",
    },

    {
        name:"Ocen Patio",
        artist: "Hardwired Lofi",
        cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
        id: uuidv4(),
        active: false,
        color: ["#C7361E","#6EB1C2"],
        audio: "https://t4.bcbits.com/stream/2a790c8c3fdd80996e009ae435da724f/mp3-v0/3333520397?p=1&ts=1606779998&t=98d2e38bb36c5ae236ab597246b8efd5d488dcfa&token=1606779998_4d0dfe07ba336c20ad428e2f19293d14c6144eac",
    },

  ];
}

export default Music;