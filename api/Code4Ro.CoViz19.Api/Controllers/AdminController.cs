using Code4Ro.CoViz19.Api.Models;
using Code4Ro.CoViz19.Api.Swagger;
using Code4Ro.CoViz19.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.Filters;
using System.Threading.Tasks;

namespace Code4Ro.CoViz19.Api.Controllers
{
    [ApiController]
    [Route("api/v1/admin")]
    [Produces("application/json")]
    public class AdminController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AdminController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [SwaggerOperation(Summary = "Get latest data provided by Ministry of Health")]
        [SwaggerResponse(200, "Upload was successful")]
        [SwaggerResponse(500, "Something went wrong when getting data", typeof(ErrorModel))]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        [SwaggerResponseExample(200, typeof(LatestDataExample))]
        public async Task<IActionResult> UploadParsedData([FromBody] ParsedDataModel parsedData)
        {
            return new OkObjectResult();
        }
    }
}