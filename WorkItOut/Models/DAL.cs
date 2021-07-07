using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using Dapper;
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

        public static Workouts GetSingleWorkouts(int id)
        {
            return db.Get<Workouts>(id);
        }

        public static void AddWorkout(Workouts work)
        {
            // stretch - add in confirmation before user submits
            db.Insert(work);
        }

        public static void RemoveWorkOut(int id)
        {
            // do we need this? admin only 
            Workouts workout = new Workouts();
            workout.workoutsId = id;
            db.Delete(workout);
        }

        // add a method to update a workout, but actually just add it to retain 
        // original version of it.f
        #endregion
        #region WorkoutsLog
        public static void LogWorkout(WorkoutLog log)
        {
            db.Insert(log);
        }
        public static List<WorkoutLog> GetWorkoutLogs()
        {
            // probably want to add a user id param
            return db.GetAll<WorkoutLog>().ToList();
        }
        public static void EditWorkoutLog(WorkoutLog log)
        {
            db.Update(log);
        }
        #endregion
    }
}

