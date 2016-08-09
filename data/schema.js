/**
 * Created by ebinhon on 8/4/2016.
 */

'use strict';
import {
    GraphQLObjectType as ObjectType,
    GraphQLSchema as Schema,
    GraphQLInt
} from 'graphql';

import user from './model/user';
import organize from './model/organize';

let schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: {
            user,
            organize
        }
    })
});

export default schema;