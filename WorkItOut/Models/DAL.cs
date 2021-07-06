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

		public static List<Favorites> GetFavorites()
		{
			return db.GetAll<Favorites>().ToList();
		}

		public static void AddFavorite(Favorites fave){
			db.Insert(fave);
		}


		public static void AddUser(User user){
			db.Insert(user);
		}


		
		
	}
}
