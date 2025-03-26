
const appointmentData = [
    {
        name: "Robert",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        disease: "Flu",
        appointmentTime: "2025-02-17 10:00 AM"
    },
    {
        name: "Sarah",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        disease: "Fever",
        appointmentTime: "2025-02-17 11:30 AM"
    },
    {
        name: "John",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        disease: "Cold",
        appointmentTime: "2025-02-17 01:00 PM"
    },
    {
        name: "Robert",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        disease: "Flu",
        appointmentTime: "2025-02-17 10:00 AM"
    },
    {
        name: "Sarah",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        disease: "Fever",
        appointmentTime: "2025-02-17 11:30 AM"
    },
    {
        name: "John",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        disease: "Cold",
        appointmentTime: "2025-02-17 01:00 PM"
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const appointmentListContainer = document.getElementById('appointmentList');
    
    appointmentData.forEach(patient => {
        const patientDiv = document.createElement('div');
        patientDiv.classList.add('details');
        patientDiv.innerHTML = `
            <img src="${patient.image}" alt="${patient.name}" class="patient-img">
            <div class="patient-info">
                <span class="patient-name">${patient.name}</span>
                <section class="disease">${patient.disease}</section>
                <span class="appointment-time">${patient.appointmentTime}</span>
            </div>
        `;
        appointmentListContainer.appendChild(patientDiv);
    });
});


function searchPatient() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const allPatients = document.querySelectorAll('.details');
    
    allPatients.forEach(patient => {
        const name = patient.querySelector('.patient-name').innerText.toLowerCase();
        const disease = patient.querySelector('.disease').innerText.toLowerCase();
        
        if (name.includes(searchQuery) || disease.includes(searchQuery)) {
            patient.style.display = 'flex';
        } else {
            patient.style.display = 'none';
        }
    });
}


const patientData = [
    {
        name: "Brooklyn Simmons",
        gender: "Male",
        dob: "1995-03-18",
        age: 29,
        department: "Cardiology",
        patientId: "#OM123AA"
    },
    {
        name: "Anthony Johnson",
        gender: "Male",
        dob: "1997-03-18",
        age: 27,
        department: "Cardiology",
        patientId: "#AT456BB"
    },
    {
        name: "Sarah Miller Olivia",
        gender: "Female",
        dob: "1987-03-18",
        age: 35,
        department: "Oncology",
        patientId: "#EA789CC"
    },
    {
        name: "Brooklyn Simmons",
        gender: "Male",
        dob: "1995-03-18",
        age: 29,
        department: "Cardiology",
        patientId: "#OM123AA"
    },
    {
        name: "Anthony Johnson",
        gender: "Male",
        dob: "1997-03-18",
        age: 27,
        department: "Cardiology",
        patientId: "#AT456BB"
    },
    {
        name: "Sarah Miller Olivia",
        gender: "Female",
        dob: "1987-03-18",
        age: 35,
        department: "Oncology",
        patientId: "#EA789CC"
    },
    {
        name: "Brooklyn Simmons",
        gender: "Male",
        dob: "1995-03-18",
        age: 29,
        department: "Cardiology",
        patientId: "#OM123AA"
    },
    {
        name: "Anthony Johnson",
        gender: "Male",
        dob: "1997-03-18",
        age: 27,
        department: "Cardiology",
        patientId: "#AT456BB"
    },
    {
        name: "Sarah Miller Olivia",
        gender: "Female",
        dob: "1987-03-18",
        age: 35,
        department: "Oncology",
        patientId: "#EA789CC"
    },
    {
        name: "Brooklyn Simmons",
        gender: "Male",
        dob: "1995-03-18",
        age: 29,
        department: "Cardiology",
        patientId: "#OM123AA"
    },
    {
        name: "Anthony Johnson",
        gender: "Male",
        dob: "1997-03-18",
        age: 27,
        department: "Cardiology",
        patientId: "#AT456BB"
    },
    {
        name: "Sarah Miller Olivia",
        gender: "Female",
        dob: "1987-03-18",
        age: 35,
        department: "Oncology",
        patientId: "#EA789CC"
    },
];
document.addEventListener('DOMContentLoaded', function() {
function generateTable(data) {
    const table = document.createElement("table");
    table.classList.add("patient-table"); 

    
    const headerRow = table.insertRow();
    const headers = ["", "Name", "Gender", "Date of Birth", "Age", "Department", "Patient ID"]; 
    headers.forEach(headerText => {
        const headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    
    data.forEach(patient => {
        const row = table.insertRow();

        
        const checkboxCell = row.insertCell();
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);

        const values = [patient.name, patient.gender, patient.dob, `${patient.age} years old`, patient.department, patient.patientId];
        values.forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

                
        const profileCell = row.cells[1]; 
        const profileImg = document.createElement("img");
        profileImg.src = "/images/doctor.webp"; 
        profileImg.alt = `${patient.name}'s profile`;
        profileImg.classList.add("profile-image"); 
        profileCell.insertBefore(profileImg, profileCell.firstChild); 

    });

    return table;

}
const tableContainer = document.querySelector(".table-patient");
const table = generateTable(patientData);
tableContainer.appendChild(table);
});


//Patient Details

const patientInfo = [
    {
        name: "John Doe",
        contact: "+1 234 567 890",
        address: "123 Main St, Springfield, USA",
        dob: "1990-05-15",
        insurance: "XYZ Health Insurance",
        medicalHistory: ["Asthma", "Appendectomy (2010)", "Penicillin Allergy"],
        currentMedications: ["Albuterol", "Cetirizine"],
        familyHistory: ["Diabetes", "Hypertension"],
        emergencyContact: { name: "Jane Doe", relation: "Sister", phone: "+1 987 654 321" },
        healthRecords: ["Blood Test - Normal", "X-ray - No Issues"],
    },
    {
        name: "Jane Smith",
        contact: "+1 555 678 123",
        address: "456 Elm St, Metropolis, USA",
        dob: "1985-09-22",
        insurance: "ABC Health Insurance",
        medicalHistory: ["Hypertension", "Knee Surgery (2015)"],
        currentMedications: ["Lisinopril"],
        familyHistory: ["Heart Disease"],
        emergencyContact: { name: "Tom Smith", relation: "Brother", phone: "+1 444 321 987" },
        healthRecords: ["MRI - Clear", "Blood Test - Slight Deficiency"],
    },
    {
        name: "John Doe",
        contact: "+1 234 567 890",
        address: "123 Main St, Springfield, USA",
        dob: "1990-05-15",
        insurance: "XYZ Health Insurance",
        medicalHistory: ["Asthma", "Appendectomy (2010)", "Penicillin Allergy"],
        currentMedications: ["Albuterol", "Cetirizine"],
        familyHistory: ["Diabetes", "Hypertension"],
        emergencyContact: { name: "Jane Doe", relation: "Sister", phone: "+1 987 654 321" },
        healthRecords: ["Blood Test - Normal", "X-ray - No Issues"],
    },
    {
        name: "Jane Smith",
        contact: "+1 555 678 123",
        address: "456 Elm St, Metropolis, USA",
        dob: "1985-09-22",
        insurance: "ABC Health Insurance",
        medicalHistory: ["Hypertension", "Knee Surgery (2015)"],
        currentMedications: ["Lisinopril"],
        familyHistory: ["Heart Disease"],
        emergencyContact: { name: "Tom Smith", relation: "Brother", phone: "+1 444 321 987" },
        healthRecords: ["MRI - Clear", "Blood Test - Slight Deficiency"],
    },
];

function createCard(info) {
    const container = document.querySelector(".patient-cards");
    if (!container) {
        console.error("Element with class 'patient-cards' not found!");
        return;
    }

    const card = document.createElement("div");
    card.className = "card p-3 mb-3 shadow-sm";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = info.name;

    const content = document.createElement("div");
    content.className = "d-flex justify-content-between";

    const leftColumn = document.createElement("div");
    leftColumn.innerHTML = `
        <p><strong>Contact:</strong> ${info.contact}</p>
        <p><strong>Address:</strong> ${info.address}</p>
        <p><strong>DOB:</strong> ${info.dob}</p>
        <p><strong>Insurance:</strong> ${info.insurance}</p>
        <p><strong>Medical History:</strong> ${info.medicalHistory.join(", ")}</p>
    `;

    const rightColumn = document.createElement("div");
    rightColumn.innerHTML = `
        <p><strong>Current Medications:</strong> ${info.currentMedications.join(", ")}</p>
        <p><strong>Family History:</strong> ${info.familyHistory.join(", ")}</p>
        <p><strong>Emergency Contact:</strong> ${info.emergencyContact.name} (${info.emergencyContact.relation}) - ${info.emergencyContact.phone}</p>
        <p><strong>Health Records:</strong> ${info.healthRecords.join(", ")}</p>
    `;

    content.appendChild(leftColumn);
    content.appendChild(rightColumn);

    card.appendChild(title);
    card.appendChild(content);
    container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    patientInfo.forEach(createCard); // Iterate over the array to create a card for each patient
});