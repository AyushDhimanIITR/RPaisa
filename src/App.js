import "./App.css";
import Name from "./Components/Name/Name";
import Options from "./Components/options/options";
import Card from "./Components/Card/Card";
import RecentActivity from "./Components/RecentActivity/RecentActivity";
import Activity from "./Components/Activity/Activity";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <div className="overall">
      <div className="userName">
        <Name />
      </div>
      <Stack spacing={4} direction="row">
        <div className="TokenCard">
          <Card />
        </div>
        <div className="Services">
          <Options />
        </div>
      </Stack>
      <div className="YourActivity">
        <RecentActivity />
      </div>
      <div className="activity">
        <Activity />
      </div>
    </div>
  );
}

export default App;
