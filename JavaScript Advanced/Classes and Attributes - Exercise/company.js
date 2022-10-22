class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!")
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                avgSalary: 0,
                allSalaries: 0,
                employees: []
            }
        }
        this.departments[department]["allSalaries"] += salary
        this.departments[department]["employees"].push({ name, salary, position })
        this.departments[department]["avgSalary"] = this.departments[department]["allSalaries"] / this.departments[department]["employees"].length
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let highestAvgSalary = Object.values(this.departments).sort((departmentOneInfo, departmentTwoInfo) => departmentTwoInfo.avgSalary - departmentOneInfo.avgSalary)
        let sortedEmployees = highestAvgSalary.forEach((employee) => employee.employees.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name)))
        let res = `Best Department is: ${Object.keys(this.departments)[0]}\n`
        res += `Average salary: ${highestAvgSalary[0].avgSalary.toFixed(2)}\n`
        for (let i = 0; i < highestAvgSalary[0].employees.length; i++) {
            if (i === highestAvgSalary[0].employees.length - 1) {
                res += `${highestAvgSalary[0].employees[i].name} ${highestAvgSalary[0].employees[i].salary} ${highestAvgSalary[0].employees[i].position}`
                break
            }
            res += `${highestAvgSalary[0].employees[i].name} ${highestAvgSalary[0].employees[i].salary} ${highestAvgSalary[0].employees[i].position}\n`
        }
        return res
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
