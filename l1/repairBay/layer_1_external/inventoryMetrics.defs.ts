/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/inventoryMetrics.defs.ts" enhancement="_blank"/>

export const inventoryMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "inventoryMetrics",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 46,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "inventoryMetrics",
      "tableName": "inventory_metrics",
      "moduleId": "repairBay",
      "title": "Métricas de Estoque",
      "purpose": "Monitorar níveis de estoque, alertas de reposição e movimentações.",
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
          "description": "Data e hora do evento de estoque."
        },
        {
          "name": "part_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador da peça relacionada."
        },
        {
          "name": "command_type",
          "type": "text",
          "nullable": false,
          "description": "Tipo de movimentação de estoque."
        },
        {
          "name": "is_low_stock",
          "type": "boolean",
          "nullable": false,
          "default": false,
          "description": "Indicador de estoque abaixo do mínimo."
        },
        {
          "name": "stock_level",
          "type": "numeric(12,2)",
          "nullable": true,
          "description": "Nível atual de estoque."
        },
        {
          "name": "low_stock_count",
          "type": "integer",
          "nullable": true,
          "default": 0,
          "description": "Contagem de itens com estoque baixo no evento."
        },
        {
          "name": "adjustment_volume",
          "type": "numeric(12,2)",
          "nullable": true,
          "default": 0,
          "description": "Volume total de ajustes no evento."
        },
        {
          "name": "inventory_stock_id",
          "type": "uuid",
          "nullable": true,
          "description": "Referência ao estoque associado ao evento."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Ordem de serviço associada ao ajuste, quando aplicável."
        },
        {
          "name": "actor_role",
          "type": "text",
          "nullable": true,
          "description": "Perfil do usuário que executou a movimentação."
        },
        {
          "name": "actor_id",
          "type": "uuid",
          "nullable": true,
          "description": "Usuário que executou a movimentação, quando disponível."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "partId",
          "column": "part_id",
          "type": "uuid",
          "description": "Peça relacionada"
        },
        {
          "dimensionId": "commandType",
          "column": "command_type",
          "type": "text",
          "description": "Tipo de movimentação"
        },
        {
          "dimensionId": "isLowStock",
          "column": "is_low_stock",
          "type": "boolean",
          "description": "Indicador de estoque abaixo do mínimo"
        }
      ],
      "measures": [
        {
          "measureId": "stockLevel",
          "column": "stock_level",
          "aggregation": "last",
          "unit": "units",
          "description": "Nível atual de estoque"
        },
        {
          "measureId": "lowStockCount",
          "column": "low_stock_count",
          "aggregation": "sum",
          "description": "Contagem de itens com estoque baixo"
        },
        {
          "measureId": "adjustmentVolume",
          "column": "adjustment_volume",
          "aggregation": "sum",
          "unit": "units",
          "description": "Volume total de ajustes"
        }
      ],
      "sourceWriteEvents": [
        "adjustInventory",
        "addPartToServiceOrder"
      ],
      "hypertable": {
        "timeColumn": "event_at",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_inventory_metrics_event_at",
            "columns": [
              "event_at"
            ],
            "purpose": "Acelerar consultas por período."
          },
          {
            "indexName": "idx_inventory_metrics_part_time",
            "columns": [
              "part_id",
              "event_at"
            ],
            "purpose": "Filtrar métricas por peça e período."
          },
          {
            "indexName": "idx_inventory_metrics_command_time",
            "columns": [
              "command_type",
              "event_at"
            ],
            "purpose": "Filtrar métricas por tipo de movimentação e período."
          },
          {
            "indexName": "idx_inventory_metrics_low_stock_time",
            "columns": [
              "is_low_stock",
              "event_at"
            ],
            "purpose": "Monitorar eventos de estoque baixo por período."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "inventoryAdjustUsecaseEntities",
          "serviceOrderUsecaseEntities"
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
        "ruleInventoryLowStock"
      ]
    },
    "defsPlan": {
      "fileName": "tables/inventoryMetrics.defs.ts",
      "exportName": "inventoryMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryMetricsMetricTableDefinition;
