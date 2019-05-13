using Api_test.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_test.DataManager
{
    public class GameRepository : IDataRepository<Game>
    {
        readonly GameContext _gameContext;
        readonly DbSet<Game> _games;

        public GameRepository(GameContext context)
        {
            _gameContext = context;
            _games = _gameContext.Games;
        }

        public void Add(Game game)
        {
            _games.Add(game);
        }

        public void Delete(Game game)
        {

            _games.Remove(game);
        }

        public Game Get(long id)
        {
            return _games.SingleOrDefault(g => g.GameId == id);
        }

        public IEnumerable<Game> GetAll()
        {
            return _games;
        }

        public void Update(Game game)
        {
            _gameContext.Update(game);
        }

        public void SaveChanges()
        {
            _gameContext.SaveChanges();
        }
    }
}
