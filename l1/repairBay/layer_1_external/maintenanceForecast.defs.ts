/// <mls fileReference="_102044_/l1/repairBay/layer_1_external/maintenanceForecast.defs.ts" enhancement="_blank"/>

export const maintenanceForecastTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "maintenanceForecast",
  "moduleName": "repairBay",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "maintenanceForecast",
      "tableName": "maintenance_forecast",
      "moduleId": "repairBay",
      "title": "Manutenções Previstas",
      "purpose": "Armazenar previsões de manutenção por veículo para consulta e métricas operacionais.",
      "ownership": "moduleOwned",
      "rootEntity": "MaintenanceForecast",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "maintenance_forecast_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador da manutenção prevista."
        },
        {
          "name": "vehicle_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao veículo MDM."
        },
        {
          "name": "service_order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Ordem de serviço associada que originou a previsão."
        },
        {
          "name": "forecast_date",
          "type": "date",
          "nullable": false,
          "description": "Data prevista para a manutenção."
        },
        {
          "name": "forecast_mileage_km",
          "type": "integer",
          "nullable": true,
          "description": "Quilometragem prevista para a manutenção."
        },
        {
          "name": "forecast_type",
          "type": "text",
          "nullable": true,
          "description": "Tipo de manutenção prevista (ex.: troca de óleo)."
        },
        {
          "name": "status",
          "type": "text",
          "nullable": false,
          "default": "active",
          "description": "Status da previsão (active, completed, cancelled)."
        },
        {
          "name": "confidence_score",
          "type": "numeric",
          "nullable": true,
          "description": "Nível de confiança da previsão."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "default": "now()",
          "description": "Data de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "default": "now()",
          "description": "Última atualização do registro."
        }
      ],
      "primaryKey": [
        "maintenance_forecast_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "vehicle_id",
          "targetEntity": "Vehicle",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular previsão ao veículo do cliente."
        },
        {
          "fieldName": "service_order_id",
          "targetEntity": "ServiceOrder",
          "targetOwnership": "mdmOwned",
          "reason": "Relacionar previsão ao histórico de OS quando aplicável."
        }
      ],
      "indexes": [
        {
          "indexName": "ix_maintenance_forecast_vehicle",
          "columns": [
            "vehicle_id"
          ],
          "unique": false,
          "reason": "Consulta por veículo no histórico e dashboard."
        },
        {
          "indexName": "ix_maintenance_forecast_status_date",
          "columns": [
            "status",
            "forecast_date"
          ],
          "unique": false,
          "reason": "Filtrar previsões ativas por data para dashboard."
        },
        {
          "indexName": "ix_maintenance_forecast_service_order",
          "columns": [
            "service_order_id"
          ],
          "unique": false,
          "reason": "Localizar previsão associada à OS."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "upcomingMaintenanceMetric"
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
        "ruleMaintenanceForecast",
        "ruleRoleAccess"
      ]
    },
    "defsPlan": {
      "fileName": "tables/maintenanceForecast.defs.ts",
      "exportName": "maintenanceForecastTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default maintenanceForecastTableDefinition;
