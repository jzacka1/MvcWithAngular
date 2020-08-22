using RestfulApiClient.Interfaces;
using RestfulApiClient.Services.GitHub.Models;
using RestSharp;
using RestSharp.Deserializers;
using System;
using System.Collections.Generic;
using System.Text;

namespace RestfulApiClient.Services.GitHub
{
	public class GitHubService : BaseClient, IGitHubService
	{
		private string baseURL { get; set; }
		private string widget { get; set; }

		private string userName { get; set; }

		public GitHubService(ICacheService cache, IDeserializer serializer)
			: base(cache, serializer, "https://api.github.com/")
		{
			this.baseURL = baseURL;
			this.userName = "jzacka1";
		}

		public Models.User GetUserByUserName(string userName)
		{
			RestRequest request = new RestRequest("users/" + userName, Method.GET);
			return Get<User>(request);
		}
	}
}
