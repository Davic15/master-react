
function App() {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>My Movies</h1>
      </header>

      {/* Navigation Bar */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Movies</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Main Section */}
      <section className="content">
        <article className="movies-item">
          <h3 className="title">Web Development</h3>
          <p className="description">My portfolio.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>
        <article className="movies-item">
          <h3 className="title">Web Development</h3>
          <p className="description">My portfolio.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>
        <article className="movies-item">
          <h3 className="title">Web Development</h3>
          <p className="description">My portfolio.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>
        <article className="movies-item">
          <h3 className="title">Web Development</h3>
          <p className="description">My portfolio.</p>
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>
      </section>

      {/* Aside */}
      <aside className="aside">
        <div className="sarch">
          <h3 className="title">Search</h3>
          <form>
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
        <div className="add">
          <h3 className="title">Add movie</h3>
          <form>
            <input type="text" aria-placeholder="Title" />
            <textarea placeholder="Description"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </aside>

      {/* Footer */}
      <footer className="footer">
        &copy; HTML, CSS and React -{" "}
        <a href="https://davic15.github.io/home">My portfolio</a>
      </footer>
    </div>
  );
}

export default App;
