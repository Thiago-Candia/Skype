const contacts = [
    {
        nombre: 'Carlitos',
        img: 'https://i.pinimg.com/474x/bb/ef/a0/bbefa07f9ff315071961a214fad14453.jpg',
        id: 1,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Toma, come carlito',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Que decis flaco?',
            }
        ]
    },
    {
        nombre: 'Melman',
        img: 'https://preview.redd.it/melman-madagascar-v0-8321rl8wr8x91.jpg?width=386&format=pjpg&auto=webp&s=dbc0ee6f1f87d68c3198268518289f25436be678',
        id: 2,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola Melman, seguis en madagascar?',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Sii, estoy con el curso todavia',
            }
        ]
    },
    {
        nombre: 'Japo',
        img: 'https://i.scdn.co/image/ab67616d00001e02d1835aec2dd40ed29faeaaba',
        id: 3,
        mensajes: []
    },
    {
        nombre: 'Geronimo',
        img: 'https://pbs.twimg.com/profile_images/1722501239450021888/oYy45eaU_400x400.jpg',
        id: 4,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Momo hablas mucho?',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Te vas baneado..',
            },
            {
                emisor: 'Tu',
                hora: '23:12',
                id: 3,
                texto: 'Noooo',
            }
        ]
    },
    {
        nombre: 'Davo',
        img: 'https://i.pinimg.com/474x/e0/af/b1/e0afb1f32c8af2af99cdfbb227edc885.jpg',
        id: 5,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'No entendi, que?',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'so, jajaj eduquee',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 4,
                texto: '????',
            },
        ]
    },
    {
        nombre: 'Davus',
        img: 'https://i.scdn.co/image/ab67616d00001e0271743ce3c9ebd636806f726c',
        id: 6,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola pibeee',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Noooo, sos voooos',
            }
        ]
    },
    {
        nombre: 'knak',
        img: 'https://i.scdn.co/image/ab67616d00001e0259d1f33d02733ed322382221',
        id: 7,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola, como estas?',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'ke onda loro',
            }
        ]
    },
    {
        nombre: 'pedrito',
        img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/2a2fc01c-dd1e-4f79-b4d0-b18adfdc6366-profile_image-300x300.png',
        id: 8,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Uhh wacho, los cables',
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'jajajaj',
            }
        ]
    },
    {
        nombre: 'FrozoudaV2',
        img: 'https://images.genius.com/053cae7726f5e57502f8cccb1d414c15.300x300x1.png',
        id: 9,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
            },
            {
                emisor: 'Tu',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
            },
            
        ]
    },
    {
        nombre: 'Frozouda',
        img: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F4ede89aff67892022d9e681b9bdcfa5d.300x300x1.png',
        id: 10,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
            },
            {
                emisor: 'Tu',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
            },
            
        ]
    },
    {
        nombre: 'Honey',
        img: 'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fcf30d534ca66394478bb42c79e137188.500x500x1.jpg',
        id: 11,
        mensajes: []
    },
    {
        nombre: 'De verdad',
        img: 'https://assets.audiomack.com/ysy-a/f0261a917ad04f8be40c3afa9a86ffd5aa1328833953c0164e448ba90593f598.jpeg?width=300',
        id: 12,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 3,
                texto: 'Estas ahi?',
            },
            
        ]
    },
    {
        nombre: 'StrangeHuman',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55kWw0ubDOYqU1fffI9wys3XdSmWEn0Iikw&s',
        id: 13,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
            },
            {
                emisor: 'Tu',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
            },
            
        ]
    },
    {
        nombre: 'Mecha',
        img: 'https://i.scdn.co/image/ab67616d00001e02492b52ad15e5c9d978560388',
        id: 14,
        mensajes: []
        },
    {
        nombre: 'Zell',
        img: 'https://i.scdn.co/image/ab67616d00001e02024278b4b0933bf9eeb677b5',
        id: 15,
        mensajes: [
            {
                emisor: 'Usuario',
                hora: '23:10',
                id: 1,
                texto: 'Muy buenas',
            },
            {
                emisor: 'Tu',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa?',
            },
            {
                emisor: 'Tu',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
            },
            
        ]
    }
]
export default contacts