// @flow

import React from 'react';
import Conference from './conference.component';
import Generic from './generic.component';
import { Day } from '../smoothie.type';
import './conference.css';

const ListConference = ({ day: { ten, fourteen, sixteen } }: { day: Day }) =>
  (<div className="conferences">
    <Generic horaire="9h30 > 10h30" message="Plénière d'ouverture et autres surprises " />
    <Conference timeBegin={10} timeEnd={12} conferences={ten} />
    <Generic horaire="12h > 14h" message="Déjeuner" />
    <Conference timeBegin={14} timeEnd={16} conferences={fourteen} />
    <Generic horaire="16h" message="Petite pause (Pensez à visiter les nombreuses activités pendant vos temps libres !)" />
    <Conference timeBegin={16} timeEnd={18} conferences={sixteen} />
  </div>);

export default ListConference;
