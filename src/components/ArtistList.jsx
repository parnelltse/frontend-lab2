import React from 'react';
import ArtistDetails from './ArtistDetails'; 

const ArtistList = ({ artists }) => {
    return (
        <div>
            {artists.map((artist) => (
                <ArtistDetails key={artist.name} artist={artist} />
            ))}
        </div>
    );
};

export default ArtistList;
