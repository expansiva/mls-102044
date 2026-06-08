/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/maintenanceForecastMetrics.defs.ts" enhancement="_blank"/>

export const maintenanceForecastMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "maintenanceForecastMetrics",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "maintenanceForecastMetrics",
      "tableName": "maintenance_forecast_metrics",
      "moduleId": "repairBay",
      "title": "Métricas de Manutenção Prevista",
      "purpose": "Rastrear previsões de manutenção e veículos com serviços pendentes futuros.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_at",
      "columns": [
        {
          "name": "event_at",
          "type": "timestamptz",
          "nullable": false,
          "default": "now()",
          "description": "Data/hora do evento de métrica."
        },
        {
          "name": "forecast_status",
          "type": "text",
          "nullable": false,
          "description": "Status da previsão."
        },
        {
          "name": "vehicle_id",
          "type": "uuid",
          "nullable": false,
          "description": "Veículo da previsão."
        },
        {
          "name": "forecast_type",
          "type": "text",
          "nullable": true,
          "description": "Tipo de manutenção prevista."
        },
        {
          "name": "forecast_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de previsões ativas."
        },
        {
          "name": "upcoming_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de manutenções previstas para o período."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "forecastStatus",
          "column": "forecast_status",
          "type": "text",
          "description": "Status da previsão"
        },
        {
          "dimensionId": "vehicleId",
          "column": "vehicle_id",
          "type": "uuid",
          "description": "Veículo da previsão"
        },
        {
          "dimensionId": "forecastType",
          "column": "forecast_type",
          "type": "text",
          "description": "Tipo de manutenção prevista"
        }
      ],
      "measures": [
        {
          "measureId": "forecastCount",
          "column": "forecast_count",
          "aggregation": "sum",
          "description": "Quantidade de previsões ativas"
        },
        {
          "measureId": "upcomingCount",
          "column": "upcoming_count",
          "aggregation": "sum",
          "description": "Contagem de manutenções previstas para o período"
        }
      ],
      "sourceWriteEvents": [
        "maintenanceForecastCommand"
      ],
      "hypertable": {
        "timeColumn": "event_at",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_maintenance_forecast_metrics_event_at",
            "columns": [
              "event_at"
            ],
            "purpose": "Ordenação e consultas por tempo.",
            "unique": false
          },
          {
            "indexName": "idx_maintenance_forecast_metrics_status_time",
            "columns": [
              "forecast_status",
              "event_at"
            ],
            "purpose": "Filtros por status e período.",
            "unique": false
          },
          {
            "indexName": "idx_maintenance_forecast_metrics_vehicle_time",
            "columns": [
              "vehicle_id",
              "event_at"
            ],
            "purpose": "Filtros por veículo e período.",
            "unique": false
          },
          {
            "indexName": "idx_maintenance_forecast_metrics_type_time",
            "columns": [
              "forecast_type",
              "event_at"
            ],
            "purpose": "Filtros por tipo e período.",
            "unique": false
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "maintenanceForecastWorkflow",
          "maintenanceForecastUsecaseEntities"
        ]
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "ruleMaintenanceForecast"
      ]
    },
    "defsPlan": {
      "fileName": "tables/maintenanceForecastMetrics.defs.ts",
      "exportName": "maintenanceForecastMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default maintenanceForecastMetricsMetricTableDefinition;
