using System;
using System.Collections.Generic;

namespace MvcWithAngular.Models
{
    public partial class PlanEnrollment
    {
        public int EnrollmentId { get; set; }
        public int EmployeeId { get; set; }
        public int PlanId { get; set; }
        public DateTime EnrollmentStartDate { get; set; }
        public DateTime EnrollmentEndDate { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Plan Plan { get; set; }
    }
}
