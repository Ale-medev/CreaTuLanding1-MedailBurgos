const products = [
    {
        id: 1,
        title: 'La Cosa de Otro Mundo',
        price: 10.25,
        category: 'Ciencia ficción',
        image: 'https://i.pinimg.com/564x/43/15/e6/4315e6a187759dc06ee1ceffd79b6e9d.jpg',
        shortDescription: '¡Lleva a casa el terror con este espeluznante póster de "La Cosa de Otro Mundo"! Calidad excepcional que hará temblar tus paredes.',
        stock: 3,
        detalles: {
            year: '1951',
            director: 'Christian Nyby',
            originalTitle: 'The Thing from Another World',
        }
    },
    {
        id: 2,
        title: 'Alien',
        price: 11.50,
        category: 'Ciencia ficción',
        image: 'https://i.pinimg.com/564x/63/e4/75/63e47574b5ba178f51e63dd6f8a7cefe.jpg',
        shortDescription: '¡Un póster icónico para los amantes del terror espacial! Captura la esencia de "Alien" con este póster de calidad cinematográfica.',
        stock: 10,
        detalles: {
            year: '1979',
            director: 'Ridley Scott',
            originalTitle: 'Alien',
        }
    },
    {
        id: 3,
        title: 'Depredador',
        price: 10.25,
        category: 'Ciencia ficción',
        image: 'https://i.pinimg.com/564x/f9/1e/62/f91e62e0c852bf4191868c09f8dc52d4.jpg',
        shortDescription: '¡Prepárate para la caza con este impresionante póster de "Depredador"! Una calidad insuperable para los fanáticos del género.',
        stock: 0,
        detalles: {
            year: '1987',
            director: 'John McTiernan',
            originalTitle: 'Predator',
        }
    },
    {
        id: 4,
        title: 'El Exorcista',
        price: 15.00,
        category: 'Paranormal',
        image: 'https://i.pinimg.com/564x/21/af/3d/21af3dfc05e6ced615a9e7391f6772f7.jpg',
        shortDescription: '¡Lleva a casa el terror clásico con este póster de "El Exorcista"! Calidad excepcional que invoca el miedo en cada rincón.',
        stock: 11,
        detalles: {
            year: '1973',
            director: 'William Friedkin',
            originalTitle: 'The Exorcist',
        }
    },
    {
        id: 5,
        title: 'Un Hombre Lobo Americano en Londres',
        price: 11.50,
        category: 'Sobrenatural',
        image: 'https://i.pinimg.com/564x/81/33/32/8133326bfd8647bb25590bae920e7abf.jpg',
        shortDescription: '¡Desata a la bestia con este inquietante póster de "Un Hombre Lobo Americano en Londres"! Calidad excepcional que te hará aullar de miedo.',
        stock: 11,
        detalles: {
            year: '1981',
            director: 'John Landis',
            originalTitle: 'An American Werewolf in London',
        }
    },
    {
        id: 6,
        title: 'El Resplandor',
        price: 13.75,
        category: 'Paranormal',
        image: 'https://i.pinimg.com/564x/47/68/e3/4768e311c3fae04bb37b68438c3f3c92.jpg',
        shortDescription: '¡Sumérgete en el horror psicológico con este escalofriante póster de "El Resplandor"! Calidad excepcional que te dejará sin aliento.',
        stock: 3,
        detalles: {
            year: '1980',
            director: 'Stanley Kubrick',
            originalTitle: 'The Shining',
        }
    },
    {
        id: 7,
        title: 'Del Crepúsculo al Amanecer',
        price: 10.00,
        category: 'Sobrenatural',
        image: 'https://i.pinimg.com/564x/e4/23/02/e423024994f33831e7a04534162fea00.jpg',
        shortDescription: '¡Adéntrate en el oscuro y sangriento mundo de "Del Crepúsculo al Amanecer" con este póster impactante! Calidad excepcional que te mantendrá en vilo.',
        stock: 8,
        detalles: {
            year: '1996',
            director: 'Robert Rodriguez',
            originalTitle: 'From Dusk Till Dawn',
        }
    },
    {
        id: 8,
        title: 'Pesadilla en la Calle Elm',
        price: 12.50,
        category: 'Slasher',
        image: 'https://i.pinimg.com/564x/77/11/60/77116063756d237491bc7b2608859c38.jpg',
        shortDescription: '¡No podrás dormir después de ver este aterrador póster de "Pesadilla en la Calle Elm"! Calidad excepcional que te hará temblar de miedo.',
        stock: 10,
        detalles: {
            year: '1984',
            director: 'Wes Craven',
            originalTitle: 'A Nightmare on Elm Street',
        }
    },
    {
        id: 9,
        title: 'Viernes 13',
        price: 12.25,
        category: 'Slasher',
        image: 'https://i.pinimg.com/736x/d7/58/7c/d7587cf04f9f6eb5a500ae8d7a3746f1.jpg',
        shortDescription: '¡Prepárate para el horror con este icónico póster de "Viernes 13"! Calidad excepcional que te dejará sin aliento.',
        stock: 5,
        detalles: {
            year: '1980',
            director: 'Sean S. Cunningham',
            originalTitle: 'Friday the 13th',
        }
    },
    {
        id: 10,
        title: 'Halloween',
        price: 10.75,
        category: 'Slasher',
        image: 'https://i.pinimg.com/564x/53/7d/e5/537de54a9b73f73e89621ee8faed944e.jpg',
        shortDescription: '¡Celebra la noche más terrorífica del año con este espeluznante póster de "Halloween"! Calidad excepcional que te pondrá los pelos de punta.',
        stock: 11,
        detalles: {
            year: '1978',
            director: 'John Carpenter',
            originalTitle: 'Halloween',
        }
    },
    {
        id: 11,
        title: 'Poltergeist',
        price: 10.00,
        category: 'Paranormal',
        image: 'https://i.pinimg.com/564x/7b/90/2c/7b902c3b70559915ad3352812a9c4be2.jpg',
        shortDescription: '¡Experimenta el horror sobrenatural con este escalofriante póster de "Poltergeist"! Calidad excepcional que te dejará sin aliento.',
        stock: 8,
        detalles: {
            year: '1982',
            director: 'Tobe Hooper',
            originalTitle: 'Poltergeist',
        }
    },
    {
        id: 12,
        title: 'Posesión Infernal',
        price: 10.00,
        category: 'Sobrenatural',
        image: 'https://i.pinimg.com/564x/53/dd/35/53dd35b011edce2c3f159b6b2e453d60.jpg',
        shortDescription: '¡Despierta al mal con este aterrador póster de "Posesión Infernal"! Calidad excepcional que te sumergirá en el terror más oscuro.',
        stock: 4,
        detalles: {
            year: '1981',
            director: 'Sam Raimi',
            originalTitle: 'The Evil Dead',
        }
    }
]

export function getProducts(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 200)
    })
}

export function getProductsByCategory(category){
    return new Promise((resolve) => {
        const productsFilters = products.filter(prod => prod.category === category);
        setTimeout(() => {
            resolve(productsFilters)
        }, 200)
    })
}

export function getProductById(Id){
    return new Promise((resolve) => {
        const productFilter = products.find(prod => prod.id === parseInt(Id));
        resolve(productFilter);
    });
}