import { Education, Work } from '../types';

export const educations: Education[] = [
  {
    end: "May 2020",
    title: "SSC - 10th grade",
    description:
      "Successfully completed Secondary School Certificate with an outstanding score of <strong>93.80%</strong>, laying a strong academic foundation.",
    place: "Latur [Shirur Tajband]",
    institute: "Shri Mahesh Vidyalaya",
    logoLink: "/EducationInstitutes/Vainateya_school.png",
    technologies: ["Mathematics", "Science", "English", "Technical Studies"],
  },
  { 
    start: "Augest 2020",
    end: "July 2023",
    title: "Diploma - Electrical Engineering",
    description:
      "Completed Diploma In Electrial Engineering  with <strong>75.44%</strong>, demonstrating consistent performance and dedication.",
    place: "Latur",
    institute: "Puranmal Lahoti Government College Polytechnic",
    logoLink: "/EducationInstitutes/HSC_College.png",
    technologies: ["Core Subject's","AutoCad", "PLC" ,"MatLab" ]
  },
  {
    start: "Augest 2023",
    end: "June 2024",
    title: "Career Break",
    description:
      "Took a planned career break between Diploma and Bachelor's studies to focus on personal and professional growth, including self-learning and skill development in cybersecurity, software development, and emerging technologies.",
    place: "",
    institute: "",
    logoLink: "/EducationInstitutes/Ramraj_College.png",
    technologies: [],
  },
  {
    start: "July 2024",
    end: " Present",
    title: "B-Tech in Computer Science Engineering",
    description:
      "Currently pursuing a <strong>Bachelor's degree in Computer Science Engineering</strong> with a remarkable <strong>GPA of 8.50</strong>, focusing on <strong>cybersecurity (aspiring Offensive Security Engineer), software development, and emerging technologies</strong>.",
    place: "Pune",
    institute: "Bharti Vidyapeeth (Deemed To Be University) College Of Engineering",
    logoLink: "/EducationInstitutes/PICT_College.png",
    technologies: ["Software Engineering", "DSA", "OOP", "DBMS", "CNS", "OS","CyberSecurity"],
  },
];

export const workExperiences: Work[] = [
  {
    company_name: "CyberEdu",
    company_logo: "/workExp/acumenn_money.png",
    role: "Vulnerability Assessment & Penetration Testing Intern",
    start: "AUG 2025",
    end: "OCT 2025",
    place: "Hybrid",
    description:
      "Worked as a Cybersecurity Intern, actively involved in analyzing and identifying network vulnerabilities, supporting penetration testing and reconnaissance activities, and assessing system security posture. Prepared detailed vulnerability assessment reports, including risk analysis and remediation recommendations, while gaining hands-on experience with security tools, methodologies, and real-world security assessment practices.",
      
    technologies: ["NEssus", "Qualys", "Brup-suit", "Metaspolit", "Nmap", "Wireshark", "OWASP 10" , "Report Generation"],
  },
];