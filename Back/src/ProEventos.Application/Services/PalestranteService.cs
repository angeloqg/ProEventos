using System;
using System.Threading.Tasks;

using ProEventos.Application.Contratos;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Application.Services
{
    public class PalestranteService : IPalestranteService
    {
        private readonly IGeralPersistence _geralPersistence;
        private readonly IPalestrantePersistence _palestrantePersistence;

        public PalestranteService(IGeralPersistence geralPersistence, IPalestrantePersistence palestrantePersistence)
        {
            _geralPersistence = geralPersistence;
            _palestrantePersistence = palestrantePersistence;
        }

        public async Task<Palestrante> AddPalestrante(Palestrante model)
        {
            try
            {
                _geralPersistence.Add<Palestrante>(model);

                if (await _geralPersistence.SaveChangesAsync())
                {
                    return await _palestrantePersistence.GetPalestranteByIdAsync(model.Id, false);
                }

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Palestrante> UpdatePalestrante(int palestranteId, Palestrante model)
        {
            try
            {
                var palestrante = await _palestrantePersistence.GetPalestranteByIdAsync(palestranteId, false);

                if (palestrante == null) return null;

                model.Id = palestranteId;

                _geralPersistence.Update(model);

                if (await _geralPersistence.SaveChangesAsync())
                {
                    return await _palestrantePersistence.GetPalestranteByIdAsync(model.Id, false);
                }

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeletePalestrante(int palestranteId)
        {
            try
            {
                var palestrante = await _palestrantePersistence.GetPalestranteByIdAsync(palestranteId, false);

                if (palestrante == null) throw new Exception("Evento para exclusão inexistente!");

                _geralPersistence.Delete<Palestrante>(palestrante);

                return await _geralPersistence.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Palestrante[]> GetAllPalestranteAsync(bool includeEventos = false)
        {
            try
            {
                var palestrantes = await _palestrantePersistence.GetAllPalestranteAsync(includeEventos);

                if (palestrantes == null)
                    return null;

                return palestrantes;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Palestrante[]> GetAllPalestranteByNomeAsync(string nome, bool includeEventos = false)
        {
            try
            {
                var palestrantes = await _palestrantePersistence.GetAllPalestranteByNomeAsync(nome, includeEventos);

                if (palestrantes == null)
                    return null;

                return palestrantes;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos = false)
        {
            try
            {
                var palestrante = await _palestrantePersistence.GetPalestranteByIdAsync(palestranteId, includeEventos);

                if (palestrante == null)
                    return null;

                return palestrante;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
