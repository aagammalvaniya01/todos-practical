"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const taskSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().required("Status is required"),
  dueDate: Yup.date().required("Due date is required"),
  userId: Yup.string().required("User is required"),
});

const AddTaskWrapper = ({}) => {
  const handleTaskSubmit = (values: any) => {
    console.log("New Task:", values);
    toast.success("Task Created Successfully!");
  };

  return (
    <Box
      sx={{
        background: "#F7F8F8",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: "calc(100vh - 65px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          p={6}
          minWidth={{ base: "100%", md: 650 }}
        >
          <Typography
            mb={1}
            fontWeight={700}
            variant="h1"
            color="#00030A"
            textAlign={"center"}
            fontSize={32}
          >
            Create new Task
          </Typography>
          <Formik
            initialValues={{
              title: "",
              description: "",
              status: "",
              dueDate: "",
              userId: "",
            }}
            validationSchema={taskSchema}
            onSubmit={handleTaskSubmit}
          >
            {({}) => (
              <Form>
                <Stack spacing={2}>
                  <Field
                    name="title"
                    as={TextField}
                    label="Title"
                    fullWidth
                    variant="outlined"
                  />
                  <ErrorMessage name="title" component="div" />

                  <Field
                    name="description"
                    as={TextField}
                    label="Description"
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                  <ErrorMessage name="description" component="div" />

                  <FormControl fullWidth>
                    <InputLabel id="status-label">Status</InputLabel>
                    <Field
                      name="status"
                      as={Select}
                      labelId="status-label"
                      displayEmpty
                    >
                      <MenuItem value="todo">To Do</MenuItem>
                      <MenuItem value="in-progress">In Progress</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                    </Field>
                  </FormControl>
                  <ErrorMessage name="status" component="div" />

                  <Field
                    name="dueDate"
                    as={TextField}
                    type="date"
                    label="Due Date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                  <ErrorMessage name="dueDate" component="div" />

                  <FormControl fullWidth>
                    <InputLabel>User</InputLabel>
                    <Field name="userId" as={Select}>
                      {/* {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>{user.email}</MenuItem>
                ))} */}
                    </Field>
                  </FormControl>
                  <ErrorMessage name="userId" component="div" />

                  <Button type="submit" fullWidth variant="contained">
                    Create Task
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default AddTaskWrapper;
