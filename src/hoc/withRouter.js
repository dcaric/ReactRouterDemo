import { useLocation } from 'react-router-dom';

// how to use today's router with old Classes

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        let location = useLocation();        

        return(
            <Component
                location={location}
                {...props}
            />
        )
    }
    return Wrapper;
}