from fpdf import FPDF

# Create PDF object
pdf = FPDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=10)

# Set fonts
pdf.set_font("Helvetica", "B", 16)
pdf.cell(0, 10, "LOKESH DAS", ln=True, align="C")

pdf.set_font("Helvetica", "", 10)
pdf.cell(0, 6, "Full Stack Developer | React JS, React Native & Java Spring", ln=True, align="C")
pdf.ln(2)

# Contact Info
pdf.set_font("Helvetica", "", 8)
pdf.cell(0, 4, "Email: lokesh.das.software@gmail.com | Phone: 7829153501 | Bangalore, Karnataka", ln=True, align="C")
pdf.ln(2)

# Objective
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "OBJECTIVE", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.multi_cell(0, 3, "Seeking a full-time software development role where I can apply my expertise in mobile and web technologies to create impactful, user-centric digital solutions.")
pdf.ln(1)

# Summary
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "SUMMARY", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.multi_cell(0, 3, "Results-driven Software Developer with 2 years of hands-on experience in building high-performance, cross-platform mobile and web applications using React Native, Android SDK, and React.js.")
pdf.ln(1)

# Experience
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "EXPERIENCE", ln=True)
pdf.set_font("Helvetica", "B", 8)
pdf.cell(0, 3, "Software Engineer - Maventech Labs Pvt Ltd, Bengaluru | Oct 2023 - Present", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.multi_cell(0, 3, "- Developed and maintained cross-platform mobile apps using React Native\n- Renovated CRM App, improving performance from 93% to 99%\n- Created and deployed 150+ microapps to Google Play Store\n- Used Redux for state management and Firebase for push notifications")
pdf.ln(1)

# Skills
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "SKILLS", ln=True)
pdf.set_font("Helvetica", "", 8)

skills_text = """Frontend: ReactJS, React Native, JavaScript, TypeScript, CSS3, Tailwind CSS
Mobile: React Native CLI, Expo, Android SDK, iOS Deployment, Navigation
Backend: Node.js, Express.js, Java, Spring Boot, REST APIs
Tools: Git, GitHub, Postman, VS Code, Android Studio, Xcode
AI Tools: OpenAI GPT-4, Deepgram, Twilio, LangChain"""

pdf.multi_cell(0, 3, skills_text)
pdf.ln(1)

# Education
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "EDUCATION", ln=True)
pdf.set_font("Helvetica", "B", 8)
pdf.cell(0, 3, "Master of Computer Application", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.cell(0, 3, "Maharaja Sriram Chandra Bhanjadeo University, Odisha | 2021-2023 | CGPA: 8.20", ln=True)

pdf.set_font("Helvetica", "B", 8)
pdf.cell(0, 3, "Bachelor of Science", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.cell(0, 3, "Karanjia Autonomous College | 2018-2021 | CGPA: 7.66", ln=True)
pdf.ln(1)

# Certifications
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "CERTIFICATIONS", ln=True)
pdf.set_font("Helvetica", "", 8)
pdf.multi_cell(0, 3, "- Full Stack Java Course - JSpiders\n- Responsive Web Design - freeCodeCamp\n- JavaScript Algorithms and Data Structures - freeCodeCamp\n- Python Programming Workshop - MSCB University")

# Output PDF
pdf.output('/Users/lokesha/Desktop/PersonalCode/lokesh-portfolio/public/LokeshDas_Resume.pdf')
print("PDF created successfully!")
