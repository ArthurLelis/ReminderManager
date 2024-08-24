import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error = null }) {
  return (
    <Container>
      <div className="form-item">
        {children}
      </div>

      {error && <small data-testid="message-validator">{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};
