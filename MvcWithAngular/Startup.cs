using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MvcWithAngular.Models;
using RestfulApiClient.Interfaces;
using RestfulApiClient.Services.GitHub;
using RestSharp.Deserializers;

namespace MvcWithAngular
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
			services.AddControllersWithViews();

			services.AddTransient<IGitHubService, GitHubService>()
				.AddTransient<ICacheService, InMemoryCache>()
				.AddTransient<IDeserializer, RestfulApiClient.JsonSerializer>();

			services.AddDbContext<TestDbContext>(options =>
				options.UseSqlServer(Configuration.GetConnectionString("TestDb")));

			//services.AddCors(options =>
			//{
			//	options.AddPolicy(
			//	  "CorsPolicy",
			//	  builder => builder.WithOrigins("https://localhost:44399")
			//	  .AllowAnyMethod()
			//	  .AllowAnyHeader()
			//	  .AllowCredentials());
			//});

			services.AddCors(options =>
			{
				options.AddPolicy("CorsPolicy",
					builder => builder.WithOrigins("https://localhost", "https://localhost:44399")
					//.WithMethods("Get")
					.AllowAnyMethod()
					.AllowAnyHeader()
					.AllowCredentials());
			});

			services.AddMvc(option => {
				option.EnableEndpointRouting = false;
			});

			//services.AddOptions();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthorization();

			//app.UseEndpoints(endpoints =>
			//{
			//	endpoints.MapControllerRoute(
			//		name: "default",
			//		pattern: "{controller=Home}/{action=Index}/{id?}");
			//});

			//app.UseCors(builder =>
			//	builder.WithOrigins("https://localhost:44399"));

			app.UseCors("CorsPolicy");

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});

			//app.UseMvc(cfg =>
			//{
			//	cfg.MapRoute("MainRoute",
			//		"{controller}/{action}/{id?}",
			//		new
			//		{
			//			controller = "Home",
			//			action = "Index"
			//		}
			//	);

			//	cfg.MapSpaFallbackRoute("spa-fallback",
			//		new controller = "Home")
			//});
		}
	}
}
