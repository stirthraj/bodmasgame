import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
            padding: "10px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="../">Eduwheel India</Link>
          </li>
          <li>
            <Link to="/matrix">Matrix</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
