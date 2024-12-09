import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Dashboard.css";
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Members"); // Untuk tab navigasi
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddNew = () => {
    alert("Add New Member clicked");
  };

  const handleImportMembers = () => {
    alert("Import Members clicked");
  };

  const handleExportMembers = () => {
    alert("Export Members clicked");
  };

  const handleFilter = () => {
    alert("Filter button clicked");
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <nav className="sidebar-admin">
          <div className="p-4">
            <h4 className="text-white">FarmEDuz Admin</h4>
          </div>
          <ul className="list-unstyled px-3">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-person me-2"></i> Profile
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-people me-2"></i> Users
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-tools me-2"></i> Control Panel
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-folder2-open me-2"></i> Projects
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-list-task me-2"></i> Tasks
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-clock-history me-2"></i> Logs
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-chat me-2"></i> Group Chats
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                <i className="bi bi-bar-chart me-2"></i> Reports
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <header className="d-flex justify-content-between align-items-center py-3 px-4 shadow-sm" style={{backgroundColor:"#f5f2ed"}}>
          <h5 className="mb-0">Members</h5>
          <div className="d-flex align-items-center">
            <div className="text-end me-4">
              <p className="mb-0">Total Members: 2000</p>
              <p className="mb-0">Current Users: 1800</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle"
            />
            <button
              className="btn btn-outline-primary ms-3"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
            </button>
          </div>
        </header>

        <div className="container-admin mt-4 px-4">
          {/* Tabs */}
          <div className="d-flex border-bottom">
            <button
              className={`btn me-3 ${
                activeTab === "Members" ? "border-bottom border-primary fw-bold" : ""
              }`}
              onClick={() => setActiveTab("Members")}
            >
              Members
            </button>
            <button
              className={`btn ${
                activeTab === "Admins" ? "border-bottom border-primary fw-bold" : ""
              }`}
              onClick={() => setActiveTab("Admins")}
            >
              Admins
            </button>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between align-items-center my-4">
            <div>
              <button className="btn btn-primary me-2" onClick={handleAddNew}>
                Add New
              </button>
              <button
                className="btn btn-outline me-2"
                onClick={handleImportMembers}
              >
                Import Members
              </button>
              <button
                className="btn btn-outline"
                onClick={handleExportMembers}
              >
                Export Members (Excel)
              </button>
            </div>
            <button className="btn btn-secondary" onClick={handleFilter}>
              Filter
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Member Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Operation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "George Lindseth",
                    mobile: "+44 315 29 62",
                    email: "carlien@samad.no",
                    status: "Active",
                  },
                  {
                    name: "Erik Dyer",
                    mobile: "+21 345 46 25",
                    email: "cristdier@home.no",
                    status: "Active",
                  },
                  {
                    name: "Michael Campbell",
                    mobile: "+17 364 72 53",
                    email: "campbell@gmail.com",
                    status: "Inactive",
                  },
                ].map((member, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src="https://via.placeholder.com/30"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </td>
                    <td>{member.name}</td>
                    <td>{member.mobile}</td>
                    <td>{member.email}</td>
                    <td>
                      <span
                        className={`badge ${
                          member.status === "Active" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Delete
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">Login</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
