using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersistence
    {
        Task<Palestrante[]> GetAllPalestranteAsync(bool includeEventos = false);    
        Task<Palestrante[]> GetAllPalestranteByNomeAsync(string nome, bool includeEventos = false); 
        Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos = false);        
    }
}