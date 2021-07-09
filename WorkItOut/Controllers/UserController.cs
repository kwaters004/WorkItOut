using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkItOut.Models;

namespace WorkItOut.Controllers
{
    [Route("user")]
    [ApiController]

    public class UserController : ControllerBase

    {
        [HttpPost("add")]
        public bool AddToWorkoutlog(WorkoutLog newlog)
        {
            Models.DAL.LogWorkout(newlog);
            return true;
        }

        [HttpPost("isuser")]
        public bool Isuser(string email)
        {
            return DAL.ConfirmUser(email);
        }


        [HttpGet("GetWorkoutLogs/{id}")]
        public List<WorkoutLog> GetWorkoutLogs()
        {
            return DAL.GetWorkoutLogs();
        }

        [HttpDelete("remove/{workoutsId}")]
        public bool RemoveFromWorkOutlog(int id)
        {
            DAL.RemoveWorkOut(id);
            return true;
        }

        [HttpPost]
        public static void EditWorkoutLog(WorkoutLog log)
        {
            DAL.EditWorkoutLog(log);
        }

        [HttpGet("GetFavorites")]
        public List<Favorites> GetFavorites()
        {
            return DAL.GetFavorites();
        }

        [HttpPost("add")]
        public bool AddFavorites(Favorites fav)
        {
            DAL.AddFavorite(fav);
            return true;
        }

        [HttpDelete("remove")]
        public bool RemoveFavorites(Favorites fav)
        {
            DAL.DeleteFavorite(fav);
            return true;
        }
    }
}
