import React from "react";
import { format } from "date-fns";
export const DateDisplay: React.FC<{ date: string | null }> = ({ date }) => {
  if (!date) {
    return <></>;
  }

  const dateObj = new Date(date);
  return <>{`${format(dateObj, "yyyy")}`}</>;
};
