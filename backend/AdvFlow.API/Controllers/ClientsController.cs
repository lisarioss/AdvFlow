using Microsoft.AspNetCore.Mvc;
using AdvFlow.Application.Interfaces;
using AdvFlow.Domain.Entities;

namespace AdvFlow.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClientsController : ControllerBase
{
    private readonly IClientRepository _repository;

    public ClientsController(IClientRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var clients = await _repository.GetAllAsync();
        return Ok(clients);
    }

    [HttpPost]
    public async Task<IActionResult> Post(Client client)
    {
        await _repository.AddAsync(client);
        return CreatedAtAction(nameof(Get), new { id = client.Id }, client);
    }
}