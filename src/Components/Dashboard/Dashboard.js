import './dashboard.css';

import Stack from "@mui/material/Stack";
import Name from '../Name/Name';
import Card from '../Card/Card';
import Options from '../Options/Options';
import RecentActivity from '../RecentActivity/RecentActivity';
import Activity from '../Activity/Activity';

function Dashboard () {
    return (
        <div>
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
        </div>
    );
}

export default Dashboard;