import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import TaskTitleField from "./TaskTitleField";
import TaskDescriptionField from "./TaskDescriptionField";
import TaskDateField from "./TaskDateField";
import TaskSelectField from "./TaskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Alert severity="success" sx={{ width: "100%", marginBottom: "16px" }}>
        <AlertTitle>Success</AlertTitle>
        The task have been created successfully
      </Alert>
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <TaskTitleField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
        <Stack direction="row" sx={{ width: "100%" }} spacing={2}>
          <TaskSelectField
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            label="Priority"
            name="priority"
            items={[
              { value: Priority.low, label: Priority.low },
              { value: Priority.high, label: Priority.high },
              { value: Priority.normal, label: Priority.normal },
            ]}
          />
        </Stack>
        <LinearProgress />
        <Button variant="contained" size="large" fullWidth>
          Create a Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
