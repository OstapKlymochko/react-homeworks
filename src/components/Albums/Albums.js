import React, {useEffect, useState} from 'react';

import {requests} from "../../services/requests";

const Albums = () => {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        requests.getAll('albums').then(({data}) => setAlbums([...data]));
    }, [])
    return (
        <div>
            {
                albums.map(album => {
                    return (
                        <div key={album.id}>
                            <>
                                <h2>{album.userId} {album.title}</h2>
                            </>
                        </div>
                    )
                })
            }
        </div>
    );
};

export {Albums};