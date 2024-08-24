import PropTypes from 'prop-types';

import {
  CardContainer,
  TitleCard,
  Separator,
} from './styles';

export default function Card({ title, children }) {
  return (
    <CardContainer>
      <TitleCard> {title} </TitleCard>

      <Separator />

      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
