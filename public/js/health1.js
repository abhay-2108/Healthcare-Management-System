document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".cards");
    const doctorMessageContainer = document.createElement("div");
    doctorMessageContainer.classList.add("doctor-msg-container");
    doctorMessageContainer.innerHTML = `
        <h3 class="title">Doctor's Message</h3>
        <input type="text" id="patient-name" placeholder="Patient Name" required>
        <input type="text" id="patient-id" placeholder="Patient Mobile No.." required>
        <textarea id="doctor-message" placeholder="Write a message..."></textarea>
        <button class="btn btn-primary" id="send-doctor-message">Send</button>
        <div class="doctor-messages"></div>
    `;
    document.body.appendChild(doctorMessageContainer);

    if (!container) {
        console.error("Error: .cards container not found. Make sure it exists in the HTML.");
        return;
    }

    const patients = [
        { name: "John", id: "123456789", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { name: "Alice", id: "987654321", message: "Dolores inventore blanditiis, vero facere soluta accusamus adipisci." },
        { name: "Michael", id: "112233445", message: "Adipisci perspiciatis laboriosam ad rem nostrum, voluptatem enim minus corporis." },
        { name: "Emma", id: "556677889", message: "Nesciunt ea iusto! Ex ea eaque optio praesentium labore." },
        { name: "Daniel", id: "334455667", message: "Rem ad expedita temporibus, sed veritatis voluptate sequi quasi hic." },
        { name: "Sophia", id: "778899001", message: "Amet totam dicta voluptatem illum deleniti." },
        { name: "John", id: "123456789", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { name: "Alice", id: "987654321", message: "Dolores inventore blanditiis, vero facere soluta accusamus adipisci." },
        { name: "Michael", id: "112233445", message: "Adipisci perspiciatis laboriosam ad rem nostrum, voluptatem enim minus corporis." },
        { name: "Emma", id: "556677889", message: "Nesciunt ea iusto! Ex ea eaque optio praesentium labore." },
        { name: "Daniel", id: "334455667", message: "Rem ad expedita temporibus, sed veritatis voluptate sequi quasi hic." },
        { name: "Sophia", id: "778899001", message: "Amet totam dicta voluptatem illum deleniti." },
    ];

    patients.forEach(patient => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <div class="info">
                <img src="assets/img/doctor.webp" alt="">
                <div class="text">
                    <p>${patient.name}</p>
                    <section>${patient.id}</section>
                </div>
            </div>
            <div class="msg">
                <p>${patient.message}</p>
            </div>
            <div class="approve-reply">
                <div class="approve">
                    <button class="btn btn-success">Approve</button>
                    <button class="btn btn-danger">Reject</button>
                </div>
            </div>
            <div class="doctor-response" id="response-${patient.id}"></div>
        `;
        container.appendChild(card);
    });

    document.getElementById("send-doctor-message").addEventListener("click", () => {
        const name = document.getElementById("patient-name").value.trim();
        const id = document.getElementById("patient-id").value.trim();
        const message = document.getElementById("doctor-message").value.trim();
        
        if (name === "" || id === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        const responseContainer = document.getElementById(`response-${id}`);
        if (responseContainer) {
            responseContainer.innerHTML = `<p><strong>Doctor:</strong> ${message}</p>`;
            document.getElementById("doctor-message").value = "";
        } else {
            alert("Patient not found.");
        }
    });
});


