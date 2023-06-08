function Home() {
  return (
    <>
      <div className="main-container">
        <p className="main-text">Welcome to Dashboard of</p>
        <h1 className="main-title">Infinity Dream Park</h1>
        <p className="secondary-text">Login depending on your rank</p>
        <div className="main-button-container">
          <a className="main-button" href="">Login as admin</a>
          <a className="main-button" href="">Login as employee</a>
        </div>
      </div>
    </>
  )
}

export default Home