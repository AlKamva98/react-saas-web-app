import React from 'react';
import {Jumbotron} from '../../components/index/jumbotron.jsx';
import { Featurerette } from '../../components/index/featurerette.jsx';
import { Customer } from '../../components/index/customer.jsx';

export function Home() {
  return (
    <div className="Home align-items-center">
      <Jumbotron/>
      <Featurerette/>
      <Customer/>
      </div>
  );
}

