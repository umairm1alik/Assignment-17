import {createStore} from 'redux';
import RootReducer from '../store/Reducers/RootReducer';

const Store=createStore( RootReducer );

export default Store;
