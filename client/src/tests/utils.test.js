import {getGroupNameById } from '../utils/ServiceUtils.js'
import assert from 'assert';
// const { getGroupNameById } = require('../utils/ServiceUtils');
import getGroupNameByIdArrayData from './testingData.js';

it('must return "МАНУАЛЬНАЯ И ФИЗИОТЕРАПИЯ"', () => {
    assert.equal(getGroupNameById(2, getGroupNameByIdArrayData), "МАНУАЛЬНАЯ И ФИЗИОТЕРАПИЯ")
})