using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api_test;
using Api_test.Models;
using Api_test.DataManager;

namespace Api_test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly GameRepository _gameRepository;

        public GamesController(GameRepository context)
        {
            _gameRepository = context;
        }

        // GET: api/Games
        [HttpGet]
        public IEnumerable<Game> GetGames()
        {
            return _gameRepository.GetAll().OrderBy(g => g.GameNaam);
        }

    }
}
