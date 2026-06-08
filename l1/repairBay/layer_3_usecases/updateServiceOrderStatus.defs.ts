/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/updateServiceOrderStatus.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "updateServiceOrderStatus",
  "title": "Atualizar status da OS",
  "purpose": "Atualizar o status da OS seguindo o ciclo de vida e registrar o comando.",
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
      "commandId": "updateServiceOrderStatus",
      "input": [
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": true
        },
        {
          "name": "newStatus",
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
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleServiceOrderStatus",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
