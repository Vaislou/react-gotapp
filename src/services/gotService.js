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

    async getAllBooks() {
        const result = await this.getResource(`/books/`);
        return result.map(this._transformBook);
    }
    
    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    async getAllCharacters() {
        const result = await this.getResource(`/characters?page=5&pageSize=10`);
        return result.map(this._transformCharacter);
    }
    
    async getCharacter (id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    
    async getAllHouses() {
        const result = await this.getResource(`/houses/`);
        return result.map(this._transformHouse);
    }
    
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    async getRandomCharacter() {
        const number = Math.round(Math.random() * 2138) + 1;
        const randomChar = await this.getResource(`/characters/${number}`);
        return this._transformCharacter(randomChar);
    }

    _transformCharacter(char) {
        return  {
            name: char.name,
            gender: char.gender || 'N/A',
            born: char.born || 'N/A',
            died: char.died || 'N/A',
            culture: char.culture || 'N/A'
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region || 'N/A',
            words: house.words || 'N/A',
            titles: house.titles || 'N/A',
            overlord: house.overlord || 'N/A',
            ancestralWeapons: house.ancestralWeapons || 'N/A'
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages || 'N/A',
            publisher: book.publisher || 'N/A', 
            released: book.released || 'N/A'
        }
    }
}

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });
         
// got.getCharacter(130)
//     .then(res => console.log(res));
