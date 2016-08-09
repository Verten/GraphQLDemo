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

import UserType from './UserType';

const OrganizeType = new ObjectType({
    name: 'Organize',
    fields: {
        id: { type: new NonNull(ID) },
        name: {type: StringType},
        email: { type: StringType },
        manager: {type: UserType}
    },
});

export default OrganizeType;