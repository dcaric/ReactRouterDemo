import { useNavigate, useSearchParams, Navigate } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // to acceess everything from  the URL tags like profile for example
    console.log(searchParams.get('profile'))

    return (
        <>
            <div>Profile</div>
            {/* <Navigate replace to="/"/> */}
            {/* used to programmatically navigate  */}
            <button onClick={()=> navigate('/')}>
                Back home
            </button>
        </>
    )
}

export default Profile;