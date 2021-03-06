import { List } from "./Components/List";
import { Search } from "./Components/Search";
import { Create } from "./Components/Create"
import { useState } from "react";

function App() {

  const [ listState, setListState ] = useState([])

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

      {/* Main Content */}
      <section className="content">
        {/* Movie list goes here */}
        <List listState={listState} setListState={setListState} />
      </section>

      {/* Aside section */}
      <aside className="aside">
        <Search listState={listState} setListState={setListState} />
        <Create setListState={setListState}/>
      </aside>

      {/* footer */}
      <footer className="footer">
        &copy; Master in JavaScript ES12 -{" "}
        <a href="https://davic15.github.io/">Franklin David Macias Avellan</a>
      </footer>
    </div>
  );
}

export default App;
