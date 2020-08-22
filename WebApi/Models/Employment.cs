using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Employment
    {
        public int EmploymentId { get; set; }
        public int CompanyId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime EmploymentStartDate { get; set; }
        public DateTime? EmploymentEndDate { get; set; }
    }
}
