import React from 'react';
import './Sidebar.css';
import { Search, ChevronDown } from 'lucide-react';
import { getTeamColor } from '../../utils/teamColors';

const EmployeeListItem = ({ employee, onSidebarDragStart }) => (
  <div
    className="employee-item"
    draggable
    onDragStart={(e) => onSidebarDragStart(e, employee)}
  >
    <div className="employee-avatar-container">
      <img
        src={employee.image}
        alt={employee.name}
        className="employee-avatar-image"
        style={{ borderColor: getTeamColor(employee.team) }}
      />
    </div>
    <div className="employee-info">
      <div className="employee-name">{employee.name}</div>
      <div className="employee-designation">{employee.designation}</div>
      <div
        className="employee-team"
        style={{ background: getTeamColor(employee.team) }}
      >
        {employee.team}
      </div>
    </div>
  </div>
);

const Sidebar = ({
  employees,
  searchTerm,
  setSearchTerm,
  selectedTeam,
  setSelectedTeam,
  onSidebarDragStart
}) => {
  const teams = [...new Set(employees.map(emp => emp.team))];
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTeam = !selectedTeam || emp.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Employees</h2>
        <div className="sidebar-count">{filteredEmployees.length} members</div>
      </div>
      <div className="search-section">
        <div className="search-box">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-dropdown">
          <ChevronDown className="dropdown-icon" />
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="team-select"
          >
            <option value="">All Teams</option>
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="employee-list">
        {filteredEmployees.map(employee => (
          <EmployeeListItem
            key={employee.id}
            employee={employee}
            onSidebarDragStart={onSidebarDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
