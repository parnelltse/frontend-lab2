import React from 'react';

const ArtistDetails = ({ artist }) => {
    return (
        <div className='artist-card'>
            <img className='photo' src={artist.photo_url} alt='photo' />
            <div className='text'>
                <h2>{artist.name}</h2>
                <p className='country'>Country: {artist.country}</p>
                <p className='years'>Years Active: {artist.years_active}</p>
            </div>
        </div>
    );
};

export default ArtistDetails;
