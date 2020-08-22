using System;
using System.Collections.Generic;
using System.Text;

namespace RestfulApiClient.Services.GitHub.Models
{
	public class User
	{
		public string Name { get; set; }
		public int id { get; set; }
		public string type { get; set; }
		public string url { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at  { get; set; }
}
}
