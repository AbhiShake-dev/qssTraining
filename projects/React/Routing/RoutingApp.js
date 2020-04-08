import React from 'react';
import {
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

class DashboardPage extends React.Component {
    render() {
        return (
                <Switch>
                    <Route path="/first" render={() => {
                        return <FirstComponent myName="Swarn" />
                    }}/>
                    <Route path="/second" component={SecondComponent} />
                    <Route path="/third" component={ThirdComponent} />
                    <Redirect to={'/first'} from={'/'} />
                </Switch>
        )
    }
}

const FirstComponent = ({myName}) => (
    <h1>
        First Component {myName}
    </h1>
);

const SecondComponent = () => (
    <h1>
        Second Component
    </h1>
);

const ThirdComponent = () => (
    <h1>
        Third Component
    </h1>
);

export default DashboardPage;