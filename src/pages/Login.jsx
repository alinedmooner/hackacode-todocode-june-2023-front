import Logo from '../../public/logo.svg'

const Login = () => {
  return (
    <>
      <div className="main-container">
        <img className="logo" src={Logo} alt="company logo" />
        <h1 className="main-text">Infinity Dream Park</h1>
        <h2 className="main-title" style={{'margin-top': '0', 'font-size':'3rem'}}>Login</h2>
        <form className='main-container' action="" method='get' style={{'padding-top': '0'}}>
          <div>
            <input type="text" placeholder='John' />
            <input type="text" placeholder='Doe'/>
          </div>
          <div>
            <input type="text" placeholder='johndoe@infinitydream.com' style={{'width':'22.3rem'}}/>
          </div>
          <div>
            <input type="password" style={{'width':'22.3rem'}}/>
          </div>
          <button className='main-button' style={{'margin': '0', 'width':'22.9rem', 'margin-top':'0.3rem', 'height':'2.5rem'}}>Login</button>
        </form>
      <a className='forgot-password' href="">Forgot password?</a>
      </div>
    </>
  )
}

export default Login