// Function to get the current year
export const function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

// Function to get the footer copy based on the isIndex argument
export const function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

export const function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
