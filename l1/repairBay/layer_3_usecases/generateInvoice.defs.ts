/// <mls fileReference="_102044_/l1/repairBay/layer_3_usecases/generateInvoice.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "generateInvoice",
  "title": "Gerar fatura",
  "purpose": "Criar fatura a partir da OS concluída.",
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
      "tableName": "ServiceOrder",
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
      "commandId": "generateInvoice",
      "input": [
        {
          "name": "serviceOrderId",
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
          "name": "total",
          "type": "number"
        }
      ]
    }
  ],
  "rulesApplied": [
    "ruleInvoiceFromServiceOrder",
    "ruleRoleAccess"
  ]
} as const;

export default useCase;
