export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };

    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    getAllCharacters() {
        return this.getResource(`/characters?page=5&pageSize=10`);
    }
    
    getCharacter (id) {
        return this.getResource(`/characters/${id}`);
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    getRandomCharacter() {
        const number = Math.round(Math.random() * 2138) + 1;
        return this.getResource(`/characters/${number}`);
    }
}

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });
         
// got.getCharacter(130)
//     .then(res => console.log(res));
