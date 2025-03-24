
document.addEventListener('DOMContentLoaded', () => {
    const patients = [
        {
          patientName: "John Doe",
          drugName: "Lipitor (brand), Atorvastatin (generic)",
          drugClass: "HMG-CoA reductase inhibitor (statin)",
          uses: "Lowers cholesterol and triglycerides in the blood; reduces the risk of heart attack, stroke, and other cardiovascular problems.",
          dosage: "Starting dose: 10-20 mg once daily. Maximum dose: 80 mg once daily. Dosage may be adjusted based on individual needs and response.",
          administration: "Can be taken with or without food. Swallow the tablet whole.",
          warnings: "May cause muscle pain or weakness (rhabdomyolysis), liver problems, and allergic reactions.  Do not take with grapefruit juice.",
          sideEffects: "Common: Headache, nausea, diarrhea, muscle aches. Serious: Severe muscle pain, jaundice, dark urine.",
          storage: "Store at room temperature away from light and moisture.",
          manufacturer: "Pfizer",
        },
        {
          patientName: "Jane Smith",
          drugName: "Metformin (brand/generic)",
          drugClass: "Biguanide",
          uses: "Treats type 2 diabetes by helping the body use insulin more effectively.",
          dosage: "Starting dose: 500 mg twice daily or 850 mg once daily. Dosage may be increased gradually.",
          administration: "Take with meals to reduce stomach upset.",
          warnings: "May cause lactic acidosis (a serious metabolic condition), especially in patients with kidney problems.  Avoid excessive alcohol consumption.",
          sideEffects: "Common: Diarrhea, nausea, vomiting, stomach upset. Serious: Lactic acidosis (rare but serious).",
          storage: "Store at room temperature.",
          manufacturer: "Various", // Metformin is available from multiple manufacturers.
        },
        {
          patientName: "David Lee",
          drugName: "Lisinopril (brand/generic)",
          drugClass: "Angiotensin-converting enzyme (ACE) inhibitor",
          uses: "Treats high blood pressure and heart failure.",
          dosage: "Starting dose: 10 mg once daily. Dosage may be adjusted based on blood pressure response.",
          administration: "Can be taken with or without food.",
          warnings: "May cause low blood pressure, especially when starting the medication. May affect kidney function.  Do not use if pregnant.",
          sideEffects: "Common: Cough, dizziness, fatigue. Serious: Severe allergic reactions (angioedema), kidney problems.",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
          {
          patientName: "Sarah Jones",
          drugName: "Aspirin (brand/generic)",
          drugClass: "Nonsteroidal anti-inflammatory drug (NSAID)",
          uses: "Reduces pain, fever, and inflammation. Also used to prevent blood clots.",
          dosage: "For pain/fever: 325-650 mg every 4-6 hours. For heart attack/stroke prevention: Low dose (e.g., 81 mg) once daily.",
          administration: "Can be taken with or without food. Enteric-coated aspirin may be gentler on the stomach.",
          warnings: "May increase the risk of bleeding, especially in patients taking other blood thinners. May cause stomach ulcers.",
          sideEffects: "Common: Stomach upset, heartburn. Serious: Bleeding, allergic reactions.",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
        {
          patientName: "Michael Brown",
          drugName: "Albuterol (brand/generic)",
          drugClass: "Beta-2 agonist bronchodilator",
          uses: "Treats asthma and other breathing problems by relaxing the muscles in the airways.",
          dosage: "Usually 1-2 puffs every 4-6 hours as needed.",
          administration: "Use an inhaler as directed.",
          warnings: "May cause rapid heart rate, tremors, and anxiety.",
          sideEffects: "Common: Tremors, nervousness, rapid heart rate. Serious: Severe asthma attacks.",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
          {
          patientName: "Emily Davis",
          drugName: "Levothyroxine (brand/generic)",
          drugClass: "Thyroid hormone",
          uses: "Treats hypothyroidism (underactive thyroid gland).",
          dosage: "Dosage is highly individualized and based on thyroid hormone levels.",
          administration: "Take on an empty stomach, preferably in the morning.",
          warnings: "Overdosage can cause hyperthyroidism (overactive thyroid).",
          sideEffects: "Common: Palpitations, anxiety, weight loss. Serious: Heart problems, thyroid storm.",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
          {
          patientName: "Christopher Wilson",
          drugName: "Simvastatin (brand/generic)",
          drugClass: "HMG-CoA reductase inhibitor (statin)",
          uses: "Lowers cholesterol and triglycerides in the blood; reduces the risk of heart attack, stroke, and other cardiovascular problems.",
          dosage: "Starting dose: 10-20 mg once daily in the evening. Maximum dose: 80 mg once daily. Dosage may be adjusted based on individual needs and response.",
          administration: "Take in the evening. Can be taken with or without food.",
          warnings: "May cause muscle pain or weakness (rhabdomyolysis), liver problems, and allergic reactions.  Do not take with grapefruit juice.",
          sideEffects: "Common: Headache, nausea, diarrhea, muscle aches. Serious: Severe muscle pain, jaundice, dark urine.",
          storage: "Store at room temperature away from light and moisture.",
          manufacturer: "Various",
        },
          {
          patientName: "Ashley Garcia",
          drugName: "Amoxicillin (brand/generic)",
          drugClass: "Penicillin antibiotic",
          uses: "Treats bacterial infections.",
          dosage: "Dosage varies depending on the type and severity of the infection.",
          administration: "Can be taken with or without food.",
          warnings: "May cause allergic reactions, ranging from mild rash to severe anaphylaxis.",
          sideEffects: "Common: Nausea, diarrhea, rash. Serious: Severe allergic reactions.",
          storage: "Store at room temperature or in the refrigerator, depending on the formulation.",
          manufacturer: "Various",
        },
          {
          patientName: "Matthew Rodriguez",
          drugName: "Ibuprofen (brand/generic)",
          drugClass: "Nonsteroidal anti-inflammatory drug (NSAID)",
          uses: "Reduces pain, fever, and inflammation.",
          dosage: "200-800 mg every 4-6 hours as needed.",
          administration: "Can be taken with or without food. Taking with food may reduce stomach upset.",
          warnings: "May increase the risk of stomach ulcers and bleeding, especially with long-term use. May affect kidney function.",
          sideEffects: "Common: Stomach upset, heartburn. Serious: Bleeding, allergic reactions.",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
          {
          patientName: "Amanda Martinez",
          drugName: "Cetirizine (brand/generic)",
          drugClass: "Antihistamine",
          uses: "Treats allergy symptoms such as runny nose, sneezing, itchy eyes, and hives.",
          dosage: "Usually 10 mg once daily.",
          administration: "Can be taken with or without food.",
          warnings: "May cause drowsiness.",
          sideEffects: "Common: Drowsiness, dry mouth. Serious: Allergic reactions (rare).",
          storage: "Store at room temperature.",
          manufacturer: "Various",
        },
      ];

    const medicationContainer = document.querySelector('.medication');

    if (medicationContainer) {
        patients.forEach(patient => {
            const card = document.createElement('div');
            card.classList.add('medication-card');

            card.innerHTML = `
          <h3>${patient.patientName}</h3>
          <p><strong>Drug:</strong> ${patient.drugName}</p>
          <p><strong>Class:</strong> ${patient.drugClass}</p>
          <p><strong>Uses:</strong> ${patient.uses}</p>
          <p><strong>Dosage:</strong> ${patient.dosage}</p>
          <p><strong>Administration:</strong> ${patient.administration}</p>
          <p><strong>Warnings:</strong> ${patient.warnings}</p>
          <p><strong>Side Effects:</strong> ${patient.sideEffects}</p>
          <p><strong>Storage:</strong> ${patient.storage}</p>
          <p><strong>Manufacturer:</strong> ${patient.manufacturer}</p>
        `;

            medicationContainer.appendChild(card);
        });
    } else {
        console.error("Medication container not found!");
    }
});