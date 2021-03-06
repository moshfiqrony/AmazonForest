import { connect } from 'react-redux';
import { fetchItems } from "../../actions/item_actions";
import { fetchReviews } from '../../actions/review_actions';
import MainBody from '../main_page/main_body';


const mapStateToProps = (state) => {
    let itemList 
    if (state.entities.items){
        itemList = Object.keys((state.entities.items)).map(id => state.entities.items[id])
    }
    
    let reviews;

    if (state.entities.reviews.data) {
        reviews = state.entities.reviews.data;
    }
	
    return {
        currentUser: state.session.user,
        items: itemList,
        reviews: reviews,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchItems: () => dispatch(fetchItems()),
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);