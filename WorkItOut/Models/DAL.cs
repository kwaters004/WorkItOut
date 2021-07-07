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

		public static List<Favorites> GetFavorites()
		{
			return db.GetAll<Favorites>().ToList();
		}


		#region Favorites


		public static void AddFavorite(Favorites fave){
			db.Insert(fave);
		}

		public static void DeleteFavorite(Favorites fave){
			db.Delete(fave);
		}

		#endregion

		public static void AddUser(User user){
			db.Insert(user);
		}


		
		
	}
}
