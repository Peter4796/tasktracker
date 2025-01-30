export interface Task {
  id: number;
  taskName: string;
  taskDetails: string;
  taskStatus?: string;
  myStatus?: string;
}

export type TaskStatus = 'Pending' | 'In Progress' | 'Done'; 