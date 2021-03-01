using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using ProEventos.Application.Contratos;
using ProEventos.Domain;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        private readonly IEventoService _eventoService;

        public EventoController(IEventoService eventoService)
        {
            _eventoService = eventoService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync(true);

                if (eventos == null) return NotFound("Nenhum evento encontrado!");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar eventos. Erro {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var evento = await _eventoService.GetEventoByIdAsync(id, true);

                if (evento == null) return NotFound("Nenhum evento encontrado!");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar evento. Erro {ex.Message}");
            }
        }

        [HttpGet("tema/{tema}")]
        public async Task<IActionResult> GetByTema(string tema)
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosByTemaAsync(tema, true);

                if (eventos == null) return NotFound("Eventos por tema não encontrado!");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar eventos. Erro {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Evento model)
        {
            try
            {
                var evento = await _eventoService.AddEvento(model);

                if (evento == null) return BadRequest("Erro ao adicionar o evento!");

                return Ok(evento);
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao adicionar o evento. Erro {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put(int eventoId, Evento model)
        {
            try
            {
                var evento = await _eventoService.UpdateEvento(eventoId, model);
                if (evento == null) return BadRequest("Erro ao tentar adicionar evento.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao atualizar o evento. Erro {ex.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(int eventoId)
        {
            try
            {
                if (await _eventoService.DeleteEvento(eventoId))
                    return Ok("Evento Deletado!");
                else
                    return BadRequest("Evento não deletado!");
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao excluir o evento. Erro {ex.Message}");
            }
        }
    }
}