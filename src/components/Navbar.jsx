@@ .. @@
 import React from "react";
 import { Link } from "react-router";
+import SearchBar from "./SearchBar";
+import { FaMoon, FaSun } from "react-icons/fa";
+
 function Navbar() {
+  const handleSearch = (query) => {
+    console.log('Search query:', query);
+    // Implement search functionality
+  };
+
+  const toggleTheme = () => {
+    const html = document.documentElement;
+    const currentTheme = html.getAttribute('data-theme');
+    const newTheme = currentTheme === 'night' ? 'light' : 'night';
+    html.setAttribute('data-theme', newTheme);
+    localStorage.setItem('theme', newTheme);
+  };
+
   return (
-    <div className="navbar shadow bg-base-100">
+    <div className="navbar shadow bg-base-100 sticky top-0 z-50 backdrop-blur-sm bg-base-100/95">
       <div className="navbar-start">
@@ .. @@
             <li>
               <Link to={"/contact"}>Contact Us</Link>
             </li>
+            <li>
+              <Link to={"/blog"}>Blog</Link>
+            </li>
           </ul>
         </div>
@@ .. @@
           <li>
             <Link to={"/contact"}>Contact Us</Link>
           </li>
+          <li>
+            <Link to={"/blog"}>Blog</Link>
+          </li>
         </ul>
       </div>
       <div className="navbar-end">
-        <a className="btn">Login</a>
+        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SearchBar onSearch={handleSearch} />
          </div>
+          <button
+            onClick={toggleTheme}
+            className="btn btn-ghost btn-circle"
+            aria-label="Toggle theme"
+          >
            <FaSun className="w-5 h-5" />
+          </button>
+          <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">
       </div>
     </div>
   );
 }