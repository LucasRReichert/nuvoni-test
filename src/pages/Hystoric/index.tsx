import React from 'react'
import { useHistory } from "react-router-dom";

import Input from '../../components/Input'
import Button from '../../components/Button'

import {FormInterface} from '../../interfaces'

import { Container, Content } from './styles'

interface HystoricInterface {
    activitys: FormInterface[],
    setActivitys:(dados: FormInterface[]) => void,
}

const Hystoric: React.FC<HystoricInterface> = (activitys) => {
    let history = useHistory();
    const handleGoBack = () => {
        history.goBack()
    }

    const teste = activitys

    return (
        teste.activitys.map(e => {
            <Content>
            <Container>
                <h3>Nome da Atividade</h3>
                <Input
                    required
                    type="text"
                    placeholder="Nome da Atividade"
                    id="activityName"
                    value={e.name}
                />
            </Container>
            <Container>
            <h3>Horas gastas por dia</h3>
                <Input
                    required
                    type="text"
                    placeholder="Informe"
                    id="initialDateHour"
                    value={Number(e.finalDate) - Number(e.initialDate)}
                />
            </Container>
            <Container>
            </Container>
                <Button onClick={handleGoBack}> Voltar </Button>
            </Content>
        })
      
    )
}

export default Hystoric;
