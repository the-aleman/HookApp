import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(550);
    const url = `https://api.themoviedb.org/3/movie/${ counter }?api_key=c9cb9e8b8baecb5240f8daf71aabf1d2`;
    const { data, isLoading, hasError } = useFetch(url);
    const { title, overview, poster_path } = !!data && data;

    return (
        <>
            <h1>Películas</h1>
            <hr />

            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote title={ title } overview={ overview } imagen={ poster_path } />
            }
            
            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => decrement(1) } >
                Película Anterior
            </button>
            <button
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment(1) } >
                Película Siguiente
            </button>
            
        </>
    )
}
