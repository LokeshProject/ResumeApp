from weasyprint import HTML, CSS

html_content = """
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        h1 { text-align: center; margin: 0 0 5px 0; font-size: 24px; }
        .subtitle { text-align: center; margin-bottom: 15px; font-size: 12px; }
        .contact { text-align: center; font-size: 11px; margin-bottom: 15px; }
        h2 { font-size: 12px; font-weight: bold; color: #1f4788; border-bottom: 1px solid #ddd; margin-top: 12px; margin-bottom: 6px; padding-bottom: 3px; }
        p { font-size: 11px; line-height: 1.4; margin: 4px 0; }
        ul { font-size: 11px; line-height: 1.4; margin: 4px 0 4px 20px; padding: 0; }
        li { margin: 3px 0; }
        .header { margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>LOKESH DAS</h1>
        <p class="subtitle">Full Stack Developer | React JS, React Native & Java Spring</p>
        <p class="contact">Email: lokesh.das.software@gmail.com | Phone: 7829153501 | Bangalore, Karnataka</p>
    </div>

    <h2>OBJECTIVE</h2>
    <p>Seeking a full-time software development role where I can apply my expertise in mobile and web technologies to create impactful, user-centric digital solutions. Eager to join a forward-thinking team that values innovation, collaboration, and continuous learning.</p>

    <h2>SUMMARY</h2>
    <p>Results-driven Software Developer with 2 years of hands-on experience in building high-performance, cross-platform mobile and web applications using React Native, Android SDK, and React.js. Proficient in API integration, Redux-based state management, and full-cycle app deployment to Google Play Store and Apple App Store.</p>

    <h2>EXPERIENCE</h2>
    <p><strong>Software Engineer</strong></p>
    <p>Maventech Labs Pvt Ltd, Bengaluru | Oct 2023 - Present</p>
    <ul>
        <li>Developed and maintained cross-platform mobile apps using React Native for iOS and Android, ensuring consistent performance and UI across devices.</li>
        <li>Renovated the company's CRM App, improving performance from 93% to 99% in Crashlytics and integrated POS devices (Pinelabs, Msipwe, PhonePe, etc.).</li>
        <li>Created and deployed over 150 microapps from a single codebase to Google Play Store for multiple bus operators.</li>
        <li>Used Redux for global state management, Firebase Cloud Messaging for push notifications, and React Navigation for routing.</li>
        <li>Deployed apps to App Store Connect and Google Play Console; managed OTA updates and version releases.</li>
        <li>Collaborated with UX/UI teams to deliver responsive and accessible design implementations.</li>
        <li>Practiced DSA in Java to improve coding efficiency and problem-solving.</li>
    </ul>

    <h2>SKILLS</h2>
    <p><strong>Frontend:</strong> ReactJS, React Native, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS</p>
    <p><strong>Mobile:</strong> React Native CLI, Expo, Android SDK, iOS Deployment, Navigation, Deep Linking</p>
    <p><strong>Backend:</strong> Node.js, Express.js, Core Java, Spring Boot, REST APIs</p>
    <p><strong>Database:</strong> MySQL, SQLite</p>
    <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code, Android Studio, Xcode</p>
    <p><strong>AI Tools:</strong> OpenAI GPT-4, Deepgram, Twilio, LangChain, Google Cloud Vision AI</p>
    <p><strong>Deployment:</strong> App Store Connect, Google Play Console</p>

    <h2>EDUCATION</h2>
    <p><strong>Master of Computer Application</strong></p>
    <p>Maharaja Sriram Chandra Bhanjadeo University, Odisha | 2021-2023 | CGPA: 8.20</p>
    <p><strong>Bachelor of Science</strong></p>
    <p>Karanjia Autonomous College, Karanjia | 2018-2021 | CGPA: 7.66</p>

    <h2>CERTIFICATIONS</h2>
    <ul>
        <li>Full Stack Java Course - JSpiders, Marathahalli Branch</li>
        <li>Responsive Web Design - freeCodeCamp</li>
        <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
        <li>One Week National Level Workshop on Python Programming - MSCB University</li>
        <li>Certificate Course in C Programming - MSCB University</li>
    </ul>
</body>
</html>
"""

HTML(string=html_content).write_pdf('/Users/lokesha/Desktop/PersonalCode/lokesh-portfolio/public/LokeshDas_Resume.pdf')
print("PDF created successfully!")
