import React from "react";
import SubjectCard from "../../../Components/SubjectCard";

export default function Subjects({ isEdit, data}) {
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
