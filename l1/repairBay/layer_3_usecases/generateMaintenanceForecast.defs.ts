/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/generateMaintenanceForecast.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "generateMaintenanceForecast",
  "title": "Gerar manutenção prevista",
  "purpose": "Gerar ou atualizar previsões de manutenção com base no histórico.",
  "actor": "shopOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "maintenanceForecastUsecaseEntity",
    "maintenanceForecastCommandUsecaseEntity"
  ],
  "outputEntities": [
    "maintenanceForecastUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "Vehicle",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "maintenance_forecast",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "maintenance_forecast_command_log",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "maintenance_forecast_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "generateMaintenanceForecast",
      "input": [
        {
          "name": "vehicleId",
          "type": "string",
          "required": true
        },
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": false
        },
        {
          "name": "forecastDate",
          "type": "date",
          "required": true
        },
        {
          "name": "forecastMileageKm",
          "type": "number",
          "required": false
        },
        {
          "name": "forecastType",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "maintenanceForecastId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleMaintenanceForecast",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
