'use client';

import { createContext, useReducer, useContext } from 'react';

import { TaskActions } from "@/app.config";

const TaskContext = createContext([] as any[]);
const TaskDispatchContext = createContext((...args: any[]) => {
  alert('Using dummy dispatch...'); // SCAFF
  console.log('Using dummy dispatch...'); // SCAFF
});

function taskReducer(prevTasks: any[], action: TaskAction) {
  switch (action.type) {
    case TaskActions.CREATE:
      // console.log(action); // SCAFF
      // alert(action.type); // SCAFF
      return [...prevTasks, action.payload];
    case TaskActions.UPDATE:
      return prevTasks.map((t) => {
        const id = t.id || t._id;
        if (id === action.id) return action.payload;
        return t;
      });
    case TaskActions.DELETE:
      return prevTasks.filter((t) => {
        const id = t.id || t._id;
        return id !== action.id;
      });
    default:
      throw new Error(`${action.type}: no such action type`);
  }
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

type Props = {
  currTasks: any[],
  children: React.ReactNode,
};

export function TasksProvider({ currTasks, children }: Props) {
  const [tasks, dispatch] = useReducer(taskReducer, currTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
