import Logo from '/logo.svg'

function Home() {
  return (
    <>
      <div className="main-container">
        <img className="logo" src={Logo} alt="company logo" style={{ width: 144, opacity: 0.3 }}/>
        <p className="main-text">Welcome to</p>
        <h1 className="main-title">Infinity Dream Park</h1>
        <p className="secondary-text">An Amusement and Adventure Park</p>
        <div className="main-button-container">
          <a className="main-button" href="/login">Login</a>
        </div>
      </div>
    </>
  )
}

export default Home