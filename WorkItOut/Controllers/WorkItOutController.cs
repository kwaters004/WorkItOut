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
        [HttpGet("{id}")]
        public List<Workouts> GetAllWorkOuts(int id)
        {
            return 3;
            //DAL.GetAllWorkOuts();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public List<Workouts> GetSingleWorkOuts(int id)
        {
            return 3;
            //DAL.GetAllWorkOuts();
            //hello
        }


        // POST api/<ValuesController>
        [HttpPost("add")]
        public bool AddWorkout(string equipment, string category, string musclegroups)
        {
            //DAL.AddWorkout(equipment, category, musclegroups)
            return true;
        }

        [HttpDelete("remove/{workoutsId}")]
        public bool RemoveWorkOut(int id)
        {
            //DAL.removeWorkOut(id);
            return true;
        }
    }
}
