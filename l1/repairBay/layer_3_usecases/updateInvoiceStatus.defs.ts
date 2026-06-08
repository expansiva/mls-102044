/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/updateInvoiceStatus.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "updateInvoiceStatus",
  "title": "Atualizar status da fatura",
  "purpose": "Atualizar status de faturamento interno.",
  "actor": "shopOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "serviceOrderCommandUsecaseEntity"
  ],
  "outputEntities": [
    "serviceOrderCommandUsecaseEntity"
  ],
  "readsTables": [
    {
      "tableName": "Invoice",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "Invoice",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "invoice_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "commands": [
    {
      "commandId": "updateInvoiceStatus",
      "input": [
        {
          "name": "invoiceId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "invoiceId",
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
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
