import React from "react";

export interface IDashboard {
  component: React.ReactNode;
  path: string;
  drawer?: boolean;
}
