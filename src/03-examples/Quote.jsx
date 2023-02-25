import { useRef, useLayoutEffect, useState } from "react";

export const Quote = ({ title, overview, imagen }) => {
    
    const titleRef = useRef();
    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

    useLayoutEffect(() => {

        const { height, width } = titleRef.current.getBoundingClientRect();
        setBoxSize({
            height: height,
            width: width,
        });
        
    }, [title])
    
    return (
        <>
            <blockquote className="blockquote text-start" style={{ display: 'flex' }}>
                <p className="mb-3" ref={ titleRef }>{ title }</p>
                <footer className="blockquote-footer">{ overview }</footer>
                <img src={ `https://image.tmdb.org/t/p/w92/${ imagen }` } />
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
