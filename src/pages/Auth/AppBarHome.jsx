import { useState, useRef, useEffect } from "react";
import { AppBar, Toolbar, Box, Button, Collapse, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";


export default function AppBarHome() {
  const [expanded, setExpanded] = useState(null);
  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });
  const menuRefs = useRef({});
  const navbarRef = useRef(null);

  const handleToggle = (menu) => {
    setExpanded(expanded === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (expanded && menuRefs.current[expanded]) {
      const rect = menuRefs.current[expanded].getBoundingClientRect();
      setUnderlinePos({ left: rect.left, width: rect.width });
    } else {
      setUnderlinePos({ left: 0, width: 0 });
    }
  }, [expanded]);

  const menuItems = ["Features", "Solutions", "Plans", "Resources"];

  const menuContent = {
    Features: (
      <Box>
        <Typography variant="h6">Powerful Features for Your Team</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box>
            <Typography fontWeight="bold">\ud83d\udce9 Inbox</Typography>
            <Typography variant="body2">Capture details from emails, Slack, etc.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">\ud83d\udcc5 Planner</Typography>
            <Typography variant="body2">Sync your calendar and boost productivity.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">⚙ Automation</Typography>
            <Typography variant="body2">Automate tasks and workflows.</Typography>
          </Box>
        </Box>
      </Box>
    ),
    Solutions: (
      <Box>
        <Typography variant="h6">Solutions for Every Business</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box>
            <Typography fontWeight="bold">\ud83c\udfe2 Enterprise</Typography>
            <Typography variant="body2">Scalable solutions for big teams.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">\ud83d\udcca Analytics</Typography>
            <Typography variant="body2">Track progress with insightful data.</Typography>
          </Box>
        </Box>
      </Box>
    ),
    Plans: (
      <Box>
        <Typography variant="h6">Choose the Right Plan</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box>
            <Typography fontWeight="bold">💎 Premium</Typography>
            <Typography variant="body2">Extra features for growing teams.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">🌟 Free</Typography>
            <Typography variant="body2">Basic tools for small projects.</Typography>
          </Box>
        </Box>
      </Box>
    ),
    Resources: (
      <Box>
        <Typography variant="h6">Learn and Grow</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Box>
            <Typography fontWeight="bold">📚 Tutorials</Typography>
            <Typography variant="body2">Step-by-step guides to get started.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">🤝 Community</Typography>
            <Typography variant="body2">Join discussions and share insights.</Typography>
          </Box>
        </Box>
      </Box>
    ),
  };
  const navigate = useNavigate();

  return (
    <AppBar ref={navbarRef} position="fixed" sx={{ background: "white", color: "black", boxShadow: expanded ? 3 : 1,"&:hover": {
      boxShadow: "0px 4px 10px rgba(50, 30, 30, 0.15)"
    }, }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="https://cdn.logoeps.net/wp-content/uploads/2017/03/trello-logo.png"
            alt="Trello Logo"
            style={{ height: 30 }}
          />
          {menuItems.map((menu) => (
            <Button
              key={menu}
              ref={(el) => (menuRefs.current[menu] = el)}
              onClick={() => handleToggle(menu)}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: "none",
                position: "relative",
                color: expanded === menu ? "#0052cc" : "black",
                px: "14px",
                py: 2.5,
                fontSize: "16px",
              }}
            >
              {menu}
            </Button>
          ))}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              height: expanded ? "3px" : "0px",
              backgroundColor: "#0052cc",
              transition: "left 0.3s ease-in-out, width 0.3s ease-in-out, height 0.2s ease-in-out",
              borderRadius: "10px",
              left: `${underlinePos.left}px`,
              width: `${underlinePos.width}px`,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button onClick={() => navigate("/Board")} sx={{ textTransform: "none", fontWeight: "bold", color: "black", fontSize: "20px" }}>Log in</Button>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              background: "#0052cc",
              color: "white",
              px: 3,
              py: 2,
              "&:hover": { background: "#0041a8" },
            }}
          >
            Get Trello for free
          </Button>
        </Box>
      </Toolbar>
      {menuItems.map((menu) => (
        <Collapse key={menu} in={expanded === menu} timeout="auto" unmountOnExit>
          <Box sx={{ p: 2, background: "#f8f9fa", borderTop: "2px solid #e0e0e0" }}>{menuContent[menu]}</Box>
        </Collapse>
      ))}
    </AppBar>
  );
}
