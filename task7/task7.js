function charge() {
    var connection = new XMLHttpRequest();
    connection.responseType = 'json';
    connection.onreadystatechange = function () {
       if (connection.readyState === 4 && connection.status === 200) {
           const movies = connection.response;
           load(movies);
       }
    };
    connection.open('GET','https://api.themoviedb.org/3/movie/popular?api_key=0dddc764810313bb1bb66645667110cd&language=en-US&page=1');
    connection.send();
}


function load(movies) {
    var body = document.body;

    body.innerHTML += '<ul>';
    var list = document.querySelector('ul');
    for (let i=0; i < movies.results.length; i++){
        var movie = movies.results[i];
        send(movie.id);
        list.innerHTML += `
        <li class="movie-card">
            <div class="position">${i + 1}</div>
            <div class="mc-poster">
                <a href="https://www.filmaffinity.com/es/film809297.html">
                    <img width="100" height=""
                         src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                         alt="${movie.title}">
                </a>
            </div>
            <div class="movie-data">
                <div class="mc-info-container">
                    <div class="mc-title">
                        <a href="https://www.filmaffinity.com/es/film809297.html" title="El padrino">
                            ${movie.title}
                        </a>
                        ${movie.release_date}
                        <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                    </div>
                    <div class="mc-director" id="director_${movie.id}"></div>
                    <div class="mc-cast" id="actors_${movie.id}"></div>
                </div>
                <div class="data">
                    <div class="avg-rating">${movie.vote_average}</div>
                    <div class="rat-count">${movie.vote_count}<i class="fas fa-user"></i></div>
                </div>
            </div>
        </li>`;

    }
}


function send(id){
    var connectionB = new XMLHttpRequest();
    connectionB.responseType = 'json';
    connectionB.onreadystatechange = function () {
        if (connectionB.readyState === 4 && connectionB.status === 200) {
            const send = connectionB.response;
            var dir = document.querySelector(`#director_${id}`);
            for (let i = 0; i <  send.crew.length; ++i){
                if (send.crew[i].job === "Director")
                    dir.innerHTML = `<a href="">${send.crew[i].name}</a>`;
            }
            var act = document.querySelector(`#actors_${id}`);
            act.innerHTML=`
            <a href="">${send.cast[0].name}</a>,
            <a href="">${send.cast[1].name}</a>,
            <a href="">${send.cast[2].name}</a>,
            <a href="">${send.cast[3].name}</a>,
            <a href="">${send.cast[4].name}</a>,
            <a href="">${send.cast[5].name}</a>,
            <a href="">${send.cast[6].name}</a>,
            <a href="">${send.cast[7].name}</a>,
            <a href="">${send.cast[8].name}</a>,
            <a href="">${send.cast[9].name}</a>,
            ...
            `;
        }
    };
    connectionB.open('GET','https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=0dddc764810313bb1bb66645667110cd');
    connectionB.send();
}
