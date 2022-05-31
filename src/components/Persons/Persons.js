import React, { useState, useRef } from 'react';

import {
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    PanelTitle,
    SubmitButton,
    Table,
    Td,
    WhitePanel
} from './Persons.styles'

const Persons = () => {
    const [personList, setPersonList] = useState([])
    const nameRef = useRef();
    const professionRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { current: { value: name } } = nameRef;
        const { current: { value: profession } } = professionRef;

        if (name.replace(' ', '') === '' || profession.replace(' ', '') === '') {
            alert('Should not be empty');
            return;
        }

        setPersonList([...personList, { name, profession }]);

        nameRef.current.value = '';
        professionRef.current.value = '';
    }

    return (
        <Container>
            <WhitePanel>
                <PanelTitle>Add a new person</PanelTitle>
                <div style={{ display: 'flex' }}>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel>Name</FormLabel>
                            <FormControl ref={nameRef} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Profession</FormLabel>
                            <FormControl ref={professionRef} />
                        </FormGroup>
                        <div style={{ display: 'flex' }}>
                            <SubmitButton type={"submit"} />
                        </div>
                    </Form>
                </div>
            </WhitePanel>
            <WhitePanel style={{ marginTop: '15px' }}>
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Profession</th>
                    </tr>
                    {personList.map(({ name, profession }) =>
                        <tr>
                            <Td>{name}</Td>
                            <Td>{profession}</Td>
                        </tr>
                    )}
                </Table>
            </WhitePanel>
        </Container>
    )
}

export default Persons;