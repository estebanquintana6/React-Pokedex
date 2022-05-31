import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
`

export const WhitePanel = styled.div`
    background-color: white;
    padding: 15px;
    width: 100%;
    border-radius: 25px;
`

export const PanelTitle = styled.h2`
    margin-left: 15px;
`

export const Form = styled.form`
    margin: 0 auto;
`

export const FormGroup = styled.div`
    width: 100%;
    margin: 15px 0px;
`

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #7a7474;
`

export const FormControl = styled.input`
    border-color: gray;
    width: 250px;
    height: 35px;
    border-radius: 15px;
    padding: 0 15px;
`

export const SubmitButton = styled.input`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: solid 0.5px black;
    margin: 0 auto;
`

export const Table = styled.table`
    border: solid 1.5px black;
    width: 100%;
`

export const Td = styled.td`
    text-align: center;
`