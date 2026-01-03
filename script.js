function downloadPDF() {
    const element = document.getElementById("report");

    const options = {
        margin: 0.6,
        filename: "Role_of_AI_in_Autonomous_Robots.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
}
