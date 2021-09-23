import { connect } from 'react-redux';
import Home from './home';
import { fetchSudokus } from '../../actions/sudoku_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sudokus: state.entities.sudokus
});

const mapDispatchToProps = dispatch => ({
  fetchSudokus: () => dispatch(fetchSudokus())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);