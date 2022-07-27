import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div id="content-wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
