import {useState, useEffect} from 'react';

export const useAjax = (url) => {

    const [state, setState] = useState({
        data: null,
        load: true
    });

    const getData = async() => {
        setState({
            ...state,
            load: true
        });

        const request = await fetch(url);
        const {data} = await request.json();
        setState({
            data: data,
            load: false
        })
    }

    useEffect(() => {
        getData()
    }, [url])

    return {
        data: state.data,
        load: state.load
    }
}