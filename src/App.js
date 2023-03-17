function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="headerLeft">
            <a href="">
              <img src="img/logo.svg" alt="" />
              <h2>MovieList</h2>
            </a>
          </div>
          <div className="headerRight">
            <ul>
              <li>
                <a href="">Все фильмы</a>
              </li>
              <li>
                <a href="">Буду смотреть</a>
              </li>
              <li>
                <a href="">Просмотрено</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="firstScreen">
          <div className="container">
            <div className="firstScreen__info">
              <h1>
                Добро пожаловать
                <br /> на MovieList
              </h1>
              <p>
                Lörem ipsum halar plade i hoskapet, såväl som fan rörar. Pände
                diktig. Radiotopi prer onar tidibel polilog. Nins dens inte
                onäsm i tesade terade. Vinire hapor epipatologi inte megamir.{" "}
              </p>
              <button className="firstScreen__btn">перейти к фильмам</button>
            </div>
            <div className="firstScreen__images">
              <div></div>
              <img
                src="./img/083_leonardo_di_caprio_the.jpg"
                alt="Леонардо ДиКаприо"
              />
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content__wrapper">
              <h3>Все фильмы</h3>
              <div className="films__wrapper">
                <div className="film">
                  <img
                    src="./img/fight_club_300x450.webp"
                    alt="Бойцовский клуб"
                  />
                  <h4 className="film__title">Бойцовский клуб (1999)</h4>
                  <div className="film__genres">триллер, драма</div>
                </div>

                <div className="film">
                  <img
                    src="./img/fight_club_300x450.webp"
                    alt="Бойцовский клуб"
                  />
                  <h4 className="film__title">Бойцовский клуб (1999)</h4>
                  <div className="film__genres">триллер, драма</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
