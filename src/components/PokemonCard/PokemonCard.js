import React from 'react';

import {
    Card,
    ImageHolder,
    PokemonImage,
    PokemonName,

} from './PokemonCard.styles';

const PokemonCard = ({ name, image, id }) => {
    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <Card>
            <ImageHolder>
                <PokemonImage src={image} />
            </ImageHolder>
            <div>
                <PokemonName>
                    {`${id} - ${pokemonName}`}
                </PokemonName>
            </div>
        </Card>
    )
}

export default PokemonCard;