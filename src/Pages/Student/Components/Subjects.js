import React from "react";
import SubjectCard from "../../../Components/SubjectCard";

export default function Subjects() {
  return (
    <div className="flex flex-wrap gap-10">
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
      <SubjectCard />
    </div>
  );
}