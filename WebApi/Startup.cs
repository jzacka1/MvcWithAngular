using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RestfulApiClient.Interfaces;
using RestfulApiClient.Services.GitHub;
using RestSharp.Deserializers;
using WebApi.Models;

namespace WebApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllers();

			services.AddTransient<IGitHubService, GitHubService>()
				.AddTransient<ICacheService, InMemoryCache>()
				.AddTransient<IDeserializer, RestfulApiClient.JsonSerializer>();

			services.AddDbContext<TestDbContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("TestDb")));

			//services.AddCors(c =>
			//{
			//	c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
			//});

			services.AddCors(options =>
			{
				options.AddPolicy("CorsPolicy2",
					builder => builder
					//.AllowAnyOrigin()
					.WithOrigins("https://localhost", "https://localhost:44336/")
					.AllowAnyMethod()
					.AllowAnyHeader()
					.AllowCredentials());
			});


		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});

			app.UseCors("CorsPolicy2");

			//app.UseMvc();
		}
	}
}
