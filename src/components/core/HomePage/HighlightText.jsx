
import PropTypes from 'prop-types';

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-r from-[#2b1aed] to-yellow-400 text-transparent bg-clip-text font-bold">
        {" "} {text}
    </span> 
  );
};

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HighlightText