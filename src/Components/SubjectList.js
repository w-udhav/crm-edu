export default function SubjectList({ subs }) {
  const sub = {
    Maths: "blue",
    English: "yellow",
    Science: "green",
    Arts: "orange",
    Painting: "purple",
    Gymnastics: "pink",
  };
  // All subjects are predefined      !noted
  // Maths | English | Science | Arts | Painting | Gymnastics

  return (
    <div className="flex flex-wrap gap-2">
      {subs.map((subject, index) => {
        return (
          <div
            key={index}
            className="px-2 py-1 text-[13px] rounded-full border capitalize flex items-center gap-2"
          >
            <span
              style={{
                backgroundColor: sub[subject],
              }}
              className={`w-[5px] h-[5px] rounded-full `}
            ></span>
            <h1>{subject}</h1>
          </div>
        );
      })}
    </div>
  );
}
