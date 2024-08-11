'use strict'

function log(v) {
    console.log(v);
}

const obj = {
    title: 'Batman',
    author: 'batman',
    year: 2000,
    info() {
        return `title : ${obj.title}\n`+
                `author: ${obj.author}\n`+
                `year: ${obj.year}`;
    },

    edit(para, val) {
        obj[para] = val;
        log(obj[para]);
    },
}

log(obj.title)
log(obj.year)

log(obj.info());
obj.edit('year', 2004);

obj.library = {
    libName: 'Library of Batman',
    relatedbooks: [
        {title: 'Book1',  author:'Batman', year:2000,},
        {title: 'Book2',  author:'Batman', year:2004,},
        {title: 'Book3',  author:'Batman', year:2005,}
    ],
};

log(obj);
log(obj.library);
log(obj.library.libName);
obj.library.relatedbooks.forEach(item => log(item.title));

// T7
const book = {
    title: 'Superman',
    year: 2000,

    getBooksTitleAndYear() {
        return `${this.title} launched in ${this.year}`;
    },
}

log(book.getBooksTitleAndYear());
log('\n');

for(let item in book) {
    if((typeof book[item]) === 'function') continue;
    log(`${item} is ${book[item]}`);
}

log(Object.keys(book));
log(Object.values(book));