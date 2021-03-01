using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using ProEventos.Application.Contratos;
using ProEventos.Domain;

namespace ProEventos.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PalestranteController : ControllerBase
    {
        private readonly IPalestranteService _palestranteService;

        public PalestranteController(IPalestranteService palestranteService)
        {
            _palestranteService = palestranteService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var palestrantes = await _palestranteService.GetAllPalestranteAsync(true);

                if (palestrantes == null) return NotFound("Nenhum palestrante encontrado!");

                return Ok(palestrantes);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar palestrantes. Erro {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var palestrante = await _palestranteService.GetPalestranteByIdAsync(id, true);

                if (palestrante == null) return NotFound("Nenhum palestrante encontrado!");

                return Ok(palestrante);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar palestrante. Erro {ex.Message}");
            }
        }

        [HttpGet("palestrante/{nome}")]
        public async Task<IActionResult> GetByNome(string nome)
        {
            try
            {
                var palestrantes = await _palestranteService.GetAllPalestranteByNomeAsync(nome, true);

                if (palestrantes == null) return NotFound("Palstrantes por nome não encontrado!");

                return Ok(palestrantes);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Erro ao tentar recuperar palestrantes. Erro {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Palestrante model)
        {
            try
            {
                var palestrante = await _palestranteService.AddPalestrante(model);

                if (palestrante == null) return BadRequest("Erro ao adicionar o palestrante!");

                return Ok(palestrante);
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao adicionar o palestrante. Erro {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<ActionResult> Put(int palestranteId, Palestrante model)
        {
            try
            {
                var palestrante = await _palestranteService.UpdatePalestrante(palestranteId, model);

                if (palestrante == null) return BadRequest("Erro ao atualizar o palestrante!");

                return Ok(palestrante);
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao atualizar o palestrante. Erro {ex.Message}");
            }
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(int palestranteId)
        {
            try
            {
                if (await _palestranteService.DeletePalestrante(palestranteId))
                    return Ok("Palestrante deletado!");
                else
                    return BadRequest("Palestrante não deletado!");
            }
            catch (Exception ex)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError,
                       $"Falha não identificada ao excluir o palestrante. Erro {ex.Message}");
            }
        }
    }
}
