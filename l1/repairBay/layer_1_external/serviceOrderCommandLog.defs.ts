/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/serviceOrderCommandLog.defs.ts" enhancement="_blank"/>

export const serviceOrderCommandLogTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "serviceOrderCommandLog",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 44,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "serviceOrderCommandLog",
      "tableName": "service_order_command_log",
      "moduleId": "repairBay",
      "title": "Logs de Comandos de OS",
      "purpose": "Auditar comandos de criação/atualização de OS para rastreabilidade.",
      "ownership": "moduleOwned",
      "rootEntity": "ServiceOrderCommand",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "service_order_command_log_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador do log de comando de OS."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": false,
          "description": "Referência à OS afetada."
        },
        {
          "name": "service_order_command_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": false,
          "description": "Referência ao comando de OS executado."
        },
        {
          "name": "command_type",
          "type": "varchar(60)",
          "nullable": false,
          "primaryKey": false,
          "description": "Tipo do comando executado (criação, atualização, fechamento)."
        },
        {
          "name": "previous_status",
          "type": "varchar(40)",
          "nullable": true,
          "primaryKey": false,
          "description": "Status anterior da OS, quando aplicável."
        },
        {
          "name": "new_status",
          "type": "varchar(40)",
          "nullable": true,
          "primaryKey": false,
          "description": "Novo status da OS, quando aplicável."
        },
        {
          "name": "service_order_total",
          "type": "decimal(12,2)",
          "nullable": true,
          "primaryKey": false,
          "description": "Total da OS após o comando."
        },
        {
          "name": "actor_role",
          "type": "varchar(40)",
          "nullable": false,
          "primaryKey": false,
          "description": "Perfil do usuário que executou o comando."
        },
        {
          "name": "actor_user_id",
          "type": "uuid",
          "nullable": true,
          "primaryKey": false,
          "description": "Identificador do usuário executor, quando disponível."
        },
        {
          "name": "occurred_at",
          "type": "timestamptz",
          "nullable": false,
          "primaryKey": false,
          "description": "Data/hora do comando para auditoria e filtros."
        },
        {
          "name": "status",
          "type": "varchar(30)",
          "nullable": false,
          "primaryKey": false,
          "description": "Estado do registro de log (ativo, retido, arquivado)."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "primaryKey": false,
          "description": "Data/hora de persistência do log."
        }
      ],
      "primaryKey": [
        "service_order_command_log_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "service_order_id",
          "targetEntity": "ServiceOrder",
          "targetOwnership": "mdmOwned",
          "reason": "OS impactada pelo comando."
        },
        {
          "fieldName": "service_order_command_id",
          "targetEntity": "ServiceOrderCommand",
          "targetOwnership": "moduleOwned",
          "reason": "Comando registrado para auditoria."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_soclog_service_order_id",
          "columns": [
            "service_order_id"
          ],
          "unique": false,
          "reason": "Busca rápida de logs por OS."
        },
        {
          "indexName": "idx_soclog_command_id",
          "columns": [
            "service_order_command_id"
          ],
          "unique": false,
          "reason": "Rastrear execuções de um comando específico."
        },
        {
          "indexName": "idx_soclog_occurred_at",
          "columns": [
            "occurred_at"
          ],
          "unique": false,
          "reason": "Filtros por período para auditoria."
        },
        {
          "indexName": "idx_soclog_status",
          "columns": [
            "status"
          ],
          "unique": false,
          "reason": "Gestão de retenção e arquivamento."
        },
        {
          "indexName": "idx_soclog_new_status",
          "columns": [
            "new_status"
          ],
          "unique": false,
          "reason": "Auditoria de transições de status."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar payloads e diffs do comando sem impactar consultas principais."
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
        "ruleServiceOrderStatus",
        "ruleServiceOrderTotal",
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/serviceOrderCommandLog.defs.ts",
      "exportName": "serviceOrderCommandLogTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default serviceOrderCommandLogTableDefinition;
