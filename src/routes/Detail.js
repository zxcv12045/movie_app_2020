import React from 'react';
import './Detail.css';

class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }
    }
    
    render(){
        const {location} = this.props;
        if(location.state){
        return (         
            <div>
                <img className="poster-img" src={location.state.poster} alt={location.state.title}></img><br />
                <h1>{location.state.title}</h1>
                {location.state.year}, {location.state.genres}<br />
                <h1>rating: {location.state.rating}</h1>
                {location.state.summary}
            </div>
        );
        } else{
            return null;
        }
    }   
}

export default Detail;