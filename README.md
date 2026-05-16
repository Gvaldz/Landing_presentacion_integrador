```mermaid
graph TD
    %% Estilos
    classDef client fill:#e6f2ee,stroke:#1E7A5E,stroke-width:2px,color:#145541;
    classDef proxy fill:#333,stroke:#000,stroke-width:2px,color:#fff;
    classDef service fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0c4a6e;
    classDef ai fill:#fef08a,stroke:#ca8a04,stroke-width:2px,color:#713f12;
    classDef db fill:#f1f5f9,stroke:#64748b,stroke-width:2px,color:#0f172a;

    subgraph "Capa de Presentación (Clientes)"
        A[Panel Web <br/> Angular] ::: client
        B[App Móvil <br/> Flutter] ::: client
    end

    subgraph "Infraestructura Cloud (AWS EC2 / VPS)"
        
        C{API Gateway <br/> Nginx + Certbot SSL} ::: proxy

        subgraph "Gestor de Procesos (PM2)"
            D[Core Backend <br/> Go + Gin] ::: service
            E[Servicio Inteligencia Artificial <br/> Python] ::: ai
        end

        subgraph "Capa de Datos"
            F[(Base de Datos Principal <br/> PostgreSQL/MySQL)] ::: db
            G[(Caché / Pub-Sub <br/> Redis)] ::: db
        end
    end

    %% Conexiones desde Clientes
    A -- "HTTPS (REST)" --> C
    B -- "HTTPS (REST)" --> C
    B -- "WSS (WebSockets: GPS y Subasta)" --> C

    %% Conexiones Internas desde Proxy
    C -- "Proxy Pass (Puerto 8080)" --> D

    %% Conexiones Microservicios
    D -- "HTTP Interno <br/> (Solicita precio justo)" --> E
    D -- "HTTP Interno <br/> (Solicita resumen NLP)" --> E

    %% Conexiones a Datos
    D -- "Lee/Escribe Transacciones" --> F
    E -- "Lee Reseñas / Actualiza Modelo" --> F
    
    D -- "Guarda Coordenadas GPS temporales" --> G
    D -- "Emite eventos WebSocket (Subasta)" --> G
```