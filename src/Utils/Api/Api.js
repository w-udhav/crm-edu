export const BASE_URL = "https://crm-backend-tiix.vercel.app";

// export const BASE_URL = "http://127.0.0.1:4000";

// ======================= GET =============================================================================
//? Get all students
export const getStudents = async (dataBody) => {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody || {}),
  };
  const response = await fetch(`${BASE_URL}/student/list`, options);
  console.log("Typical Response");
  const data = await response.json();
  return data;
};

//? Get student by id
export const getStudentById = async (id) => {
  const response = await fetch(`${BASE_URL}/student/single/?id=${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};

//? Get Misc Data
export const getMiscData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/student/misc`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

// ======================= POST =============================================================================
//? Create Student through Form
export const sendForm = async (data) => {
  // console.log(data);
  const formData = {
    firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob,
    gender: data.gender,
    schoolName: data.schoolName,
    schoolYear: data.schoolYear,
    addressDetail: {
      addressStreet: data.addressStreet,
      suburb: data.suburb,
      postCode: data.postCode,
      parentsEmail: data.parentsEmail,
    },
    parentDetail: [
      {
        name: data.parentName,
        relation: data.relation,
        phone: data.parentPhone,
      },
    ],
    healthDetail: {
      allergicFood: data.allergicFood,
      medications: data.medications,
      allergicMedication: data.allergicMedication,
      healthProblem: data.healthProblem,
    },
    tutoringDetail: {
      subjects: data.subjects,
      frequency: 2,
      days: data.days,
      paymentMethod: data.paymentMethod,
    },
    status: "Pending",
    approved: false,
  };

  try {
    const response = await fetch(`${BASE_URL}/student/save`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error.message;
  }
};

//? Send email
export const sendEmail = async (data) => {
  const mailData = {
    emails: data.to,
    subject: data.subject,
    body: data.body,
  };

  const response = await fetch(`${BASE_URL}/student/sendemails`, {
    method: "POST",
    body: JSON.stringify(mailData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const responseData = await response.json();
  return responseData;
};

//? Add Comment
export const addComment = async (id, text) => {
  try {
    const response = await fetch(`${BASE_URL}/student/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    throw error;
  }
};

// ======================= UPDATE =============================================================================
//? Update Student
// export const updateStudent = async (id, data) => {
//   const formData = {
//     firstName: data.firstName,
//     lastName: data.lastName,
//     dob: data.dob,
//     gender: data.gender,
//     schoolName: data.schoolName,
//     schoolYear: data.schoolYear,
//     email: data.parentsEmail,
//     phone: data.parentPhone,
//     addressDetail: {
//       addressStreet: data.addressStreet,
//       suburb: data.suburb,
//       postCode: data.postCode,
//       parentsEmail: data.parentsEmail,
//     },
//     parentDetail: [
//       {
//         name: data.parentName,
//         relation: data.relation,
//         phone: data.parentPhone,
//       },
//     ],
//     healthDetail: {
//       allergicFood: data.allergicFood,
//       medications: data.medications,
//       allergicMedication: data.allergicMedication,
//       healthProblem: data.healthProblem,
//     },
//     tutoringDetail: {
//       subjects: data.subjects,
//       frequency: 2,
//       paymentMethod: data.paymentMethod,
//     },
//   };
//   const response = await fetch(`${BASE_URL}/student/update`, {
//     method: "PUT",
//     body: JSON.stringify(formData),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   const responseData = await response.json();
//   return responseData;
// };

export const updateStudent = async (studentId, data) => {
  try {
    const response = await fetch(`${BASE_URL}/student/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update approval status");
    }

    const responseData = await response.json();
    return responseData.message; // Handle the response as needed
  } catch (error) {
    throw error; // Handle the error
  }
};

// ======================= DELETE =============================================================================
//? Removing the particular comment
export const removeComment = async (id, commentId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/student/${id}/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData.message;
    } else {
      throw new Error("Failed to update comment status");
    }
  } catch (error) {
    throw error;
  }
};
