import "./RecentActivity.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function RecentActivity() {
  const buttons = [
    //   <Link to="/one">

    <Button key="one">Today</Button>,
    //   </Link>,
    //   <Link to="/two">
    <Button key="two">Yesterday</Button>,
    //   </Link>,
    //   <Link to="/three">
    <Button key="three">This Week</Button>,
    //   </Link>,
    //   <Link to="/four">
    <Button key="four">This month</Button>,
    //   </Link>,
  ];

  return (
    <div className="rec">
      <h4>Recent Activity</h4>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
}