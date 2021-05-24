import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ConfigRoutes from '../../config/routes';

function PrivateRoutes(props) {
    const role = props.role || 'guest';

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoute = ConfigRoutes[role].redirectRoute;

    return (
       
       <Switch>
           {allowedRoutes.map(route => 
           <Route 
                path={route.url}
                key={route.url}
                exact            
           >
               <route.component setRole={props.setRole} />
           </Route>)}
           <Redirect to={redirectRoute}/>
       </Switch>
       
    )
}

export default PrivateRoutes
