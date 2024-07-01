'use client';

import { createContext, useReducer, useContext } from 'react';

import { DashboardActions } from "@/app.config";

const DashboardContext = createContext(true);
const DashboardDispatchContext = createContext((...args: any[]) => {
  alert('Using dummy dispatch...'); // SCAFF
  console.log('Using dummy dispatch...'); // SCAFF
});

function dashboardReducer(renderTrigger: boolean, action: DashboardAction) {
  switch (action.type) {
    case DashboardActions.TRIGGERED_RENDER:
      // Trigger a re-render of dashboard by updating state
      // New tasks data should be fetched for children
      // console.log(action); // SCAFF
      // alert(action.type); // SCAFF
      return !renderTrigger;
    default:
      throw new Error(`${action.type}: no such action type`);
  }
}

export function useDashboard() {
  return useContext(DashboardContext);
}

export function useDashboardDispatch() {
  return useContext(DashboardDispatchContext);
}

type Props = {
  children: React.ReactNode,
};

export function DashboardProvider({ children }: Props) {
  const [trigger, dispatch] = useReducer(dashboardReducer, true);

  return (
    <DashboardContext.Provider value={trigger}>
      <DashboardDispatchContext.Provider value={dispatch}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  );
}
