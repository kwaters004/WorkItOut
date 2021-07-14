using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using WorkItOut.Models;

namespace WorkItOut.Controllers
{
    [Route("user")]
    [ApiController]

    public class UserController : ControllerBase

    {
        [HttpPost("addlog")]
        public bool AddToWorkoutlog(WorkoutLog newlog)
        {
            Models.DAL.LogWorkout(newlog);
            return true;
        }

        [HttpPost("isuser")]
        public string Isuser([FromBody] User user)
        {
            User theUser = DAL.ConfirmUser(user);
            string json = JsonSerializer.Serialize(theUser);
            return json;
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

        [HttpGet("GetFavorites/{id}")]
        public List<Favorites> GetFavorites(int id)
        {
            return DAL.GetFavorites(id);
        }

        [HttpGet("joindb")]
        public string GetUserProfile()
        {
            List<User> UsersJoin = DAL.GetUserProfile(2);
            string joinTheParty = JsonSerializer.Serialize(UsersJoin);
            return joinTheParty;
        }

        [HttpPost("addfave")]
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


        [HttpPost("addUser")]
        public void AddUser([FromBody] User user)
        {
                DAL.AddUser(user);
        }


        [HttpPost("edit")]
		public void UpdateUser([FromBody] User user)

		{
            DAL.EditUser(user);
            //return "hello";
            
		}

        



        //[HttpPost("getUser")]
        //public string GetUser([FromBody] User user)
        //{
        //    User u = DAL.GetAUser(user.email);
        //    string json = JsonSerializer.Serialize(u);
        //    return json;

        //}
    }
}
