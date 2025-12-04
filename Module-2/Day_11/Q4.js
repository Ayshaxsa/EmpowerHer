function evaluateEmployees(employees) {

  const filtered = employees.filter(emp => emp.tasksCompleted > 5);


  const mapped = filtered.map(emp => {
    let performance = "";

    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }

    return {
      name: emp.name,
      performance: performance
    };
  });


  const priority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  const sorted = mapped.sort((a, b) => {
    return priority[b.performance] - priority[a.performance];
  });


  return sorted;
}

// again