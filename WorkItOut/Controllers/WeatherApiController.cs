using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace WorkItOut.Controllers
{
    [Route("weather")]
    [ApiController]
    public class WeatherApiController : ControllerBase
    {
    //    private readonly ILogger<WeatherApiController> _logger;

    //    public WeatherApiController(ILogger<WeatherApiController> logger)
    //    {
    //        _logger = logger;
    //    }

        [HttpGet("currentweather")]
        public async Task<string> Weatherinfo()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.weatherapi.com");
            var response = await client.GetAsync("/v1/current.json?key=6a88200bcba94f3aa90133722211207&q=Paris");
            string json = await response.Content.ReadAsStringAsync();
            return json;
        }


    }
}
