import UpgradePage from "./components/pages/upgradedPage/UpgradePage";
import { MyProvider } from "./Context";

const App = () => {
  return (
    <MyProvider>
      <UpgradePage />
    </MyProvider>
  );
};

export default App;