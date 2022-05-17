import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Playlist = (props) => {
  return (
    <Box sx={{ bgcolor: "background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(17,38,25,1) 0%, rgba(24,115,38,1) 100%);",
          display: "flex",
          justifyContent: "flex-start",
          aignItems: { xs: "flex-start", md: "flex-end", xl: "center" },
          gap: 3,
          boxSizing: "border-box",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        asd
      </Box>
    </Box>
  );
};

export default Playlist;
