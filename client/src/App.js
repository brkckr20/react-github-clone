import { extendTheme } from '@chakra-ui/react'
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })

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
