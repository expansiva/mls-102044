/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/requestRepairSuggestion.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "requestRepairSuggestion",
  "title": "Solicitar sugestão de reparo",
  "purpose": "Gerar e armazenar sugestão de reparo via IA para a OS.",
  "actor": "mechanic",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "repairSuggestionUsecaseEntity"
  ],
  "outputEntities": [
    "repairSuggestionUsecaseEntity"
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
      "tableName": "repair_suggestion",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "requestRepairSuggestion",
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
          "name": "issueDescription",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "repairSuggestionId",
          "type": "string"
        },
        {
          "name": "suggestionStatus",
          "type": "string"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
