import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  deleteSuggestion,
  createSuggestion,
  getSuggestions,
} from './suggestion-actions';

const mapStateToProps = ({ suggestions }) => ({
  suggestions,
});

const mapDispatchToProps = dispatch => ({
  suggestionActions: bindActionCreators({
    deleteSuggestion,
    createSuggestion,
    getSuggestions,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
