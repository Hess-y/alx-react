// Function to get the current year
function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

// Function to get the footer copy based on the isIndex argument
function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}
