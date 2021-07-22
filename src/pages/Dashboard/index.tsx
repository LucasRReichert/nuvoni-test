import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import Input from '../../components/Input'
import Button from '../../components/Button'

import {FormInterface} from '../../interfaces'

import { Container, Content } from './styles'

interface DashboardInterface {
    activitys: FormInterface[],
    setActivitys:(dados: FormInterface[]) => void,
}

const Dashboard: React.FC<DashboardInterface>
 = (activitys, setActivitys) => { 

    const [name, setName] = useState<string>('')
    const [initialDate, setInitialDate] = useState<string>('')
    const [finalDate, setFinalDate] = useState<string>('')

    const history = useHistory()

    const addActivity = () => {
        setActivitys([
            {
                name,
                initialDate,
                finalDate
            }
        ])
        localStorage.setItem('@teste-nuvoni:info', JSON.stringify(activitys))
        alert('Adicionado com Sucesso')
    }

    const visualizeActivitys = () => {
        history.push("/historico")
    }

    useEffect(() => {
        console.log(activitys)

        return () => {
        }
    }, [activitys])

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
        <h3>Data Início Horário Início</h3>
            <Input
                required
                type="datetime-local"
                placeholder="Data Início"
                id="initialDateHour"
                value={initialDate}
                onChange={(e) => setInitialDate(e.target.value)}
            />
        </Container>
        <Container>
        <h3>Data Término Horário Término</h3>
             <Input
                required
                type="datetime-local"
                placeholder="Data Término"
                id="finalDateHour"
                value={finalDate}
                onChange={(e) => setFinalDate(e.target.value)}
            />
        </Container>
            <Button onClick={addActivity}>Adicionar</Button>
            <Button onClick={visualizeActivitys}>Visualizar Atividades</Button>
        </Content>
    )
}

export default Dashboard;
