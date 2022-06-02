import React, { useEffect, useState, useRef } from 'react';
import {
  FilterInput,
  FilterDiv,
  PokedexContainer,
  Root,
  SearchButton
} from './App.styles'
import { getPokemonByIdRange } from './service/pokemon.service'

import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemonByIdRange(1, 151);
      setPokemonList(res);
      setFilteredList(res);
    }
    fetchPokemons();
  }, []);

  useEffect(() => {

  }, [])

  const handleSearch = () => {
    const filter = pokemonList.filter(({ name }) =>
      name.includes(filterValue.toLowerCase())
    )
    console.log(filter);
    setFilteredList(filter)
  }

  useEffect(() => {
    handleSearch();
  }, [filterValue])


  return (
    <Root>
      <FilterDiv>
        <FilterInput
          placeholder='Search by name'
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </FilterDiv>
      <PokedexContainer>
        {filteredList.map((pokemon) =>
          <PokemonCard {...pokemon} />
        )}
      </PokedexContainer>
    </Root>
  );
}

export default App;
