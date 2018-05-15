import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';


/* This Component handle his own data.
    http://www.omdbapi.com/ is a RESTful web service to obtain movie information.
*/

class CallApi extends Component {
    constructor(){
        super();
        this.state = {};
   
    }

    componentWillMount(){
        // Called the first time the componnet is loaded right before is added to the page.
        this.search();
    }

    updateSearch(){
        this.search(this.refs.query.value);
    }

    render() {
        var movies = _.map(this.state.movies, (movie, key) =>{
            return <li key={key}>{movie.Title}</li>;
        });
        return (
        <div className="CallApi">
            <h1>This is the first Component Created.</h1>
            <p> Basically is a query that search films in the OMDb API</p>
            <p>http://www.omdbapi.com/</p>

            <h1>Type a title of film:</h1>
            <input onChange={ (e) => { this.updateSearch(); }}
                ref="query" type="text" />
            <ul>{movies}</ul>
        </div>
        );
    }

    search(query = "star"){
        var url= `http://www.omdbapi.com?i=tt3896198&apikey=505355d9&s=${query}&y=&r=json&plot=short`;
        Request.get(url).then((response) => {
            this.setState({
                movies: response.body.Search,
                total: response.body.totalResults
            });
        });
        console.log(this.state);
    }
}

export default CallApi;
