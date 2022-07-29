import { useState, useEffect } from "react";

export const useAjax = (url) => {
    const [state, setState] = useState({
        data: null,
        load: true
    })

    const getData = async() => {
        setState({
            ...state,
            load: true
        });
        
        const res = await fetch(url);
        const {data} = await res.json();

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
        load: state.load,
    }
}