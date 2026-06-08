/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/inventoryAdjustmentCommandLog.defs.ts" enhancement="_blank"/>

export const inventoryAdjustmentCommandLogTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "inventoryAdjustmentCommandLog",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 45,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "inventoryAdjustmentCommandLog",
      "tableName": "inventory_adjustment_command_log",
      "moduleId": "repairBay",
      "title": "Logs de Ajuste de Estoque",
      "purpose": "Registrar comandos de ajuste e baixa de estoque para auditoria e alertas.",
      "ownership": "moduleOwned",
      "rootEntity": "InventoryAdjustmentCommand",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "inventory_adjustment_command_log_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador do log de ajuste de estoque."
        },
        {
          "name": "command_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do comando de ajuste."
        },
        {
          "name": "inventory_stock_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao estoque ajustado."
        },
        {
          "name": "part_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência à peça ajustada."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Ordem de serviço associada ao ajuste, quando aplicável."
        },
        {
          "name": "command_type",
          "type": "text",
          "nullable": false,
          "description": "Tipo do comando (entrada, saída, correção, baixa)."
        },
        {
          "name": "quantity_delta",
          "type": "decimal",
          "nullable": false,
          "description": "Variação aplicada ao estoque."
        },
        {
          "name": "previous_quantity",
          "type": "decimal",
          "nullable": true,
          "description": "Quantidade antes do ajuste."
        },
        {
          "name": "new_quantity",
          "type": "decimal",
          "nullable": true,
          "description": "Quantidade após o ajuste."
        },
        {
          "name": "reason_code",
          "type": "text",
          "nullable": true,
          "description": "Motivo do ajuste para auditoria."
        },
        {
          "name": "status",
          "type": "text",
          "nullable": false,
          "description": "Status do comando (registrado, aplicado, revertido, falhou)."
        },
        {
          "name": "actor_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador do usuário que executou o ajuste."
        },
        {
          "name": "actor_role",
          "type": "text",
          "nullable": true,
          "description": "Perfil do usuário que executou o ajuste."
        },
        {
          "name": "occurred_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora do evento de ajuste."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de criação do log."
        }
      ],
      "primaryKey": [
        "inventory_adjustment_command_log_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "inventory_stock_id",
          "targetEntity": "InventoryStock",
          "targetOwnership": "mdmOwned",
          "reason": "Estoque ajustado vinculado ao log."
        },
        {
          "fieldName": "part_id",
          "targetEntity": "Part",
          "targetOwnership": "mdmOwned",
          "reason": "Peça ajustada para consultas e alertas."
        },
        {
          "fieldName": "service_order_id",
          "targetEntity": "ServiceOrder",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular ajustes originados por ordens de serviço."
        },
        {
          "fieldName": "command_id",
          "targetEntity": "InventoryAdjustmentCommand",
          "targetOwnership": "moduleOwned",
          "reason": "Vínculo com o comando de ajuste registrado."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_inventory_adjustment_log_command",
          "columns": [
            "command_id"
          ],
          "unique": false,
          "reason": "Consulta por comando e auditoria."
        },
        {
          "indexName": "idx_inventory_adjustment_log_stock",
          "columns": [
            "inventory_stock_id",
            "occurred_at"
          ],
          "unique": false,
          "reason": "Filtros por estoque e período para alertas."
        },
        {
          "indexName": "idx_inventory_adjustment_log_part",
          "columns": [
            "part_id",
            "occurred_at"
          ],
          "unique": false,
          "reason": "Filtros por peça e período."
        },
        {
          "indexName": "idx_inventory_adjustment_log_status",
          "columns": [
            "status",
            "occurred_at"
          ],
          "unique": false,
          "reason": "Monitorar falhas e reversões."
        },
        {
          "indexName": "idx_inventory_adjustment_log_service_order",
          "columns": [
            "service_order_id"
          ],
          "unique": false,
          "reason": "Rastrear ajustes associados à OS."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar payload completo do comando e contexto operacional."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "inventoryAdjustmentVolume",
          "inventoryAdjustmentFailures"
        ],
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
        "ruleInventoryLowStock",
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/inventoryAdjustmentCommandLog.defs.ts",
      "exportName": "inventoryAdjustmentCommandLogTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryAdjustmentCommandLogTableDefinition;
