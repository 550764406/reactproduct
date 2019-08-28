import React from 'react';

class Detail extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <>
            {this.props.match.params.id}=====detail
            </>
        )
    }
}
export default Detail;