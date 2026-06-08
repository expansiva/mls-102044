/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/laborItem.defs.ts" enhancement="_blank"/>

export const laborItemTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "laborItem",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "laborItem",
      "tableName": "labor_item",
      "moduleId": "repairBay",
      "title": "Itens de Mão de Obra",
      "purpose": "Registrar serviços executados na OS com tempo e custo para cálculo do total e histórico.",
      "ownership": "moduleOwned",
      "rootEntity": "LaborItem",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "labor_item_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do item de mão de obra."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência à OS vinculada."
        },
        {
          "name": "description",
          "type": "text",
          "nullable": false,
          "description": "Descrição do serviço executado."
        },
        {
          "name": "labor_code",
          "type": "varchar(50)",
          "nullable": true,
          "description": "Código interno do serviço, quando aplicável."
        },
        {
          "name": "hours_worked",
          "type": "numeric(10,2)",
          "nullable": false,
          "default": 0,
          "description": "Horas trabalhadas no serviço."
        },
        {
          "name": "hourly_rate",
          "type": "numeric(12,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor por hora aplicado ao serviço."
        },
        {
          "name": "labor_total",
          "type": "numeric(12,2)",
          "nullable": false,
          "default": 0,
          "description": "Total calculado do item de mão de obra."
        },
        {
          "name": "status",
          "type": "varchar(30)",
          "nullable": false,
          "default": "pending",
          "description": "Status do item de mão de obra."
        },
        {
          "name": "performed_at",
          "type": "timestamptz",
          "nullable": true,
          "description": "Data/hora de execução do serviço."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "default": "now()",
          "description": "Data/hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "default": "now()",
          "description": "Data/hora da última atualização."
        }
      ],
      "primaryKey": [
        "labor_item_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "service_order_id",
          "targetEntity": "ServiceOrder",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular itens de mão de obra à OS para cálculo de total e histórico."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_labor_item_service_order",
          "columns": [
            "service_order_id"
          ],
          "reason": "Consulta de itens por OS nas telas de detalhe."
        },
        {
          "indexName": "idx_labor_item_status",
          "columns": [
            "status"
          ],
          "reason": "Filtrar itens por status no fluxo da OS."
        },
        {
          "indexName": "idx_labor_item_performed_at",
          "columns": [
            "performed_at"
          ],
          "reason": "Ordenação e filtros por data de execução no histórico do veículo."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "updatedByLayer": "layer_3_usecases"
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
        "ruleServiceOrderTotal",
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/laborItem.defs.ts",
      "exportName": "laborItemTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default laborItemTableDefinition;
