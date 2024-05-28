// import React, { useState } from "react";
// import Group from "./Group";

// const DisplayProfile = ({ info, startEdit }) => {
//   const defaultImage = "./image/temp.png";

//   const [len, setLen] = useState(info.events.length > 0);

//   return (
//     <>
//       <div
//         className="vh-100"
//         style={{
//           backgroundColor: "#4169E1",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "500px",
//             width: "100%",
//             margin: "auto",
//             borderRadius: "15px",
//             backgroundColor: "#fff",
//             padding: "20px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <div
//             style={{ display: "flex", alignItems: "center", textAlign: "left" }}
//           >
//             <div style={{ flexShrink: 0 }}>
//               <img
//                 style={{ width: "90px", borderRadius: "90px" }}
//                 src={info.portrait}
//                 alt={`${info.displayName} profile`}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://img.icons8.com/ios-glyphs/90/user--v1.png";
//                 }}
//               />
//             </div>
//             <div style={{ flexGrow: 1, marginLeft: "20px" }}>
//               <h2>{info.displayName}</h2>
//               <i>{info.bio}</i>
//               <p>Dance Style: {info.danceStyle}</p>
//               <button
//                 style={{
//                   height: "36px",
//                   overflow: "visible",
//                   border: "1px solid black",
//                   backgroundColor: "transparent",
//                   color: "black",
//                   borderRadius: "5px",
//                   padding: "0 12px",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                 }}
//                 onClick={startEdit}
//               >
//                 Edit profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="body" style={{ marginTop: "20px" }}>
//         {len ? (
//           <>
//             <h1 style={{ textAlign: "center", color: "#4169E1" }}>
//               Events you have joined
//             </h1>
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {info.events.map((event) => (
//                 <li
//                   key={event.id}
//                   style={{
//                     border: "1px solid #4169E1",
//                     borderRadius: "5px",
//                     padding: "10px",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <h2>{event.date}</h2>
//                 </li>
//               ))}
//             </ul>
//           </>
//         ) : (
//           <h1 style={{ textAlign: "center", color: "#4169E1" }}>
//             No events yet
//           </h1>
//         )}
//       </div>
//     </>
//   );
// };

// export default DisplayProfile;
import React, { useState } from "react";
import Group from "./Group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const DisplayProfile = ({ info, startEdit }) => {
  const defaultImage = "./image/temp.png";

  const [len, setLen] = useState(info.events.length > 0);

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image">
              <img
                src={info.portrait}
                alt={`${info.displayName} profile`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.icons8.com/ios-glyphs/90/user--v1.png";
                }}
              />
            </div>
            <div className="profile-info">
              <h2>{info.displayName}</h2>
              <p className="bio">{info.bio}</p>
              <p>Dance Style: {info.danceStyle}</p>
              <button className="edit-button" onClick={startEdit}>
                <FontAwesomeIcon icon={faEdit} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
          <div className="profile-body">
            {len ? (
              <>
                <h1 className="events-heading">Events you have joined</h1>
                <ul className="event-list">
                  {info.events.map((event) => (
                    <li key={event.id} className="event-item">
                      <h2>{event.date}</h2>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <h1 className="no-events">No events yet</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProfile;
