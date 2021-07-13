using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WorkItOut.Controllers
{
    [Route("weather")]
    [ApiController]
    public class WeatherApiController : ControllerBase
    {
        private string IP;


        //public WeatherApiController()
        //{
        //    GetIPAddress();
        //}

        [HttpGet("currentweather/{ip}")]
        public async Task<string> Weatherinfo(string ip)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.weatherapi.com");
            var response = await client.GetAsync($"/v1/current.json?key=6a88200bcba94f3aa90133722211207&q={ip}");
            string json = await response.Content.ReadAsStringAsync();
            return json;
        }

        //[HttpGet("getip")]
        //public async Task<string> GetIPAddress()
        //{
        //    HttpClient client = new HttpClient();
        //    client.BaseAddress = new Uri("http://api.ipify.org");
        //    var resp = await client.GetAsync("/?format=json");
        //    string IPjson = await resp.Content.ReadAsStringAsync();
        //    var parsedObject = JObject.Parse(IPjson);
        //    IP = parsedObject["ip"].ToString();
        //    return IPjson;
        //}


    }
}
