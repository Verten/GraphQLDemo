/**
 * Created by ebinhon on 8/4/2016.
 */

'use strict';
import OrganizeType from '../type/OrganizeType';

const id = '200000';
const name = 'cgc';
const email = 'cgc@ericsson.com';

const user_id = '200001';
const user_name = 'manager';
const user_email = 'manager@ericsson.com';
const user_phone = 'manager_phone';

const user = {
    type: OrganizeType,
    resolve: function() {
        //we can call another api for getting data
        return {
            id: id,
            name: name,
            email: email,
            manager: {
                id: user_id,
                name: user_name,
                email: user_email,
                phone: user_phone
            }
        };
    }
};

export default user;