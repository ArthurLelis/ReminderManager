import { useRef, useState } from 'react';
import PropTypes, { shape } from 'prop-types';

import { ContainerAccordion } from './styles';

import AccordionItem from './AccordionItem';

import orderDate from '../../utils/orderDate';

export default function Accordion({ reminders, onDeleteReminder }) {
  const ref = useRef();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleItemClick = (idAccordion) => {
    setActiveAccordion((prevAccordion) => (prevAccordion === idAccordion ? null : idAccordion));
  };

  const newReminders = orderDate(reminders);

  return (
    <ContainerAccordion>
      {newReminders.map((day) => (
        <AccordionItem
          ref={ref}
          day={day}
          key={day.id}
          isOpen={activeAccordion === day.id}
          onClick={() => handleItemClick(day.id)}
          onDeleteReminder={onDeleteReminder}
        />
      ))}
    </ContainerAccordion>
  );
}

Accordion.propTypes = {
  reminders: PropTypes.arrayOf(shape()),
  onDeleteReminder: PropTypes.func.isRequired,
};
