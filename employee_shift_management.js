let employees = [
    {
      name: "John",
      shifts: [
        { day: "Monday", hours: 8 },
        { day: "Wednesday", hours: 6 },
        { day: "Friday", hours: 7 }
      ]
    },
    {
      name: "Jane",
      shifts: [
        { day: "Tuesday", hours: 8 },
        { day: "Thursday", hours: 8 },
        { day: "Saturday", hours: 5 }
      ]
    },
    {
      name: "Sam",
      shifts: [
        { day: "Monday", hours: 4 },
        { day: "Wednesday", hours: 5 },
        { day: "Friday", hours: 6 }
      ]
    },
    {
      name: "Emily",
      shifts: [
        { day: "Tuesday", hours: 6 },
        { day: "Thursday", hours: 7 },
        { day: "Sunday", hours: 8 }
      ]
    }
  ];
  
const displayEmployeeShifts = (employee) => {
    console.log(`Employee: ${employee.name}`);
    console.log("Shifts:");
    employee.shifts.forEach(shift => {
      console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
};

const assignShift = (employeeName, day, hours) => {
    let employee = employees.find(emp => emp.name === employeeName);
  
    if (!employee) {
      console.log(`Error: Employee with name ${employeeName} not found.`);
      return;
    }
    let shiftExists = employee.shifts.some(shift => shift.day === day);
  
    if (shiftExists) {
      console.log(`Error: ${employeeName} already has a shift on ${day}.`);
    } else {
      employee.shifts.push({ day, hours });
      console.log(`Shift assigned: ${employeeName} will work on ${day} for ${hours} hours.`);
    }
};
  