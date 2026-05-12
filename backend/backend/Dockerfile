FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o out
EXPOSE 5000
CMD ["dotnet", "out/backend.dll"]