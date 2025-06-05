import jsPDF from "jspdf";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: string[];
}

export const generateResumePDF = (data: ResumeData) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 20;
  let yPosition = 30;

  // Header
  pdf.setFontSize(24);
  pdf.setFont("helvetica", "bold");
  pdf.text(data.name, margin, yPosition);

  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(
    `${data.email} | ${data.phone} | ${data.location}`,
    margin,
    yPosition
  );

  yPosition += 20;

  // Experience Section
  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("EXPERIENCE", margin, yPosition);
  yPosition += 10;

  data.experience.forEach((exp) => {
    // Check if we need a new page
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 30;
    }

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text(exp.title, margin, yPosition);

    pdf.setFont("helvetica", "normal");
    pdf.text(`${exp.company} | ${exp.location}`, margin + 100, yPosition);

    yPosition += 5;
    pdf.setFontSize(10);
    pdf.text(exp.period, margin, yPosition);

    yPosition += 8;
    exp.description.forEach((desc) => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 30;
      }
      const wrappedText = pdf.splitTextToSize(
        `• ${desc}`,
        pageWidth - 2 * margin
      );
      pdf.text(wrappedText, margin + 5, yPosition);
      yPosition += wrappedText.length * 5;
    });

    yPosition += 5;
  });

  // Education Section
  yPosition += 10;
  if (yPosition > 230) {
    pdf.addPage();
    yPosition = 30;
  }

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("EDUCATION", margin, yPosition);
  yPosition += 10;

  data.education.forEach((edu) => {
    if (yPosition > 240) {
      pdf.addPage();
      yPosition = 30;
    }

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text(edu.degree, margin, yPosition);

    pdf.setFont("helvetica", "normal");
    pdf.text(`${edu.school} | ${edu.location}`, margin, yPosition + 5);

    pdf.setFontSize(10);
    pdf.text(edu.period, margin, yPosition + 10);

    yPosition += 20;
  });

  // Certifications Section
  yPosition += 10;
  if (yPosition > 200) {
    pdf.addPage();
    yPosition = 30;
  }

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("CERTIFICATIONS", margin, yPosition);
  yPosition += 10;

  data.certifications.forEach((cert) => {
    if (yPosition > 240) {
      pdf.addPage();
      yPosition = 30;
    }

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text(cert.name, margin, yPosition);

    pdf.setFont("helvetica", "normal");
    pdf.text(`${cert.issuer} | ${cert.date}`, margin, yPosition + 5);

    if (cert.credentialId) {
      pdf.setFontSize(10);
      pdf.text(`Credential ID: ${cert.credentialId}`, margin, yPosition + 10);
      yPosition += 15;
    } else {
      yPosition += 10;
    }

    yPosition += 5;
  });

  // Skills Section
  yPosition += 10;
  if (yPosition > 220) {
    pdf.addPage();
    yPosition = 30;
  }

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("SKILLS", margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  const skillsText = data.skills.join(" • ");
  const wrappedSkills = pdf.splitTextToSize(skillsText, pageWidth - 2 * margin);
  pdf.text(wrappedSkills, margin, yPosition);

  // Save the PDF
  pdf.save(`${data.name.replace(/\s+/g, "_")}_Resume.pdf`);
};
