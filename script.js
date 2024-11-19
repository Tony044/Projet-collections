const collection = [
    {
        title: 'N. J Respect R',
        nameOfTheSinger: 'Damso',
        picture: './N.J_Respecte_R.jpg',
        genre: 'French rap',
        release: '2017'
    },

    {
        title: 'Boucan',
        nameOfTheSinger: 'KeBlack ft. Franglish',
        picture: './Boucan.jpg',
        genre: 'Fench rap',
        release: '2024'
    },

    {
        title: 'Complètement sonné',
        nameOfTheSinger: 'KeBlack',
        picture: './Complètement_sonné.jpg',
        genre: 'French Urban Pop/R&B, French Rap',
        release: '2024'
    },

    {
        title: 'Spider',
        nameOfTheSinger: 'Gims & Dystinct',
        picture: './Spider.jpg',
        genre: 'French Urban Pop/R&B',
        release: '2024'
    },

    {
        title: 'Est-ce Que Tu M\'aimes',
        nameOfTheSinger: 'Gims',
        picture: "./Est-ce-que-tu-m'aimes.jpg",
        genre: ' Pop, Electronica, Hip-hop/Rap, French Urban Pop/R&B, French Rap',
        release: '2015'
    },
    
    {
        title: 'N. J Respect R',
        nameOfTheSinger: 'Damso',
        picture: './N.J_Respecte_R.jpg',
        genre: 'French rap',
        release: '2017'
    },

    {
        title: 'Boucan',
        nameOfTheSinger: 'KeBlack ft. Franglish',
        picture: './Boucan.jpg',
        genre: 'Fench rap',
        release: '2024'
    },

    {
        title: 'Complètement sonné',
        nameOfTheSinger: 'KeBlack',
        picture: './Complètement_sonné.jpg',
        genre: 'French Urban Pop/R&B, French Rap',
        release: '2024'
    },

    {
        title: 'Spider',
        nameOfTheSinger: 'Gims & Dystinct',
        picture: './Spider.jpg',
        genre: 'French Urban Pop/R&B',
        release: '2024'
    },

    {
        title: 'Est-ce Que Tu M\'aimes',
        nameOfTheSinger: 'Gims',
        picture: "./Est-ce-que-tu-m'aimes.jpg",
        genre: ' Pop, Electronica, Hip-hop/Rap, French Urban Pop/R&B, French Rap',
        release: '2015'
    }
]


// // Select the collection container
// const collectionContainer = document.querySelector('.collection');
const collectionContainer = document.querySelector('.collection');

// // Loop through the collection array
// collection.forEach(item => {
//     //create card container
//     const card = document.createElement('div');
//     card.classList.add('card')
collection.forEach(item => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card')


//     // add image 
//     const img = document.createElement('img');
//     img.src = item.picture;
//     img.alt = `${item.title} by ${item.nameOfTheSinger}`;
//     card.appendChild(img);
    const img = document.createElement('img');
    img.src = item.picture;
    img.alt = `${item.title} by ${item.nameOfTheSinger}`;
    cardContainer.appendChild(img);

//     // Create content container
//     const content = document.createElement('div');
//     content.classList.add('content');
    const content = document.createElement('div');
    content.classList.add('content');


//     // Add title
//     const title = document.createElement('div');
//     title.classList.add('title');
//     title.textContent = item.title;
//     content.appendChild(title);
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = item.title;
    content.appendChild(title);


//     // Add singer name
//     const singer = document.createElement('div');
//     singer.classList.add('name');
//     singer.textContent = `By: ${item.nameOfTheSinger}`;
//     content.appendChild(singer);

    const singerName = document.createElement('div');
    singerName.classList.add('name');
    singerName.textContent = item.nameOfTheSinger;
    content.appendChild(singerName);

//     // Add genre
//     const genre = document.createElement('div');
//     genre.classList.add('genre');
//     genre.textContent = `Genre: ${item.genre}`;
//     content.appendChild(genre);

    const genre = document.createElement('div');
    genre.classList.add('genre');
    genre.textContent = `Genre : ${item.genre}`;
    content.appendChild(genre);


//     // Add release date
//     const release = document.createElement('div');
//     release.classList.add('release');
//     release.textContent = `Release : ${item.release}`;
//     content.appendChild(release);

    const release = document.createElement('div');
    release.classList.add('release');
    release.textContent = `Release : ${item.release}`;
    content.appendChild(release);

//     // Append content to card
//     card.appendChild(content);

    cardContainer.appendChild(content);

//     // Append card to collection container
//     collectionContainer.appendChild(card);
    collectionContainer.appendChild(cardContainer);
// });
})
