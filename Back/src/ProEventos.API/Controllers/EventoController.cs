using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private IEnumerable<Evento> _evento = new Evento[] {
                    new Evento(){
                    EventoId = 1,
                    Tema = "Angular 11 e .Net 5",
                    Local = "Belo Horizonte",
                    Lote = "1º Lote",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    ImagemURL = "Foto.png"
                },
                    new Evento(){
                    EventoId = 2,
                    Tema = "React Js",
                    Local = "Curitiba",
                    Lote = "2º Lote",
                    QtdPessoas = 310,
                    DataEvento = DateTime.Now.AddDays(4).ToString("dd/MM/yyyy"),
                    ImagemURL = "Palestra.jpg"
                }
            };
        public EventoController()
        {

        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
     
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> Get(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
     
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPost("PostParam")]
        public string PostParam(string nome)
        {
            return $"Exemplo de Post: {nome}";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put: {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete: {id}";
        }
    }
}