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

        [HttpGet("GetAllWorkOuts/")]
        public List<Workouts> GetAllWorkOuts()
        {
            return DAL.GetAllWorkouts();
        }

        [HttpGet("getworkouts/{id}")]
        public bool GetSingleWorkOuts(int id)
        {
             DAL.GetSingleWorkouts(id);
            return true;
        }

        [HttpPut("add")]
        public void AddWorkout([FromBody] Workouts work)
        {
            DAL.AddWorkout(work);
        }

        [HttpDelete("remove/{workoutsId}")]
        public void RemoveWorkOut(int id)
        {
            DAL.RemoveWorkOut(id);
        }


    }
}