/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/repairSuggestion.defs.ts" enhancement="_blank"/>

export const repairSuggestionTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "repairSuggestion",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 43,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "repairSuggestion",
      "tableName": "repair_suggestion",
      "moduleId": "repairBay",
      "title": "Sugestões de Reparo",
      "purpose": "Guardar respostas da IA para reparos comuns e estimativas por veículo/OS.",
      "ownership": "moduleOwned",
      "rootEntity": "RepairSuggestion",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "repairSuggestionId",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da sugestão de reparo."
        },
        {
          "name": "serviceOrderId",
          "type": "uuid",
          "nullable": false,
          "description": "OS relacionada à sugestão."
        },
        {
          "name": "vehicleId",
          "type": "uuid",
          "nullable": false,
          "description": "Veículo relacionado à sugestão."
        },
        {
          "name": "suggestionStatus",
          "type": "varchar(30)",
          "nullable": false,
          "default": "active",
          "description": "Status da sugestão (active, superseded, discarded)."
        },
        {
          "name": "suggestionDate",
          "type": "date",
          "nullable": false,
          "description": "Data de referência usada na sugestão (ex.: data da OS)."
        },
        {
          "name": "createdAt",
          "type": "timestamp",
          "nullable": false,
          "default": "now()",
          "description": "Data/hora de criação."
        },
        {
          "name": "updatedAt",
          "type": "timestamp",
          "nullable": false,
          "default": "now()",
          "description": "Data/hora da última atualização."
        }
      ],
      "primaryKey": [
        "repairSuggestionId"
      ],
      "foreignRefs": [
        {
          "fieldName": "serviceOrderId",
          "targetEntity": "ServiceOrder",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular a sugestão à OS."
        },
        {
          "fieldName": "vehicleId",
          "targetEntity": "Vehicle",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular a sugestão ao veículo."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_repair_suggestion_service_order",
          "columns": [
            "serviceOrderId",
            "suggestionStatus"
          ],
          "unique": false,
          "reason": "Busca por sugestão ativa da OS."
        },
        {
          "indexName": "idx_repair_suggestion_vehicle",
          "columns": [
            "vehicleId",
            "suggestionDate"
          ],
          "unique": false,
          "reason": "Consulta por histórico de sugestões do veículo."
        },
        {
          "indexName": "idx_repair_suggestion_created_at",
          "columns": [
            "createdAt"
          ],
          "unique": false,
          "reason": "Ordenação por data para listagens recentes."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "RepairSuggestionDetails",
        "reason": "Armazena conteúdo completo da resposta da IA e estimativas detalhadas."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": false,
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
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/repairSuggestion.defs.ts",
      "exportName": "repairSuggestionTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default repairSuggestionTableDefinition;
