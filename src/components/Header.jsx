export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Muhammad Gulfam</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}