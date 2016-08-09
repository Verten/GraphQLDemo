/**
 * Created by ebinhon on 8/4/2016.
 */

'use strict';

import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const UserType = new ObjectType({
    name: 'User',
    fields: {
        id: { type: new NonNull(ID) },
        name: {type: StringType},
        email: { type: StringType },
        phone: {type: StringType}
    },
});

export default UserType;