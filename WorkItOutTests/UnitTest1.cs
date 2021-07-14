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
			fave.workoutId = 3;
			DAL.AddFavorite(fave);
			// may want to add something in the DAL that will only add
			// favorite if it's not already on the list
		}

		[Fact]
		public void GetFavoritesTest()
		{
			List<Favorites> faves = DAL.GetFavorites(1);
			Assert.Equal(1, faves[0].favoriteId);
		}


		[Fact]
		public void AddUserTest()
		{
			User user = new User();
			user.firstname = "Test";
			user.lastname = "Person";
			DAL.AddUser(user);
		}


		[Fact]
		public void AddWorkoutTest()
		{
			Workouts wout = new Workouts();
			wout.recommendedReps = 5;
			wout.recommendedSets = 3;
			DAL.AddWorkout(wout);
		}



		[Fact]
		public void GetAllWorkoutsTest()
		{
			List<Workouts> workouts = DAL.GetAllWorkouts();
			Assert.Equal(5, workouts[0].recommendedReps);
		}

		[Fact]
		public void GetSingleWorkoutsTest()
		{
			Workouts workout = DAL.GetSingleWorkouts(1);
			Assert.Equal(5, workout.recommendedReps);
		}

		[Fact]
		public void RemoveWorkoutTest()
		{
			DAL.RemoveWorkOut(1);
		}


		[Fact]
		public void LogWorkoutTest()
		{
			WorkoutLog log = new WorkoutLog();
			log.reps = 5;
			log.sets = 4;
			DAL.LogWorkout(log);
		}

		[Fact]
		public void GetWorkoutLogs()
{
			List<WorkoutLog> logs = DAL.GetWorkoutLogs();
			Assert.Equal(5, logs[0].reps);
		}

		[Fact]
		public void EditWorkoutLog()
		{
			WorkoutLog log = new WorkoutLog();
			log.workoutlogId = 1;
			log.reps = 4;
			DAL.EditWorkoutLog(log);
			
		}

	}
}
