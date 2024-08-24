import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
  ContainerAccordionItem,
  InfoAccordion,
  ContainerAction,
  Arrow,
  ContainerBody,
  ContainerReminder,
  ContentReminder,
  Reminder,
  ButtonDeleteReminder,
  Separator,
} from './styles';

import arrow from '../../../assets/images/icons/arrow.svg';
import trash from '../../../assets/images/icons/trash.svg';

const AccordionItem = forwardRef(({
  day,
  isOpen = false,
  onClick,
  onDeleteReminder,
}, ref) => (
  <ContainerAccordionItem>
    <InfoAccordion data-testid="info-accordion" $isOpen={isOpen} onClick={onClick}>
      <ContainerAction>
        <span> {day.date} </span>

        <small> {`(${day.reminders.length})`} </small>
      </ContainerAction>

      <Arrow $isOpen={isOpen} src={arrow} alt="Arrow" />
    </InfoAccordion>

    <ContainerBody ref={ref} $isOpen={isOpen}>
      {day.reminders.map((reminder, index) => (
        <ContainerReminder key={reminder.id}>
          <ContentReminder>
            <Reminder>
              {reminder.name}
            </Reminder>

            <ButtonDeleteReminder
              type="button"
              data-testid="button-delete"
              onClick={() => onDeleteReminder(day.id, reminder)}
            >
              <img src={trash} alt="Delete Reminder" />
            </ButtonDeleteReminder>
          </ContentReminder>

          {index + 1 < day.reminders.length && <Separator />}
        </ContainerReminder>
      ))}
    </ContainerBody>
  </ContainerAccordionItem>
));

AccordionItem.propTypes = {
  day: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onDeleteReminder: PropTypes.func.isRequired,
};

export default AccordionItem;
