/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/invoiceMetrics.defs.ts" enhancement="_blank"/>

export const invoiceMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "invoiceMetrics",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "invoiceMetrics",
      "tableName": "invoice_metrics",
      "moduleId": "repairBay",
      "title": "Métricas de Faturamento",
      "purpose": "Consolidar receita e status de faturamento ao longo do tempo.",
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
          "description": "Data/hora do evento de faturamento agregado."
        },
        {
          "name": "invoice_status",
          "type": "text",
          "nullable": false,
          "description": "Status da fatura."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": false,
          "description": "OS vinculada."
        },
        {
          "name": "invoice_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de faturas no intervalo."
        },
        {
          "name": "total_revenue",
          "type": "numeric(12,2)",
          "nullable": false,
          "default": 0,
          "description": "Receita total faturada no intervalo (BRL)."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "invoiceStatus",
          "column": "invoice_status",
          "type": "text",
          "description": "Status da fatura"
        },
        {
          "dimensionId": "serviceOrderId",
          "column": "service_order_id",
          "type": "uuid",
          "description": "OS vinculada"
        }
      ],
      "measures": [
        {
          "measureId": "invoiceCount",
          "column": "invoice_count",
          "aggregation": "sum",
          "description": "Quantidade de faturas"
        },
        {
          "measureId": "totalRevenue",
          "column": "total_revenue",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Receita total faturada"
        }
      ],
      "sourceWriteEvents": [
        "generateInvoice",
        "updateInvoiceStatus"
      ],
      "hypertable": {
        "timeColumn": "event_at",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "2 anos",
        "indexes": [
          {
            "indexName": "idx_invoice_metrics_event_at",
            "columns": [
              "event_at"
            ],
            "purpose": "Ordenação e consultas por tempo."
          },
          {
            "indexName": "idx_invoice_metrics_status_time",
            "columns": [
              "invoice_status",
              "event_at"
            ],
            "purpose": "Filtros por status e período."
          },
          {
            "indexName": "idx_invoice_metrics_service_order_time",
            "columns": [
              "service_order_id",
              "event_at"
            ],
            "purpose": "Filtros por OS e período."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "generateInvoice",
          "updateInvoiceStatus"
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
        "ruleInvoiceFromServiceOrder"
      ]
    },
    "defsPlan": {
      "fileName": "tables/invoiceMetrics.defs.ts",
      "exportName": "invoiceMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default invoiceMetricsMetricTableDefinition;
