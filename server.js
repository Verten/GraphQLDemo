/**
 * Created by ebinhon on 8/4/2016.
 */

'use strict';
import express from 'express';
import schema from './data/schema';
import { graphql } from 'graphql';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';


let app = express();
let PORT = 8081;

//app.use(bodyParser.text({ type: 'application/graphql' }));

//app.post('/graphql', (req, res) => {
//    graphql(schema, req.body)
//        .then((result) => {
//            res.send(JSON.stringify(result, null, 2));
//        });
//});


app.use('/graphql', expressGraphQL(req => ({
    schema,
    graphiql: true,
    rootValue: { request: req },
})));

let server = app.listen(PORT, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('GraphQL listening at http://%s:%s', host, port);
});