using System.Threading.Tasks;

namespace Code4Ro.CoViz19.Api.Authentication
{
    public interface IGetApiKeyQuery
    {
        Task<ApiKey> Execute(string providedApiKey);
    }
}
