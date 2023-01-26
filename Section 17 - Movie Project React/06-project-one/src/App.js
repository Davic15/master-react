import { Create } from "./Components/Create";
import { List } from "./Components/List";
import { Search } from "./Components/Search";
import { useState } from "react";

function App() {
  const [listState, setListState] = useState([]);

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
      <section id="content" className="content">
        <List listState={listState} setListState={setListState} />
      </section>

      {/* Aside */}
      <aside className="aside">
        <Search listState={listState} setListState={setListState} />
        <Create setListState={setListState} />
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
