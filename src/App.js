import './App.css';
import {FeatureToggle} from "./components/FeatureToggle";

function App() {
    const binaryRand = () => Math.floor(Math.random() * 2);
  return (
    <div className="App">
      <FeatureToggle isEnabled={binaryRand()} featureName="FeatureName1" />
      <FeatureToggle isEnabled={binaryRand()} featureName="FeatureName2" />
      <FeatureToggle isEnabled={binaryRand()} featureName="FeatureName3" />
      <FeatureToggle isEnabled={binaryRand()} featureName="FeatureName4" />
    </div>
  );
}

export default App;
