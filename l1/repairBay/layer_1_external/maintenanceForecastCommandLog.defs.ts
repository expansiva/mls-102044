/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/maintenanceForecastCommandLog.defs.ts" enhancement="_blank"/>

export const maintenanceForecastCommandLogTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "maintenanceForecastCommandLog",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "maintenanceForecastCommandLog",
      "tableName": "maintenance_forecast_command_log",
      "moduleId": "repairBay",
      "title": "Logs de Comandos de Manutenção Prevista",
      "purpose": "Registrar comandos de geração/atualização de previsões.",
      "ownership": "moduleOwned",
      "rootEntity": "MaintenanceForecastCommand",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "maintenance_forecast_command_log_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador do log de comando."
        },
        {
          "name": "maintenance_forecast_command_id",
          "type": "uuid",
          "nullable": false,
          "description": "Comando de manutenção prevista relacionado."
        },
        {
          "name": "maintenance_forecast_id",
          "type": "uuid",
          "nullable": true,
          "description": "Previsão de manutenção afetada."
        },
        {
          "name": "command_type",
          "type": "varchar(50)",
          "nullable": false,
          "description": "Tipo do comando (ex.: gerar, atualizar, recalcular)."
        },
        {
          "name": "status",
          "type": "varchar(30)",
          "nullable": false,
          "description": "Status do comando no momento do log."
        },
        {
          "name": "requested_by_role",
          "type": "varchar(30)",
          "nullable": false,
          "description": "Perfil que solicitou a ação."
        },
        {
          "name": "requested_by_user_id",
          "type": "uuid",
          "nullable": true,
          "description": "Usuário solicitante (quando disponível)."
        },
        {
          "name": "correlation_id",
          "type": "varchar(80)",
          "nullable": true,
          "description": "Identificador de correlação do workflow."
        },
        {
          "name": "attempt_number",
          "type": "int",
          "nullable": false,
          "default": 1,
          "description": "Número da tentativa de execução."
        },
        {
          "name": "occurred_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data/hora do evento registrado."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data/hora de criação do log."
        }
      ],
      "primaryKey": [
        "maintenance_forecast_command_log_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "maintenance_forecast_command_id",
          "targetEntity": "MaintenanceForecastCommand",
          "targetOwnership": "moduleOwned",
          "reason": "Vínculo ao comando executado."
        },
        {
          "fieldName": "maintenance_forecast_id",
          "targetEntity": "MaintenanceForecast",
          "targetOwnership": "moduleOwned",
          "reason": "Rastrear a previsão gerada/atualizada."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_mf_cmd_log_command_id",
          "columns": [
            "maintenance_forecast_command_id"
          ],
          "reason": "Busca de logs por comando."
        },
        {
          "indexName": "idx_mf_cmd_log_forecast_id",
          "columns": [
            "maintenance_forecast_id"
          ],
          "reason": "Consulta por previsão afetada."
        },
        {
          "indexName": "idx_mf_cmd_log_status_time",
          "columns": [
            "status",
            "occurred_at"
          ],
          "reason": "Filtrar eventos por status e período."
        },
        {
          "indexName": "idx_mf_cmd_log_correlation",
          "columns": [
            "correlation_id"
          ],
          "reason": "Rastreio por correlação de workflow."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar payload do comando e diagnósticos não filtrados com frequência."
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
        "ruleMaintenanceForecast",
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/maintenanceForecastCommandLog.defs.ts",
      "exportName": "maintenanceForecastCommandLogTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default maintenanceForecastCommandLogTableDefinition;
