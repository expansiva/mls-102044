/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/adjustInventory.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "adjustInventory",
  "title": "Ajustar estoque",
  "purpose": "Aplicar ajustes manuais de estoque e registrar o comando.",
  "actor": "shopOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "inventoryAdjustmentCommandUsecaseEntity"
  ],
  "outputEntities": [
    "inventoryAdjustmentCommandUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "InventoryStock",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "Part",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "InventoryStock",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "inventory_adjustment_command_log",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "adjustInventory",
      "input": [
        {
          "name": "inventoryStockId",
          "type": "string",
          "required": true
        },
        {
          "name": "partId",
          "type": "string",
          "required": true
        },
        {
          "name": "quantityDelta",
          "type": "number",
          "required": true
        },
        {
          "name": "reasonCode",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "newQuantity",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleInventoryLowStock",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
