/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/createServiceOrder.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "createServiceOrder",
  "title": "Criar OS",
  "purpose": "Criar uma nova ordem de serviço e registrar o comando.",
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
      "tableName": "Customer",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "Vehicle",
      "ownership": "mdmOwned"
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
      "commandId": "createServiceOrder",
      "input": [
        {
          "name": "customerId",
          "type": "string",
          "required": true
        },
        {
          "name": "vehicleId",
          "type": "string",
          "required": true
        },
        {
          "name": "notes",
          "type": "string",
          "required": false
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
    "ruleVehicleCustomerLink",
    "ruleServiceOrderStatus",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
