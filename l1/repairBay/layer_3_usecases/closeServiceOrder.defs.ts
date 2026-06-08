/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/closeServiceOrder.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "closeServiceOrder",
  "title": "Fechar OS",
  "purpose": "Fechar a OS confirmando total e registrando o comando.",
  "actor": "attendant",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "serviceOrderCommandUsecaseEntity"
  ],
  "outputEntities": [
    "serviceOrderCommandUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "labor_item",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
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
      "commandId": "closeServiceOrder",
      "input": [
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "serviceOrderId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "total",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleServiceOrderStatus",
    "ruleServiceOrderTotal",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
