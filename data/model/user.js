/**
 * Created by ebinhon on 8/4/2016.
 */

'use strict';
import {
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

import UserType from '../type/UserType';

const id = '100001';
const name = 'ebinhon';
const email = 'bin.hong@ericsson.com';
const phone = '13560079731';

const user = {
    type: UserType,
    args: {
        id: { type: StringType }
    },
    resolve: function(_,args) {
        //we can call another api for getting data
        console.log(args.id);
        if(args.id != '100001'){
            return null;
        }
        return {id: id, name: name, email: email, phone: phone};
    }
};

export default user;