"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  CardHeader,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DashBoardWrapper = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh", mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Dashboard</Typography>
            <Button variant="outlined" startIcon={<AddIcon />}>
              Add Task
            </Button>
          </Box>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    action={
                      <Box sx={{bgcolor: 'green', p: 1, borderRadius: '20px',}}>
                        Status
                      </Box>
                    }
                    title="Task Title"
                    subheader="Due date"
                  />
                  <CardContent>
                  
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                123
              </Grid>
              <Grid item xs={4}>
                123
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DashBoardWrapper;
