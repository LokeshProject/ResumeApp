from pathlib import Path

from weasyprint import HTML

OUTPUT_PDF = Path(__file__).resolve().parent / "public" / "Lokesh_Das_Software_Engineer.pdf"

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
    <p>Full Stack Developer who thrives on turning complex product ideas into fast, reliable apps people love. Looking for a team where React, React Native, and Java Spring skills can drive real impact — clean architecture, sharp UX, and code that scales.</p>

    <h2>SUMMARY</h2>
    <p>Full Stack Software Developer with 3+ years building high-performance web and mobile products used by 50M+ people. Deep expertise in React.js, React Native, and Java Spring — from pixel-perfect UIs to microservices and AI-powered features. Proven wins: lifting app stability from 93% to 99%, shipping 150+ microapps to production stores, and wiring complex POS, payment, and voice integrations.</p>

    <h2>EXPERIENCE</h2>
    <p><strong>Software Engineer</strong></p>
    <p>Maventech Labs Pvt Ltd, Bengaluru | Oct 2023 - Present</p>
    <ul>
        <li>Built and scaled React Native apps for iOS & Android serving 50M+ users — 99%+ stability and sub-2s load times under real production traffic.</li>
        <li>Led a full CRM rebuild that pushed Crashlytics stability from 93% to 99%; integrated Pinelabs, Msipwe & PhonePe POS and lifted transaction success by 35%.</li>
        <li>Shipped 150+ production microapps from one shared codebase to Google Play for 10+ bus operators, supporting $5M+ in annual transactions.</li>
        <li>Designed Redux state, FCM push flows, and navigation for products handling 10M+ monthly active users without sacrificing UX polish.</li>
        <li>Owned end-to-end release: design, build, QA, App Store Connect & Play Console deploys, OTA updates, and versioning.</li>
        <li>Partnered with product & design to ship accessible, pixel-perfect UI that consistently earns 4.8+ store ratings.</li>
        <li>Cut memory use by 40% and boosted responsiveness by 50% through targeted performance work and solid DSA fundamentals.</li>
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

OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
HTML(string=html_content).write_pdf(str(OUTPUT_PDF))
print(f"PDF created successfully: {OUTPUT_PDF}")
