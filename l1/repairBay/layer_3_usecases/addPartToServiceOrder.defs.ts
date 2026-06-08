/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/addPartToServiceOrder.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "addPartToServiceOrder",
  "title": "Adicionar peça à OS",
  "purpose": "Registrar peça utilizada, baixar estoque e recalcular total da OS.",
  "actor": "mechanic",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "inventoryAdjustmentCommandUsecaseEntity",
    "serviceOrderCommandUsecaseEntity"
  ],
  "outputEntities": [
    "inventoryAdjustmentCommandUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "Part",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "InventoryStock",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "InventoryStock",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "inventory_adjustment_command_log",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "service_order_command_log",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "service_order_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "addPartToServiceOrder",
      "input": [
        {
          "name": "serviceOrderId",
          "type": "string",
          "required": true
        },
        {
          "name": "partId",
          "type": "string",
          "required": true
        },
        {
          "name": "quantity",
          "type": "number",
          "required": true
        },
        {
          "name": "unitPrice",
          "type": "number",
          "required": true
        }
      ],
      "output": [
        {
          "name": "serviceOrderTotal",
          "type": "number"
        },
        {
          "name": "newStockLevel",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleServiceOrderTotal",
    "ruleInventoryLowStock",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
