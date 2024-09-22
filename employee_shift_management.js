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