import React from "react";
import { format } from "date-fns";
import { DateDisplay } from "./DateDisplay";
export interface WorkItemProp {
  item: {
    startDate: string | null;
    endDate: string | null;
    company: string | null;
    title: string | null;
    location: string | null;
    points: readonly (string | null)[] | null;
  };
}
export const WorkItem: React.FC<WorkItemProp> = ({
  item: { startDate, company, endDate, location, points, title },
}) => {
  return (
    <>
      <h4>{company}</h4>
      <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
      <p>{title}</p>
      <p>{location}</p>
      {points?.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </>
  );
};
