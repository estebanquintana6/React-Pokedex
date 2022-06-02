import styled from 'styled-components';

export const Root = styled.div`
  background-color: #CC0000;
  width: 100%;
  min-height: 100vh;
`

export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 32px;
`

export const FilterDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
`

export const FilterInput = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 15pt;
`

export const SearchButton = styled.button`
  margin-right: auto;
  border-radius: 15px;
`