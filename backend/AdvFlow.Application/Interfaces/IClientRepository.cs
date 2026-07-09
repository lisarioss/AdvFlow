using AdvFlow.Domain.Entities;

namespace AdvFlow.Application.Interfaces;

public interface IClientRepository
{
    Task<List<Client>> GetAllAsync();

    Task<Client?> GetByIdAsync(Guid id);

    Task AddAsync(Client client);
}