import { combineReducers } from 'redux';
import itemList from './itemList';
import navList from './navList';
import auth from './auth';

export default combineReducers({ itemList, navList, auth });
