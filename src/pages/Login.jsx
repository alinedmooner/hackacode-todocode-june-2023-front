import Logo from '/logo.svg'

const Login = () => {
  return (
    <>
      <div className="form-container">
        <img className="logo" src={Logo} alt="company logo" style={{ width: 144, opacity: 0.3 }} />
        <h1 className='main-title' style={{ fontSize: '3rem' }}>Infinity Dream Park</h1>
        <h2 className="main-text" style={{ fontWeight: 300 }}>Welcome back</h2>
        <form className='main-container' action="" method=''>
          <label htmlFor="" style={{ color: 'white', opacity: 0.5, padding: '0.5rem' }}>Username</label>
          <input type="text" placeholder='johndoe' style={{ 'width': '21rem' }}/>
          <label htmlFor="" style={{ color: 'white', opacity: 0.5, padding: '0.5rem' }}>Password</label>
          <input type="password" placeholder='********' style={{ 'width': '21rem' }}/>
          <button className='' type='submit' style={{ 'width': '21.3rem' }}>Sign In</button>
        </form>
        <a className='forgot-password' href="" style={{ 'paddingBottom': '2rem', 'fontStyle':'italic' }}>Forgot password?</a>
      </div>
    </>
  )
}

export default Login