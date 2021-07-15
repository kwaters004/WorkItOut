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
		#region WorkoutLogs

		[HttpPost("addlog")]
        public bool AddToWorkoutlog(WorkoutLog newlog)
        {
            DAL.LogWorkout(newlog);
            return true;
        }

        [HttpGet("getlogs/{id}")]
        public List<WorkoutLog> GetWorkoutLogs(int id)
        {
            return DAL.GetWorkoutLogs(id);
        }

        #endregion

        [HttpPost("isuser")]
        public string Isuser([FromBody] User user)
        {
            User theUser = DAL.ConfirmUser(user);
            string json = JsonSerializer.Serialize(theUser);
            return json;
        }


        [HttpDelete("remove/{workoutId}")]
        public bool RemoveFromWorkOutlog(int id)
        {
            DAL.RemoveWorkOut(id);
            return true;
        }

        [HttpPost("editlog")]
        public void EditWorkoutLog([FromBody] WorkoutLog log)
        {
            DAL.EditWorkoutLog(log);
                
        }

        [HttpGet("GetFavorites/{id}")]
        public List<Favorites> GetFavorites(int id)
        {
            return DAL.GetFavorites(id);
        }

        [HttpGet("joindb/{id}")]
        public string GetUserJoinDB(int id)
        {
            List<UserLog> UsersJoin = DAL.GetUserProfile(id);

            string joinTheParty = JsonSerializer.Serialize(UsersJoin);
            return joinTheParty;
        }

        [HttpPost("addfave")]
        public bool AddFavorites(Favorites fav)
        {
            DAL.AddFavorite(fav);
            return true;
        }

        [HttpDelete("removeFave/{id}")]
        public bool RemoveFavorites(int id)
        {
            DAL.DeleteFavorite(id);
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
