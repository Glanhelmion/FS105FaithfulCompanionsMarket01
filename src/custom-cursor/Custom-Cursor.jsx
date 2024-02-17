// import React, { useState, useEffect } from "react";
// import "../styles/Custom-Cursor.css"; // Import the CSS for the custom cursor

// const CustomCursor = () => {
//     useEffect(() => {
//         const updateCursor = (e) => {
//             const cursor = document.querySelector(".custom-cursor");
//             cursor.style.left = e.clientX + "px";
//             cursor.style.top = e.clientY + "px";
//         };

//         window.addEventListener("mousemove", updateCursor);

//         return () => {
//             window.removeEventListener("mousemove", updateCursor);
//         };
//     }, []);

//     return <div className="custom-cursor"></div>;
// };

// export default CustomCursor;
