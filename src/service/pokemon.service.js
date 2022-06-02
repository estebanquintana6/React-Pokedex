const pokemonRequestBuilder = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export const getPokemonById = async (id) => {
    const response = await pokemonRequestBuilder(id);
    const json = await response.json();
    const { name, sprites: { front_default: image } } = json;

    return {
        id,
        name,
        image
    }
}

export const getPokemonByIdRange = async (start, end) => {
    const promises = [...Array(end - start + 1).keys()].map(x => 
        getPokemonById(x + start)
    );

    const responses = await Promise.all(promises);
    
    return responses;

}