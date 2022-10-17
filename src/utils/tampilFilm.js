
const tampilFilm = (films => {
    return `
    <div class="col-md-4">
        <div class="card mb-3">
            <img src="${films.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${films.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${films.Year}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${films.Type}</h6>
                <a href="#" class="btn btn-primary disabled" >Detail Film</a> 
            </div>
        </div>
    </div>
    `;
});

    module.exports = tampilFilm;