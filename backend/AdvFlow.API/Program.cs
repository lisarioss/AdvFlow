using Microsoft.EntityFrameworkCore;
using AdvFlow.Persistence.Context;

var builder = WebApplication.CreateBuilder(args);

// Banco de Dados
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

// OpenAPI
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/", () => "AdvFlow API está funcionando!");

app.Run();