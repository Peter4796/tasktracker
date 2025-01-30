import { Task } from '@/types/task';

export const MOCK_TASKS: Task[] = [
  {
    id: 4,
    taskName: 'Task 1',
    taskDetails: 'Details of Task 1',
    taskStatus: 'Pending',
  },
  // ... rest of the mock tasks
];

export const MOCK_CUSTOM_TASKS: Task[] = [
  {
    id: 1,
    taskName: 'Task 1',
    taskDetails: 'Details of Task 1',
    myStatus: 'Pending',
  },
  // ... rest of the custom mock tasks
]; 