import { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);
  const handleLogin = async () => {
    try {
      await signinWithGoogle()
    } catch (errore) {
      console.log(errore);
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen" style={{
      backgroundImage: `url("https://www.axis.com/sites/axis/files/styles/landscape_1920_x_768_jpg/public/2020-09/traffic_intersection_aerial_busy_gangnam_korea_2003_3840x1536.jpg?h=71e592e0&itok=tf8MZbBt")`
    }} >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold  " style={{ color: "white" }}>Hello there</h1>
          <p className="py-4 font-bold" style={{ color: "white" }}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button onClick={handleLogin} className="btn btn-neutral">Login With Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login