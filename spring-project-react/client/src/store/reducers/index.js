import { combineReducers } from 'redux';
import itemList from './itemList';
import navList from './navList';

export default combineReducers({ itemList, navList });
