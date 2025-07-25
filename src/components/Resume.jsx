@@ .. @@
 import React from "react";
 import "daisyui/dist/full.css";
 import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
-import { toPng } from "html-to-image";
-import { jsPDF } from "jspdf";
 import { useRef } from "react";
-import { useReactToPrint } from "react-to-print";
+import html2canvas from "html2canvas";
+import { jsPDF } from "jspdf";

 const Resume = ({ data }) => {
   const resumeRef = useRef(null);

   const handleDownloadPdf = () => {
-    toPng(resumeRef.current, { quality: 1.0 })
-      .then((dataUrl) => {
-        const pdf = new jsPDF("p", "mm", "a4");
-        pdf.addImage(dataUrl, "PNG", 10, 10, 190, 0);
-        pdf.save(`${data.personalInformation.fullName}.pdf`);
+    html2canvas(resumeRef.current, { 
+      quality: 1.0,
+      scale: 2,
+      useCORS: true,
+      allowTaint: true
+    })
+      .then((canvas) => {
+        const imgData = canvas.toDataURL('image/png');
+        const pdf = new jsPDF('p', 'mm', 'a4');
+        const imgWidth = 210;
+        const pageHeight = 295;
+        const imgHeight = (canvas.height * imgWidth) / canvas.width;
+        let heightLeft = imgHeight;
+        
+        let position = 0;
+        
+        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
+        heightLeft -= pageHeight;
+        
+        while (heightLeft >= 0) {
+          position = heightLeft - imgHeight;
+          pdf.addPage();
+          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
+          heightLeft -= pageHeight;
+        }
+        
+        pdf.save(`${data.personalInformation.fullName}_Resume.pdf`);
       })
       .catch((err) => {
         console.error("Error generating PDF", err);
       });
   };
+  
   return (
     <>
       <div
         ref={resumeRef}
-        className="max-w-4xl  mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-base-100 text-base-content border border-gray-200 dark:border-gray-700 transition-all duration-300"
+        className="max-w-4xl mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-white text-gray-900 border border-gray-200 transition-all duration-300"
+        style={{ backgroundColor: 'white', color: '#1f2937' }}
       >
         {/* Header Section */}
         <div className="text-center space-y-2">
-          <h1 className="text-4xl font-bold text-primary">
+          <h1 className="text-4xl font-bold" style={{ color: '#3b82f6' }}>
             {data.personalInformation.fullName}
           </h1>
-          <p className="text-lg text-gray-500">
+          <p className="text-lg" style={{ color: '#6b7280' }}>
             {data.personalInformation.location}
           </p>

           <div className="flex justify-center space-x-4 mt-2">
             {data.personalInformation.email && (
               <a
                 href={`mailto:${data.personalInformation.email}`}
-                className="flex items-center text-secondary hover:underline"
+                className="flex items-center hover:underline"
+                style={{ color: '#10b981' }}
               >
                 <FaEnvelope className="mr-2" /> {data.personalInformation.email}
               </a>
             )}
             {data.personalInformation.phoneNumber && (
-              <p className="flex items-center text-gray-500">
+              <p className="flex items-center" style={{ color: '#6b7280' }}>
                 <FaPhone className="mr-2" />{" "}
                 {data.personalInformation.phoneNumber}
               </p>
@@ -1,6 +1,7 @@
             {data.personalInformation.gitHub && (
               <a
                 href={data.personalInformation.gitHub}
                 target="_blank"
                 rel="noopener noreferrer"
-                className="text-gray-500 hover:text-gray-700 flex items-center"
+                className="hover:opacity-80 flex items-center"
+                style={{ color: '#6b7280' }}
               >
                 <FaGithub className="mr-2" /> GitHub
               </a>
@@ -1,6 +1,7 @@
             {data.personalInformation.linkedIn && (
               <a
                 href={data.personalInformation.linkedIn}
                 target="_blank"
                 rel="noopener noreferrer"
-                className="text-blue-500 hover:text-blue-700 flex items-center"
+                className="hover:opacity-80 flex items-center"
+                style={{ color: '#3b82f6' }}
               >
                 <FaLinkedin className="mr-2" /> LinkedIn
               </a>
@@ -1,6 +1,7 @@
           </div>
         </div>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Summary Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Summary</h2>
-          <p className="text-gray-700 dark:text-gray-300">{data.summary}</p>
+          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#10b981' }}>Summary</h2>
+          <p style={{ color: '#374151' }}>{data.summary}</p>
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Skills Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Skills</h2>
+          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#10b981' }}>Skills</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
             {data.skills.map((skill, index) => (
               <div
                 key={index}
-                className="badge badge-outline badge-lg px-4 py-2"
+                className="px-4 py-2 rounded-full border text-sm font-medium"
+                style={{ borderColor: '#d1d5db', color: '#374151' }}
               >
                 {skill.title} -{" "}
-                <span className="ml-1 font-semibold">{skill.level}</span>
+                <span className="ml-1 font-semibold" style={{ color: '#3b82f6' }}>{skill.level}</span>
               </div>
             ))}
           </div>
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Experience Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Experience</h2>
+          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#10b981' }}>Experience</h2>
           {data.experience.map((exp, index) => (
             <div
               key={index}
-              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
+              className="mb-4 p-4 rounded-lg shadow-sm border"
+              style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
             >
-              <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
-              <p className="text-gray-500">
+              <h3 className="text-xl font-bold" style={{ color: '#1f2937' }}>{exp.jobTitle}</h3>
+              <p style={{ color: '#6b7280' }}>
                 {exp.company} | {exp.location}
               </p>
-              <p className="text-gray-400">{exp.duration}</p>
-              <p className="mt-2 text-gray-600 dark:text-gray-300">
+              <p style={{ color: '#9ca3af' }}>{exp.duration}</p>
+              <p className="mt-2" style={{ color: '#4b5563' }}>
                 {exp.responsibility}
               </p>
             </div>
           ))}
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Education Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Education</h2>
+          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#10b981' }}>Education</h2>
           {data.education.map((edu, index) => (
             <div
               key={index}
-              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
+              className="mb-4 p-4 rounded-lg shadow-sm border"
+              style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
             >
-              <h3 className="text-xl font-bold">{edu.degree}</h3>
-              <p className="text-gray-500">
+              <h3 className="text-xl font-bold" style={{ color: '#1f2937' }}>{edu.degree}</h3>
+              <p style={{ color: '#6b7280' }}>
                 {edu.university}, {edu.location}
               </p>
-              <p className="text-gray-400">
+              <p style={{ color: '#9ca3af' }}>
                 🎓 Graduation Year: {edu.graduationYear}
               </p>
             </div>
           ))}
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Certifications Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">
+          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#10b981' }}>
             Certifications
           </h2>
           {data.certifications.map((cert, index) => (
             <div
               key={index}
-              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
+              className="mb-4 p-4 rounded-lg shadow-sm border"
+              style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
             >
-              <h3 className="text-xl font-bold">{cert.title}</h3>
-              <p className="text-gray-500">
+              <h3 className="text-xl font-bold" style={{ color: '#1f2937' }}>{cert.title}</h3>
+              <p style={{ color: '#6b7280' }}>
                 {cert.issuingOrganization} - {cert.year}
               </p>
             </div>
           ))}
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Projects Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Projects</h2>
+          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#10b981' }}>Projects</h2>
           {data.projects.map((proj, index) => (
             <div
               key={index}
-              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
+              className="mb-4 p-4 rounded-lg shadow-sm border"
+              style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
             >
-              <h3 className="text-xl font-bold">{proj.title}</h3>
-              <p className="text-gray-600 dark:text-gray-300">
+              <h3 className="text-xl font-bold" style={{ color: '#1f2937' }}>{proj.title}</h3>
+              <p style={{ color: '#4b5563' }}>
                 {proj.description}
               </p>
-              <p className="text-gray-500">
+              <p style={{ color: '#6b7280' }}>
                 🛠 Technologies: {proj.technologiesUsed.join(", ")}
               </p>
               {proj.githubLink && (
                 <a
                   href={proj.githubLink}
                   target="_blank"
                   rel="noopener noreferrer"
-                  className="text-blue-500 hover:underline"
+                  className="hover:underline"
+                  style={{ color: '#3b82f6' }}
                 >
                   🔗 GitHub Link
                 </a>
               )}
             </div>
           ))}
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Achievements Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">
+          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#10b981' }}>
             Achievements
           </h2>
           {data.achievements.map((ach, index) => (
             <div
               key={index}
-              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
+              className="mb-4 p-4 rounded-lg shadow-sm border"
+              style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
             >
-              <h3 className="text-xl font-bold">{ach.title}</h3>
-              <p className="text-gray-500">{ach.year}</p>
-              <p className="text-gray-600 dark:text-gray-300">
+              <h3 className="text-xl font-bold" style={{ color: '#1f2937' }}>{ach.title}</h3>
+              <p style={{ color: '#6b7280' }}>{ach.year}</p>
+              <p style={{ color: '#4b5563' }}>
                 {ach.extraInformation}
               </p>
             </div>
           ))}
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Languages Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Languages</h2>
-          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
+          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#10b981' }}>Languages</h2>
+          <ul className="list-disc pl-6" style={{ color: '#4b5563' }}>
             {data.languages.map((lang, index) => (
               <li key={index}>{lang.name}</li>
             ))}
           </ul>
         </section>

-        <div className="divider"></div>
+        <hr style={{ borderColor: '#e5e7eb' }} />

         {/* Interests Section */}
         <section>
-          <h2 className="text-2xl font-semibold text-secondary">Interests</h2>
-          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
+          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#10b981' }}>Interests</h2>
+          <ul className="list-disc pl-6" style={{ color: '#4b5563' }}>
             {data.interests.map((interest, index) => (
               <li key={index}>{interest.name}</li>
             ))}
           </ul>
         </section>
       </div>

-      <section className="flex justify-center mt-4 ">
-        <div onClick={handleDownloadPdf} className="btn btn-primary">
-          Print
+      <section className="flex justify-center mt-8 no-print">
+        <button onClick={handleDownloadPdf} className="btn btn-primary btn-lg gap-2">
+          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
+          </svg>
+          Download PDF
         </div>
       </section>
     </>
   );
 };