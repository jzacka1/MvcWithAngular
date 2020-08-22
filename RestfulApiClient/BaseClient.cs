using RestSharp;
using System;
using RestSharp.Deserializers;
using RestfulApiClient.Interfaces;

namespace RestfulApiClient
{
	public class BaseClient : RestClient
	{
		protected ICacheService _cache;
		protected IDeserializer _serializer;
		public BaseClient(ICacheService cache, IDeserializer serializer, string baseUrl){
			_cache = new InMemoryCache();
			_serializer = serializer;
			AddHandler("application/json", JsonSerializer.Default);
			AddHandler("text/json", JsonSerializer.Default);
			AddHandler("text/x-json", JsonSerializer.Default);
			BaseUrl = new Uri(baseUrl);
		}

		public override IRestResponse Execute(IRestRequest request)
		{
			var response = base.Execute(request);
			return response;
		}
		public override IRestResponse<T> Execute<T>(IRestRequest request)
		{
			var response = base.Execute<T>(request);
			return response;
		}

		public T Get<T>(IRestRequest request) where T : new()
		{
			var response = Execute<T>(request);
			if (response.StatusCode == System.Net.HttpStatusCode.OK)
			{
				return response.Data;
			}
			else
			{
				return default(T);
			}
		}

		//Retrieve data from existing cache, or create new cache if it doesn't exist.
		public T GetFromCache<T>(IRestRequest request, string cacheKey) where T : class, new()
		{
			var item = _cache.Get<T>(cacheKey);
			if (item == null)
			{
				var response = Execute<T>(request);
				if (response.StatusCode == System.Net.HttpStatusCode.OK)
				{
					_cache.Set(cacheKey, response.Data);
					item = response.Data;
				}
				else
				{
					return default(T);
				}
			}
			return item;
		}
	}
}
