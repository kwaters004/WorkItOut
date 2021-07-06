using System;
using Xunit;
using WorkItOut.Models;

namespace WorkItOutTests
{
	public class UnitTest1
	{
		[Fact]
		public void Test1()
		{
			Favorites fave = new Favorites();
			fave.exerciseId = 3;
			DAL.AddFavorite(fave);
		}


	}
}
