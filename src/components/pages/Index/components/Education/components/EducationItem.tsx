import React from "react";
import { DateDisplay } from "../../../../../DateDisplay";
export interface EducationItemProp {
  item: {
    startDate: string | null;
    endDate: string | null;
    institution: string | null;
    location: string | null;
    points: readonly (string | null)[] | null;
  };
}
export const EducationItem: React.FC<EducationItemProp> = ({
  item: { startDate, institution, endDate, location, points },
}) => {
  return (
    <>
      <h4>{institution}</h4>
      <DateDisplay date={startDate} /> - <DateDisplay date={endDate} />
      <p>{location}</p>
      {points?.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </>
  );
};
