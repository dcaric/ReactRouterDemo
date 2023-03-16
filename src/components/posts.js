import React,{ Component} from 'react';
import { withRouter } from '../hoc/withRouter';

class Posts extends Component {

    render(){
        console.log(this.props)
        return (
            <>
                Posts
            </>
        )
    }
    
}

export default withRouter(Posts); // wrap Post class with withRouter in order to be able to use hooks