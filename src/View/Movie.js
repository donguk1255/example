import React, {useState, useEffect} from 'react';
import { movieAPI } from "../api";

const Movie = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        toprated: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        topratedError: null,
        popularError: null,
        upcomingError: null
    })

    const getdata = async () => {
        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying()
        const [toprated, topratedError] = await movieAPI.toprated()
        const [popular, popularError] = await movieAPI.popular()
        const [upcoming, upcomingError] = await movieAPI.upcoming()
        setMovies({
            nowPlaying,
            toprated,
            popular,
            upcoming,
            nowPlayingError,
            topratedError,
            popularError,
            upcomingError
        })

       //  setMovies(data)
    }

    // lastest: () => getAnything("/movie/lastest"),
    //     nowPlaying: () => getAnything("/movie/now_playing"),
    //     toprated: () => getAnything("/movie/top_rated"),
    //     popular: () => getAnything("/movie/popular"),
    //     upcoming: () => getAnything("/movie/upcoming"),
    //     detail: (id) => getAnything(`movie/${id}`)


    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>{movies.nowPlaying.length}</h1>
        </div>
    );
};

export default Movie;
