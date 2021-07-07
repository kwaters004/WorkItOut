using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

using MySql.Data.MySqlClient;

namespace WorkItOut.Models
{
	public class DAL
	{
        public static IDbConnection db = new MySqlConnection("Server = localhost; Database=workout;Uid=root;Password=abc123");
        // will move this to the config file at some point
        #region Favorites
        public static List<Favorites> GetFavorites()
        {
            // will want to add in user id param
            return db.GetAll<Favorites>().ToList();
        }
        public static void AddFavorite(Favorites fave)
        {
            // will want to add in user id param
            db.Insert(fave);
        }
        public static void DeleteFavorite(Favorites fave)
        {
            // will want to add user id column to database          
            db.Delete(fave);
        }
        #endregion
        #region User
        public static void AddUser(User user)
        {
            db.Insert(user);
        }
        public static void EditUser(User user)
        {
            db.Update(user);
        }

        #endregion
        #region Workouts
        public static List<Workouts> GetAllWorkouts()
        {
            return db.GetAll<Workouts>().ToList();
        }

		public static void AddUser(User user){
			db.Insert(user);
		}


		
		
	}
}

