/* eslint-disable react/jsx-one-expression-per-line */
import { Container } from './styles';

import emptyBox from '../../../assets/images/icons/empty-box.svg';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />

      <div>
        <p>
          Você ainda não tem nenhum lembrete cadastrado!
        </p>
      </div>
    </Container>
  );
}
