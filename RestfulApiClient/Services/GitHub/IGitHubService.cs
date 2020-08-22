
namespace RestfulApiClient.Services.GitHub
{
	public interface IGitHubService
	{
		Models.User GetUserByUserName(string userName);
	}
}