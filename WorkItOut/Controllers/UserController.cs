using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkItOut.Models;

namespace WorkItOut.Controllers
{
    //non-API controllers. 
    public class UserController : Controller
    {
        // GET: UserController
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost("add")]
        public bool AddToWorkoutlog(WorkoutLog newlog)
        {
            Models.DAL.LogWorkout(newlog);
                 return true;
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
