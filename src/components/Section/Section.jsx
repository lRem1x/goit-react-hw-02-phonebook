import PropTypes from 'prop-types';
import { SectionWrap } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <h2>{title}</h2>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;