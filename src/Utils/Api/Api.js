export const BASE_URL = "http://localhost:4000";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/student/list`);
  const data = await response.json();
  return data;
};

export const getMiscData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/student/misc`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const sendForm = async (data) => {
  // console.log(data);
  const formData = {
    firstName: data.firstName,
    lastName: data.lastName,
    dob: data.dob,
    gender: data.gender,
    schoolName: data.schoolName,
    schoolYear: data.schoolYear,
    email: data.parentsEmail,
    phone: data.parentPhone,
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
      paymentMethod: data.paymentMethod,
    },
    status: "Active",
  };
  console.log(formData);
  const response = await fetch(`${BASE_URL}/student/save`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const responseData = await response.json();
  return responseData;
};

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
