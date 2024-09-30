// Constructor
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// método show
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// Objeto images
let images = {
    list: [], 
    // Método contains
    contains: function(title) {
        return this.list.some(image => image.title === title);
    },

    // Método add
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log(`${title} ya está en la lista.`);
        }
    },

    // Método edit
    edit: function(title, newArtist, newDate) {
        const image = this.list.find(image => image.title === title);
        if (image) {
            image.artist = newArtist;
            image.date = newDate;
            console.log(`${title} ha sido editada.`);
        } else {
            console.log(`La imagen ${title} no se encuentra en la lista.`);
        }
    },

    // Método delete
    delete: function(title) {
        const index = this.list.findIndex(image => image.title === title);
        if (index !== -1) {
            this.list.splice(index, 1);
            console.log(`${title} ha sido eliminada de la lista.`);
        } else {
            console.log(`La imagen ${title} no se encuentra en la lista.`);
        }
    },

    // Método show
    show: function() {
        if (this.list.length === 0) {
            console.log('No hay imágenes en la lista.');
        } else {
            this.list.forEach(image => image.show());
        }
    },

    // Método clear
    clear: function() {
        this.list = [];
        console.log('Lista de imágenes eliminada.');
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504); // Editar la fecha de la Mona Lisa
images.delete('The Last Supper'); // Eliminar La última cena
images.show(); 
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
