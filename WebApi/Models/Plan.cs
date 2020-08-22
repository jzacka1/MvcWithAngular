using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Plan
    {
        public Plan()
        {
            PlanEnrollment = new HashSet<PlanEnrollment>();
        }

        public int PlanId { get; set; }
        public string PlanType { get; set; }
        public string PlanName { get; set; }

        public virtual ICollection<PlanEnrollment> PlanEnrollment { get; set; }
    }
}
