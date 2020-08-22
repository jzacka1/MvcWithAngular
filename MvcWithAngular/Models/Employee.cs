using System;
using System.Collections.Generic;

namespace MvcWithAngular.Models
{
    public partial class Employee
    {
        public Employee()
        {
            PlanEnrollment = new HashSet<PlanEnrollment>();
        }

        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string HomeState { get; set; }
        public string Gender { get; set; }

        public virtual ICollection<PlanEnrollment> PlanEnrollment { get; set; }
    }
}
