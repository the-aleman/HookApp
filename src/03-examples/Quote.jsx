
export const Quote = ({ title, overview, imagen }) => {
    return (
        <blockquote className="blockquote text-start">
            <p className="mb-3">{ title }</p>
            <footer className="blockquote-footer">{ overview }</footer>
            <img src={ `https://image.tmdb.org/t/p/w92/${ imagen }` } />
        </blockquote>
    )
}
