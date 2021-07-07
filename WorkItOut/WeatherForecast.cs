using System;

namespace WorkItOut
{

	//Currently updating this file 
// adding another comment to practice git
// adding another comment to practice git
// adding another comment to practice git
// adding another comment to practice git
	public class WeatherForecast
	{
		public DateTime Date { get; set; }

		public int TemperatureC { get; set; }

		public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

		public string Summary { get; set; }
	}
}
