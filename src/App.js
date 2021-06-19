import './assets/css/main.css'
import './assets/css/custom.css'
import BaseLayout from "./layouts/BaseLayout";
import SamplePage from "./SamplePage";


function App() {
  return (
    <div className="App">
        <BaseLayout>
            <SamplePage/>
        </BaseLayout>
    </div>
  );
}

export default App;
