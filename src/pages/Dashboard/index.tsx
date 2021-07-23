import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import Input from '../../components/Input'
import Button from '../../components/Button'

import {FormInterface} from '../../interfaces'

import { Container, Content } from './styles'

interface DashboardInterface {
    activitys: FormInterface[],
    setActivitys:(dados: FormInterface[]) => void,
}

const Dashboard = ({setActivitys, activitys}: DashboardInterface): JSX.Element => {

    const [name, setName] = useState<string>('')
    const [initialDate, setInitialDate] = useState<string>('')
    const [finalDate, setFinalDate] = useState<string>('')
    const [initialHour, setInitialHour] = useState<string>('')
    const [finalHour, setFinalHour] = useState<string>('')

    const history = useHistory()

    const addActivity = () => {

        let getActivitys = activitys

        getActivitys.push({
            name,
            initialDate,
            finalDate,
            finalHour,
            initialHour
        })
        setActivitys(getActivitys)
      let newActivitys = JSON.stringify({activitys})
        localStorage.setItem('@teste-nuvoni:info', newActivitys)
        alert('Adicionado com Sucesso')
    }

    const visualizeActivitys = () => {
        history.push("/historico")
    }

    return (
        <Content>
        <Container>
            <h3>Nome da Atividade</h3>
            <Input
                required
                type="text"
                placeholder="Nome da Atividade"
                id="activityName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </Container>
        <Container>
        <h3>Data Início</h3>
            <Input
                required
                type="datetime"
                placeholder="Data Início"
                id="initialDate"
                value={initialDate}
                onChange={(e) => setInitialDate(e.target.value)}
            />
        </Container>
        <Container>
        <h3>Data Término</h3>
             <Input
                required
                type="datetime"
                placeholder="Data Término"
                id="finalDate"
                value={finalDate}
                onChange={(e) => setFinalDate(e.target.value)}
            />
        <h3>Horário Término</h3>
             <Input
                required
                type="time"
                placeholder="Horário Início"
                id="finalHour"
                value={initialHour}
                onChange={(e) => setInitialHour(e.target.value)}
            /><h3>Horário Término</h3>
            <Input
               required
               type="time"
               placeholder="Horário Término"
               id="finalHour"
               value={finalHour}
               onChange={(e) => setFinalHour(e.target.value)}
           />
        </Container>
            <Button onClick={addActivity}>Adicionar</Button>
            <Button onClick={visualizeActivitys}>Visualizar Atividades</Button>
        </Content>
    )
}

export default Dashboard;
