import React from "react";
import { Button } from "@mui/material";

function PaperTile(props) {
  return (
    <Paper
      sx={{
        mt: 3,
        mb: 3,
        p: 2,
        border: `1px solid #6750A4`,
        borderRadius: "8px",
      }}
      elevation={0}
    >
      <Grid container justifyContent="space-between">
        <Grid item sx={{ mt: 0.5 }}>
          <Typography variant="h6">{wishlist.name}</Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ borderRadius: 10 }}
            color="secondary"
            variant="outlined"
            startIcon={<Visibility />}
            onClick={() => history.push("/public-wishlist/" + wishlist._id)}
          >
            View
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaperTile;
