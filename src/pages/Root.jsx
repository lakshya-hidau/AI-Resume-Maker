@@ .. @@
 import React from "react";
 import { Outlet } from "react-router";
 import Navbar from "../components/Navbar";
+import Footer from "../components/Footer";
+
 function Root() {
   return (
     <div>
       {/* navbar */}
       <Navbar />

       <Outlet />
+      
+      {/* footer */}
+      <Footer />
     </div>
   );
 }

export default Root