import '../styles/Header.css';

function Header({name}) {
  return (
    <header>
      <nav>
        <div>
          <b>{name}</b>
        </div>
        <ul>
          <li>About Me</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Extra</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
