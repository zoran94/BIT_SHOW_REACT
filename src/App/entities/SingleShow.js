class SingleShow {
    constructor(id, name, image, rating, summary, embedded){
        this.id = id;
        this.name = name;
        this.image = image;
        this.rating = rating.average;
        this.summary = summary;
        this.cast = embedded.cast
        this.seasons = embedded.seasons;
    }
}

export default SingleShow;