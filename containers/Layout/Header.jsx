import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <nav className="container mx-auto xl:max-w-screen-xl flex justify-between py-4 px-4 mb-6">
        <h1 className="font-bold">TodoList App</h1>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="#">Sign in</Link>
          </li>
          <li>
            <Link href="#">Sign out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
