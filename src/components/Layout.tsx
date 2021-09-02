import { Route, Switch } from 'react-router';
import HomePage from '../pages/homePage';
import ProfilePage from '../pages/profilePage';
import Header from './Header';

const Layout = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/profile" component={ProfilePage}/>
            </Switch>
        </div>
    )
};

export default Layout;