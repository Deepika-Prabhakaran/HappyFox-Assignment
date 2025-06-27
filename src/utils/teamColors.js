export const getTeamColor = (team) => {
  switch (team) {
    case "Executive":
      return "#4caf50";
    case "Engineering":
      return "#2196f3";
    case "IT":
      return "#9c27b0";
    case "Finance":
      return "#ff9800";
    case "Sales":
      return "#ff6b00";
    case "Marketing":
      return "#ffb300";
    case "HR":
      return "#e91e63";
    default:
      return "#e0e0e0";
  }
};
