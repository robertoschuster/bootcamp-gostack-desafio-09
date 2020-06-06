import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import DeliveryList from '../pages/Deliveries/DeliveryList';
import DeliveryForm from '../pages/Deliveries/DeliveryForm';
import DeliverymenList from '../pages/Deliverymen/DeliverymenList';
import DeliverymenForm from '../pages/Deliverymen/DeliverymenForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={DeliveryList} isPrivate />
      <Route
        path="/deliveries/create"
        exact
        component={DeliveryForm}
        isPrivate
      />
      <Route path="/deliverymen" exact component={DeliverymenList} isPrivate />
      <Route
        path="/deliverymen/create"
        exact
        component={DeliverymenForm}
        isPrivate
      />
    </Switch>
  );
}
