import styled from 'styled-components';

export const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex: 1 0 21%;
    flex-direction: column;
    max-width: 300px;
    margin: 16px;
`

export const ImageHolder = styled.div`
    display: flex;
    width: 100%;
`

export const PokemonImage = styled.img`
    margin: 0 auto;
`

export const PokemonName = styled.p`
    text-align: center;
    font-weight: bold;
`

export const PokemonId = styled.p`
    text-align: center;
    font-weight: bold;
    margin: 0;
`