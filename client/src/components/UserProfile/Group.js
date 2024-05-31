import Navbar from "../dashboard";

export default function ({ children }) {
  return (
    <div className="group" style={{ textAlign: "center",display: "flex", alignItems: "center" }}>
      {children}
      <Navbar />
    </div>
  );
}
