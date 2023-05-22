export const data = [
  // Section-1
  {
    id: 10,
    name: "Student Details",
    questions: [
      {
        id: 1,
        name: "First Name",
        key: "firstName",
        type: "text",
        placeholder: "Enter your first name",
        value: "",
      },
      {
        id: 2,
        name: "Last Name",
        type: "text",
        key: "lastName",
        placeholder: "Enter your last name",
        value: "",
      },
      {
        id: 3,
        name: "Date of Birth",
        key: "dob",
        type: "date",
        placeholder: "Enter your date of birth",
        value: "",
      },
      {
        id: 4,
        name: "School Name",
        key: "schoolName",
        type: "text",
        placeholder: "Enter your school name",
        value: "",
      },
      {
        id: 5,
        name: "School Year",
        key: "schoolYear",
        type: "number",
        placeholder: "Enter your year",
        value: "",
      },
    ],
  },
  {
    id: 30,
    name: "Address Details",
    questions: [
      {
        id: 1,
        name: "Address Street",
        key: "addressStreet",
        type: "textarea",
        placeholder: "Enter your address",
        value: "",
      },
      {
        id: 2,
        name: "Suburb",
        key: "suburb",
        type: "text",
        placeholder: "Enter your Suburb",
        value: "",
      },
      {
        id: 3,
        name: "Postcode",
        key: "postCode",
        type: "number",
        placeholder: "Enter your postcode",
        value: "",
      },
      {
        id: 4,
        name: "Parent's Email",
        key: "parentEmail",
        type: "email",
        placeholder: "Enter your email",
        value: "",
      },
    ],
  },
  {
    id: 20,
    name: "Parents Details",
    questions: [
      {
        id: 1,
        name: "Name",
        key: "parentName",
        type: "text",
        placeholder: "Enter your first name",
        value: "",
      },
      {
        id: 2,
        name: "Relationship",
        key: "relationship",
        type: "text",
        placeholder: "Who are you to the student?",
        value: "",
      },
      {
        id: 3,
        name: "Contact Number",
        key: "contactNumber",
        type: "number",
        placeholder: "Enter your contact number",
        value: "",
      },
    ],
  },

  {
    id: 40,
    name: "",
    questions: [
      {
        id: 1,
      },
    ],
  },

  {
    id: 50,
    name: "Terms and Conditions",
    questions: [
      {
        id: 1,
        name: (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl">
                {" "}
                Conditions of Tuition:{" "}
              </h1>
              <ol type="1" className="list-decimal px-4">
                <li className="py-1">
                  Tuition is provided on a term basis; students are enrolled for
                  the term and fees are payable in advance for the term which
                  they are enrolled.
                </li>
                <li className="py-1">
                  Tuition is provided on a term basis; students are enrolled for
                  the term and fees are payable in advance for the term which
                  they are enrolled.
                </li>
                <li className="py-1">
                  Your Tuition time remains same from term to term unless
                  otherwise notified.
                </li>
                <li className="py-1">
                  Once enrolled Four weeks’ notice must be given if you wish to
                  drop out of Tuition and then the balance of the term will be
                  refunded.
                </li>
                <li className="py-1">
                  Enrolments are taken throughout the terms.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-xl">
                If you are unable to attend a lesson:
              </h1>
              <p>
                Please let us know a day before your Tuition class, if you going
                to miss and we can organize the following:
              </p>
              <ol type="1" className="list-decimal px-4">
                <li className="py-1">
                  An alternative class time can be arranged if there is space on
                  another day.
                </li>
                <li className="py-1">
                  Should there be another class during the week at a similar
                  stage of the course, you may attend this class if numbers
                  permit.
                </li>
              </ol>
              <div>
                <p className="flex gap-2">
                  <span className="font-bold text-red-500">*</span>
                  <span>
                    No more than 2 occasions per term and cannot be carried
                    forward
                  </span>
                </p>
                <p className="flex gap-2">
                  <span className="font-bold text-red-500 ">*</span>
                  <span>
                    It is parent/student's responsibility to follow up and
                    organize a makeup tuition class with the teacher.
                  </span>
                </p>
              </div>
              <p>
                In the event that no suitable alternative time can be scheduled,
                then our no refund or no credits policy will apply for not
                taking Tuition classes during the term.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-xl">Direct Debit Customers</h1>
              <p>
                New Direct debit form must be filled in at the start of the
                term. All term payments must be completed within 10 consecutive
                weeks from the commencement of the term or 5 fortnightly
                payments from the commencement of the term.
              </p>
              <p>
                For students who join mid-term, full payment for the remaining
                of the term is to be made upon the enrolment.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-xl">
                Payment of Account/Securing your place for the next Term
              </h1>
              <p>
                Invoices for the next term will be printed and handed to all
                students or email to the parents on week 7 of our term (3 weeks
                before the school holidays).
              </p>
            </div>
          </div>
        ),
        type: "checkbox",
      },
    ],
  },
];
