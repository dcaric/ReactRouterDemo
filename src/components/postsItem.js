import { useParams, useLocation } from 'react-router-dom'

const PostItem = () => {
    let params = useParams(); // this hook reads params from  (posts/:id) example: posts/:23
    let location = useLocation(); // reads location, path

    console.log("params:", params) // id =23
    console.log("location:", location) // location = /posts/:23

    return (
        <>
            Post ID XXX
        </>
    )
}

export default PostItem;


/*

http://localhost:3003/posts/:23?find=34#split=12

1) useParams
id
: 
":23"



2) useLocation
{pathname: '/posts/:23', search: '?find=34', hash: '#split=12', state: null, key: 'default'}
hash
: 
"#split=12"
key
: 
"default"
pathname
: 
"/posts/:23"
search
: 
"?find=34"




*/