import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Hystoric from '../pages/Hystoric'

interface FormInterface {
    name: string,
    initialDate: string | Date,
    finalDate: string | Date,
}

const App: React.FC = () => {

    const [activitys, setActivitys] = useState<FormInterface[]>([{name: 'Teste', initialDate: '2021-07-30T20:56', finalDate: '2021-07-30T20:56'}])

    return (
        <Switch>
            <Route path="/" render={()=> <Dashboard setActivitys={(dados: FormInterface[]) => setActivitys(dados)} activitys={activitys} />} />
            <Route path="/historico" render={()=> <Hystoric activitys={activitys} />} />
        </Switch>
        )
}

export default App
