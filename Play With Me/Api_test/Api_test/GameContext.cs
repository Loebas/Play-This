using Api_test.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_test
{
    public class GameContext : DbContext
    {
        public GameContext(DbContextOptions options)
         : base(options)
        {
        }

        
        public DbSet<Game> Games { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().HasData(new Game
            {
                GameId = 1,
                GameNaam = "Stratego",
                MinSpelers = 2,
                MaxSpelers =2


            }, new Game
            {
                GameId = 2,
                GameNaam = "Agricola",
                MinSpelers = 1,
                MaxSpelers = 4
            });
        }

    }
}