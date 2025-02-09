import React from "react";
import LoginStorage from "./components/LoginStorage";
import LoginStorageFirst from "./components/LoginStorageFirst";
import Single from "./components/Single";

const App = () => {
  return (
    <>
      {/* <LoginStorage /> */}
      {/* <Single /> */}
      <LoginStorageFirst />
    </>
  );
};

export default App;

// import React from "react";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton ";
// import Profile from "./components/Profile";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <div className="">
//         <div className="flex flex-col items-center justify-center min-h-screen">

//           <ThemeToggleButton />
//         </div>
//         <Profile />

//         <LoginButton />
//         <LogoutButton />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;
