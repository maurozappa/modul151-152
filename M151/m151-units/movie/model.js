import mysql from "mysql2/promise";

const connection = await mysql.createConnection({ 
    host: "127.0.0.1",   
    user: "root",   
    password: "sml12345", 
    database: "movie-db", 
});

await connection.connect();

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data]  = await connection.query(query);
    return data;
}
async function insert(movie) { 
    const query = 'Insert into movies (Movies.title, Movies.year) VALUES ('+ movie.title +','+ movie.year+')';
    const [data]  = await connection.query(query);
    return data;
}

async function update(movie) {
    const query = 'Update movies set movies.title='+movie.title+', movies.year=' + movieS.year + 'WHERE movies.id=' + movie.id;
    const [data]  = await connection.query(query);
    return data;
}
export async function get(id) { 
    const query = 'SELECT movies.id FROM Movies Where Movies.id=' + id;
    const [data]  = await connection.query(query);
    return data;
}
export async function remove(id) { 
    const query = 'DELETE FROM Movies WHERE movies.id='+id;
    const [data]  = await connection.query(query);
    
}
export async function save(movie) {
    if(movie.id   ===   "" ) {
        const query = 'Insert into movies (Movies.title, Movies.year) VALUES ('+ movie.title +','+ movie.year+')';
        const [data]  = await connection.query(query);
        return data;
    } else {
        const query = 'Update movies set movies.title='+movie.title+', movies.year=' + movieS.year + 'WHERE movies.id=' + movie.id;
        const [data]  = await connection.query(query);
        return data;
    }
    return data;
}


/*
function insert(movie) {
    movie.id = getNextId() ;   
    data.push(movie); 
}

function update(movie) {     
    movie.id = parseInt(movie.id, 10);   
    const index = data.findIndex((item)  =>  item.id === movie.id);   
    data[index] = movie;
}

export function get(id) {   
    return Promise.resolve(data.find((movie) =>  movie.id === id)); 
}

export function remove(id) { 
    data = data.filter((movie)  =>  movie.id !== id);   
    return Promise.resolve(); 
} 

export function save(movie) {     
    if(movie.id   ===   "" ) {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}
*/