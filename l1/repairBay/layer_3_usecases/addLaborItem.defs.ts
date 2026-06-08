/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/addLaborItem.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "addLaborItem",
  "title": "Adicionar mão de obra",
  "purpose": "Registrar item de mão de obra e recalcular total da OS.",
  "actor": "mechanic",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "laborItemUsecaseEntity",
    "serviceOrderCommandUsecaseEntity"
  ],
  "outputEntities": [
    "laborItemUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "labor_item",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "service_order_command_log",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "service_order_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "addLaborItem",
      "input": [
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": true
        },
        {
          "name": "description",
          "type": "string",
          "required": true
        },
        {
          "name": "hoursWorked",
          "type": "number",
          "required": true
        },
        {
          "name": "hourlyRate",
          "type": "number",
          "required": true
        }
      ],
      "output": [
        {
          "name": "laborItemId",
          "type": "string"
        },
        {
          "name": "serviceOrderTotal",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleServiceOrderTotal",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
