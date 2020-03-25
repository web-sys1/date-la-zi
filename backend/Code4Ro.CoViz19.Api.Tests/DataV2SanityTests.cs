using Microsoft.AspNetCore.Mvc.Testing;
using Shouldly;
using System.Net;
using System.Threading.Tasks;
using Xunit;

namespace Code4Ro.CoViz19.Api.Tests
{
    public class DataV2SanityTests : IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly CustomWebApplicationFactory<Startup> _factory;

        public DataV2SanityTests()
        {
            _factory = new CustomWebApplicationFactory<Startup>();
        }

        [Theory]
        [InlineData("/api/v2/data")]
        [InlineData("/api/v2/data/dailystats")]
        [InlineData("/api/v2/data/genderstats")]
        [InlineData("/api/v2/data/age-histogram")]
        [InlineData("/api/v2/data/quickstats")]
        [InlineData("/api/v2/data/last-update-date")]
        public async Task Doing_a_call_to_v2_data_endpoint_should_give_200_response(string route)
        {
            var httpClient = _factory.CreateClient();

            var response = await httpClient.GetAsync(route);

            response.StatusCode.ShouldBe(HttpStatusCode.OK);
        }

    }
}
