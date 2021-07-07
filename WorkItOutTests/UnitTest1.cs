using System;
using Xunit;
using WorkItOut.Models;
using System.Collections.Generic;

namespace WorkItOutTests
{
	public class UnitTest1
	{
		[Fact]
		public void AddFavoriteTest()
		{
			Favorites fave = new Favorites();
			fave.exerciseId = 3;
			DAL.AddFavorite(fave);
			// may want to add something in the DAL that will only add
			// favorite if it's not already on the list
		}

		[Fact]
		public void GetFavoritesTest()
{
			List<Favorites> faves = DAL.GetFavorites();
		}

	}
}
