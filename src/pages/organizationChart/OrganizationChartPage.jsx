import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './OrganizationChartPage.css';
import { Tooltip, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { getTeamColor } from '../../utils/teamColors';
import { Toaster, toast } from 'react-hot-toast';

const API = {
  employees: [
    { id: 1, name: "Mark Hill", designation: "CEO", team: "Executive", manager: null, image: "https://png.pngtree.com/png-vector/20241030/ourlarge/pngtree-professional-businessman-in-suit-png-image_14183325.png" },
    { id: 2, name: "Joe Linux", designation: "CTO", team: "Engineering", manager: 1, image: "https://static.vecteezy.com/system/resources/thumbnails/053/630/733/small/a-man-in-a-suit-and-tie-standing-with-his-arms-crossed-photo.jpeg" },
    { id: 3, name: "John Green", designation: "VP Engineering", team: "Engineering", manager: 2, image: "https://t3.ftcdn.net/jpg/01/97/11/70/360_F_197117055_WC3XWtirsfhXnefmX2jka3C254XPGGic.jpg" },
    { id: 4, name: "Sarah Chen", designation: "Senior Developer", team: "Engineering", manager: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&s" },
    { id: 5, name: "Ron Blomquist", designation: "Developer", team: "Engineering", manager: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sguzKol3Gg6f6LuLY3YSq5hCgwF8dXXVFA&s" },
    { id: 6, name: "Alice Johnson", designation: "VP Sales", team: "Sales", manager: 1, image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg" },
    { id: 7, name: "Bob Wilson", designation: "Sales Manager", team: "Sales", manager: 6, image: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" },
    { id: 8, name: "Emma Davis", designation: "Sales Rep", team: "Sales", manager: 7, image: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" },
    { id: 9, name: "David Brown", designation: "VP Marketing", team: "Marketing", manager: 1, image: "https://t3.ftcdn.net/jpg/02/42/00/04/360_F_242000451_i5W8qBEWBw5hthTWgPTogYYl8qxIX4f5.jpg" },
    { id: 10, name: "Lisa White", designation: "Marketing Manager", team: "Marketing", manager: 9, image: "https://images.forwardcdn.com/image/970x/center/images/cropped/istock-627909282-1514234385.jpg" },
    { id: 11, name: "Mike Taylor", designation: "Designer", team: "Marketing", manager: 10, image: "https://static9.depositphotos.com/1005893/1150/i/450/depositphotos_11501533-stock-photo-indian-businessman.jpg" },
    { id: 12, name: "Ana Rodriguez", designation: "HR Manager", team: "HR", manager: 1, image: "https://thumbs.dreamstime.com/b/beautiful-african-american-business-woman-portrait-arms-folded-confident-happy-ceo-cheerful-smiling-businesswoman-corporate-162367854.jpg" },
  ],

  getEmployees: () => Promise.resolve([...API.employees]),
  updateEmployee: (id, updates) => {
    const index = API.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      API.employees[index] = { ...API.employees[index], ...updates };
    }
    return Promise.resolve(API.employees[index]);
  }
};

const EmployeeNode = ({ employee, employees, handleDrop, onChartDragStart, zoomLevel }) => {
  const directReports = employees.filter(emp => emp.manager === employee.id);

  const onDragOver = (e) => e.preventDefault();
  const onDrop = (e) => {
    const data = e.dataTransfer.getData('custom-employee');
    if (!data) return;
    const parsed = JSON.parse(data);
    console.log(parsed)
    if (parsed.type === 'chart') {
      handleDrop(parsed.employee.id, employee.id, 'chart');
    } else if (parsed.type === 'sidebar') {
      handleDrop(parseInt(parsed.employeeId, 10), employee.id, 'sidebar');
    }
  };

  const avatarSize = 40 + (zoomLevel * 10);
  const nodeWidth = 160 + (zoomLevel * 20);

  return (
    <div className="org-node-container">
      <div
        className="org-node"
        draggable
        onDragStart={(e) => onChartDragStart(e, employee)}
        onDragOver={onDragOver}
        onDrop={onDrop}
        data-team={employee.team}
        style={{
          width: `${nodeWidth}px`,
          border: `2px solid ${getTeamColor(employee.team)}`,
        }}
      >
        <div className="org-employee-avatar">
          <img
            src={employee.image}
            alt={employee.name}
            style={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: '8px',
              objectFit: 'cover',
              border: `2px solid ${getTeamColor(employee.team)}`
            }}
          />
        </div>
        <div className="org-employee-info">
          <div className="org-employee-name">{employee.name}</div>
          <div className="org-employee-designation">{employee.designation}</div>
          <div className="org-team-chip" style={{
            background: getTeamColor(employee.team),
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '0.7rem',
            borderRadius: 4,
            padding: '2px 8px',
            marginTop: 2,
            display: 'inline-block'
          }}>{employee.team}</div>
        </div>
      </div>
      {directReports.length > 0 && (
        <div className="org-children">
          {directReports.map(report => (
            <EmployeeNode
              key={report.id}
              employee={report}
              employees={employees}
              handleDrop={handleDrop}
              onChartDragStart={onChartDragStart}
              zoomLevel={zoomLevel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OrgChart = ({ employees, handleDrop, zoomLevel, setZoomLevel }) => {
  const rootEmployee = employees.find(emp => emp.manager === null);

  const onChartDragStart = (e, employee) => {
    e.dataTransfer.setData('custom-employee', JSON.stringify({ type: 'chart', employee }));
  };

  return (
    <div className="org-chart-container">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '10px' }}>
        <div className="zoom-controls" style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title="Zoom Out">
            <IconButton onClick={() => setZoomLevel(z => Math.max(z - 1, -2))} disabled={zoomLevel <= -2}>
              <ZoomOutIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Zoom In">
            <IconButton onClick={() => setZoomLevel(z => Math.min(z + 1, 3))} disabled={zoomLevel >= 3}>
              <ZoomInIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="org-chart" style={{ padding: `${30 + (zoomLevel * 5)}px` }}>
        <div className="org-chart-background"></div>
        {rootEmployee && (
          <EmployeeNode
            employee={rootEmployee}
            employees={employees}
            handleDrop={handleDrop}
            onChartDragStart={onChartDragStart}
            zoomLevel={zoomLevel}
          />
        )}
      </div>
    </div>
  );
};

const OrganizationChartPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [loading, setLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(0);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await API.getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to load employees:', error);
      toast.error('Failed to load employees');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEmployee = async (employeeId, updates, fromSidebar = false) => {
    try {
      await API.updateEmployee(employeeId, updates);
      await loadEmployees();
      if (fromSidebar) {
        toast.success('Employee Successfully Added');
      } else {
        toast.success('Employee Successfully Updated');
      }
    } catch (error) {
      console.error('Failed to update employee:', error);
      toast.error('Failed to update employee');
    }
  };

  const handleDrop = async (employeeId, newManagerId, fromSidebar = false) => {
    const ceo = employees.find(emp => emp.manager === null);
    if (employeeId === ceo?.id) {
      toast.error('Ceo cannot be reassigned');
      return;
    }
    if (employeeId === newManagerId) {
      toast.error('Cannot assign employee as their own manager');
      return;
    }
    if (wouldCreateCircularReference(employeeId, newManagerId)) {
      toast.error('Cannot create circular reporting structure');
      return;
    }
    await handleUpdateEmployee(employeeId, { manager: newManagerId }, fromSidebar);
  };

  const wouldCreateCircularReference = (employeeId, newManagerId) => {
    let currentManagerId = newManagerId;
    while (currentManagerId !== null) {
      if (currentManagerId === employeeId) {
        return true;
      }
      const manager = employees.find(emp => emp.id === currentManagerId);
      currentManagerId = manager ? manager.manager : null;
    }
    return false;
  };

  const filteredChartEmployees = selectedTeam
    ? employees.filter(emp => {
        if (emp.team === selectedTeam) return true;
        const isAncestorOfSelected = employees
          .filter(e => e.team === selectedTeam)
          .some(e => {
            let currentManagerId = e.manager;
            while (currentManagerId !== null) {
              if (currentManagerId === emp.id) return true;
              const manager = employees.find(m => m.id === currentManagerId);
              currentManagerId = manager ? manager.manager : null;
            }
            return false;
          });
        return isAncestorOfSelected;
      })
    : employees;

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading organization chart...</p>
      </div>
    );
  }

  const onSidebarDragStart = (e, employee) => {
    e.dataTransfer.setData('custom-employee', JSON.stringify({ type: 'sidebar', employeeId: employee.id }));
  };

  const patchedHandleDrop = (employeeId, newManagerId, type) => {
    handleDrop(employeeId, newManagerId, type === 'sidebar');
  };

  return (
    <div className="organization-chart-page">
      <Toaster position="top-center" />
      <div className="main-content">
        <Sidebar
          employees={employees}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          onSidebarDragStart={onSidebarDragStart}
        />
        <div style={{ flex: 1, background: '#fff', minWidth: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="chart-header">
            <h2 className="chart-title">
              {selectedTeam ? `${selectedTeam} Team Structure` : 'Organization Structure'}
            </h2>
          </div>
          <OrgChart
            employees={filteredChartEmployees}
            handleDrop={patchedHandleDrop}
            zoomLevel={zoomLevel}
            setZoomLevel={setZoomLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationChartPage;