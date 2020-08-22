using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestfulApiClient.Services.GitHub;
using RestfulApiClient.Services.GitHub.Models;

namespace MvcWithAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GitHubController : ControllerBase
    {

		private readonly IGitHubService _gitHubService;

		public GitHubController(IGitHubService gitHubService)
		{
			_gitHubService = gitHubService;
		}

		// GET: api/GitHub
		[HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GitHub/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GitHub
        [HttpPost(Name = "PostGit")]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/GitHub/5
        [HttpPut("{id}", Name = "PutGit")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}", Name = "DeleteGit")]
        public void Delete(int id)
        {
        }

		[HttpGet]
		[Route("[action]")]
		public User GetUserByName(string userName)
		{
			return _gitHubService.GetUserByUserName(userName);
		}
	}
}
