using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using ProEventos.Domain;
using ProEventos.Persistence.Contextos;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence.Repositories
{
    public class EventoRepository : IEventoPersistence
    {
        private readonly ProEventosContext _context;
        public EventoRepository(ProEventosContext context)
        {
            _context = context;
            //_context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.AsNoTracking()
                                       .Include(l => l.Lotes)
                                       .Include(r => r.RedesSociais);

            if (includePalestrantes)
            {
                query = query.Include(ep => ep.EventosPalestrantes)
                             .ThenInclude(ep => ep.Palestrante);
            }

            query = query.OrderBy(e => e.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.AsNoTracking()
                                        .Include(l => l.Lotes)
                                        .Include(r => r.RedesSociais);

            if (includePalestrantes)
            {
                query = query.Include(ep => ep.EventosPalestrantes)
                             .ThenInclude(ep => ep.Palestrante);
            }

            query = query.OrderBy(e => e.Id)
                         .Where(e => e.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos.AsNoTracking()
                                        .Include(l => l.Lotes)
                                        .Include(r => r.RedesSociais);

            if (includePalestrantes)
            {

                query = query.Include(ep => ep.EventosPalestrantes)
                             .ThenInclude(ep => ep.Palestrante);
            }

            query = query.OrderBy(e => e.Id)
                         .Where(e => e.Id == eventoId);

            return await query.FirstOrDefaultAsync();
        }
    }
}
