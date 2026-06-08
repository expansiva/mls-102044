/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/serviceOrderMetrics.defs.ts" enhancement="_blank"/>

export const serviceOrderMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "serviceOrderMetrics",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 45,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "serviceOrderMetrics",
      "tableName": "service_order_metrics",
      "moduleId": "repairBay",
      "title": "Métricas de Ordens de Serviço",
      "purpose": "Acompanhar volume, status e valores das ordens de serviço ao longo do tempo.",
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
          "name": "service_order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador da OS relacionada ao evento."
        },
        {
          "name": "status",
          "type": "text",
          "nullable": false,
          "description": "Status da OS no momento do evento."
        },
        {
          "name": "actor_role",
          "type": "text",
          "nullable": true,
          "description": "Perfil do usuário que executou a ação."
        },
        {
          "name": "vehicle_id",
          "type": "uuid",
          "nullable": false,
          "description": "Veículo vinculado à OS."
        },
        {
          "name": "order_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de ordens de serviço."
        },
        {
          "name": "total_value",
          "type": "numeric(14,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor total acumulado das OS."
        },
        {
          "name": "labor_total",
          "type": "numeric(14,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor total de mão de obra."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "status",
          "column": "status",
          "type": "text",
          "description": "Status da OS no momento do evento."
        },
        {
          "dimensionId": "actorRole",
          "column": "actor_role",
          "type": "text",
          "description": "Perfil do usuário que executou a ação."
        },
        {
          "dimensionId": "vehicleId",
          "column": "vehicle_id",
          "type": "uuid",
          "description": "Veículo vinculado à OS."
        }
      ],
      "measures": [
        {
          "measureId": "orderCount",
          "column": "order_count",
          "aggregation": "sum",
          "description": "Quantidade de ordens de serviço."
        },
        {
          "measureId": "totalValue",
          "column": "total_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor total acumulado das OS."
        },
        {
          "measureId": "laborTotal",
          "column": "labor_total",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor total de mão de obra."
        }
      ],
      "sourceWriteEvents": [
        "createServiceOrder",
        "updateServiceOrderStatus",
        "closeServiceOrder",
        "addLaborItem"
      ],
      "hypertable": {
        "timeColumn": "event_at",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_service_order_metrics_event_at",
            "columns": [
              "event_at"
            ],
            "purpose": "Acelerar consultas por período.",
            "unique": false
          },
          {
            "indexName": "idx_service_order_metrics_status_time",
            "columns": [
              "status",
              "event_at"
            ],
            "purpose": "Filtrar métricas por status e período.",
            "unique": false
          },
          {
            "indexName": "idx_service_order_metrics_actor_role_time",
            "columns": [
              "actor_role",
              "event_at"
            ],
            "purpose": "Filtrar métricas por perfil e período.",
            "unique": false
          },
          {
            "indexName": "idx_service_order_metrics_vehicle_time",
            "columns": [
              "vehicle_id",
              "event_at"
            ],
            "purpose": "Filtrar métricas por veículo e período.",
            "unique": false
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false
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
        "ruleServiceOrderStatus",
        "ruleServiceOrderTotal"
      ]
    },
    "defsPlan": {
      "fileName": "tables/serviceOrderMetrics.defs.ts",
      "exportName": "serviceOrderMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default serviceOrderMetricsMetricTableDefinition;
