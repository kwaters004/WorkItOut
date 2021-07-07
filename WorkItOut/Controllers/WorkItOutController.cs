using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkItOut.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace WorkItOut.Controllers
{
    [Route("workout")]
    [ApiController]
    public class WorkOutsController : ControllerBase
    {
        // GET api/<ValuesController>/5
        [HttpGet("GetAllWorkOuts/{id}")]
        public List<Workouts> GetAllWorkOuts(int id)
        {
            return DAL.GetAllWorkouts();
        }
        // GET api/<ValuesController>/5
        [HttpGet("getworkouts/{id}")]
        public List<Workouts> GetSingleWorkOuts(int id)
        {
            return DAL.GetAllWorkouts();
            //hello
        }
        // POST api/<ValuesController>
        [HttpPost("add")]
        public void AddWorkout(Workouts workout)
        {
            //DAL.AddWorkout(equipment, category, musclegroups)

        }
        [HttpDelete("remove/{workoutsId}")]
        public void RemoveWorkOut(int id)
        {
            //DAL.removeWorkOut(id);

        }
    }
}