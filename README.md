description 
// Test Case 1: Employees available on Monday
listAvailableEmployees("Monday");
// Expected Output: 
// Employees available on Monday:
// Jane
// Emily

// Test Case 2: Employees available on Sunday
listAvailableEmployees("Sunday");
// Expected Output: 
// Employees available on Sunday:
// John
// Jane
// Sam

// Test Case 3: Employees available on Tuesday
listAvailableEmployees("Tuesday");
// Expected Output: 
// Employees available on Tuesday:
// John
// Sam

// Test Case 4: Employees available on a day with no shifts assigned (e.g., Saturday)
listAvailableEmployees("Saturday");
// Expected Output: 
// Employees available on Saturday:
// John
// Sam
// Emily
