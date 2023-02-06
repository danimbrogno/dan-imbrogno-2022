import { isSameYear } from "date-fns";
import React from "react";
import { DateDisplay } from "./DateDisplay";

export const DisplayDateRange = ({
  startDate,
  endDate,
}: {
  startDate?: string | null;
  endDate?: string | null;
}) => {
  if (!startDate || !endDate) {
    return null;
  } else if (isSameYear(new Date(startDate), new Date(endDate))) {
    return <DateDisplay date={startDate} />;
  } else {
    return (
      <>
        <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
      </>
    );
  }
};
