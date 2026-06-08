/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/viewVehicleHistory.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "viewVehicleHistory",
  "title": "Consultar histórico do veículo",
  "purpose": "Consultar histórico completo de serviços, peças e custos por veículo/cliente.",
  "actor": "shopOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "Customer",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "Vehicle",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "ServiceOrder",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "Invoice",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "labor_item",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "commands": [
    {
      "commandId": "viewVehicleHistory",
      "input": [
        {
          "name": "vehicleId",
          "type": "string",
          "required": true
        },
        {
          "name": "customerId",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "serviceOrdersCount",
          "type": "number"
        },
        {
          "name": "totalSpent",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
